<?php
declare(strict_types=1);

function auth_page(string $title, string $body): void
{
    security_headers();
    header('Cache-Control: no-store');
    ?><!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#2f7fd8">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Heute">
<title><?= h($title) ?></title>
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icons/icon-192.png" type="image/png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body class="auth-body">
<div id="sky" aria-hidden="true">
  <div class="sky-layer is-active auth-sky"></div>
  <div class="sky-sun"></div>
  <div class="sky-dim"></div>
</div>
<main class="auth-wrap">
  <div class="auth-card card card-hero">
<?= $body ?>
  </div>
</main>
</body>
</html>
<?php
}
