<?php
declare(strict_types=1);

require __DIR__ . '/inc/bootstrap.php';
require __DIR__ . '/inc/auth-layout.php';

if (!password_is_set()) {
    header('Location: setup.php');
    exit;
}
if (is_logged_in()) {
    header('Location: ./');
    exit;
}

$error = '';
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    if (!check_csrf((string) ($_POST['csrf'] ?? ''))) {
        $error = 'Sitzung abgelaufen. Bitte erneut versuchen.';
    } else {
        $error = attempt_login((string) ($_POST['password'] ?? ''), !empty($_POST['remember']));
        if ($error === '') {
            header('Location: ./');
            exit;
        }
    }
}

$csrf = csrf_token();
ob_start();
?>
    <div class="auth-mark" aria-hidden="true"><img src="icons/icon-192.png" alt=""></div>
    <h1 class="auth-title">Willkommen zurück</h1>
    <p class="auth-sub">Melde dich an, um dein Dashboard zu sehen.</p>
    <?php if ($error !== ''): ?><p class="auth-error" role="alert"><?= h($error) ?></p><?php endif; ?>
    <form method="post" class="auth-form" autocomplete="on">
      <input type="hidden" name="csrf" value="<?= h($csrf) ?>">
      <input type="text" name="username" value="Daniel" autocomplete="username" hidden>
      <label class="field">
        <span>Passwort</span>
        <input type="password" name="password" autocomplete="current-password" required autofocus>
      </label>
      <label class="switch">
        <input type="checkbox" name="remember" value="1">
        <span class="switch-track" aria-hidden="true"><span class="switch-thumb"></span></span>
        <span class="switch-label">Angemeldet bleiben<small>Nur auf eigenen Geräten aktivieren</small></span>
      </label>
      <button type="submit" class="btn btn-primary btn-block">Anmelden</button>
    </form>
<?php
auth_page('Anmelden', (string) ob_get_clean());
