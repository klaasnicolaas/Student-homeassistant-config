import hashlib
import homeassistant.helpers.config_validation as cv
import voluptuous as vol
from gkeepapi.node import NodeType
from homeassistant.components.sensor import PLATFORM_SCHEMA, ENTITY_ID_FORMAT
from homeassistant.const import CONF_NAME, CONF_USERNAME, CONF_PASSWORD
from homeassistant.helpers.entity import Entity
from homeassistant.helpers.entity import async_generate_entity_id

DEFAULT_NAME = 'Google Keep'
CONF_TITLES = 'titles'
CONF_LABELS = 'labels'
CONF_PINNED = 'pinned'

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
    vol.Optional(CONF_NAME, default=DEFAULT_NAME): cv.string,
    vol.Required(CONF_USERNAME): cv.string,
    vol.Required(CONF_PASSWORD): cv.string,
    vol.Optional(CONF_TITLES, default=[]): cv.ensure_list,
    vol.Optional(CONF_LABELS, default=[]): cv.ensure_list,
    vol.Optional(CONF_PINNED, default=False): cv.boolean
})


def replace_leading_spaces(s):
    stripped = s.lstrip()
    return '&nbsp;' * 2 * (len(s) - len(stripped)) + stripped


def setup_platform(hass, config, add_entities, discovery_info=None):
    sensor_name = config.get(CONF_NAME)
    username = config.get(CONF_USERNAME)
    password = config.get(CONF_PASSWORD)
    titles = config.get(CONF_TITLES)
    labels = config.get(CONF_LABELS)
    pinned = config.get(CONF_PINNED)
    import gkeepapi
    keep = gkeepapi.Keep()
    login_success = keep.login(username, password)
    if not login_success:
        raise Exception('Invalid username or password')
    dev = []
    hash_value = hashlib.md5(str((username, str(titles), str(labels), pinned)).encode()).hexdigest()[-10:]
    uid = '{}_{}'.format(sensor_name, hash_value)
    entity_id = async_generate_entity_id(ENTITY_ID_FORMAT, uid, hass=hass)
    dev.append(GoogleKeepSensor(entity_id, sensor_name, username, keep, titles, labels, pinned))
    add_entities(dev, True)


class GoogleKeepSensor(Entity):
    def __init__(self, entity_id, name, username, keep, titles, labels, pinned):
        self.entity_id = entity_id
        self._name = name
        self._username = username
        self._titles = titles
        self._labels = labels
        self._pinned = pinned
        self._keep = keep
        self._notes = []
        self._state = None

    @property
    def name(self):
        return '{} - {}'.format(self._name, self._username)

    @property
    def state(self):
        return len(self._notes)

    @property
    def unit_of_measurement(self):
        return None

    @property
    def device_state_attributes(self):
        attr = dict()
        attr['notes'] = self._notes
        attr[CONF_TITLES] = self._titles
        attr[CONF_LABELS] = self._labels
        attr[CONF_PINNED] = self._pinned
        attr[CONF_USERNAME] = self._username
        return attr

    def update(self):
        self._keep.sync()
        if self._pinned:
            notes = self._keep.find(pinned=True)
        else:
            notes = self._keep.all()
        if len(self._labels) > 0:
            notes = list(
                filter(lambda n: set(self._labels).intersection(set(map(lambda l: str(l), n.labels.all()))), notes))
        if len(self._titles) > 0:
            notes = list(filter(lambda n: str(n.title) in self._titles, notes))
        self._notes = []
        for note in notes:
            note_type = note.type
            title = str(note.title)
            lines = list(map(lambda n: str(n), note.text.split("\n")))
            color = note.color.name
            checked = []
            unchecked = []
            children = []
            if note_type == NodeType.List:
                checked = list(map(lambda n: str(n), note.checked))
                unchecked = list(map(lambda n: str(n), note.unchecked))
                children = list(
                    map(lambda c: GoogleKeepSensor.map_node(c), filter(lambda c: not c.indented, note.items)))
            parsed_note = GoogleKeepSensor.make_note(str(note_type), title, lines, children, checked, unchecked, color)
            self._notes.append(parsed_note)

    @staticmethod
    def make_note(note_type, title, lines, children, checked, unchecked, color):
        note = dict()
        note["note_type"] = note_type
        note["title"] = title
        note["lines"] = lines
        note["children"] = children
        note["color"] = color
        note["checked"] = checked
        note["unchecked"] = unchecked
        return note

    @staticmethod
    def map_node(node):
        node_data = dict()
        node_data["checked"] = node.checked
        node_data["text"] = node.text
        node_data["children"] = list(map(lambda c: GoogleKeepSensor.map_node(c), node.subitems))
        return node_data
