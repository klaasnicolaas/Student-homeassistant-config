"""Binary sensor platform for breaking_changes."""
from datetime import timedelta
from homeassistant.components.binary_sensor import BinarySensorDevice
from . import update_data
from .const import DOMAIN_DATA

SCAN_INTERVAL = timedelta(seconds=10)


async def async_setup_platform(
    hass, config, async_add_entities, discovery_info=None
):  # pylint: disable=unused-argument
    """Setup binary_sensor platform."""
    async_add_entities([BreakingChangesBinarySensor(hass, discovery_info)], True)


class BreakingChangesBinarySensor(BinarySensorDevice):
    """breaking_changes binary_sensor class."""

    def __init__(self, hass, config):
        self.hass = hass
        self._status = False
        self._name = config["name"]

    async def async_update(self):
        """Update the binary_sensor."""
        # Send update "signal" to the component
        await update_data(self.hass)

        # Get new data (if any)
        updated = self.hass.data[DOMAIN_DATA]

        self._status = len(updated.get("potential", [])) > 1

    @property
    def name(self):
        """Return the name of the binary_sensor."""
        return self._name

    @property
    def is_on(self):
        """Return true if the binary_sensor is on."""
        return self._status
