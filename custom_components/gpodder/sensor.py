"""Sensor platform for gPodder."""
from homeassistant.helpers.entity import Entity
from . import update_data
from .const import DOMAIN_DATA, ICON, CONF_NAME, CONF_DEVICE


async def async_setup_platform(
    hass, config, async_add_entities, discovery_info=None
):  # pylint: disable=unused-argument
    """Setup sensor platform."""
    async_add_entities([GpodderSensor(hass, discovery_info)], True)


class GpodderSensor(Entity):
    """gPodder Sensor class."""

    def __init__(self, hass, config):
        self.hass = hass
        self.attr = {}
        self._state = None
        self._name = config[CONF_NAME]
        self._device = config[CONF_DEVICE]

    async def async_update(self):
        """Update the sensor."""
        # Send update "signal" to the component
        await update_data(self.hass, self._device)

        # Get new data (if any)
        updated = self.hass.data[DOMAIN_DATA]
        self._state = len(updated)

        # Set/update attributes
        self.attr["podcasts"] = updated

    @property
    def name(self):
        """Return the name of the sensor."""
        return self._name

    @property
    def state(self):
        """Return the state of the sensor."""
        return self._state

    @property
    def icon(self):
        """Return the icon of the sensor."""
        return ICON

    @property
    def device_state_attributes(self):
        """Return the state attributes."""
        return self.attr
