<?php
declare(strict_types=1);

require __DIR__ . '/inc/bootstrap.php';
require __DIR__ . '/inc/auth-layout.php';

if (password_is_set()) {
    header('Location: login.php');
    exit;
}

start_session();
$key = (string) ($_POST['key'] ?? $_GET['key'] ?? '');
$validKey = $key !== '' && hash_equals(SETUP_KEY, $key);
$error = '';

if ($validKey && ($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    $pw = (string) ($_POST['password'] ?? '');
    $pw2 = (string) ($_POST['password2'] ?? '');
    if (!check_csrf((string) ($_POST['csrf'] ?? ''))) {
        $error = 'Sitzung abgelaufen. Bitte erneut versuchen.';
    } elseif (strlen($pw) < MIN_PASSWORD_LENGTH) {
        $error = 'Das Passwort braucht mindestens ' . MIN_PASSWORD_LENGTH . ' Zeichen.';
    } elseif ($pw !== $pw2) {
        $error = 'Die Passwörter stimmen nicht überein.';
    } else {
        $auth = auth_data();
        $auth['hash'] = hash_password($pw);
        $auth['gen'] = bin2hex(random_bytes(8));
        $auth['remember'] = [];
        if (store_write('auth', $auth)) {
            session_regenerate_id(true);
            $_SESSION['auth'] = true;
            $_SESSION['gen'] = $auth['gen'];
            if (!empty($_POST['remember'])) {
                issue_remember_token();
            }
            header('Location: ./');
            exit;
        }
        $error = 'Speichern fehlgeschlagen. Der Ordner data braucht Schreibrechte.';
    }
}

$csrf = csrf_token();
ob_start();
if (!$validKey): ?>
    <div class="auth-mark" aria-hidden="true"><img src="icons/icon-192.png" alt=""></div>
    <h1 class="auth-title">Einrichtung</h1>
    <p class="auth-sub">Öffne diese Seite mit dem Einrichtungsschlüssel, zum Beispiel setup.php?key=…</p>
<?php else: ?>
    <div class="auth-mark" aria-hidden="true"><img src="icons/icon-192.png" alt=""></div>
    <h1 class="auth-title">Passwort festlegen</h1>
    <p class="auth-sub">Einmalig. Danach ist diese Seite gesperrt.</p>
    <?php if ($error !== ''): ?><p class="auth-error" role="alert"><?= h($error) ?></p><?php endif; ?>
    <form method="post" class="auth-form" autocomplete="on">
      <input type="hidden" name="csrf" value="<?= h($csrf) ?>">
      <input type="hidden" name="key" value="<?= h($key) ?>">
      <input type="text" name="username" value="Daniel" autocomplete="username" hidden>
      <label class="field">
        <span>Neues Passwort</span>
        <input type="password" name="password" autocomplete="new-password" minlength="<?= MIN_PASSWORD_LENGTH ?>" required autofocus>
      </label>
      <label class="field">
        <span>Wiederholen</span>
        <input type="password" name="password2" autocomplete="new-password" minlength="<?= MIN_PASSWORD_LENGTH ?>" required>
      </label>
      <label class="switch">
        <input type="checkbox" name="remember" value="1">
        <span class="switch-track" aria-hidden="true"><span class="switch-thumb"></span></span>
        <span class="switch-label">Auf diesem Gerät angemeldet bleiben</span>
      </label>
      <button type="submit" class="btn btn-primary btn-block">Speichern und anmelden</button>
    </form>
<?php endif;
auth_page('Einrichtung', (string) ob_get_clean());
