<?php
declare(strict_types=1);

require __DIR__ . '/inc/bootstrap.php';

security_headers(false);
header('Cache-Control: no-store');

function json_out($data, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (!is_logged_in()) {
    json_out(['error' => 'auth'], 401);
}
session_write_close();

$action = (string) ($_GET['action'] ?? '');
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'POST') {
    start_session();
    $token = (string) ($_SERVER['HTTP_X_CSRF_TOKEN'] ?? '');
    if (!check_csrf($token)) {
        json_out(['error' => 'csrf'], 403);
    }
    session_write_close();
    $input = json_decode((string) file_get_contents('php://input'), true);
    if (!is_array($input)) {
        json_out(['error' => 'input'], 400);
    }
}

function to_utf8(string $body, string $type): string
{
    $charset = '';
    if (preg_match('/charset=([\w-]+)/i', $type, $m)) {
        $charset = strtolower($m[1]);
    } elseif (preg_match('/<meta[^>]+charset=["\']?([\w-]+)/i', substr($body, 0, 4000), $m)) {
        $charset = strtolower($m[1]);
    }
    if ($charset === '' || $charset === 'utf-8' || $charset === 'utf8') {
        return $body;
    }
    if (function_exists('mb_convert_encoding')) {
        $out = @mb_convert_encoding($body, 'UTF-8', $charset);
        if ($out !== false) {
            return $out;
        }
    }
    if (function_exists('iconv')) {
        $out = @iconv($charset, 'UTF-8//IGNORE', $body);
        if ($out !== false) {
            return $out;
        }
    }
    return $body;
}

function node_text(DOMNode $n): string
{
    return trim(preg_replace('/\s+/u', ' ', $n->textContent ?? ''));
}

function extract_article(string $html, string $url): array
{
    $image = '';
    if (preg_match_all('/<meta\b[^>]*>/i', $html, $metas)) {
        foreach (['og:image', 'twitter:image', 'twitter:image:src'] as $want) {
            foreach ($metas[0] as $tag) {
                if (preg_match('/(?:property|name)=["\']' . preg_quote($want, '/') . '["\']/i', $tag) && preg_match('/content=["\']([^"\']+)["\']/i', $tag, $c)) {
                    $image = absolute_url(html_entity_decode($c[1], ENT_QUOTES | ENT_HTML5, 'UTF-8'), $url);
                    break 2;
                }
            }
        }
    }
    $prev = libxml_use_internal_errors(true);
    $doc = new DOMDocument();
    $doc->loadHTML('<?xml encoding="utf-8" ?>' . $html, LIBXML_NOWARNING | LIBXML_NOERROR | LIBXML_NONET);
    libxml_clear_errors();
    libxml_use_internal_errors($prev);
    $xp = new DOMXPath($doc);
    foreach (['script', 'style', 'noscript', 'iframe', 'form', 'nav', 'footer', 'aside', 'figure', 'figcaption', 'button', 'svg', 'template', 'dialog'] as $tag) {
        foreach (iterator_to_array($doc->getElementsByTagName($tag)) as $el) {
            $el->parentNode && $el->parentNode->removeChild($el);
        }
    }
    $noise = '/(^|[\s_-])(related|newsletter|promo|advert|ad-slot|adslot|ad-container|share|sharing|social|comment|caption|credit|byline|breadcrumb|recommend|paywall|subscribe|sidebar|outbrain|taboola|most-popular|read-more|readmore|tags|author-bio|disclaimer)([\s_-]|$)/i';
    foreach (iterator_to_array($xp->query('//*[@class or @id]')) as $el) {
        if (!$el->parentNode) {
            continue;
        }
        $sig = ($el->getAttribute('class') ?: '') . ' ' . ($el->getAttribute('id') ?: '');
        $tag = strtolower($el->nodeName);
        if ($tag !== 'article' && $tag !== 'main' && $tag !== 'body' && preg_match($noise, $sig)) {
            $el->parentNode->removeChild($el);
        }
    }
    $query = "//*[@itemprop='articleBody'] | //article | //main | //div[contains(@class,'article-body') or contains(@class,'articleBody') or contains(@class,'article__body') or contains(@class,'story-body') or contains(@class,'entry-content') or contains(@class,'post-content') or contains(@class,'article-content') or contains(@class,'c-entry-content') or contains(@class,'content-body') or contains(@class,'body-text') or contains(@class,'rich-text') or contains(@class,'article-text') or contains(@class,'story-text')]";
    $best = null;
    $bestScore = 0;
    foreach ($xp->query($query) as $cand) {
        $score = 0;
        foreach ($xp->query('.//p', $cand) as $p) {
            $len = mb_strlen(node_text($p));
            if ($len >= 60) {
                $score += $len;
            }
        }
        if ($score > $bestScore) {
            $bestScore = $score;
            $best = $cand;
        }
    }
    if (!$best) {
        $best = $doc->getElementsByTagName('body')->item(0);
    }
    $blocks = [];
    $total = 0;
    $seen = [];
    $skip = '/^(advertisement|anzeige|werbung|read more|weiterlesen|mehr zum thema|lesen sie auch|related|sign up|subscribe|newsletter|follow us|image:|bild:|foto:|credit:|©|copyright|all rights reserved|alle rechte|this article|dieser artikel wurde|zum thema|more:|mehr:)/i';
    if ($best) {
        foreach ($xp->query('.//p | .//h2 | .//h3 | .//blockquote | .//li', $best) as $n) {
            $tag = strtolower($n->nodeName);
            if ($tag === 'p' && $xp->query('ancestor::blockquote | ancestor::li', $n)->length) {
                continue;
            }
            if ($tag === 'li' && $xp->query('ancestor::nav | .//p', $n)->length) {
                continue;
            }
            $text = node_text($n);
            $len = mb_strlen($text);
            if ($len === 0 || isset($seen[$text]) || preg_match($skip, $text)) {
                continue;
            }
            if (($tag === 'p' && $len < 30) || ($tag === 'li' && $len < 30) || (($tag === 'h2' || $tag === 'h3') && ($len < 4 || $len > 160))) {
                continue;
            }
            $seen[$text] = true;
            $type = $tag === 'h2' || $tag === 'h3' ? 'h' : ($tag === 'blockquote' ? 'q' : ($tag === 'li' ? 'li' : 'p'));
            $blocks[] = ['t' => $type, 'x' => $text];
            $total += $len;
            if (count($blocks) >= 90 || $total > 40000) {
                break;
            }
        }
    }
    while ($blocks && $blocks[count($blocks) - 1]['t'] === 'h') {
        array_pop($blocks);
    }
    return ['image' => $image, 'blocks' => $blocks, 'chars' => $total];
}

function fetch_ical(string $url): ?string
{
    $url = preg_replace('#^webcal://#i', 'https://', trim($url));
    $key = 'ical_' . md5($url);
    $cached = cache_get($key, 300);
    if ($cached !== null) {
        return $cached;
    }
    $res = http_get($url, ICAL_HOSTS, 15, 15000000);
    if ($res['status'] === 200 && strpos($res['body'], 'BEGIN:VCALENDAR') !== false) {
        cache_put($key, $res['body']);
        return $res['body'];
    }
    return cache_get($key, 0, true);
}

function normalize_source($entry): ?array
{
    $url = is_array($entry) ? (string) ($entry['url'] ?? '') : (string) $entry;
    $url = preg_replace('#^webcal://#i', 'https://', trim($url));
    if ($url === '' || strpos($url, 'https://') !== 0 || !host_matches($url, ICAL_HOSTS)) {
        return null;
    }
    $name = is_array($entry) ? trim((string) ($entry['name'] ?? '')) : '';
    $color = is_array($entry) ? (string) ($entry['color'] ?? '') : '';
    return [
        'url' => $url,
        'name' => mb_substr($name, 0, 40),
        'color' => preg_match('/^#[0-9a-f]{6}$/i', $color) ? strtolower($color) : ''
    ];
}

function ical_sources(array $settings): array
{
    $out = [];
    foreach ($settings['ical'] ?? [] as $entry) {
        $src = normalize_source($entry);
        if ($src) {
            $out[] = $src;
        }
    }
    return $out;
}

function clean_todos($list): array
{
    $out = [];
    foreach (is_array($list) ? array_slice($list, 0, 500) : [] as $t) {
        if (!is_array($t)) {
            continue;
        }
        $text = trim((string) ($t['text'] ?? ''));
        if ($text === '') {
            continue;
        }
        $due = (string) ($t['due'] ?? '');
        $dueTime = (string) ($t['dueTime'] ?? '');
        $out[] = [
            'due' => preg_match('/^\d{4}-\d{2}-\d{2}$/', $due) ? $due : null,
            'dueTime' => preg_match('/^\d{2}:\d{2}$/', $dueTime) && preg_match('/^\d{4}-\d{2}-\d{2}$/', $due) ? $dueTime : null,
            'id' => preg_replace('/[^a-z0-9]/i', '', (string) ($t['id'] ?? '')) ?: bin2hex(random_bytes(6)),
            'text' => mb_substr($text, 0, 300),
            'done' => !empty($t['done']),
            'created' => (int) ($t['created'] ?? time() * 1000),
            'doneAt' => isset($t['doneAt']) ? (int) $t['doneAt'] : null,
            'mod' => (int) ($t['mod'] ?? 0)
        ];
    }
    return $out;
}

switch ($action) {
    case 'feed':
        $url = (string) ($_GET['url'] ?? '');
        if (!host_matches($url, ALLOWED_HOSTS)) {
            json_out(['error' => 'host'], 400);
        }
        $key = 'feed_' . md5($url);
        $body = cache_get($key, 600);
        $type = 'application/xml; charset=utf-8';
        if ($body === null) {
            $res = http_get($url, ALLOWED_HOSTS, 10, 6000000);
            if ($res['status'] === 200 && preg_match('/<(rss|feed|rdf:RDF|channel)[\s>]/i', $res['body'])) {
                $body = to_utf8($res['body'], $res['type']);
                $body = preg_replace('/^<\?xml[^>]*\?>/', '<?xml version="1.0" encoding="UTF-8"?>', ltrim($body, "\xEF\xBB\xBF \t\r\n"));
                cache_put($key, $body);
            } else {
                $body = cache_get($key, 0, true);
            }
        }
        if ($body === null) {
            json_out(['error' => 'upstream'], 502);
        }
        header('Content-Type: ' . $type);
        header('Cache-Control: private, max-age=300');
        echo $body;
        exit;

    case 'feeds':
        if ($method !== 'POST') {
            json_out(['error' => 'method'], 405);
        }
        $urls = array_values(array_unique(array_filter(array_map('strval', array_slice((array) ($input['urls'] ?? []), 0, 30)), function ($u) {
            return host_matches($u, ALLOWED_HOSTS);
        })));
        $result = [];
        $missing = [];
        foreach ($urls as $u) {
            $hit = cache_get('feed_' . md5($u), 600);
            if ($hit !== null) {
                $result[$u] = $hit;
            } else {
                $missing[] = $u;
            }
        }
        if ($missing) {
            foreach (http_get_many($missing, ALLOWED_HOSTS, 8) as $u => $res) {
                if ($res['status'] === 200 && preg_match('/<(rss|feed|rdf:RDF|channel)[\s>]/i', $res['body'])) {
                    $body = to_utf8($res['body'], $res['type']);
                    $body = preg_replace('/^<\?xml[^>]*\?>/', '<?xml version="1.0" encoding="UTF-8"?>', ltrim($body, "\xEF\xBB\xBF \t\r\n"));
                    cache_put('feed_' . md5($u), $body);
                    $result[$u] = $body;
                } else {
                    $result[$u] = cache_get('feed_' . md5($u), 0, true);
                }
            }
        }
        json_out(['feeds' => $result]);

    case 'password':
        if ($method !== 'POST') {
            json_out(['error' => 'method'], 405);
        }
        start_session();
        $err = change_password((string) ($input['current'] ?? ''), (string) ($input['next'] ?? ''));
        session_write_close();
        if ($err !== '') {
            json_out(['error' => $err], 400);
        }
        json_out(['ok' => true]);

    case 'article':
        $url = (string) ($_GET['url'] ?? '');
        if (!host_matches($url, ALLOWED_HOSTS)) {
            json_out(['error' => 'host'], 400);
        }
        $key = 'art_' . md5($url);
        $cached = cache_get($key, 86400);
        if ($cached !== null) {
            header('Content-Type: application/json; charset=utf-8');
            echo $cached;
            exit;
        }
        $res = http_get($url, ALLOWED_HOSTS, 10, 4000000);
        if ($res['status'] !== 200 || $res['body'] === '') {
            json_out(['error' => 'upstream', 'image' => '', 'blocks' => []], 502);
        }
        $data = extract_article(to_utf8($res['body'], $res['type']), $res['url']);
        $json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_SUBSTITUTE);
        cache_put($key, (string) $json);
        header('Content-Type: application/json; charset=utf-8');
        echo $json;
        exit;

    case 'ical':
        $settings = store_read('settings', []);
        $out = [];
        foreach (ical_sources($settings) as $i => $src) {
            $text = fetch_ical($src['url']);
            $out[] = ['index' => $i, 'ok' => $text !== null, 'ics' => $text ?? ''];
        }
        json_out(['calendars' => $out]);

    case 'state':
        $settings = store_read('settings', []);
        json_out([
            'todos' => store_read('todos', []),
            'settings' => ['ical' => ical_sources($settings)]
        ]);

    case 'todos':
        if ($method !== 'POST') {
            json_out(store_read('todos', []));
        }
        $todos = clean_todos($input['todos'] ?? []);
        store_write('todos', $todos);
        json_out(['ok' => true, 'todos' => $todos]);

    case 'settings':
        if ($method !== 'POST') {
            json_out(['error' => 'method'], 405);
        }
        $settings = store_read('settings', []);
        if (isset($input['ical']) && is_array($input['ical'])) {
            $list = [];
            foreach (array_slice($input['ical'], 0, 12) as $entry) {
                $src = normalize_source($entry);
                if ($src) {
                    $list[] = $src;
                }
            }
            $settings['ical'] = $list;
        }
        store_write('settings', $settings);
        json_out(['ok' => true, 'settings' => ['ical' => ical_sources($settings)]]);

    case 'logout-all':
        if ($method !== 'POST') {
            json_out(['error' => 'method'], 405);
        }
        logout_everywhere();
        json_out(['ok' => true]);

    default:
        json_out(['error' => 'action'], 404);
}
