# Tor Browser Starter (by Whonix developers) #

Both, a starter for Tor Browser as well as for SecBrowser.
Provides security hardening, integration with Debian, Whonix and Qubes.

Starter.

- Tor Browser Starter start menu entry and `/usr/bin/torbrowser`
starter. Starts `/home/user/.tb/tor-browser/start-tor-browser`.

- SecBrowser Starter start menu entry and `/usr/bin/secbrowser`
starter. Starts `/home/user/.secbrowser/secbrowser/start-tor-browser`.

When config option tb_hardening=true is set or when using
command line option --hardening, firejail will be used.

Uses open-link-confirmation if available.

Prompts to install the browser if not yet installed.

Changes directory into browser directly before startup.

Custom homepage support.

Qubes integration.

Sanity tests:
- Aborts if detected being run as root.
- Aborts in Qubes TemplateVM.
- Aborts in Qubes DVM Template.
- Waits for Qubes mount dirs and gui agent being ready.
- Prevents a browser previously used as SecBrowser being used as Tor Browser.

In Qubes AppVM copies browser from root image to private image at first start.

Tor Browser documentation by Whonix.

- https://www.whonix.org/wiki/Tor_Browser
- https://www.whonix.org/wiki/Tor_Browser/Advanced_Users

SecBrowser:
- SecBrowser ™ is a security-hardened, non-anonymous browser.
- SecBrowser ™ is Tor Browser without Tor.
- SecBrowser ™ is a derivative of Tor Browser.
- SecBrowser ™ homepage: https://www.whonix.org/wiki/SecBrowser

This package is produced independently of, and carries no guarantee from,
The Tor Project.
## How to install `tb-starter` using apt-get ##

1\. Download Whonix's Signing Key.

```
wget https://www.whonix.org/patrick.asc
```

Users can [check Whonix Signing Key](https://www.whonix.org/wiki/Whonix_Signing_Key) for better security.

2\. Add Whonix's signing key.

```
sudo apt-key --keyring /etc/apt/trusted.gpg.d/derivative.gpg add ~/patrick.asc
```

3\. Add Whonix's APT repository.

```
echo "deb https://deb.whonix.org buster main contrib non-free" | sudo tee /etc/apt/sources.list.d/derivative.list
```

4\. Update your package lists.

```
sudo apt-get update
```

5\. Install `tb-starter`.

```
sudo apt-get install tb-starter
```

## How to Build deb Package from Source Code ##

Can be build using standard Debian package build tools such as:

```
dpkg-buildpackage -b
```

See instructions. (Replace `generic-package` with the actual name of this package `tb-starter`.)

* **A)** [easy](https://www.whonix.org/wiki/Dev/Build_Documentation/generic-package/easy), _OR_
* **B)** [including verifying software signatures](https://www.whonix.org/wiki/Dev/Build_Documentation/generic-package)

## Contact ##

* [Free Forum Support](https://forums.whonix.org)
* [Professional Support](https://www.whonix.org/wiki/Professional_Support)

## Donate ##

`tb-starter` requires [donations](https://www.whonix.org/wiki/Donate) to stay alive!
