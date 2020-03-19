secondaryinfo-entity-row
========================
Custom entity row for [Home Assistant](https://home-assistant.io), providing additional types of data to be displayed in the secondary info sections of the Lovelace Entities card.

## Prerequisites
- Home Assistant >= 0.88 (last tested against 0.104.3) 
- Thomas Lovén’s [card-tools.js](https://github.com/thomasloven/lovelace-card-tools) >= 2.0 (tested against 2.0, *49f34cd*)

## Installation Instructions
#### 1) Install the latest Card Tools via HACS
Card-tools is available as a plugin in the default community store

#### 2) Install Secondary Info Entity Row
Use [HACS](https://hacs.xyz) or follow this [guide](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins)

```yaml
resources:
  url: /local/secondaryinfo-entity-row.js
  type: module
```

## Options
The standard [Lovelace configuration for entities](https://www.home-assistant.io/lovelace/entities/) remains valid, with the exception of `secondary_info`.

`secondary_info` should be a string value, enclosed in double-quotes, which supports the [parseTemplate syntax defined in card-tools.js](https://github.com/thomasloven/lovelace-card-tools).  Per the documentation:

```
Two things are important:

- Template must start with [[<space> and end with <space>]]
- This is not in any way the same kind of template as used in the Home Assistant configuration

The templates are parsed by reading one step at a time from the `hass.states` object.
Thus, the first part must be an entity with domain and id, e.g. `light.bed_light`, `media_player.bedroom` etc.
Next is one of:

- entity_id
- state
- attributes.<attribute>
- last_changed
- last_updated
```

Also see details of the new conditional syntax at [useful-markdown-card](https://github.com/thomasloven/lovelace-useful-markdown-card#if):

```
if

Syntax: [[ if(<condition>, <then>, <else>) ]] Simply put, if <condition> is satisfied, the template will be replaced with <then>, otherwise it will be replaced with <else>.

Both <then> and <else> can in turn be <template> expressions, and <else> can even be another if(!).

Conditions are in the form <left> <comparison> <right> where <left> and <right> are <template>, strings or numeric values.

<comparison> is one of ==, !=, <, >, <= or >=.

```
## Examples

```yaml
type: entities
title: Custom Secondary Info
entities:
- entity: sun.sun
  name: Entity ID with wrapped in tag
  type: "custom:secondaryinfo-entity-row"
  secondary_info: "<b style='color:red'>[[ sun.sun.entity_id ]]</b>"
  
- entity: sun.sun
  name: Absolute time for last-changed
  type: "custom:secondaryinfo-entity-row"
  secondary_info: "[[ sun.sun.last_changed ]]"
  
- entity: sun.sun
  name: Static text
  type: "custom:secondaryinfo-entity-row"
  secondary_info: "This is the entity row for the Sun"

- entity: sun.sun
  name: Entity attribute
  type: "custom:secondaryinfo-entity-row"
  secondary_info: "Next Dawn: [[ sun.sun.attributes.next_dawn ]]"
  
- entity: sun.sun
  name: Templated entity object
  type: "custom:secondaryinfo-entity-row"
  secondary_info:  "Next Dawn: [[ {entity}.attributes.next_dawn ]]"
  
- entity: sun.sun
  name: Conditional template
  type: "custom:secondaryinfo-entity-row"
  secondary_info: '[[ if(sun.sun.attributes.elevation < 0, "Below", "Above") ]] the horizon'
```
<img alt="example" src="https://user-images.githubusercontent.com/5458030/54823057-0a5cfd00-4c7d-11e9-9251-b539eb423c0d.png" width="400">

## Changelog
*0.4*
- Compatible with latest card-tools
- Updated README with HACS install info

*0.3.1*
- Replaced deprecated card-tools functions
- Added example image to GitHub

*0.3*
- The configured entity object can now be referenced as `{entity}` inside a template.  This enables compatibility with dynamic entity list generators such as [auto-entities](https://github.com/thomasloven/lovelace-auto-entities).
- Requires card-tools 0.4, which introduces conditional statements in the template.  See [useful-markdown-card](https://github.com/thomasloven/lovelace-useful-markdown-card#if).
- Examples updated

*0.2*
- Compatibility with Home Assistant 0.88

*0.1.1*
- Add custom_cards.json for custom_updater integration

*0.1*
- New release based on card-tools
