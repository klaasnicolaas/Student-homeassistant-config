# Make a Student Home 🏠 -> Smart 💡

You are probably wondering, what is Home Assistant!? Well, Home Assistant is a home automation platform running on Python 3. It is able to track and control all devices at home and offers a platform for automating control.

## Story

During student life there is often that one phase where you will live on your own, I recently took that step but with an important goal. You could almost say *"I am a man on a mission"*, because I want to make the 25m2 that I have a **super smart house**.

&nbsp;

[![header](/extras/img/student-techlife-big.jpg "header")](https://student-techlife.com)

You can follow my entire adventure via **[student-techlife.com][techlife]**

Use the code from this repo for your own Home Assistant environment, keep in mind to not always copy everything line-by-line. If you have any questions, feel free to ask them via email or socials!

---
**NOTE**: This is not my first [Home Assistant][home-assistant] configuration that you can find on Github. Take also a look at these [Home Assistant configuration repositories][smarthomes].

---

## Status Information

| [![Home Assistant CI][homeassistantci-shield]][homeassistantci] | [![GitHub Last Commit][last-commit-shield]][commits]|
|:---:|:---:|
| Shows whether the configuration in this repo is valid | Shows how up to date this repo is |
| [![GitHub issues][issues-shield]][issues] | [![HA Version][ha-version-shield]][home-assistant] |
| I now use the issues as a TODO list | Current Home Assistant that I use |
| ![Project Maintenance][maintenance-shield] | [![GitHub Activity][commits-shield]][commits] |
| Is this repository still actively maintained? | Shows how active I am with this repo annually |
| [![GitHub Stars][stars-shield]][stars] | [![Buy Me A Fanta][paypal-shield]][paypal] |
| Please :star: this repo if you find it useful, like these people have | If this config was helpful, you could buy a fanta :tropical_drink: for me :smile: |

## Current House Configuration

Below is a list of all hardware in-house

**My host system:**

- [Intel Arches Canyon NUC6CAYH][intelnuc] -> Inside 8GB Ram, 120GB SSD
- Running a [Proxmox][proxmox] server, with a [Home Assistant OS][ha-os] VM on it.
- [Conbee II][conbee] stick

**And I use the following hardware in my house:**

- [Ikea tradfri][tradfri] lights - All types of fittings (Zigbee)
- [Tint A60 806lm E27 RGBCCT Bulb][tint_E27] (Zigbee)
- [Google Home][google_home] (WiFi)
- [Logitech Harmony Hub companion][harmony]
- Xiaomi Aqara [Temperature & Humidity Sensors][xiaomi_temp-shop] (Zigbee)
- Xiaomi Aqara [Window Door Sensors][xiaomi_door-shop] (Zigbee)
- Xiaomi Aqara [Motion Sensors][xiaomi_motion-shop] (Zigbee)
- Xiaomi Curtains with [track][xiaomi_curtains_track-shop] and [motor][xiaomi_curtains_motor-shop] (Zigbee)
- Xiaomi Aqara [Smart switch][xiaomi_switch-shop] (Zigbee)
- Xiaomi Mijia [Smart Light Sensors][xiaomi_light_sensor-shop] (Zigbee)
- Xiaomi Aqara [D1 - 1 way switch][xiaomi_d1_1way_switch-shop] (Zigbee)
- Xiaomi Aqara [Opple 6 way switch][opple_switch-shop] (Zigbee)
- Blitzwolf [BW-LT11][bw_lt11-shop] led strips (ESPHome flashed)
- Blitzwolf [BW-SHP13][bw_shp13-shop] smart plugs (Zigbee)
- [Home Assistant Glow][glow]
- [IKEA VINDRIKTNING][vindriktning] (D1 Mini - ESPHome)

---

## Blogs about my config

On my website I have already written a number of blogs that address specific parts of my config:

| Article | Is going about |
| -- | -- |
| [- Hey Google! Time to sleep 💤][sleep] | Using google assistant to activate certain scripts |
| [- My TV 📺 is out of (own) control][tv] | Operating your TV via Google Assistant or Home Assistant |
| [- What task do we do today? ✅][household] | Tracking household tasks with sensors and notifications |

## Need help or questions? 🤔

If you have a specific question about my configuration send me a Private message (PM) on the HA forum, my username is **[klaasnicolaas](https://community.home-assistant.io/u/klaasnicolaas)**. Or send me a message via Discord, my username is **Doc Master Nicolaz**. If you have found any bug or errors, please submit an issue here on Github and I will get it fixed.

## Links

- [Home Assistant Homepage](https://home-assistant.io/)
- [Home Assistant Forums](https://community.home-assistant.io/)
- [Home Assistant Discord Chat](https://discord.gg/c5DvZ4e)
- [Other Featured Home Assistant Configurations](https://home-assistant.io/cookbook/)
- [Home Assistant GitHub Source Repository](https://github.com/home-assistant/home-assistant)
- [Official Home Assistant Demo](https://home-assistant.io/demo/)

## License

MIT License

Copyright (c) 2019-2022 Klaas Schoute

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<!-- Shield -->
[commits-shield]: https://img.shields.io/github/commit-activity/y/klaasnicolaas/student-homeassistant-config.svg
[last-commit-shield]: https://img.shields.io/github/last-commit/klaasnicolaas/Student-homeassistant-config.svg?color=blue&style=plasticr
[stars-shield]: https://img.shields.io/github/stars/klaasnicolaas/Student-homeassistant-config.svg
[ha-version-shield]: https://img.shields.io/badge/Home%20Assistant-2022.4-blue.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2022.svg
[homeassistantci-shield]: https://github.com/klaasnicolaas/Student-homeassistant-config/actions/workflows/home_assistant.yml/badge.svg
[paypal-shield]: https://img.shields.io/badge/BuyMeAFanta-Paypal-orange.svg
[issues-shield]: https://img.shields.io/github/issues/klaasnicolaas/Student-homeassistant-config.svg

<!-- Repository links -->
[commits]: https://github.com/klaasnicolaas/Student-homeassistant-config/commits/master
[stars]: https://github.com/klaasnicolaas/Student-homeassistant-config/stargazers
[home-assistant]: https://home-assistant.io
[homeassistantci]: https://github.com/klaasnicolaas/Student-homeassistant-config/actions/workflows/home_assistant.yml
[paypal]: https://www.paypal.me/dexterfpv
[issues]: https://github.com/klaasnicolaas/Student-homeassistant-config/issues
[smarthome]: https://github.com/klaasnicolaas/Smarthome-homeassistant-config
[techlife]: https://student-techlife.com/
[ha-os]: https://github.com/whiskerz007/proxmox_hassos_install
[intelnuc]: https://www.intel.com/content/www/us/en/products/boards-kits/nuc/kits/nuc6cayh.html
[conbee]: https://www.phoscon.de/en/conbee2
[ubuntu-server]: https://www.ubuntu.com/download/server
[proxmox]: https://www.proxmox.com/en/
[smarthomes]: https://github.com/klaasnicolaas?tab=repositories&q=home-assistant-config

<!-- Products -->
[tradfri]: https://www.ikea.com/nl/nl/search/products/?q=tradfri
[xiaomi_temp-shop]: https://www.banggood.com/bang/?tt=16956_12_417111_&r=%2FAqara-Smart-Home-Zigbee-Temperature-and-Humidity-Sensor-Thermometer-Hygrometer-Digital-Sensor-From-Eco-System-p-1148666.html
[xiaomi_door-shop]: https://www.banggood.com/bang/?tt=16956_12_417111_&r=%2FAqara-Zigbee-1_2-Version-Window-Door-Sensor-Smart-Home-Kit-Remote-Alarm-Eco-System-p-1149705.html
[harmony]: https://www.logitech.com/products/harmony/harmony-companion.915-000240.html
[google_home]: https://store.google.com/magazine/compare_nest_speakers_displays
[xiaomi_curtains_track-shop]: https://tc.tradetracker.net/?c=15640&m=12&a=417111&r=&u=%2Fitem%2F4000170933022.html
[xiaomi_curtains_motor-shop]: https://tc.tradetracker.net/?c=15640&m=12&a=417111&r=&u=%2Fitem%2F10000142608978.html
[xiaomi_motion-shop]: https://www.banggood.com/bang/?tt=16956_12_417111_&r=%2FAqara-Zgbee-Wireless-Human-Body-PIR-Sensor-Smart-Home-Kit-Work-with-Gateway-APP-p-1177007.html
[xiaomi_switch-shop]: https://www.banggood.com/bang/?tt=16956_12_417111_&r=%2FAqara-Smart-Wireless-Switch-Smart-Home-Kit-Remote-Control-Work-with-Multifunctional-Gateway-From-Eco-System-p-1224921.html
[opple_switch-shop]: https://www.banggood.com/bang/?tt=16956_12_417111_&r=%2FAqara-x-OPPLE-Zigbee-3_0-Smart-Switch-HomeKit-Version-Wireless-Remote-Control-Wall-Light-Switch-Works-With-HomeKit-From-Eco-system-p-1590410.html
[bw_lt11-shop]: https://www.banggood.com/bang/?tt=16956_12_417111_&r=%2FBlitzWolf-BW-LT11-2M-or-5M-Smart-APP-Control-RGBW-LED-Light-Strip-Kit-Work-With-Amazon-Alexa-Google-Assistant-Christmas-Decorations-Clearance-Christmas-Lights-p-1390470.html
[bw_shp13-shop]: https://www.banggood.com/bang/?tt=16956_12_417111_&r=%2FBlitzWolf-BW-SHP13-ZgBee-3_0-Smart-WIFI-Socket-16A-EU-Plug-Electricity-Metering-APP-Remote-Controller-Timer-Work-with-Amazon-Alexa-Google-Home-p-1679992.html
[xiaomi_light_sensor-shop]: https://tc.tradetracker.net/?c=15640&m=12&a=417111&r=&u=%2Fitem%2F1005002866301114.html
[xiaomi_d1_1way_switch-shop]: https://www.banggood.com/bang/?tt=16956_12_417111_&r=%2FAqara-D1-1-Gang-or-2-Gang-Zigee-Smart-Wireless-Switch-APP-Remote-Control-Timer-Work-with-APP-HomeKit-p-1644321.html
[tint_E27]: https://zigbee.blakadder.com/Muller_Licht_404000.html
[glow]: https://github.com/klaasnicolaas/home-assistant-glow
[vindriktning]: https://www.ikea.com/nl/nl/p/vindriktning-luchtkwaliteitsensor-70498242/

<!-- Blogs -->
[sleep]: https://student-techlife.com/2019/05/16/hey-google-time-to-sleep/
[tv]: https://student-techlife.com/2019/06/02/my-tv-is-out-of-own-control/
[household]: https://student-techlife.com/2019/07/09/what-task-do-we-do-today/
