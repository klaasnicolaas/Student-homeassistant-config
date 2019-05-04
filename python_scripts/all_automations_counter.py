""" Loop through the automations groupand count how many there are """ 

all = 0
for entity_id in hass.states.entity_ids('automation'):
    state = hass.states.get(entity_id)
    if state.state != '':
        all = all + 1
        
""" Generate a sensor in Homeassistant to show the total number of automations """         

hass.states.set('sensor.automation_all', all, {'unit_of_measurement': 'Totaal' , 'friendly_name': 'Aantal automations' , 'icon': 'mdi:home-automation'})
