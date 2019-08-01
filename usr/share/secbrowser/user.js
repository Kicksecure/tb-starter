// Copyright (C) 2019 - 2019 ENCRYPTED SUPPORT LP <adrelanos@riseup.net>
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

// Disable function torbutton source file:
// src/chrome/content/torbutton.js
// function: torbutton_do_tor_check
// and thereby also function: torbutton_initiate_remote_tor_check
// disables Control Port verification and remote Tor connection check.
user_pref("extensions.torbutton.test_enabled", false);

// Set security slider "Safest".
user_pref("extensions.torbutton.inserted_security_level", true);
user_pref("extensions.torbutton.security_slider", 1);

// Normalize Tor Browser behavior
user_pref("extensions.torbutton.noscript_persist", true);
user_pref("browser.privatebrowsing.autostart", false);

// Save passwords.
user_pref("signon.rememberSignons", true);

// Required for saving passwords.
// https://trac.torproject.org/projects/tor/ticket/30565#comment:7
user_pref("security.nocertdb", false);
