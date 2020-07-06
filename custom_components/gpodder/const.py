"""Constants for gPodder."""
# Base component constants
DOMAIN = "gpodder"
DOMAIN_DATA = f"{DOMAIN}_data"
VERSION = "1.1.0"
PLATFORMS = ["sensor"]
REQUIRED_FILES = ["const.py", "sensor.py"]

ISSUE_URL = "https://github.com/custom-components/gpodder/issues"

REQUEST_HEADERS = {
    "User-Agent": "homeassistant gpodder, report abuse to https://github.com/custom-components/gpodder",
}

STARTUP = f"""
-------------------------------------------------------------------
{DOMAIN}
Version: {VERSION}
This is a custom component
If you have any issues with this you need to open an issue here:
{ISSUE_URL}
-------------------------------------------------------------------
"""

# Icons
ICON = "mdi:headphones"

# Configuration
CONF_ENABLED = "enabled"
CONF_SENSOR = "sensor"
CONF_NAME = "name"
CONF_USERNAME = "username"
CONF_PASSWORD = "password"
CONF_DEVICE = "device"

# Defaults
DEFAULT_NAME = DOMAIN
