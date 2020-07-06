"""
Component to integrate with gPodder.

For more details about this component, please refer to
https://github.com/custom-components/gpodder
"""
import logging
import os
from datetime import timedelta
from urllib.request import Request, urlopen

import homeassistant.helpers.config_validation as cv
import podcastparser
import voluptuous as vol
from homeassistant.helpers import discovery
from homeassistant.util import Throttle
from mygpoclient import api

from custom_components.gpodder.const import (
    CONF_DEVICE,
    CONF_ENABLED,
    CONF_NAME,
    CONF_PASSWORD,
    CONF_SENSOR,
    CONF_USERNAME,
    DEFAULT_NAME,
    DOMAIN,
    DOMAIN_DATA,
    PLATFORMS,
    REQUEST_HEADERS,
    REQUIRED_FILES,
    STARTUP,
)

MIN_TIME_BETWEEN_UPDATES = timedelta(minutes=30)

_LOGGER = logging.getLogger(__name__)

SENSOR_SCHEMA = vol.Schema(
    {
        vol.Optional(CONF_ENABLED, default=True): cv.boolean,
        vol.Optional(CONF_NAME, default=DEFAULT_NAME): cv.string,
        vol.Optional(CONF_DEVICE, default="homeassistant"): cv.string,
    }
)

CONFIG_SCHEMA = vol.Schema(
    {
        DOMAIN: vol.Schema(
            {
                vol.Required(CONF_USERNAME): cv.string,
                vol.Required(CONF_PASSWORD): cv.string,
                vol.Optional(CONF_SENSOR, default=[{}]): vol.All(
                    cv.ensure_list, [SENSOR_SCHEMA]
                ),
            }
        )
    },
    extra=vol.ALLOW_EXTRA,
)


def setup(hass, config):
    """Set up this component."""

    # Print startup message
    _LOGGER.info(STARTUP)

    # Check that all required files are present
    file_check = check_files(hass)
    if not file_check:
        return False

    # Create DATA dict
    hass.data[DOMAIN_DATA] = {}
    hass.data[DOMAIN] = {}
    component_config = config[DOMAIN]

    # Create gPodder client
    hass.data[DOMAIN]["client"] = api.MygPodderClient(
        component_config[CONF_USERNAME], component_config[CONF_PASSWORD]
    )

    # Load platforms
    for platform in PLATFORMS:
        # Get platform specific configuration
        platform_config = component_config.get(platform, {})

        if not platform_config:
            continue

        for entry in platform_config:
            entry_config = entry

            # If entry is not enabled, skip.
            if not entry_config[CONF_ENABLED]:
                continue

            hass.async_create_task(
                discovery.async_load_platform(
                    hass, platform, DOMAIN, entry_config, config
                )
            )
    return True


@Throttle(MIN_TIME_BETWEEN_UPDATES)
def update_data(hass, device):
    """Update data."""
    try:
        urls = hass.data[DOMAIN]["client"].get_subscriptions(device)
        _LOGGER.debug(f"{len(urls)} urls for device '{device}'")
        hass.data[DOMAIN_DATA] = update_using_feedservice(urls)
    except Exception as error:  # pylint: disable=broad-except
        _LOGGER.error(f"Could not update data for device '{device}' - {error}")


def parse_entry(entry):
    download_url = entry["enclosures"][0]["url"]
    return {
        "title": entry["title"],
        "description": entry.get("description", ""),
        "url": download_url,
        "mime_type": entry["enclosures"][0]["mime_type"],
        "guid": entry.get("guid", download_url),
        "link": entry.get("link", ""),
        "published": entry.get("published", 0),
        "total_time": entry.get("total_time", 0),
    }


def update_using_feedservice(urls):
    podcasts = []

    for url in urls:
        try:
            feed = podcastparser.parse(
                url, urlopen(Request(url, headers=REQUEST_HEADERS)), 5
            )
        except Exception as error:  # pylint: disable=broad-except
            _LOGGER.error("Could not update %s - %s", url, error)
            feed = None

        if feed is None:
            _LOGGER.info("Feed not updated: %s", url)
            continue

        # Handle permanent redirects
        if feed.get("new_location", False):
            new_url = feed["new_location"]
            _LOGGER.info("Redirect %s => %s", url, new_url)
            url = new_url

        # Error handling
        if feed.get("errors", False):
            _LOGGER.error("Error parsing feed: %s", repr(feed["errors"]))
            continue

        # Update per-podcast metadata
        podcast = {
            "title": feed.get("title", ""),
            "link": feed.get("link", url),
            "description": feed.get("description", ""),
            "cover_url": feed.get("logo", ""),
            "episodes": [parse_entry(entry) for entry in feed["episodes"]],
        }

        podcasts.append(podcast)

    _LOGGER.debug(f"Podcasts: {podcasts}")
    return podcasts


def check_files(hass):
    """Return bool that indicates if all files are present."""
    # Verify that the user downloaded all files.
    base = f"{hass.config.path()}/custom_components/{DOMAIN}/"
    missing = []
    for file in REQUIRED_FILES:
        fullpath = f"{base}{file}"
        if not os.path.exists(fullpath):
            missing.append(file)

    if missing:
        _LOGGER.critical(f"The following files are missing: {str(missing)}")
        returnvalue = False
    else:
        returnvalue = True

    return returnvalue
