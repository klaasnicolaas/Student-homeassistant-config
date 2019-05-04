""" Loop through all automations and count how many are 'on' """ 

on = 0
for entity_id in hass.states.entity_ids('automation'):
    state = hass.states.get(entity_id)
    if state.state == 'on':
        on = on + 1
        
""" Generate a sensor in Homeassistant to show the number of 'on' automations """          

hass.states.set('sensor.automation_on', on, {'unit_of_measurement': 'Aan' , 'friendly_name': 'Ingeschakelde automations' , 'icon': 'mdi:home-automation'})
