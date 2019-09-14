"""
Component to integrate with gPodder.

For more details about this component, please refer to
https://github.com/custom-components/gpodder
"""
import os
from datetime import timedelta
import logging
import voluptuous as vol
import homeassistant.helpers.config_validation as cv
from homeassistant.helpers import discovery
from homeassistant.util import Throttle
from .const import (
    DOMAIN_DATA,
    DOMAIN,
    ISSUE_URL,
    PLATFORMS,
    REQUIRED_FILES,
    STARTUP,
    URL,
    VERSION,
    CONF_SENSOR,
    CONF_ENABLED,
    CONF_NAME,
    CONF_USERNAME,
    CONF_PASSWORD,
    CONF_DEVICE,
    DEFAULT_NAME,
    REQUIREMENTS,
    REQUEST_HEADERS
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
                vol.Optional(CONF_SENSOR, default=[{}]): vol.All(cv.ensure_list, [SENSOR_SCHEMA]),
            }
        )
    },
    extra=vol.ALLOW_EXTRA,
)


async def async_setup(hass, config):
    """Set up this component."""
    from mygpoclient import api
    # Print startup message
    startup = STARTUP.format(name=DOMAIN, version=VERSION, issueurl=ISSUE_URL)
    _LOGGER.info(startup)

    # Check that all required files are present
    file_check = await check_files(hass)
    if not file_check:
        return False

    # Create DATA dict
    hass.data[DOMAIN_DATA] = {}
    hass.data[DOMAIN] = {}
    component_config = config[DOMAIN]

    # Create gPodder client
    hass.data[DOMAIN]["client"] = api.MygPodderClient(component_config[CONF_USERNAME], component_config[CONF_PASSWORD])

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
async def update_data(hass, device):
    """Update data."""
    try:
        urls = hass.data[DOMAIN]["client"].get_subscriptions(device)
    except Exception as error:  # pylint: disable=broad-except
        _LOGGER.error("Could not update data - %s", error)
    hass.data[DOMAIN_DATA] = update_using_feedservice(urls)


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
    import podcastparser
    from urllib.request import urlopen, Request

    podcasts = []

    for url in urls:
        try:
            feed = podcastparser.parse(url, urlopen(Request(url, headers=REQUEST_HEADERS)), 5)
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

    return podcasts


async def check_files(hass):
    """Return bool that indicates if all files are present."""
    # Verify that the user downloaded all files.
    base = "{}/custom_components/{}/".format(hass.config.path(), DOMAIN)
    missing = []
    for file in REQUIRED_FILES:
        fullpath = "{}{}".format(base, file)
        if not os.path.exists(fullpath):
            missing.append(file)

    if missing:
        _LOGGER.critical("The following files are missing: %s", str(missing))
        returnvalue = False
    else:
        returnvalue = True

    return returnvalue
