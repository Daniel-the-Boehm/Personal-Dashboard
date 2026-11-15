<?php
declare(strict_types=1);

define('SETUP_KEY', '');
define('REMEMBER_DAYS', 180);
define('MAX_LOGIN_ATTEMPTS', 5);
define('LOCKOUT_MINUTES', 15);
define('GLOBAL_FAILS_PER_HOUR', 30);
define('MIN_PASSWORD_LENGTH', 12);

define('ALLOWED_HOSTS', [
  'theverge.com', 'arstechnica.com', 'engadget.com', 'techcrunch.com', 'wired.com',
  'bbc.co.uk', 'bbci.co.uk', 'bbc.com', 'theguardian.com', 'cnbc.com',
  '9to5mac.com', 'macrumors.com', 'appleinsider.com', '9to5google.com',
  'androidauthority.com', 'androidpolice.com', 'gsmarena.com', 'sammobile.com',
  'tomshardware.com', 'theregister.com', 'heise.de', 'golem.de', 'computerbase.de',
  'derstandard.at', 'orf.at', 'diepresse.com', 'kurier.at', 'kleinezeitung.at', 'sn.at',
  'tagesschau.de', 'zdf.de', 'spiegel.de', 'zeit.de', 'faz.net', 'sueddeutsche.de',
  'nzz.ch', 'dw.com', 'aljazeera.com', 'nytimes.com', 'euronews.com', 'profil.at',
  'skysports.com', 'espn.com', 'marca.com', 'uecdn.es', 'football-espana.net',
  'managingmadrid.com', 'kicker.de', 'laola1.at',
  'formula1.com', 'motorsport.com', 'autosport.com', 'the-race.com', 'racefans.net', 'planetf1.com',
  'runnersworld.com', 'letsrun.com', 'triathlete.com', '220triathlon.com', 'tri247.com',
  'runningmagazine.ca', 'irunfar.com', 'tri-mag.de',
  'feedburner.com', 'feeds.feedburner.com'
]);

define('ICAL_HOSTS', ['calendar.google.com', 'outlook.live.com', 'outlook.office365.com', 'icloud.com']);
