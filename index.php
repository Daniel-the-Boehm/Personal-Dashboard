<?php
declare(strict_types=1);

require __DIR__ . '/inc/bootstrap.php';

if (!password_is_set()) {
    header('Location: setup.php');
    exit;
}
if (!is_logged_in()) {
    header('Location: login.php');
    exit;
}
security_headers();
header('Cache-Control: no-store');
$csrf = csrf_token();
?><!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#2f7fd8">
<meta name="csrf-token" content="<?= h($csrf) ?>">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Heute">
<title>Heute</title>
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icons/icon-192.png" type="image/png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<link rel="preconnect" href="https://api.open-meteo.com" crossorigin>
<link rel="preconnect" href="https://site.api.espn.com" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
</head>
<body>

<div id="sky" aria-hidden="true">
  <div class="sky-layer is-active" id="sky-a"></div>
  <div class="sky-layer" id="sky-b"></div>
  <div class="sky-sun" id="sky-sun"></div>
  <div class="sky-rain" id="sky-rain"></div>
  <div class="sky-dim"></div>
</div>

<svg class="svg-defs" width="0" height="0" aria-hidden="true" focusable="false">
  <defs>
    <filter id="lg-refract" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
      <feImage id="lg-map" x="0" y="0" width="1" height="1" preserveAspectRatio="none" result="map"/>
      <feDisplacementMap in="SourceGraphic" in2="map" scale="-38" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <mask id="mk-moon" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
      <rect width="64" height="64" fill="#fff"/>
      <circle cx="40" cy="24" r="12.5" fill="#000"/>
    </mask>
    <linearGradient id="g-sun" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe27a"/>
      <stop offset="1" stop-color="#ffaa1d"/>
    </linearGradient>
    <linearGradient id="g-moon" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f7f4ea"/>
      <stop offset="1" stop-color="#c3c8d6"/>
    </linearGradient>
    <linearGradient id="g-cloud" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#d6deea"/>
    </linearGradient>
    <linearGradient id="g-cloud-dark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#b6c0ce"/>
      <stop offset="1" stop-color="#76808f"/>
    </linearGradient>
  </defs>
</svg>

<div class="ptr glass" id="ptr" aria-hidden="true">
  <svg viewBox="0 0 24 24"><path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.6 4.2v4.6H15"/></svg>
</div>

<header class="topbar">
  <nav class="tabbar" id="tabbar" role="tablist" aria-label="Bereiche">
    <span class="tab-indicator" id="tab-indicator" aria-hidden="true"></span>
    <button class="tab" role="tab" data-tab="heute" aria-selected="true">
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="2.2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2.2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2.2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2.2"/></svg>
      <span>Heute</span>
    </button>
    <button class="tab" role="tab" data-tab="sport" aria-selected="false">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.7"/><path d="M12 8.2l3.1 2.25-1.18 3.65h-3.84L8.9 10.45z"/><path d="M12 8.2V3.4M15.1 10.45l4.4-1.5M13.92 14.1l2.75 3.9M10.08 14.1l-2.75 3.9M8.9 10.45l-4.4-1.5"/></svg>
      <span>Sport</span>
    </button>
    <button class="tab" role="tab" data-tab="news" aria-selected="false">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v12a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2z"/><path d="M17 9h1.8a1.2 1.2 0 0 1 1.2 1.2V18a2 2 0 0 1-2 2"/><path d="M7.5 8h6M7.5 11.5h6M7.5 15h3.8"/></svg>
      <span>News</span>
    </button>
    <button class="tab" role="tab" data-tab="kalender" aria-selected="false">
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="3.2"/><path d="M3.5 10h17M8 3v4M16 3v4"/><circle cx="8.5" cy="14.5" r="1" class="fill"/><circle cx="12" cy="14.5" r="1" class="fill"/></svg>
      <span>Kalender</span>
    </button>
    <button class="tab" role="tab" data-tab="todo" aria-selected="false">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="7" r="2.2"/><circle cx="6" cy="17" r="2.2"/><path d="M5 7l.8.8L7.4 6.2"/><path d="M11 7h9M11 17h9"/></svg>
      <span>ToDo</span>
    </button>
  </nav>
</header>

<main id="app">

  <header class="page-head">
    <div class="page-head-text">
      <p class="page-date" id="page-date"></p>
      <h1 class="page-title" id="page-title">Guten Morgen</h1>
      <p class="page-brief" id="page-brief"></p>
    </div>
    <div class="page-actions">
      <button class="icon-btn glass" id="btn-refresh" aria-label="Aktualisieren">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.6 4.2v4.6H15"/></svg>
      </button>
      <button class="icon-btn glass" id="btn-settings" aria-label="Einstellungen">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5h8.5M17.5 7.5H20M4 16.5h2.5M11.5 16.5H20"/><circle cx="15" cy="7.5" r="2.4"/><circle cx="9" cy="16.5" r="2.4"/></svg>
      </button>
    </div>
  </header>

  <section class="view is-active" id="view-heute" data-view="heute" role="tabpanel" aria-label="Heute">
    <div class="grid-heute">
      <article class="card card-hero weather" id="weather-card" aria-live="polite"></article>
      <article class="card events-today" id="events-today"></article>
      <article class="card football-today" id="football-today"></article>
      <article class="card news-top" id="news-top"></article>
      <article class="card todo-today" id="todo-today"></article>
    </div>
  </section>

  <section class="view" id="view-sport" data-view="sport" role="tabpanel" aria-label="Sport" hidden>
    <div class="segmented glass" role="tablist" data-segment="sport">
      <span class="seg-indicator" aria-hidden="true"></span>
      <button role="tab" data-seg="fussball" aria-selected="true">Fußball</button>
      <button role="tab" data-seg="f1" aria-selected="false">Formel 1</button>
      <button role="tab" data-seg="ausdauer" aria-selected="false">Laufen &amp; Triathlon</button>
    </div>
    <div class="seg-panel is-active" data-panel="fussball">
      <div class="grid-sport">
        <article class="card" id="fb-today"></article>
        <article class="card" id="fb-yesterday"></article>
        <article class="card" id="fb-upsets"></article>
        <article class="card" id="fb-news"></article>
      </div>
    </div>
    <div class="seg-panel" data-panel="f1" hidden>
      <div class="grid-f1">
        <article class="card card-hero f1-next" id="f1-next"></article>
        <article class="card f1-max" id="f1-max"></article>
        <article class="card" id="f1-standings"></article>
        <article class="card" id="f1-last"></article>
        <article class="card f1-news" id="f1-news"></article>
      </div>
    </div>
    <div class="seg-panel" data-panel="ausdauer" hidden>
      <article class="card" id="endurance-news"></article>
    </div>
  </section>

  <section class="view" id="view-news" data-view="news" role="tabpanel" aria-label="News" hidden>
    <div class="segmented glass" role="tablist" data-segment="news">
      <span class="seg-indicator" aria-hidden="true"></span>
      <button role="tab" data-seg="tech" aria-selected="true">Technik</button>
      <button role="tab" data-seg="oesterreich" aria-selected="false">Österreich</button>
      <button role="tab" data-seg="welt" aria-selected="false">Welt</button>
    </div>
    <div class="seg-panel is-active" data-panel="tech"><article class="card news-feed" id="news-tech"></article></div>
    <div class="seg-panel" data-panel="oesterreich" hidden><article class="card news-feed" id="news-oesterreich"></article></div>
    <div class="seg-panel" data-panel="welt" hidden><article class="card news-feed" id="news-welt"></article></div>
  </section>

  <section class="view" id="view-kalender" data-view="kalender" role="tabpanel" aria-label="Kalender" hidden>
    <div class="cal-toolbar">
      <div class="segmented glass" role="tablist" data-segment="cal">
        <span class="seg-indicator" aria-hidden="true"></span>
        <button role="tab" data-seg="agenda" aria-selected="true">Liste</button>
        <button role="tab" data-seg="week" aria-selected="false">Woche</button>
        <button role="tab" data-seg="month" aria-selected="false">Monat</button>
      </div>
      <div class="cal-nav glass">
        <button class="icon-btn plain" id="cal-prev" aria-label="Zurück"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5.5 8 12l6.5 6.5"/></svg></button>
        <button class="cal-today" id="cal-today">Heute</button>
        <button class="icon-btn plain" id="cal-next" aria-label="Weiter"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 5.5 16 12l-6.5 6.5"/></svg></button>
      </div>
    </div>
    <h2 class="cal-title" id="cal-title"></h2>
    <article class="card cal-card" id="cal-body"></article>
  </section>

  <section class="view" id="view-todo" data-view="todo" role="tabpanel" aria-label="ToDo" hidden>
    <article class="card todo-card" id="todo-full"></article>
  </section>

</main>

<div class="sheet-backdrop" id="sheet-backdrop" hidden></div>

<section class="sheet" id="reader" role="dialog" aria-modal="true" aria-labelledby="reader-title" hidden>
  <div class="sheet-grabber" aria-hidden="true"></div>
  <button class="icon-btn glass sheet-close" data-close aria-label="Schließen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg></button>
  <div class="sheet-scroll" id="reader-scroll">
    <figure class="reader-hero" id="reader-hero"></figure>
    <div class="reader-body">
      <div class="reader-meta" id="reader-meta"></div>
      <h2 class="reader-title" id="reader-title"></h2>
      <div class="reader-content" id="reader-content"></div>
      <div class="reader-sources" id="reader-sources"></div>
    </div>
  </div>
</section>

<section class="sheet sheet-settings" id="settings" role="dialog" aria-modal="true" aria-labelledby="settings-title" hidden>
  <div class="sheet-grabber" aria-hidden="true"></div>
  <button class="icon-btn glass sheet-close" data-close aria-label="Schließen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg></button>
  <div class="sheet-scroll">
    <h2 class="settings-title" id="settings-title">Einstellungen</h2>

    <div class="settings-group">
      <h3>Darstellung</h3>
      <div class="segmented glass" role="tablist" data-segment="theme">
        <span class="seg-indicator" aria-hidden="true"></span>
        <button role="tab" data-seg="auto" aria-selected="true">Automatisch</button>
        <button role="tab" data-seg="light" aria-selected="false">Hell</button>
        <button role="tab" data-seg="dark" aria-selected="false">Dunkel</button>
      </div>
    </div>

    <div class="settings-group">
      <h3>Kalender</h3>
      <p class="settings-status" id="cal-status">Kein Kalender verbunden</p>
      <div class="cal-rows" id="cal-rows"></div>
      <p class="settings-hint">Google: calendar.google.com, Einstellungen, Kalender wählen, „Kalender integrieren“, „Privatadresse im iCal-Format“ kopieren.<br>Apple: in der Kalender-App am Mac Rechtsklick auf den Kalender, „Kalender teilen“, „Öffentlicher Kalender“ aktivieren und den Link kopieren.<br>Die Kalender werden am Server gespeichert und sind auf jedem Gerät da, auf dem du dich anmeldest. Farbe per Tipp auf den Punkt ändern.</p>
      <div class="settings-actions">
        <button class="btn" id="btn-add-cal">Kalender hinzufügen</button>
        <button class="btn btn-primary" id="btn-save-ical">Speichern</button>
      </div>
    </div>

    <div class="settings-group">
      <h3>Passwort ändern</h3>
      <form class="pw-form" id="pw-form" autocomplete="on">
        <input type="text" name="username" value="Daniel" autocomplete="username" hidden>
        <label class="field"><span>Aktuelles Passwort</span><input type="password" name="current" autocomplete="current-password" required></label>
        <label class="field"><span>Neues Passwort, mindestens 12 Zeichen</span><input type="password" name="next" autocomplete="new-password" minlength="12" required></label>
        <label class="field"><span>Neues Passwort wiederholen</span><input type="password" name="next2" autocomplete="new-password" minlength="12" required></label>
        <div class="settings-actions"><button class="btn btn-primary" type="submit">Passwort ändern</button></div>
      </form>
    </div>

    <div class="settings-group">
      <h3>Konto</h3>
      <div class="settings-actions">
        <a class="btn" href="logout.php">Abmelden</a>
        <button class="btn" id="btn-logout-all">Auf allen Geräten abmelden</button>
        <button class="btn" id="btn-clear-cache">Cache leeren</button>
      </div>
    </div>
  </div>
</section>

<div class="toast" id="toast" role="status" aria-live="polite" hidden></div>

</body>
</html>
