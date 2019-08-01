# Tor Browser Starter #

Provides a Tor Browser Starter start menu entry and /usr/bin/torbrowser
starter.

Starts /home/user/.tb/tor-browser/start-tor-browser.

Uses open-link-confirmation if available.

This package is produced independently of, and carries no guarantee from,
The Tor Project.
## How to install `tb-starter` using apt-get ##

1\. Download [Whonix's Signing Key]().

```
wget https://www.whonix.org/patrick.asc
```

Users can [check Whonix Signing Key](https://www.whonix.org/wiki/Whonix_Signing_Key) for better security.

2\. Add Whonix's signing key.

```
sudo apt-key --keyring /etc/apt/trusted.gpg.d/whonix.gpg add ~/patrick.asc
```

3\. Add Whonix's APT repository.

```
echo "deb https://deb.whonix.org buster main contrib non-free" | sudo tee /etc/apt/sources.list.d/whonix.list
```

4\. Update your package lists.

```
sudo apt-get update
```

5\. Install `tb-starter`.

```
sudo apt-get install tb-starter
```

## How to Build deb Package ##

Replace `apparmor-profile-torbrowser` with the actual name of this package with `tb-starter` and see [instructions](https://www.whonix.org/wiki/Dev/Build_Documentation/apparmor-profile-torbrowser).

## Contact ##

* [Free Forum Support](https://forums.whonix.org)
* [Professional Support](https://www.whonix.org/wiki/Professional_Support)

## Donate ##

`tb-starter` requires [donations](https://www.whonix.org/wiki/Donate) to stay alive!
