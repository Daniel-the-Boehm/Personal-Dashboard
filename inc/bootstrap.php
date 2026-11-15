<?php
declare(strict_types=1);

require __DIR__ . '/config.php';

define('APP_ROOT', dirname(__DIR__));
define('DATA_DIR', APP_ROOT . '/data');
define('CACHE_DIR', DATA_DIR . '/cache');
define('GUARD', "<?php exit; ?>\n");

date_default_timezone_set('Europe/Vienna');

if (!function_exists('mb_strlen')) {
    function mb_strlen($s)
    {
        return strlen((string) $s);
    }
}
if (!function_exists('mb_substr')) {
    function mb_substr($s, $start, $length = null)
    {
        return $length === null ? substr((string) $s, $start) : substr((string) $s, $start, $length);
    }
}
ini_set('display_errors', '0');

function ensure_dirs(): void
{
    foreach ([DATA_DIR, CACHE_DIR] as $dir) {
        if (!is_dir($dir)) {
            @mkdir($dir, 0750, true);
        }
        $ht = $dir . '/.htaccess';
        if (!is_file($ht)) {
            @file_put_contents($ht, "<IfModule mod_authz_core.c>\nRequire all denied\n</IfModule>\n<IfModule !mod_authz_core.c>\nDeny from all\n</IfModule>\n");
        }
        if (!is_file($dir . '/index.html')) {
            @file_put_contents($dir . '/index.html', '');
        }
    }
}

function store_path(string $name): string
{
    return DATA_DIR . '/' . preg_replace('/[^a-z0-9_-]/i', '', $name) . '.php';
}

function store_read(string $name, $default = [])
{
    $file = store_path($name);
    if (!is_file($file)) {
        return $default;
    }
    $raw = (string) @file_get_contents($file);
    if (strpos($raw, GUARD) === 0) {
        $raw = substr($raw, strlen(GUARD));
    }
    $data = json_decode($raw, true);
    return $data === null ? $default : $data;
}

function store_write(string $name, $data): bool
{
    ensure_dirs();
    $file = store_path($name);
    $tmp = $file . '.' . bin2hex(random_bytes(4)) . '.tmp';
    $json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    if ($json === false || @file_put_contents($tmp, GUARD . $json, LOCK_EX) === false) {
        return false;
    }
    return @rename($tmp, $file);
}

function is_https(): bool
{
    if (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') {
        return true;
    }
    if (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https') {
        return true;
    }
    return (int) ($_SERVER['SERVER_PORT'] ?? 0) === 443;
}

function cookie_path(): string
{
    $dir = str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/'));
    return rtrim($dir, '/') . '/';
}

function set_cookie(string $name, string $value, int $expires): void
{
    setcookie($name, $value, [
        'expires' => $expires,
        'path' => cookie_path(),
        'secure' => is_https(),
        'httponly' => true,
        'samesite' => 'Lax'
    ]);
}

function security_headers(bool $html = true): void
{
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: DENY');
    header('Referrer-Policy: same-origin');
    header('Permissions-Policy: camera=(), microphone=(), geolocation=()');
    if (is_https()) {
        header('Strict-Transport-Security: max-age=31536000');
    }
    if ($html) {
        header("Content-Security-Policy: default-src 'self'; img-src * data: blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.open-meteo.com https://site.api.espn.com https://api.jolpi.ca https://api.rss2json.com; script-src 'self'; manifest-src 'self'; worker-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'");
    }
}

function start_session(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }
    ini_set('session.gc_maxlifetime', '43200');
    ini_set('session.use_strict_mode', '1');
    session_name('ld_sess');
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => cookie_path(),
        'secure' => is_https(),
        'httponly' => true,
        'samesite' => 'Lax'
    ]);
    session_start();
}

function auth_data(): array
{
    $a = store_read('auth', []);
    if (!isset($a['remember']) || !is_array($a['remember'])) {
        $a['remember'] = [];
    }
    return $a;
}

function password_is_set(): bool
{
    return !empty(auth_data()['hash']);
}

function issue_remember_token(): void
{
    $auth = auth_data();
    $now = time();
    foreach ($auth['remember'] as $sel => $row) {
        if (($row['exp'] ?? 0) < $now) {
            unset($auth['remember'][$sel]);
        }
    }
    if (count($auth['remember']) > 20) {
        uasort($auth['remember'], function ($x, $y) {
            return ($x['exp'] ?? 0) <=> ($y['exp'] ?? 0);
        });
        $auth['remember'] = array_slice($auth['remember'], -20, null, true);
    }
    $selector = bin2hex(random_bytes(9));
    $validator = bin2hex(random_bytes(32));
    $exp = $now + REMEMBER_DAYS * 86400;
    $auth['remember'][$selector] = ['hash' => hash('sha256', $validator), 'exp' => $exp];
    store_write('auth', $auth);
    set_cookie('ld_remember', $selector . ':' . $validator, $exp);
    $_SESSION['remember_sel'] = $selector;
}

function drop_remember_cookie(): void
{
    $cookie = $_COOKIE['ld_remember'] ?? '';
    if ($cookie !== '' && strpos($cookie, ':') !== false) {
        $selector = explode(':', $cookie, 2)[0];
        $auth = auth_data();
        if (isset($auth['remember'][$selector])) {
            unset($auth['remember'][$selector]);
            store_write('auth', $auth);
        }
    }
    set_cookie('ld_remember', '', time() - 3600);
}

function is_logged_in(): bool
{
    start_session();
    if (!password_is_set()) {
        return false;
    }
    $auth = auth_data();
    if (!empty($_SESSION['auth']) && ($_SESSION['gen'] ?? '') === ($auth['gen'] ?? '')) {
        return true;
    }
    $cookie = $_COOKIE['ld_remember'] ?? '';
    if ($cookie === '' || strpos($cookie, ':') === false) {
        return false;
    }
    [$selector, $validator] = explode(':', $cookie, 2);
    $row = $auth['remember'][$selector] ?? null;
    if (!$row || ($row['exp'] ?? 0) < time() || !hash_equals((string) $row['hash'], hash('sha256', $validator))) {
        set_cookie('ld_remember', '', time() - 3600);
        return false;
    }
    session_regenerate_id(true);
    $_SESSION['auth'] = true;
    $_SESSION['gen'] = $auth['gen'] ?? '';
    if (!empty($row['spent'])) {
        return true;
    }
    $auth['remember'][$selector]['spent'] = true;
    $auth['remember'][$selector]['exp'] = min((int) $row['exp'], time() + 90);
    store_write('auth', $auth);
    issue_remember_token();
    return true;
}

function client_ip(): string
{
    return (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
}

function hash_password(string $password): string
{
    if (defined('PASSWORD_ARGON2ID')) {
        return password_hash($password, PASSWORD_ARGON2ID, ['memory_cost' => 65536, 'time_cost' => 4, 'threads' => 1]);
    }
    return password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);
}

function password_algo_outdated(string $hash): bool
{
    if (defined('PASSWORD_ARGON2ID')) {
        return password_needs_rehash($hash, PASSWORD_ARGON2ID, ['memory_cost' => 65536, 'time_cost' => 4, 'threads' => 1]);
    }
    return password_needs_rehash($hash, PASSWORD_BCRYPT, ['cost' => 12]);
}

function login_state(): array
{
    $st = store_read('attempts', []);
    $now = time();
    $st['ips'] = is_array($st['ips'] ?? null) ? $st['ips'] : [];
    $st['global'] = array_values(array_filter((array) ($st['global'] ?? []), function ($t) use ($now) {
        return $t > $now - 3600;
    }));
    foreach ($st['ips'] as $ip => $row) {
        if (($row['until'] ?? 0) < $now && ($row['last'] ?? 0) < $now - 86400) {
            unset($st['ips'][$ip]);
        }
    }
    return $st;
}

function login_wait_seconds(): int
{
    $st = login_state();
    $now = time();
    $wait = 0;
    $row = $st['ips'][client_ip()] ?? null;
    if ($row && ($row['until'] ?? 0) > $now) {
        $wait = $row['until'] - $now;
    }
    if (count($st['global']) >= GLOBAL_FAILS_PER_HOUR) {
        $wait = max($wait, ($st['global'][count($st['global']) - GLOBAL_FAILS_PER_HOUR] ?? $now) + 3600 - $now);
    }
    return max(0, (int) $wait);
}

function login_locked(): bool
{
    return login_wait_seconds() > 0;
}

function record_failed_login(): void
{
    $st = login_state();
    $now = time();
    $ip = client_ip();
    $row = $st['ips'][$ip] ?? ['fails' => 0, 'locks' => 0, 'until' => 0, 'last' => 0];
    $row['fails'] = ($row['fails'] ?? 0) + 1;
    $row['last'] = $now;
    if ($row['fails'] >= MAX_LOGIN_ATTEMPTS) {
        $row['locks'] = ($row['locks'] ?? 0) + 1;
        $row['until'] = $now + min(86400, LOCKOUT_MINUTES * 60 * (2 ** ($row['locks'] - 1)));
        $row['fails'] = 0;
    }
    $st['ips'][$ip] = $row;
    $st['global'][] = $now;
    store_write('attempts', $st);
}

function clear_failed_logins(): void
{
    $st = login_state();
    unset($st['ips'][client_ip()]);
    store_write('attempts', $st);
}

function format_wait(int $seconds): string
{
    if ($seconds >= 3600) {
        $h = (int) ceil($seconds / 3600);
        return $h . ' ' . ($h === 1 ? 'Stunde' : 'Stunden');
    }
    $m = max(1, (int) ceil($seconds / 60));
    return $m . ' ' . ($m === 1 ? 'Minute' : 'Minuten');
}

function attempt_login(string $password, bool $remember): string
{
    start_session();
    $wait = login_wait_seconds();
    if ($wait > 0) {
        return 'Anmeldung vorübergehend gesperrt. Erneut versuchen in ' . format_wait($wait) . '.';
    }
    $auth = auth_data();
    if (empty($auth['hash']) || strlen($password) > 1024 || !password_verify($password, $auth['hash'])) {
        record_failed_login();
        usleep(random_int(800000, 1300000));
        return 'Passwort ist falsch.';
    }
    clear_failed_logins();
    if (password_algo_outdated($auth['hash'])) {
        $auth['hash'] = hash_password($password);
        store_write('auth', $auth);
    }
    session_regenerate_id(true);
    $_SESSION['auth'] = true;
    $_SESSION['gen'] = $auth['gen'] ?? '';
    $_SESSION['since'] = time();
    if ($remember) {
        issue_remember_token();
    }
    return '';
}

function change_password(string $current, string $new): string
{
    $auth = auth_data();
    if (login_locked()) {
        return 'Zu viele Fehlversuche. Später erneut versuchen.';
    }
    if (!password_verify($current, $auth['hash'] ?? '')) {
        record_failed_login();
        usleep(800000);
        return 'Aktuelles Passwort ist falsch.';
    }
    if (strlen($new) < MIN_PASSWORD_LENGTH) {
        return 'Das neue Passwort braucht mindestens ' . MIN_PASSWORD_LENGTH . ' Zeichen.';
    }
    $auth['hash'] = hash_password($new);
    $auth['gen'] = bin2hex(random_bytes(8));
    $auth['remember'] = [];
    store_write('auth', $auth);
    start_session();
    session_regenerate_id(true);
    $_SESSION['auth'] = true;
    $_SESSION['gen'] = $auth['gen'];
    issue_remember_token();
    return '';
}

function logout_everywhere(): void
{
    $auth = auth_data();
    $auth['remember'] = [];
    $auth['gen'] = bin2hex(random_bytes(8));
    store_write('auth', $auth);
}

function do_logout(): void
{
    start_session();
    drop_remember_cookie();
    $_SESSION = [];
    if (ini_get('session.use_cookies')) {
        set_cookie(session_name(), '', time() - 3600);
    }
    session_destroy();
}

function csrf_token(): string
{
    start_session();
    if (empty($_SESSION['csrf'])) {
        $_SESSION['csrf'] = bin2hex(random_bytes(16));
    }
    return $_SESSION['csrf'];
}

function check_csrf(string $token): bool
{
    start_session();
    return !empty($_SESSION['csrf']) && hash_equals($_SESSION['csrf'], $token);
}

function h(string $s): string
{
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}

function host_matches(string $url, array $hosts): bool
{
    $p = parse_url($url);
    if (!$p || !in_array(strtolower($p['scheme'] ?? ''), ['http', 'https'], true) || empty($p['host'])) {
        return false;
    }
    $host = strtolower($p['host']);
    foreach ($hosts as $d) {
        if ($host === $d || substr($host, -strlen('.' . $d)) === '.' . $d) {
            return true;
        }
    }
    return false;
}

function http_get(string $url, array $hosts, int $timeout = 10, int $maxBytes = 4000000): array
{
    $ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15';
    for ($hop = 0; $hop < 4; $hop++) {
        if (!host_matches($url, $hosts)) {
            return ['status' => 0, 'body' => '', 'type' => '', 'url' => $url];
        }
        $status = 0;
        $type = '';
        $location = '';
        $body = '';
        if (function_exists('curl_init')) {
            $ch = curl_init($url);
            curl_setopt_array($ch, [
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_FOLLOWLOCATION => false,
                CURLOPT_CONNECTTIMEOUT => 5,
                CURLOPT_TIMEOUT => $timeout,
                CURLOPT_USERAGENT => $ua,
                CURLOPT_ENCODING => '',
                CURLOPT_HTTPHEADER => ['Accept: */*', 'Accept-Language: de-AT,de;q=0.9,en;q=0.8'],
                CURLOPT_HEADER => true,
                CURLOPT_PROTOCOLS => CURLPROTO_HTTP | CURLPROTO_HTTPS
            ]);
            $resp = curl_exec($ch);
            if ($resp === false) {
                curl_close($ch);
                return ['status' => 0, 'body' => '', 'type' => '', 'url' => $url];
            }
            $status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
            $headerSize = (int) curl_getinfo($ch, CURLINFO_HEADER_SIZE);
            $type = (string) curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
            $headers = substr($resp, 0, $headerSize);
            $body = substr($resp, $headerSize);
            curl_close($ch);
            if (preg_match('/^location:\s*(.+)$/mi', $headers, $m)) {
                $location = trim($m[1]);
            }
        } else {
            $ctx = stream_context_create(['http' => [
                'method' => 'GET',
                'timeout' => $timeout,
                'follow_location' => 0,
                'ignore_errors' => true,
                'header' => "User-Agent: $ua\r\nAccept: */*\r\n"
            ]]);
            $body = (string) @file_get_contents($url, false, $ctx, 0, $maxBytes);
            foreach ($http_response_header ?? [] as $line) {
                if (preg_match('#^HTTP/\S+\s+(\d+)#', $line, $m)) {
                    $status = (int) $m[1];
                } elseif (stripos($line, 'content-type:') === 0) {
                    $type = trim(substr($line, 13));
                } elseif (stripos($line, 'location:') === 0) {
                    $location = trim(substr($line, 9));
                }
            }
        }
        if ($status >= 300 && $status < 400 && $location !== '') {
            $url = absolute_url($location, $url);
            continue;
        }
        if (strlen($body) > $maxBytes) {
            $body = substr($body, 0, $maxBytes);
        }
        return ['status' => $status, 'body' => $body, 'type' => $type, 'url' => $url];
    }
    return ['status' => 0, 'body' => '', 'type' => '', 'url' => $url];
}

function http_get_many(array $urls, array $hosts, int $timeout = 8, int $maxBytes = 6000000): array
{
    $out = [];
    if (!function_exists('curl_multi_init')) {
        foreach ($urls as $u) {
            $out[$u] = http_get($u, $hosts, $timeout, $maxBytes);
        }
        return $out;
    }
    $ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15';
    $mh = curl_multi_init();
    $handles = [];
    foreach ($urls as $u) {
        if (!host_matches($u, $hosts)) {
            $out[$u] = ['status' => 0, 'body' => '', 'type' => '', 'url' => $u];
            continue;
        }
        $ch = curl_init($u);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_MAXREDIRS => 3,
            CURLOPT_CONNECTTIMEOUT => 4,
            CURLOPT_TIMEOUT => $timeout,
            CURLOPT_USERAGENT => $ua,
            CURLOPT_ENCODING => '',
            CURLOPT_HTTPHEADER => ['Accept: application/rss+xml, application/atom+xml, application/xml, text/xml, */*', 'Accept-Language: de-AT,de;q=0.9,en;q=0.8'],
            CURLOPT_PROTOCOLS => CURLPROTO_HTTP | CURLPROTO_HTTPS,
            CURLOPT_REDIR_PROTOCOLS => CURLPROTO_HTTP | CURLPROTO_HTTPS
        ]);
        curl_multi_add_handle($mh, $ch);
        $handles[$u] = $ch;
    }
    do {
        $status = curl_multi_exec($mh, $running);
        if ($running) {
            curl_multi_select($mh, 0.5);
        }
    } while ($running && $status === CURLM_OK);
    foreach ($handles as $u => $ch) {
        $final = (string) curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);
        $body = (string) curl_multi_getcontent($ch);
        $ok = host_matches($final ?: $u, $hosts);
        $out[$u] = [
            'status' => $ok ? (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE) : 0,
            'body' => $ok ? substr($body, 0, $maxBytes) : '',
            'type' => (string) curl_getinfo($ch, CURLINFO_CONTENT_TYPE),
            'url' => $final ?: $u
        ];
        curl_multi_remove_handle($mh, $ch);
        curl_close($ch);
    }
    curl_multi_close($mh);
    return $out;
}

function absolute_url(string $ref, string $base): string
{
    if ($ref === '') {
        return '';
    }
    if (preg_match('#^https?://#i', $ref)) {
        return $ref;
    }
    $b = parse_url($base);
    $scheme = $b['scheme'] ?? 'https';
    $host = $b['host'] ?? '';
    if (strpos($ref, '//') === 0) {
        return $scheme . ':' . $ref;
    }
    if (strpos($ref, '/') === 0) {
        return $scheme . '://' . $host . $ref;
    }
    $path = $b['path'] ?? '/';
    $dir = substr($path, 0, (int) strrpos($path, '/') + 1);
    return $scheme . '://' . $host . $dir . $ref;
}

function cache_get(string $key, int $ttl, bool $allowStale = false): ?string
{
    $file = CACHE_DIR . '/' . $key . '.php';
    if (!is_file($file)) {
        return null;
    }
    if (!$allowStale && filemtime($file) < time() - $ttl) {
        return null;
    }
    $raw = (string) @file_get_contents($file);
    return strpos($raw, GUARD) === 0 ? substr($raw, strlen(GUARD)) : $raw;
}

function cache_put(string $key, string $value): void
{
    ensure_dirs();
    $file = CACHE_DIR . '/' . $key . '.php';
    @file_put_contents($file, GUARD . $value, LOCK_EX);
    if (mt_rand(1, 60) === 1) {
        foreach ((array) glob(CACHE_DIR . '/*.php') as $f) {
            if (is_file($f) && filemtime($f) < time() - 3 * 86400) {
                @unlink($f);
            }
        }
    }
}

ensure_dirs();
