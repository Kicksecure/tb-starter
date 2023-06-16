# Tor Browser Starter (by Whonix developers) #

Both, a starter for Tor Browser.
Provides security hardening, integration with Debian, Whonix and Qubes.

Starter.

- Tor Browser Starter start menu entry and `/usr/bin/torbrowser`
starter. Starts `/home/user/.tb/tor-browser/start-tor-browser`.

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

In Qubes AppVM copies browser from root image to private image at first start.

Tor Browser documentation by Whonix.

- https://www.whonix.org/wiki/Tor_Browser
- https://www.whonix.org/wiki/Tor_Browser/Advanced_Users

This package is produced independently of, and carries no guarantee from,
The Tor Project.

## How to install `tb-starter` using apt-get ##

1\. Download the APT Signing Key.

```
wget https://www.kicksecure.com/keys/derivative.asc
```

Users can [check the Signing Key](https://www.kicksecure.com/wiki/Signing_Key) for better security.

2\. Add the APT Signing Key.

```
sudo cp ~/derivative.asc /usr/share/keyrings/derivative.asc
```

3\. Add the derivative repository.

```
echo "deb [signed-by=/usr/share/keyrings/derivative.asc] https://deb.kicksecure.com bookworm main contrib non-free" | sudo tee /etc/apt/sources.list.d/derivative.list
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

See instructions.

NOTE: Replace `generic-package` with the actual name of this package `tb-starter`.

* **A)** [easy](https://www.kicksecure.com/wiki/Dev/Build_Documentation/generic-package/easy), _OR_
* **B)** [including verifying software signatures](https://www.kicksecure.com/wiki/Dev/Build_Documentation/generic-package)

## Contact ##

* [Free Forum Support](https://forums.kicksecure.com)
* [Premium Support](https://www.kicksecure.com/wiki/Premium_Support)

## Donate ##

`tb-starter` requires [donations](https://www.kicksecure.com/wiki/Donate) to stay alive!
