# Make a Student Home 🏠 -> Smart 💡

You will probably think, what is Home Assistant!? Well Home Assistant is a home automation platform running on Python 3. It is able to track and control all devices at home and offer a platform for automating control.

## Story

During student life there is often that one step that you will live on your own, I recently took that step but with an important goal. You could almost say *"I am a man with a mission"*, because I want to make the 25m2 that I have a **super smart house**.

&nbsp;

[![header](/extras/img/student-techlife-big.jpg "header")](https://student-techlife.com)

You can follow my entire adventure via **[student-techlife.com][techlife]**

This is by the way not my first [Home Assistant][home-assistant] configuration that you can find on Github.
Take also a look at this [configuration/repository][smarthome].

Use the code from this repo for your own Home Assistant environment, keep in mind that you can not always copy everything line by line. If you have any questions, feel free to ask them via email or socials!

## Status Information

| [![Home Assistant CI][homeassistantci-shield]][homeassistantci] | [![GitHub Last Commit][last-commit-shield]][commits]|
|:---:|:---:|
| This shows whether the configuration in this repo is valid | This shows how up to date this repo is |
| [![GitHub issues][issues-shield]][issues] | [![HA Version][ha-version-shield]][home-assistant] |
| I now use the issues as a TODO list | This is the version that I am currently running with Home Assistant |
| ![Project Maintenance][maintenance-shield] | [![GitHub Activity][commits-shield]][commits] |
| Is this repository still actively maintained? | Shows how active I am with this repo annually |
| [![GitHub Stars][stars-shield]][stars] | [![Buy Me A Fanta][paypal-shield]][paypal] |
| Please :star: this repo if you find it useful, like these people have | If this config was very helpfull, you could buy a fanta :tropical_drink: for me :smile: |

## Current House Configuration

Below is a list of all hardware in-house

**My host system:**

- [Intel Arches Canyon NUC6CAYH][intelnuc] -> Inside 8GB Ram, 120GB SSD
- Using the [Home Assistant Supervised installation][ha-supervised] on [Proxmox][proxmox] with Debian VM

**And I use the following hardware in my house:**

- [Conbee II][conbee] stick
- [Ikea tradfri][tradfri] lights - All types of fittings
- [Tint A60 806lm E27 RGBCCT Bulb][tint_E27]
- [Google Home][google_home]
- [Logitech Harmony Hub companion][harmony]
- Xiaomi Aqara [Temperature & Humidity Sensors][xiaomi_temp]
- Xiaomi Aqara [Window Door Sensors][xiaomi_door]
- Xiaomi Aqara [Motion Sensors][xiaomi_motion]
- Xiaomi Curtains with [track][xiaomi_curtains_track] and [motor][xiaomi_curtains_motor]
- Xiaomi Aqara [Smart switch][xiaomi_switch]
- Xiaomi Mijia [Smart Light Sensors][xiaomi_light_sensor]
- Xiaomi Aqara [D1 - 1 way switch][xiaomi_d1_1way_switch]
- Xiaomi Aqara [Opple 6 way switch][opple_switch]
- Blitzwolf [BW-LT11][bw-lt11] led strips (ESPHome flashed)
- Blitzwolf [BW-SHP13][bw-shp13] smart plugs
- There is more soon :)

---

## Blogs about my config

On my website I have already written a number of blogs that address specific parts of my config:

| Article | Is going about |
| -- | -- |
| [- Hey Google! Time to sleep 💤][sleep] | Using google assistant to activate certain scripts |
| [- My TV 📺 is out of (own) control][tv] | Operating your TV via Google Assistant or Home Assistant |
| [- What task do we do today? ✅][household] | Tracking household tasks with sensors and notifications |

## Needing Help or Questions?

If you have a specific question about my configuration send me a Private Message on the HA forum, my username over there is **[klaasnicolaas](https://community.home-assistant.io/u/klaasnicolaas)**. Or send me a message via Discord, my username is there **Doc Master Nicolaz**. If you have found something incorrect, please submit an issue here on Github and I will get it fixed.

## Links

- [Home Assistant Homepage](<https://home-assistant.io/>)
- [Home Assistant Forums](<https://community.home-assistant.io/>)
- [Home Assistant Discord Chat](<https://discord.gg/c5DvZ4e>)
- [Other Featured Home Assistant Configurations](<https://home-assistant.io/cookbook/>)
- [Home Assistant GitHub Source Repository](<https://github.com/home-assistant/home-assistant>)
- [Official Home Assistant Demo](<https://home-assistant.io/demo/>)

## License

MIT License

Copyright (c) 2019-2021 Klaas Schoute

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

[commits-shield]: https://img.shields.io/github/commit-activity/y/klaasnicolaas/student-homeassistant-config.svg
[last-commit-shield]: https://img.shields.io/github/last-commit/klaasnicolaas/Student-homeassistant-config.svg?color=blue&style=plasticr
[stars-shield]: https://img.shields.io/github/stars/klaasnicolaas/Student-homeassistant-config.svg
[ha-version-shield]: https://img.shields.io/badge/Home%20Assistant-2021.5.0-blue.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2021.svg
[homeassistantci-shield]: https://github.com/klaasnicolaas/Student-homeassistant-config/actions/workflows/home_assistant.yml/badge.svg
[paypal-shield]: https://img.shields.io/badge/BuyMeAFanta-Paypal-orange.svg
[issues-shield]: https://img.shields.io/github/issues/klaasnicolaas/Student-homeassistant-config.svg

[commits]: https://github.com/klaasnicolaas/Student-homeassistant-config/commits/master
[stars]: https://github.com/klaasnicolaas/Student-homeassistant-config/stargazers
[home-assistant]: https://home-assistant.io
[homeassistantci]: https://github.com/klaasnicolaas/Student-homeassistant-config/actions/workflows/home_assistant.yml
[paypal]: https://www.paypal.me/dexterfpv
[issues]: https://github.com/klaasnicolaas/Student-homeassistant-config/issues
[smarthome]: https://github.com/klaasnicolaas/Smarthome-homeassistant-config
[techlife]: https://student-techlife.com/
[ha-supervised]: https://github.com/home-assistant/supervised-installer
[intelnuc]: https://www.intel.com/content/www/us/en/products/boards-kits/nuc/kits/nuc6cayh.html
[conbee]: https://www.phoscon.de/en/conbee2
[ubuntu-server]: https://www.ubuntu.com/download/server
[tradfri]: https://www.ikea.com/nl/nl/catalog/products/80365270/
[proxmox]: https://www.proxmox.com/en/
[xiaomi_temp]: https://www.banggood.com/Original-Xiaomi-Aqara-Atmos-Version-Temperature-Humidity-Sensor-Smart-Home-Thermometer-Hygrometer-p-1148666.html?rmmds=myorder&cur_warehouse=GWTR
[xiaomi_door]: https://www.banggood.com/Original-Xiaomi-Aqara-Zig_Bee-Version-Window-Door-Sensor-Smart-Home-Kit-Remote-Alarm-p-1149705.html?rmmds=myorder&cur_warehouse=GWTR
[harmony]: https://www.logitech.com/nl-nl/product/harmony-companion
[google_home]: https://store.google.com/nl/product/google_home
[xiaomi_curtains_track]: https://nl.aliexpress.com/item/3-5-M-Xiaomi-Super-Stille-Elektrische-Gordijn-Track-voor-Mijia-Aqara-Motor-Automatische-Gordijn-Rails/32922713008.html?spm=a2g0s.9042311.0.0.1cf94c4d06j07R
[xiaomi_curtains_motor]: https://nl.aliexpress.com/item/Xiaomi-Aqara-Smart-Gordijn-Motor-Intelligente-Zigbee-Wifi-Voor-xiaomi-Smart-Home-Apparaat-Draadloze-Afstandsbediening-Via/32872671734.html?spm=a2g0s.9042311.0.0.1cf94c4d06j07R
[xiaomi_motion]: https://www.banggood.com/Original-Aqara-Zig_Bee-Wireless-Human-Body-PIR-Sensor-Smart-Home-Kit-From-Xiaomi-Eco-System-p-1177007.html
[xiaomi_switch]: https://www.banggood.com/Original-Xiaomi-Aqara-Smart-Wireless-Switch-Smart-Home-Kit-Remote-Control-Touch-Switch-p-1224921.html
[opple_switch]: https://www.banggood.com/Aqara-x-OPPLE-ZigBee-3_0-HomeKit-Version-Wireless-Smart-Switch-Work-With-HomeKit-From-Eco-system-p-1590410.html
[bw-lt11]: https://www.banggood.com/BlitzWolf-BW-LT11-2M5M-Smart-APP-Control-RGBW-LED-Light-Strip-Kit-Work-With-Amazon-Alexa-Google-Assistant-p-1390470.html?rmmds=search
[bw-shp13]: https://www.banggood.com/BlitzWolf-BW-SHP13-Zigbee-3_0-Smart-WIFI-Socket-16A-EU-Plug-Electricity-Metering-APP-Remote-Controller-Timer-Work-with-Amazon-Alexa-Google-Home-p-1679992.html
[xiaomi_light_sensor]: https://nl.aliexpress.com/item/4000476379615.html?spm=a2g0s.9042311.0.0.5cdf4c4dK3J0n2
[xiaomi_d1_1way_switch]: https://www.banggood.com/Aqara-D1-1-Gang-or-2-Gang-ZigBee-Smart-Wireless-Switch-APP-Remote-Control-Timer-Work-with-APP-HomeKit-p-1644321.html?rmmds=search&ID=6265280&cur_warehouse=CN
[tint_E27]: https://zigbee.blakadder.com/Muller_Licht_404000.html

[sleep]: https://student-techlife.com/2019/05/16/hey-google-time-to-sleep/
[tv]: https://student-techlife.com/2019/06/02/my-tv-is-out-of-own-control/
[household]: https://student-techlife.com/2019/07/09/what-task-do-we-do-today/