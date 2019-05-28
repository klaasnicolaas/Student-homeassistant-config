const LitElement = Object.getPrototypeOf(
  customElements.get("ha-panel-lovelace")
);
const html = LitElement.prototype.html;
const css = LitElement.prototype.css;

const DEFAULT_HIDE = {
  delivered: false,
  first_letter: false,
  header: false,
}

function renderNotFoundStyles() {
  return html`
    <style is="custom-style">
      ha-card {
        font-weight: var(--paper-font-body1_-_font-weight);
        line-height: var(--paper-font-body1_-_line-height);
      }
      .not-found {
        flex: 1;
        background-color: red;
        padding: calc(16px);
      }
    </style>
  `
}

function renderStyles() {
  return html`
    <style is="custom-style">
      ha-card {
        -webkit-font-smoothing: var(
          --paper-font-body1_-_-webkit-font-smoothing
        );
        font-size: var(--paper-font-body1_-_font-size);
        font-weight: var(--paper-font-body1_-_font-weight);
        line-height: var(--paper-font-body1_-_line-height);
        padding-bottom: 16px;
      }
      ha-card.no-header {
        padding: 16px 0;
      }
      .info-body,
      .detail-body,
      .img-body {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
      }
      .info {
        text-align: center;
      }

      .info__icon {
        color: var(--paper-item-icon-color, #44739e);
      }
      .detail-body table {
        padding: 0px 16px;
        width: 100%;
      }
      .detail-body td {
        padding: 2px;
      }
      .detail-body thead th {
        text-align: left;
      }
      .detail-body tbody tr:nth-child(odd) {
        background-color: var(--paper-card-background-color);
      }
      .detail-body tbody tr:nth-child(even) {
        background-color: var(--secondary-background-color);
      }
      .detail-body tbody td.name a {
        color: var(--primary-text-color);
        text-decoration-line: none;
        font-weight: normal;
      }
      .img-body {
        margin-bottom: 10px;
      }
      .img-body img {
        padding: 5px;
        background: repeating-linear-gradient(
          45deg,
          #B45859,
          #B45859 10px,
          #FFFFFF 10px,
          #FFFFFF 20px,
          #122F94 20px,
          #122F94 30px,
          #FFFFFF 30px,
          #FFFFFF 40px
        );
      }

      header {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: var(--paper-font-headline_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-headline_-_-webkit-font-smoothing
        );
        font-size: var(--paper-font-headline_-_font-size);
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        text-rendering: var(
          --paper-font-common-expensive-kerning_-_text-rendering
        );
        opacity: var(--dark-primary-opacity);
        padding: 24px
          16px
          16px;
      }
      .header__icon {
        margin-right: 8px;
        color: var(--paper-item-icon-color, #44739e);
      }
      .header__title {
        font-size: var(--thermostat-font-size-title);
        line-height: var(--thermostat-font-size-title);
        font-weight: normal;
        margin: 0;
        align-self: left;
      }

      footer {
        padding: 16px;
        color: red;
      }
    </style>
  `
}

class PostNL extends LitElement {
  static get properties() {
    return {
      _hass: Object,
      config: Object,
      deliveryObject: Object,
      distributionObject: Object,
      letterObject: Object,
      icon: String,
      name: String,
      date_format: String,
      time_format: String,
      past_days: String,
      _language: String,
      _hide: Object,
    }
  }

  constructor() {
    super()

    this._hass = null
    this.deliveryObject = null
    this.distributionObject = null
    this.letterObject = null
    this.delivery_enroute = []
    this.delivery_delivered = []
    this.distribution_enroute = []
    this.distribution_delivered = []
    this.letters = []
    this.icon = null
    this.name = null
    this.date_format = null
    this.time_format = null
    this.past_days = null
    this._language = null
    this._hide = DEFAULT_HIDE
  }

  set hass(hass) {
    this._hass = hass

    if (this.config.delivery) {
      this.deliveryObject = hass.states[this.config.delivery]
    }

    if (this.config.distribution) {
      this.distributionObject = hass.states[this.config.distribution]
    }

    if (this.config.letters) {
      this.letterObject = hass.states[this.config.letters]
    }

    if (this.config.hide) {
      this._hide = { ...this._hide, ...this.config.hide }
    }

    if (typeof this.config.name === 'string') {
      this.name = this.config.name
    } else {
      this.name = "PostNL"
    }

    if (this.config.icon) {
      this.icon = this.config.icon
    } else {
      this.icon = "mdi:mailbox"
    }

    if (this.config.date_format) {
      this.date_format = this.config.date_format
    } else {
      this.date_format = "DD MMM YYYY";
    }

    if (this.config.time_format) {
      this.time_format = this.config.time_format
    } else {
      this.time_format = "HH:mm";
    }

    if (this.config.past_days) {
      this.past_days = parseInt(this.config.past_days)
    } else {
      this.past_days = 1;
    }

    this._language = hass.language

    this.delivery_enroute = []
    this.delivery_delivered = []
    this.distribution_enroute = []
    this.distribution_delivered = []
    this.letters = []

    // Format letters
    if (this.letterObject) {
      Object.entries(this.letterObject.attributes.letters).sort((a, b) => new Date(b[1].delivery_date) - new Date(a[1].delivery_date)).map(([key, letter]) => {
          if (window.moment) {
            if (moment(letter.delivery_date).isBefore(moment().subtract(this.past_days, 'days').startOf('day'))) {
              return;
            }
          }

          this.letters.push(letter);
      });
    }

    // Format deliveries
    if (this.deliveryObject) {
      Object.entries(this.deliveryObject.attributes.enroute).sort((a, b) => new Date(b[1].planned_date) - new Date(a[1].planned_date)).map(([key, shipment]) => {
        this.delivery_enroute.push(shipment);
      });

      Object.entries(this.deliveryObject.attributes.delivered).sort((a, b) => new Date(b[1].delivery_date) - new Date(a[1].delivery_date)).map(([key, shipment]) => {
          if (window.moment) {
            if (shipment.delivery_date != null && moment(shipment.delivery_date).isBefore(moment().subtract(this.past_days, 'days').startOf('day'))) {
              return;
            }
          }


        this.delivery_delivered.push(shipment);
      });
    }

    // Format distribution
    if (this.distributionObject) {
      Object.entries(this.distributionObject.attributes.enroute).sort((a, b) => new Date(b[1].planned_date) - new Date(a[1].planned_date)).map(([key, shipment]) => {
        this.distribution_enroute.push(shipment);
      });

      Object.entries(this.distributionObject.attributes.delivered).sort((a, b) => new Date(b[1].delivery_date) - new Date(a[1].delivery_date)).map(([key, shipment]) => {
          if (window.moment) {
            if (shipment.delivery_date != null && moment(shipment.delivery_date).isBefore(moment().subtract(this.past_days, 'days').startOf('day'))) {
              return;
            }
          }

        this.distribution_delivered.push(shipment);
      });
    }
  }

  render({ _hass, _hide, _values, config, delivery, distribution, letters  } = this) {
    if (!delivery && !distribution && !letters) {
      return html`
        ${renderNotFoundStyles()}
        <ha-card class="not-found">
          Entity not available: <strong class="name">${config.delivery}</strong> or <strong class="name">${config.distribution}</strong> or <strong>${config.letters}</strong>
        </ha-card>
      `
    }

    return html`
      ${renderStyles()}
      <ha-card class="postnl-card">
        ${this.renderHeader()}
        <section class="info-body">
          ${this.renderLettersInfo()}
          ${this.renderDeliveryInfo()}
          ${this.renderDistributionInfo()}
        </section>

      ${this.renderLetters()}
      ${this.renderDelivery()}
      ${this.renderDistribution()}
      ${this.renderMomentJSWarning()}
      ${this.renderLetterWarning()}

      </ha-card>
    `
  }

  renderHeader() {
    if (this._hide.header) return ''

    return html`
      <header>
        <ha-icon class="header__icon" .icon=${this.icon}></ha-icon>
        <h2 class="header__title">${this.name}</h2>
      </header>
    `
  }

  // Remove when mandatory
  renderMomentJSWarning() {
    if (window.moment) return ''

    return html`
      <footer>
        You did not include MomentJS which degrades the ability of this card. Please see the <a href="https://github.com/peternijssen/lovelace-postnl">Github repository</a> for more information.
      </footer>
    `
  }

  renderLetterWarning() {
    if (!this.letterObject) return ''

    // Remove undefined check after the first of june
    if (typeof this.letterObject.attributes.enabled === 'undefined' || this.letterObject.attributes.enabled) return ''

    return html`
      <footer>
        It seems you have set the letter object, but you haven't activated this within PostNL yet. Consider removing the letter object from the card or activate this option in PostNL.
      </footer>
    `
  }

  renderLettersInfo() {
    if (!this.letterObject) return ''

    return html`
      <div class="info">
        <ha-icon class="info__icon" icon="mdi:email"></ha-icon><br />
        <span>${this.letters.length} letters</span>
      </div>
    `
  }

  renderLetters() {
    if (!this.letterObject || (this.letters && this.letters.length === 0)) return ''

    return html`
      <header>
        <ha-icon class="header__icon" icon="mdi:email"></ha-icon>
        <h2 class="header__title">Letters</h2>
      </header>
      ${this.renderLetterImage()}
      <section class="detail-body">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Delivery date</th>
            </tr>
          </thead>
          <tbody>
            ${Object.entries(this.letters).map(([key, letter]) => {
                return this.renderLetter(letter)
            })}
          </tbody>
        </table>
      </section>
    `
  }

  renderLetterImage() {
    if (this._hide.first_letter) return ''

    if (this.letters[0] == null || this.letters[0].image == null) return ''

    return html`
      <section class="img-body">
        <img src="${this.letters[0].image}&width=400&height=300" />
      </section>
    `
  }

  renderLetter(letter) {
    if (letter.image == null) {
      return html`
        <tr>
          <td class="name">${letter.id}</td>
          <td>${(letter.status_message != null) ? letter.status_message : "Unknown"}</td>
          <td>${this.dateConversion(letter.delivery_date)}</td>
        </tr>
      `
    } else {
      return html`
        <tr>
          <td class="name"><a href="${letter.image}" target="_blank">${letter.id}</a></td>
          <td>${(letter.status_message != null) ? letter.status_message : "Unknown"}</td>
          <td>${this.dateConversion(letter.delivery_date)}</td>
        </tr>
      `    
    }
  }

  renderDeliveryInfo() {
    if (!this.deliveryObject) return ''

    return html`
      <div class="info">
        <ha-icon class="info__icon" icon="mdi:truck-delivery"></ha-icon><br />
        <span>${this.delivery_enroute.length} enroute</span>
      </div>
      <div class="info">
        <ha-icon class="info__icon" icon="mdi:package-variant"></ha-icon><br />
        <span>${this.delivery_delivered.length} delivered</span>
      </div>
    `
  }


  renderDistributionInfo() {
    if (!this.distributionObject) return ''

    return html`
      <div class="info">
        <ha-icon class="info__icon" icon="mdi:truck-delivery"></ha-icon><br />
        <span>${this.distribution_enroute.length} enroute</span>
      </div>
      <div class="info">
        <ha-icon class="info__icon" icon="mdi:package-variant"></ha-icon><br />
        <span>${this.distribution_delivered.length} delivered</span>
      </div>
    `
  }

  renderDelivery() {
    if (!this.deliveryObject) return ''

    if (this.delivery_enroute.length === 0 && this._hide.delivered) return ''

    if (this.delivery_enroute.length === 0 && this.delivery_delivered.length === 0) return ''

    return html`
      <header>
        <ha-icon class="header__icon" icon="mdi:package-variant"></ha-icon>
        <h2 class="header__title">Delivery</h2>
      </header>
      <section class="detail-body">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Delivery date</th>
            </tr>
          </thead>
          <tbody>
            ${Object.entries(this.delivery_enroute).map(([key, shipment]) => {
              return this.renderShipment(shipment)
            })}

            ${this._hide.delivered ? "" : Object.entries(this.delivery_delivered).map(([key, shipment]) => {
              return this.renderShipment(shipment)
            })}
          </tbody>
        </table>
      </section>
    `
  }

  renderDistribution() {
    // Distribution disabled
    if (!this.distributionObject) return ''

    if (this.distribution_enroute.length === 0 && this._hide.delivered) return ''

    if (this.distribution_enroute.length === 0 && this.distribution_delivered.length === 0) return ''

    return html`
      <header>
        <ha-icon class="header__icon" icon="mdi:package-variant"></ha-icon>
        <h2 class="header__title">Distribution</h2>
      </header>
      <section class="detail-body">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Delivery date</th>
            </tr>
          </thead>
          <tbody>
            ${Object.entries(this.distribution_enroute).map(([key, shipment]) => {
              return this.renderShipment(shipment)
            })}

            ${this._hide.delivered ? "" : Object.entries(this.distribution_delivered).map(([key, shipment]) => {
              return this.renderShipment(shipment)
            })}
          </tbody>
        </table>
      </section>
    `
  }

  renderShipment(shipment) {
    var delivery_date = "Unknown";
    var className = "delivered";

    // Convesion Time
    if (shipment.delivery_date != null) {
      var delivery_date = this.dateConversion(shipment.delivery_date)
    } else if (shipment.planned_date != null) {
      var className = "enroute";
      var delivery_date = 
        this.dateConversion(shipment.planned_date) + " " +
        this.timeConversion(shipment.planned_from) + " - " +
        this.timeConversion(shipment.planned_to)
    }

    return html`
        <tr class="${className}">
          <td class="name"><a href="${shipment.url}" target="_blank">${shipment.name}</a></td>
          <td>${shipment.status_message}</td>
          <td>${delivery_date}</td>
        </tr>
    `
  }

  dateConversion(date) {
    if (window.moment) {
      date = moment(date);

      return date.calendar(null, {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        sameElse: this.date_format
      }); 
    } 
    
    return (new Date(date)).toLocaleDateString(this._language)
  }
  
  timeConversion(date) {
    if (window.moment) {
      date = moment(date);
      return date.format(this.time_format); 
    }

    return (new Date(date)).toLocaleTimeString(this._language)
  }

  setConfig(config) {
    if (!config.delivery && !config.distribution && !config.letters) {
      throw new Error('Please define entities');
    }
    
    this.config = {
      ...config,
    }
  }

  getCardSize() {
    return 3
  }
}

window.customElements.define('postnl-card', PostNL)

export default PostNL