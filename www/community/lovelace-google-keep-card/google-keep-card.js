var LitElement = LitElement || Object.getPrototypeOf(customElements.get("home-assistant-main"));
var html = LitElement.prototype.html;

const themeLight = "light";
const themeDark = "dark";
const themes = [themeLight, themeDark];
const colors = {
    'White': ['#ffffff', '#2d2e30'],
    'Red': ['#f28b82', '#5c2b29'],
    'Orange': ['#fbbc04', '#614a19'],
    'Yellow': ['#fff475', '#635d19'],
    'Green': ['#ccff90', '#345920'],
    'Teal': ['#a7ffeb', '#16504b'],
    'Blue': ['#cbf0f8', '#2d555e'],
    'DarkBlue': ['#aecbfa', '#1e3a5f'],
    'Purple': ['#d7aefb', '#42275e'],
    'Pink': ['#fdcfe8', '#5b2245'],
    'Brown': ['#e6c9a8', '#442f19'],
    'Grey': ['#e8eaed', '#3c3f43'],
};
const textColors = {
    "light": "#000000",
    "dark": "#ffffff"
};
const checkedColors = {
    "light": "rgb(95, 99, 104)",
    "dark": "rgb(154,160,166)"
};

class GoogleKeepCard extends LitElement {

    getColor(colorName) {
        const hex = colors[colorName][themes.indexOf(this._theme)];
        const {r, g, b} = GoogleKeepCard.hexToRgb(hex);
        return `rgba(${r}, ${g}, ${b}, ${this._alpha})`;
    }

    getTextColor() {
        return textColors[this._theme];
    }

    getCheckedColor() {
        return checkedColors[this._theme];
    }

    constructor() {
        super();
    }

    static get properties() {
        return {
            _hass: {},
            _config: {},
        };
    }

    set hass(hass) {
        this._hass = hass;
    }

    setConfig(config) {
        if (!config.entity) {
            throw new Error("Missing configuration: entity");
        }
        if (config.theme && !themes.includes(config.theme)) {
            throw new Error("Invalid theme");
        }
        if (config.alpha && (config.alpha > 1 || config.alpha < 0)) {
            throw new Error("Invalid alpha value");
        }
        if (!config.show) {
            throw new Error("Missing configuration: show");
        }
        const {show} = config;
        if (!Array.isArray(show) || !show.includes('unchecked') && !show.includes('checked')) {
            throw new Error("Missing configuration values for key: show");
        }
        this._theme = config.theme || themeLight;
        this._alpha = config.alpha || 1;
        this._config = config;
    }

    shouldUpdate(changedProps) {
        if (changedProps.has("_config")) {
            return true;
        }
        const oldHass = changedProps.get("_hass");
        if (oldHass) {
            const {entity} = this._config;
            return (
                oldHass.states[entity] !== this._hass.states[entity]
                || oldHass.states[entity].attributes !== this._hass.states[entity].attributes
            );
        }
        return true;
    }

    render() {
        const {notes} = this._hass.states[this._config.entity].attributes;
        if (!notes.length && this._config.hide_if_empty) {
            return html``;
        }
        const title = this._config.title ? html`<div class="card-header" style="padding: 8px 0 16px 0;"><div class="name">${this._config.title}</div></div>` : html``;
        const emptyScreen = notes.length ? html`` : html`<p style="text-align: center">No notes found!</p>`;
        return html`
        <ha-card id="googleKeepCard" style="padding: 16px">
            <style>
              paper-checkbox {
                pointer-events: none;
                --paper-checkbox-label-color: ${this.getTextColor()};
                --paper-checkbox-unchecked-color: ${this.getTextColor()};
                --paper-checkbox-checkmark-color: ${this.getCheckedColor()};
                --paper-checkbox-label-checked-color: ${this.getCheckedColor()};
              }
              div.noteBackground {
                padding:10px;
                border-radius:5px;
                margin:5px;
              }
              p.noteTitle {
                font-weight: bold;
                margin: 0 0 10px 10px;
                font-size: 120%;
                color: ${this.getTextColor()};
              }
              p.noteBody {
                margin: -3px;
              }
              div.noteLine {
                margin: 3px;
              }
              hr {
                margin: 10px 0;
                border: 1px solid ${this.getTextColor()};
              }
            </style>
            ${title}
            ${emptyScreen}
            ${notes.map(note => this.renderNote(note))}
        </ha-card>
        `;
    }

    renderNote(note) {
        return note.note_type === 'NodeType.List' ?
            this.renderList(note) :
            this.renderTextNote(note);
    }

    renderTextNote(note) {
        return html`
<div class="noteBackground" style="background:${this.getColor(note['color'])};">
    <p class="noteTitle">${note['title']}</p>
    <p class="noteBody">${note['lines'].map(line => this.renderLine(line))}</p>
</div>`
    }

    renderList(note) {
        const {show} = this._config;
        const showUnchecked = note['unchecked'].length && show.includes('unchecked');
        const showChecked = note['checked'].length && show.includes('checked');
        return html`
<div class="noteBackground" style="background:${this.getColor(note['color'])};">
    <p class="noteTitle">${note['title']}</p>
    ${showUnchecked ? this.renderUncheckedList(note) : html``}
    ${showUnchecked && showChecked ? html`<hr>` : html``}
    ${showChecked ? this.renderCheckedList(note) : html``}
</div>`
    }

    renderUncheckedList(note) {
        return html`<p class="noteBody">${note['unchecked'].map(line => this.renderLine(line))}</p>`;
    }

    renderCheckedList(note) {
        return html`<p class="noteBody">${note['children'].map(line => this.renderIfChecked(line))}</p>`;
    }

    renderIfChecked(child) {
        let checkedChildren = child.children.filter(c => c.checked);
        if (child.checked || checkedChildren.length > 0) {
            return html`${this.renderLine('\u2611' + child.text, child.checked)}${checkedChildren.map(c => this.renderLine('  ' + '\u2611' + c.text, true))}`;
        }
        return html``;
    }

    renderLine(line, strikethrough = false) {
        let trimmed = line.replace(/^ +/, '');
        let trimmedLength = trimmed.length;
        if (trimmedLength > 0) {
            let prefix = '\xa0'.repeat((line.length - trimmedLength) * 2);
            let suffix = trimmed.substr(1);
            if (strikethrough) {
                suffix = html`<s>${suffix}</s>`
            }
            if (trimmed[0] === '\u2610') {
                trimmed = html`${prefix}<paper-checkbox>${suffix}</paper-checkbox>`;
            } else if (trimmed[0] === '\u2611') {
                trimmed = html`${prefix}<paper-checkbox checked>${suffix}</paper-checkbox>`;
            }
        }
        return html`<div class="noteLine">${trimmed}</br></div>`;
    }

    static hexToRgb(hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
}

customElements.define('google-keep-card', GoogleKeepCard);
