
// Copyright (C) 2018 - 2018 ENCRYPTED SUPPORT LP <adrelanos@riseup.net>
// See the file COPYING for copying conditions.

pref("extensions.https_everywhere._observatory.enabled", false);
pref("extensions.https_everywhere.options.autoUpdateRulesets", false);
pref("extensions.https_everywhere.globalEnabled", false);
pref("extensions.https_everywhere._observatory.submit_during_tor", false);
pref("extensions.https_everywhere._observatory.submit_during_nontor", false);
pref("extensions.https_everywhere._observatory.use_custom_proxy", true);
pref("extensions.https_everywhere._observatory.proxy_host", "127.0.0.1");
pref("extensions.https_everywhere._observatory.proxy_port", 4444);

pref("extensions.torbutton.use_nontor_proxy", true);

//For socket conversion: in the future, I'll need to make TBB communicate with
//i2p over a unix socket. Fortunately, this is how you do that. It will be
//configurable in a similar way to the host:port configuration when that happens.
//pref("extensions.torlauncher.socks_port_use_ipc", );
//pref("extensions.torlauncher.socks_ipc_path", "");

pref("extensions.torlauncher.start_tor", false);
pref("extensions.torlauncher.default_bridge_type", "");
pref("extensions.torlauncher.prompt_at_startup", false);

pref("network.proxy.no_proxies_on", 0);
pref("network.proxy.type", 1);
pref("network.proxy.http", "127.0.0.1");
pref("network.proxy.http_port", 4444);
pref("network.proxy.ssl", "127.0.0.1");
pref("network.proxy.ssl_port", 4444);
pref("network.proxy.ftp", "127.0.0.1");
pref("network.proxy.ftp_port", 4444);
pref("network.proxy.socks", "127.0.0.1");
pref("network.proxy.socks_port", 4444);
pref("network.proxy.share_proxy_settings", true);
pref("browser.startup.homepage", "about:blank");

