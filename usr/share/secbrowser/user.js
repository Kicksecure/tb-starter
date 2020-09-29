// Copyright (C) 2019 - 2020 ENCRYPTED SUPPORT LP <adrelanos@riseup.net>
// See the file COPYING for copying conditions.

// Warning! These settings disable Tor. You will not be anonymous!

// Configure Tor Browser without Tor settings for an everyday use
// security hardened browser. Take advantage of its excellent
// enhancements for reducing linkability, that is, "the ability
// for a user's activity on one site to be linked with their
// activity on another site without their knowledge or explicit
// consent."
// - See https://www.whonix.org/wiki/Tor_Browser_without_Tor
// - See https://www.whonix.org/wiki/SecBrowser

// This file gets copied at first start to:
// ~/.secbrowser/secbrowser/Browser/TorBrowser/Data/Browser/profile.default/user.js

// Disable Torbutton and Torlauncher extensions
user_pref("extensions.torbutton.startup", false);
user_pref("extensions.torlauncher.start_tor", false);
user_pref("network.proxy.socks_remote_dns", false);

// https://forums.whonix.org/t/tor-browser-10-without-tor/10313
user_pref("network.dns.disabled", true);

// Disable function torbutton source file:
// src/chrome/content/torbutton.js
// function: torbutton_do_tor_check
// and thereby also function: torbutton_initiate_remote_tor_check
// disables Control Port verification and remote Tor connection check.
user_pref("extensions.torbutton.test_enabled", false);

// Set security slider "Safest".
// Broken, therefore disabled by default.
// https://forums.whonix.org/t/broken-security-slider/8675
// user_pref("extensions.torbutton.inserted_security_level", true);
// user_pref("extensions.torbutton.security_slider", 1);

// Normalize Tor Browser behavior
user_pref("extensions.torbutton.noscript_persist", true);
user_pref("browser.privatebrowsing.autostart", false);

// Save passwords.
user_pref("signon.rememberSignons", true);

// Required for saving passwords.
// https://trac.torproject.org/projects/tor/ticket/30565#comment:7
user_pref("security.nocertdb", false);

// Disable Letterboxing.
// https://forums.whonix.org/t/is-anyone-having-white-bars-in-the-tbb-tor-browser-letterboxing/8345
// https://forums.whonix.org/t/secbrowser-a-security-hardened-non-anonymous-browser/3822/156
user_pref("privacy.resistFingerprinting.letterboxing", false);

// Enable punycode to fix
// very hard to notice Phishing Scam - Firefox / Tor Browser URL not showing real Domain Name - Homograph attack (Punycode).
// https://forums.whonix.org/t/very-hard-to-notice-phishing-scam-firefox-tor-browser-url-not-showing-real-domain-name-homograph-attack-punycode/8373
// https://forums.whonix.org/t/secbrowser-a-security-hardened-non-anonymous-browser/3822/162
user_pref("network.IDN_show_punycode", true);
