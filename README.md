# Heute

A personal start page I open every morning: weather, today's appointments, football, Formula 1, news and a to-do list on one screen. Plain PHP, vanilla JavaScript and CSS, no framework and no build step.

It runs on ordinary shared hosting, is protected by a single password and can be installed as an app on Android, iOS and macOS.

## What it shows

| Tab | Content |
| --- | --- |
| Heute | Weather for a chosen location, today's calendar entries, today's matches, top headlines, open to-dos |
| Sport | Football results and fixtures, surprise results of the week, Formula 1 standings and next race |
| News | Ranked headlines from RSS feeds for tech, Austria and world news, with a built-in reader view |
| Kalender | Agenda, week and month view of any calendar that offers a private iCal address |
| ToDo | Tasks with optional due date and time, synced between devices |

The interface is in German.

## How it works

- `index.php` renders the shell, `script.js` loads and renders everything, `style.css` holds the whole design.
- `api.php` is the only endpoint. It proxies RSS feeds and iCal files (allow-listed hosts only), extracts article text for the reader and stores to-dos and settings.
- Data lives in `data/` as JSON files with a PHP guard line, so there is no database. The folder is created on first run and blocked by `.htaccess`.
- Weather comes from Open-Meteo, football from ESPN's public endpoints, Formula 1 from the Jolpica API. None of them needs an API key.
- The background follows the weather and time of day at the selected location. In automatic mode the cards switch to dark glass when the sky is dark.

## Requirements

- PHP 8.1 or newer with `curl`, `dom` and `mbstring`
- Apache with `.htaccess` support and HTTPS

## Setup

1. Open `inc/config.php` and set `SETUP_KEY` to a long random string. Setup stays disabled while the key is empty.
2. Upload all files, including `.htaccess` and `inc/.htaccess`. The target folder must be writable for PHP.
3. Open `https://your-domain/setup.php?key=YOUR_KEY` and choose a password of at least 12 characters. After that `setup.php` is locked for good.
4. In the settings sheet, add the private iCal address of your calendar.

To run it locally:

```
php -S localhost:8001
```

## Make it yours

Everything personal sits at the top of `script.js` in `CONFIG`: your name for the greeting, the weather locations, the leagues, the favourite club and driver, and the RSS feeds with their weights. New feed hosts also have to be added to `ALLOWED_HOSTS` in `inc/config.php`, otherwise the proxy refuses them.

## Security notes

- One user, one password, hashed with Argon2id (bcrypt as fallback).
- Login attempts are limited per IP address and globally, with growing lockouts.
- "Stay signed in" uses rotating selector/validator tokens; changing the password signs out every device.
- All write requests need a CSRF token. A strict Content-Security-Policy allows scripts from the same origin only.
- The feed and calendar proxy only talks to hosts on the allow-lists in `inc/config.php`.
- Never commit the `data/` folder. It holds the password hash, your calendar addresses and your to-dos, and is listed in `.gitignore`.
