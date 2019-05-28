"""Constants for gPodder."""
# Base component constants
DOMAIN = "gpodder"
DOMAIN_DATA = "{}_data".format(DOMAIN)
VERSION = "1.0.4"
PLATFORMS = ["sensor"]
REQUIRED_FILES = ["const.py", "sensor.py"]
REQUIREMENTS = ["mygpoclient==1.8", "podcastparser==0.6.4"]
ISSUE_URL = "https://github.com/custom-components/gpodder/issues"

STARTUP = """
-------------------------------------------------------------------
{name}
Version: {version}
This is a custom component
If you have any issues with this you need to open an issue here:
{issueurl}
-------------------------------------------------------------------
"""

# Operational
URL = "https://jsonplaceholder.typicode.com/todos/1"

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
