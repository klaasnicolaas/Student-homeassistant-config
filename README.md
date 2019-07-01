# Make a Student Home 🏠 -> Smart 💡

You will probably think, what is Home Assistant!? Well Home Assistant is a home automation platform running on Python 3. It is able to track and control all devices at home and offer a platform for automating control.

## Story

During student life there is often that one step that you will live on your own, I recently took that step but with an important goal. You could almost say *"I am a man with a mission"*, because I want to make the 25m2 that I have a **super smart house**.

&nbsp;

[![header](/extras/img/student-techlife-big.jpg "header")](https://student-techlife.com)

You can follow my entire adventure via **[student-techlife.com][techlife]**

This is by the way not my first [Home Assistant][home-assistant] configuration that you find on Github, also take a look at [this repository][smarthome] with a much larger configuration.

Be free to use the code from this repo for your own Home Assistant environment, keep in mind that you can not always copy everything line by line. If you can not get out, you can always contact me.

## Status Information

| [![Gitlab CI][gitlabci-shield]][gitlabci] | [![GitHub Last Commit][last-commit-shield]][commits]|
|:---:|:---:|
| This shows whether the configuration in this repo is valid | This shows how up to date this repo is |
| [![GitHub issues][issues-shield]][issues] | [![HA Version][ha-version-shield]][home-assistant] |
| I now use the issues as a TODO list | This is the version that I am currently running with Home Assistant |
| [![Uptime Robot status][uptime-shield]][uptime-robot] | [![GitHub Activity][commits-shield]][commits] |
| I use Uptime Robot to monitor my instance from outside in case of crashes | Shows how active I am with this repo annually |
| [![GitHub Stars][stars-shield]][stars] | [![Buy Me A Fanta][paypal-shield]][paypal] |
| Please :star: this repo if you find it useful, like these people have | If this config was very helpfull, you could buy a fanta :tropical_drink: for me :smile: |

## Current House Configuration

Below is a list of all hardware in-house

**My host system:**

- [Intel Arches Canyon NUC6CAYH][intelnuc] -> Inside 8GB Ram, 120GB SSD and running [Ubuntu Server LTS][ubuntu-server]
- Using the [Hass.io installation][hassio]

**And I use the following hardware in my house:**

- [Conbee II][conbee] stick
- [Ikea tradfri][tradfri] lights - All types of fittings
- [Google Home][google_home]
- [Broadlink RM Pro][broadlink]
- Xiaomi [Temperature & Humidity Sensors][xiaomi_temp]
- Xiaomi [Window Door Sensors][xiaomi_door]
- Xiaomi Curtains with [track][xiaomi_curtains_track] and [motor][xiaomi_curtains_motor]
- There is more soon :)

---

## Needing Help or Questions?

If you have a specific question about my configuration send me a Private Message on the HA forum, my username over there is **[Klaasnicolaas](https://community.home-assistant.io/u/klaasnicolaas)**. Or send me a message via Discord, my username is there **Mister Nicolaz**. If you have found something incorrect, please submit an issue here on Github and I will get it fixed.

## Links

- [Home Assistant Homepage](<https://home-assistant.io/>)
- [Home Assistant Forums](<https://community.home-assistant.io/>)
- [Home Assistant Discord Chat](<https://discord.gg/c5DvZ4e>)
- [Other Featured Home Assistant Configurations](<https://home-assistant.io/cookbook/>)
- [Home Assistant GitHub Source Repository](<https://github.com/home-assistant/home-assistant>)
- [Official Home Assistant Demo](<https://home-assistant.io/demo/>)

## License

MIT License

Copyright (c) 2019 Klaas Schoute

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
[ha-version-shield]: https://img.shields.io/badge/Home%20Assistant-0.95.4-blue.svg
[uptime-shield]: https://img.shields.io/uptimerobot/status/m782530846-8e789b9650b16e61fb717d28.svg
[gitlabci-shield]: https://gitlab.com/klaasnicolaas/Student-homeassistant-config/badges/master/pipeline.svg
[paypal-shield]: https://img.shields.io/badge/BuyMeAFanta-Paypal-orange.svg
[issues-shield]: https://img.shields.io/github/issues/klaasnicolaas/Student-homeassistant-config.svg

[commits]: https://github.com/klaasnicolaas/Student-homeassistant-config/commits/master
[stars]: https://github.com/klaasnicolaas/Student-homeassistant-config/stargazers
[home-assistant]: https://home-assistant.io
[uptime-robot]: https://uptimerobot.com
[gitlabci]: https://gitlab.com/klaasnicolaas/Student-homeassistant-config/pipelines
[paypal]: https://www.paypal.me/dexterfpv
[issues]: https://github.com/klaasnicolaas/Student-homeassistant-config/issues
[smarthome]: https://github.com/klaasnicolaas/Smarthome-homeassistant-config
[techlife]: https://student-techlife.com/
[hassio]: https://www.home-assistant.io/hassio/
[intelnuc]: https://www.intel.com/content/www/us/en/products/boards-kits/nuc/kits/nuc6cayh.html
[conbee]: https://www.phoscon.de/en/conbee2
[ubuntu-server]: https://www.ubuntu.com/download/server
[tradfri]: https://www.ikea.com/nl/nl/catalog/products/80365270/
[xiaomi_temp]: https://www.banggood.com/Original-Xiaomi-Aqara-Atmos-Version-Temperature-Humidity-Sensor-Smart-Home-Thermometer-Hygrometer-p-1148666.html?rmmds=myorder&cur_warehouse=GWTR
[xiaomi_door]: https://www.banggood.com/Original-Xiaomi-Aqara-Zig_Bee-Version-Window-Door-Sensor-Smart-Home-Kit-Remote-Alarm-p-1149705.html?rmmds=myorder&cur_warehouse=GWTR
[broadlink]: https://www.banggood.com/Broadlink-RM-Pro-Smart-Home-Automation-Phone-Wireless-Remote-Universal-Controller-p-942667.html?rmmds=myorder&cur_warehouse=CN
[google_home]: https://store.google.com/nl/product/google_home
[xiaomi_curtains_track]: https://nl.aliexpress.com/item/3-5-M-Xiaomi-Super-Stille-Elektrische-Gordijn-Track-voor-Mijia-Aqara-Motor-Automatische-Gordijn-Rails/32922713008.html?spm=a2g0s.9042311.0.0.1cf94c4d06j07R
[xiaomi_curtains_motor]: https://nl.aliexpress.com/item/Xiaomi-Aqara-Smart-Gordijn-Motor-Intelligente-Zigbee-Wifi-Voor-xiaomi-Smart-Home-Apparaat-Draadloze-Afstandsbediening-Via/32872671734.html?spm=a2g0s.9042311.0.0.1cf94c4d06j07R