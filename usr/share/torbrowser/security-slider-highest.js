// Copyright (C) 2019 - 2020 ENCRYPTED SUPPORT LP <adrelanos@riseup.net>
// See the file COPYING for copying conditions.

// If user chooses so, this file gets copied at first start to:
// ~/.torbrowser/torbrowser/Browser/TorBrowser/Data/Browser/profile.default/user.js

// [Feature Request] Environment Variable to set security slider level
// closed enhancement (wontfix)
// https://trac.torproject.org/projects/tor/ticket/25391

// Set security slider "Safest".
user_pref("extensions.torbutton.inserted_security_level", true);
user_pref("extensions.torbutton.security_slider", 1);
