from datetime import datetime, timedelta
import logging
import operator
import json
import itertools
import http.client

import voluptuous as vol

from homeassistant.components.sensor import PLATFORM_SCHEMA
from homeassistant.const import (CONF_NAME, STATE_UNKNOWN)
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.exceptions import PlatformNotReady
from homeassistant.helpers.entity import Entity
from homeassistant.util import Throttle

import homeassistant.helpers.config_validation as cv

__version__ = '1.4.2'

_LOGGER = logging.getLogger(__name__)
_RESOURCE = 'v0.ovapi.nl'

CONF_STOP_CODE = 'stop_code'
CONF_TIMING_POINT_CODE = 'timing_point_code'
CONF_ROUTE_CODE = 'route_code'
CONF_SHOW_FUTURE_DEPARTURES = 'show_future_departures'
CONF_LINE_FILTER = 'line_filter'
CONF_DATE_FORMAT = 'date_format'
CONF_CREDITS = 'Data provided by v0.ovapi.nl'

DEFAULT_NAME = 'Line info'
DEFAULT_DATE_FORMAT = "%y-%m-%dT%H:%M:%S"
DEFAULT_SHOW_FUTURE_DEPARTURES = 0

ATTR_NAME = 'name'
ATTR_STOP_CODE = 'stop_code'
ATTR_ROUTE_CODE = 'route_code'
ATTR_TIMING_POINT_CODE = 'timing_point_code'
ATTR_LINE_FILTER = 'line_filter'
ATTR_ICON = 'icon'
ATTR_DESTINATION = 'destination'
ATTR_PROVIDER = 'provider'
ATTR_TRANSPORT_TYPE = 'transport_type'
ATTR_LINE_NAME = 'line_name'
ATTR_STOP_NAME = 'stop_name'
ATTR_DEPARTURE = 'departure'
ATTR_DELAY = 'delay'
ATTR_DEPARTURES = 'departures'
ATTR_UPDATE_CYCLE = 'update_cycle'
ATTR_CREDITS = 'credits'

MIN_TIME_BETWEEN_UPDATES = timedelta(seconds=60)

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
    vol.Optional(CONF_NAME, default=DEFAULT_NAME): cv.string,
    vol.Optional(CONF_STOP_CODE, default=CONF_STOP_CODE): cv.string,
    vol.Optional(CONF_TIMING_POINT_CODE, default=CONF_TIMING_POINT_CODE): cv.string,
    vol.Optional(CONF_ROUTE_CODE, default=CONF_ROUTE_CODE): cv.string,
    vol.Optional(CONF_LINE_FILTER, default=CONF_LINE_FILTER): cv.string,
    vol.Optional(CONF_SHOW_FUTURE_DEPARTURES, default=DEFAULT_SHOW_FUTURE_DEPARTURES): cv.positive_int,
    vol.Optional(CONF_DATE_FORMAT, default=DEFAULT_DATE_FORMAT): cv.string,
})


def setup_platform(hass, config, add_entities, discovery_info=None):

    name = config.get(CONF_NAME)
    stop_code = config.get(CONF_STOP_CODE)
    timing_point_code = config.get(CONF_TIMING_POINT_CODE)
    route_code = config.get(CONF_ROUTE_CODE)
    future_departures = config.get(CONF_SHOW_FUTURE_DEPARTURES)
    line_filter = config.get(CONF_LINE_FILTER)

    ov_api = OvApiData(stop_code, timing_point_code)

    ov_api.update()

    if ov_api is None:
        raise PlatformNotReady

    sensors = []

    for counter in range(future_departures + 1):
        if counter == 0:
            sensors.append(OvApiSensor(ov_api, name, stop_code, timing_point_code, route_code, line_filter, counter))
        else:
            sensors.append(OvApiSensor(ov_api, (name + "_future_" + str(counter)), stop_code, timing_point_code,
                                       route_code, line_filter, counter))

    add_entities(sensors, True)


class OvApiSensor(Entity):
    def __init__(self, ov_api, name, stop_code, timing_point_code, route_code, line_filter, counter):
        self._json_data = ov_api
        self._name = name
        self._stop_code = stop_code
        self._timing_point_code = timing_point_code
        self._route_code = route_code
        self._line_filter = line_filter
        self._sensor_number = counter
        self._icon = None
        self._destination = None
        self._provider = None
        self._transport_type = None
        self._line_name = None
        self._stop_name = None
        self._departure = None
        self._delay = None
        self._departures = None
        self._state = None

    @property
    def name(self):
        """Return the name of the sensor."""
        return self._name

    @property
    def icon(self):
        return self._icon

    @property
    def destination(self):
        return self._destination

    @property
    def provider(self):
        return self._provider

    @property
    def transport_type(self):
        return self._transport_type

    @property
    def line_name(self):
        return self._line_name

    @property
    def stop_name(self):
        return self._stop_name

    @property
    def departure(self):
        return self._departure

    @property
    def delay(self):
        return self._delay

    @property
    def departures(self):
        return self._departures

    @property
    def state(self):
        return self._state

    @property
    def device_state_attributes(self):
        """Return the state attributes."""
        if self._line_filter == ATTR_LINE_FILTER:
            filter = None
        else:
            filter = self._line_filter
        if self._sensor_number == 0:
            return{
                ATTR_NAME: self._name,
                ATTR_STOP_CODE: self._stop_code,
                ATTR_TIMING_POINT_CODE: self._timing_point_code,
                ATTR_ROUTE_CODE: self._route_code,
                ATTR_LINE_FILTER: filter,
                ATTR_ICON: self._icon,
                ATTR_DESTINATION: self._destination,
                ATTR_PROVIDER: self._provider,
                ATTR_TRANSPORT_TYPE: self._transport_type,
                ATTR_LINE_NAME: self._line_name,
                ATTR_STOP_NAME: self._stop_name,
                ATTR_DEPARTURE: self._departure,
                ATTR_DELAY: self._delay,
                ATTR_DEPARTURES: self._departures,
                ATTR_UPDATE_CYCLE: str(MIN_TIME_BETWEEN_UPDATES.seconds) + ' seconds',
                ATTR_CREDITS: CONF_CREDITS
            }
        else:
            return {
                ATTR_NAME: self._name,
                ATTR_STOP_CODE: self._stop_code,
                ATTR_TIMING_POINT_CODE: self._timing_point_code,
                ATTR_ROUTE_CODE: self._route_code,
                ATTR_LINE_FILTER: filter,
                ATTR_ICON: self._icon,
                ATTR_DESTINATION: self._destination,
                ATTR_PROVIDER: self._provider,
                ATTR_TRANSPORT_TYPE: self._transport_type,
                ATTR_LINE_NAME: self._line_name,
                ATTR_STOP_NAME: self._stop_name,
                ATTR_DEPARTURE: self._departure,
                ATTR_DELAY: self._delay,
                ATTR_UPDATE_CYCLE: str(MIN_TIME_BETWEEN_UPDATES.seconds) + ' seconds',
                ATTR_CREDITS: CONF_CREDITS
            }
    def update(self):
        """Get the latest data from the OvApi."""
        self._json_data.update()

        data = json.loads(self._json_data.result)

        stops = {}

        if self._stop_code != CONF_STOP_CODE and self._stop_code is not None:
            self._timing_point_code = None
            stops = itertools.islice(data[self._stop_code][self._route_code]['Passes'].values(), 50)
        elif self._timing_point_code != CONF_TIMING_POINT_CODE and self._timing_point_code is not None:
            self._stop_code = None
            stops = itertools.islice(data[self._timing_point_code]['Passes'].values(), 50)
        else:
            _LOGGER.error("Impossible to get data from OvApi, no stop code and no timing point code!")

        stops_list = []
        for stop in stops:
            if self._line_filter == ATTR_LINE_FILTER or stop['LinePublicNumber'] in self._line_filter.split(", "):
                target_departure_time = datetime.strptime(stop['TargetDepartureTime'], "%Y-%m-%dT%H:%M:%S")
                expected_arrival_time = datetime.strptime(stop['ExpectedDepartureTime'], "%Y-%m-%dT%H:%M:%S")
                calculate_delay = expected_arrival_time - target_departure_time
                delay = round(calculate_delay.seconds / 60)

                stops_item = {
                    "destination": stop['DestinationName50'],
                    "provider": stop['DataOwnerCode'],
                    "transport_type": stop['TransportType'].title(),
                    "line_name": stop['TransportType'].title() + ' ' + stop['LinePublicNumber'] + ' - ' +
                                 stop['DestinationName50'],
                    "stop_name": stop['TimingPointName'],
                    "TargetDepartureTime": target_departure_time.time(),
                    "ExpectedArrivalTime": expected_arrival_time.time(),
                    "Delay": delay
                }

                stops_list.append(stops_item)

        if data is None:
            self._departure = STATE_UNKNOWN
            self._delay = STATE_UNKNOWN
            self._departures = STATE_UNKNOWN
            self._state = STATE_UNKNOWN
        else:
            if self._sensor_number >= len(stops_list):
                self._departure = STATE_UNKNOWN
                self._delay = STATE_UNKNOWN
                self._departures = STATE_UNKNOWN
                self._state = STATE_UNKNOWN
            else:
                stops_list.sort(key=operator.itemgetter('TargetDepartureTime'))

                self._destination = stops_list[self._sensor_number]["destination"]
                self._provider = stops_list[self._sensor_number]["provider"]
                self._transport_type = stops_list[self._sensor_number]["transport_type"]
                self._line_name = stops_list[self._sensor_number]["line_name"]
                self._stop_name = stops_list[self._sensor_number]["stop_name"]

                self._departure = stops_list[self._sensor_number]["TargetDepartureTime"].strftime('%H:%M')
                self._delay = str(stops_list[self._sensor_number]["Delay"])

                if self._sensor_number == 0:
                    departure_list = []
                    next_stops_list = stops_list[1:]

                    for counter, stop in enumerate(next_stops_list):
                        if counter <= 11:
                            if next_stops_list[counter]["Delay"] == 0:
                                departure_list.append(next_stops_list[counter]["TargetDepartureTime"].strftime('%H:%M'))
                            else:
                                departure_list.append(next_stops_list[counter]["TargetDepartureTime"].strftime('%H:%M') +
                                                      " + " + str(next_stops_list[counter]["Delay"]) + "m")
                    self._departures = departure_list

                    if stops_list[self._sensor_number]["Delay"] == 0:
                        self._state = self._departure
                    else:
                        self._state = stops_list[self._sensor_number]["ExpectedArrivalTime"].strftime('%H:%M')
                else:
                    if stops_list[self._sensor_number]["Delay"] == 0:
                        self._state = self._departure
                    else:
                        self._state = self._departure + ' +' + str(self._delay) + 'm'

        if self._transport_type == "Tram":
            self._icon = 'mdi:train'
        if self._transport_type == "Bus":
            self._icon = 'mdi:bus'
        if self._transport_type == "Metro":
            self._icon = 'mdi:subway-variant'


class OvApiData:
    def __init__(self, stop_code, timing_point_code):
        self._resource = _RESOURCE
        self._stop_code = stop_code
        self._timing_point_code = timing_point_code
        self.result = ""
        self._headers = {
            'cache-control': "no-cache",
            'accept': "application/json"
        }

    @Throttle(MIN_TIME_BETWEEN_UPDATES)
    def update(self):
        if self._stop_code == CONF_STOP_CODE and self._timing_point_code == CONF_TIMING_POINT_CODE:
            _LOGGER.error("Impossible to get data from OvApi, no stop code and no timing point code.")
            self.result = "Impossible to get data from OvApi, no stop code and no timing point code."
        elif self._stop_code != CONF_STOP_CODE:
            try:
                response = http.client.HTTPConnection(self._resource, timeout=1)
                response.request("GET", "/stopareacode/" + self._stop_code, headers = self._headers)
                result = response.getresponse()
                self.result = result.read().decode('utf-8')
            except http.client.HTTPException:
                _LOGGER.error("Impossible to get data from OvApi using stop code.")
                self.result = "Impossible to get data from OvApi using stop code."
        else:
            try:
                response = http.client.HTTPConnection(self._resource, timeout=1)
                response.request("GET", "/tpc/" + self._timing_point_code, headers = self._headers)
                result = response.getresponse()
                self.result = result.read().decode('utf-8')
            except http.client.HTTPException:
                _LOGGER.error("Impossible to get data from OvApi using timing point code.")
                self.result = "Impossible to get data from OvApi using timing point code."
