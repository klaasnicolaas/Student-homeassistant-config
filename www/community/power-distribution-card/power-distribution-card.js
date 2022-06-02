function t(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new Map;class o{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=n.get(this.cssText);return e&&void 0===t&&(n.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const r=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new o(n,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var s;const l=window.trustedTypes,c=l?l.emptyScript:"",d=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:u};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Eh(i,e);void 0!==n&&(this._$Eu.set(n,i),t.push(n))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),n=window.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var n,o;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const a=(null!==(o=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==o?o:h.toAttribute)(e,i.type);this._$Ei=t,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Ei=null}}_$AK(t,e){var i,n,o;const r=this.constructor,a=r._$Eu.get(t);if(void 0!==a&&this._$Ei!==a){const t=r.getPropertyOptions(a),s=t.converter,l=null!==(o=null!==(n=null===(i=s)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:"function"==typeof s?s:null)&&void 0!==o?o:h.fromAttribute;this._$Ei=a,this[a]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:f}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.3.2");const v=globalThis.trustedTypes,m=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,_="?"+b,y=`<${_}>`,$=document,w=(t="")=>$.createComment(t),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,S=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,O=/'/g,T=/"/g,D=/^(?:script|style|textarea|title)$/i,M=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),N=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),I=new WeakMap,R=$.createTreeWalker($,129,null,!1),V=(t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":"",a=C;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===C?"!--"===l[1]?a=A:void 0!==l[1]?a=S:void 0!==l[2]?(D.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=k):void 0!==l[3]&&(a=k):a===k?">"===l[0]?(a=null!=o?o:C,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?k:'"'===l[3]?T:O):a===T||a===O?a=k:a===A||a===S?a=C:(a=k,o=void 0);const h=a===k&&t[e+1].startsWith("/>")?" ":"";r+=a===C?i+y:c>=0?(n.push(s),i.slice(0,c)+"$lit$"+i.slice(c)+b+h):i+b+(-2===c?(n.push(void 0),e):h)}const s=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(s):s,n]};class H{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const a=t.length-1,s=this.parts,[l,c]=V(t,e);if(this.el=H.createElement(l,i),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=R.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(b)){const i=c[r++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(b),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?U:"?"===e[1]?X:"@"===e[1]?q:B})}else s.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(D.test(n.tagName)){const t=n.textContent.split(b),e=t.length-1;if(e>0){n.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],w()),R.nextNode(),s.push({type:2,index:++o});n.append(t[e],w())}}}else if(8===n.nodeType)if(n.data===_)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(b,t+1));)s.push({type:7,index:o}),t+=b.length-1}o++}}static createElement(t,e){const i=$.createElement("template");return i.innerHTML=t,i}}function j(t,e,i=t,n){var o,r,a,s;if(e===N)return e;let l=void 0!==n?null===(o=i._$Cl)||void 0===o?void 0:o[n]:i._$Cu;const c=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(a=(s=i)._$Cl)&&void 0!==a?a:s._$Cl=[])[n]=l:i._$Cu=l),void 0!==l&&(e=j(t,l._$AS(t,e.values),l,n)),e}class L{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:$).importNode(i,!0);R.currentNode=o;let r=R.nextNode(),a=0,s=0,l=n[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new z(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new F(r,this,t)),this.v.push(e),l=n[++s]}a!==(null==l?void 0:l.index)&&(r=R.nextNode(),a++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class z{constructor(t,e,i,n){var o;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),E(t)?t===P||null==t||""===t?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==N&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return x(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==P&&E(this._$AH)?this._$AA.nextSibling.data=t:this.k($.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=H.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new L(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new H(t)),e}S(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new z(this.M(w()),this.M(w()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,i,n,o){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=j(this,t,e,0),r=!E(t)||t!==this._$AH&&t!==N,r&&(this._$AH=t);else{const n=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=j(this,n[i+a],e,a),s===N&&(s=this._$AH[a]),r||(r=!E(s)||s!==this._$AH[a]),s===P?t=P:t!==P&&(t+=(null!=s?s:"")+o[a+1]),this._$AH[a]=s}r&&!n&&this.C(t)}C(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class U extends B{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===P?void 0:t}}const W=v?v.emptyScript:"";class X extends B{constructor(){super(...arguments),this.type=4}C(t){t&&t!==P?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class q extends B{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=j(this,t,e,0))&&void 0!==i?i:P)===N)return;const n=this._$AH,o=t===P&&n!==P||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==P&&(n===P||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const Y=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var G,K;null==Y||Y(H,z),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.2.3");class Z extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var n,o;const r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let a=r._$litPart$;if(void 0===a){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=a=new z(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return N}}Z.finalized=!0,Z._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:Z});const J=globalThis.litElementPolyfillSupport;null==J||J({LitElement:Z}),(null!==(K=globalThis.litElementVersions)&&void 0!==K?K:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,tt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function et(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):tt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function it(t){return et({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nt;null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements;["angle-degree","area-acre","area-hectare","concentr-percent","digital-bit","digital-byte","digital-gigabit","digital-gigabyte","digital-kilobit","digital-kilobyte","digital-megabit","digital-megabyte","digital-petabyte","digital-terabit","digital-terabyte","duration-day","duration-hour","duration-millisecond","duration-minute","duration-month","duration-second","duration-week","duration-year","length-centimeter","length-foot","length-inch","length-kilometer","length-meter","length-mile-scandinavian","length-mile","length-millimeter","length-yard","mass-gram","mass-kilogram","mass-ounce","mass-pound","mass-stone","temperature-celsius","temperature-fahrenheit","volume-fluid-ounce","volume-gallon","volume-liter","volume-milliliter"].map((function(t){return t.replace(/^(.*?)-/,"")}));var ot,rt,at,st=(ot=function(t,e){return ot=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},ot(t,e)},function(t,e){function i(){this.constructor=t}ot(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});function lt(){return(lt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}!function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="MISSING_LOCALE_DATA",e}st(e,t)}(Error),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(rt||(rt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(at||(at={}));var ct=function(t,e,i){var n=e?function(t){switch(t.number_format){case rt.comma_decimal:return["en-US","en"];case rt.decimal_comma:return["de","es","it"];case rt.space_comma:return["fr","sv","cs"];case rt.system:return;default:return t.language}}(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==rt.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,dt(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,dt(t,i)).format(Number(t))}return"string"==typeof t?t:function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)}(t,null==i?void 0:i.maximumFractionDigits).toString()+("currency"===(null==i?void 0:i.style)?" "+i.currency:"")},dt=function(t,e){var i=lt({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var n=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=n,i.maximumFractionDigits=n}return i},ht=["closed","locked","off"],ut=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},pt=new Set(["call-service","divider","section","weblink","cast","select"]),ft={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},gt=function(t){ut(window,"haptic",t)},vt=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(gt("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&ut(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),ut(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var n,o=function(t){return t.substr(0,t.indexOf("."))}(e),r="group"===o?"homeassistant":o;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(r,n,{entity_id:e})})(t,e,ht.includes(t.states[e].state))}(e,i.entity),gt("success"));break;case"call-service":if(!n.service)return void gt("failure");var o=n.service.split(".",2);e.callService(o[0],o[1],n.service_data,n.target),gt("success");break;case"fire-dom-event":ut(t,"ll-custom",n)}};function mt(t){return void 0!==t&&"none"!==t.action}const bt=["battery","car_charger","consumer","grid","home","hydro","pool","producer","solar","wind","heating"],_t={battery:{consumer:!0,icon:"mdi:battery-outline",name:"battery",producer:!0},car_charger:{consumer:!0,icon:"mdi:car-electric",name:"car"},consumer:{consumer:!0,icon:"mdi:lightbulb",name:"consumer"},grid:{icon:"mdi:transmission-tower",name:"grid"},home:{consumer:!0,icon:"mdi:home-assistant",name:"home"},hydro:{icon:"mdi:hydro-power",name:"hydro",producer:!0},pool:{consumer:!0,icon:"mdi:pool",name:"pool"},producer:{icon:"mdi:lightning-bolt-outline",name:"producer",producer:!0},solar:{icon:"mdi:solar-power",name:"solar",producer:!0},wind:{icon:"mdi:wind-turbine",name:"wind",producer:!0},heating:{icon:"mdi:radiator",name:"heating",consumer:!0}},yt={decimals:2,display_abs:!0,name:"",unit_of_display:"W"},$t={type:"",title:void 0,animation:"flash",entities:[],center:{type:"none"}},wt=r`
  * {
    box-sizing: border-box;
  }

  p {
    margin: 4px 0 4px 0;

    text-align: center;
  }

  .card-content {
    display: grid;
    overflow: auto;

    grid-template-columns: 1.5fr 1fr 1.5fr;
    column-gap: 10px;
  }

  #center-panel {
    display: flex;

    height: 100%;

    align-items: center;
    justify-content: center;
    grid-column: 2;
    flex-wrap: wrap;
  }

  #center-panel > div {
    display: flex;
    overflow: hidden;

    width: 100%;
    height: 100%;
    max-height: 200px;

    flex-basis: 50%;
    flex-flow: column;
  }

  #center-panel > div > p {
    flex: 0 1 auto;
  }

  .bar-wrapper {
    position: relative;

    width: 50%;
    height: 80%;
    margin: auto;

    flex: 1 1 auto;

    background-color: rgba(114, 114, 114, 0.2);
  }

  bar {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--secondary-text-color);
  }

  item {
    display: block;
    overflow: hidden;

    margin-bottom: 10px;

    cursor: pointer;
  }

  .buy-sell {
    height: 28px;
    display: flex;
    flex-direction: column;
    font-size: 11px;
    line-height: 14px;
    text-align: center;
  }

  .grid-buy {
    color: red;
  }

  .grid-sell {
    color: green;
  }

  .placeholder {
    height: 62px;
  }

  #right-panel > item > value {
    float: left;
  }

  #right-panel > item > badge {
    float: right;
  }

  badge {
    float: left;

    width: 50%;
    padding: 4px;

    border: 1px solid;
    border-color: var(--disabled-text-color);
    border-radius: 1em;

    position: relative;
  }

  icon > ha-icon {
    display: block;

    width: 24px;
    margin: 0 auto;

    color: var(--paper-item-icon-color);
  }

  .secondary {
    position: absolute;
    top: 4px;
    right: 8%;
    font-size: 80%;
  }

  value {
    float: right;
  }

  value > p {
    height: 1em;
  }

  table {
    width: 100%;
  }

  /**************
  ARROW ANIMATION
  **************/

  .blank {
    width: 54px;
    height: 4px;
    margin: 8px auto 8px auto;
    opacity: 0.2;
    background-color: var(--secondary-text-color);
  }

  .arrow-color {
    fill: var(--secondary-text-color);
    fill-opacity: 0.8;
  }

  #a-flash {
    animation: flash 3s infinite steps(1);
    fill: var(--secondary-text-color);
    fill-opacity: 0.2;
  }

  @keyframes flash {
    0%,
    66% {
      fill-opacity: 0.2;
      fill: var(--secondary-text-color);
    }
    33% {
      fill-opacity: 0.8;
      fill: var(--secondary-text-color);
    }
  }

  #a-slide-right {
    animation: slide-right 3s linear infinite both;
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(48px);
      transform: translateX(48px);
    }
  }
  #a-slide-left {
    animation: slide-left 3s linear infinite both;
  }
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(48px);
      transform: translateX(48px);
    }
    100% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
    }
  }
`,Et=M`
  <style>
    /**********
    Mobile View
    **********/
    .card-content {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .placeholder {
      height: 114px !important;
    }
    item > badge,
    item > value {
      display: block;
      float: none !important;

      width: 72px;
      margin: 0 auto;
    }

    .arrow {
      margin: 0px 8px;
    }
  </style>
`;var xt={version:"Version",description:"A Lovelace Card for visualizing power distributions.",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},Ct={actions:{add:"Add",edit:"Edit",remove:"Remove",save:"Save"},optional:"Optional",required:"Required",settings:{action_settings:"Action Settings",animation:"Animation",autarky:"autarky",attribute:"Attribute",background_color:"Background Color",battery_percentage:"Battery Charge %",bigger:"Bigger",calc_excluded:"Excluded from Calculations",center:"Center",color:"Color","color-settings":"Color Settings",color_threshold:"Color Threshold",decimals:"Decimals","display-abs":"Display Absolute Value",entities:"Entities",entity:"Entity",equal:"Equal","grid-buy":"Grid Buy","grid-sell":"Grid Sell","hide-arrows":"Hide Arrows",icon:"Icon","invert-value":"Invert Value",name:"Name",preset:"Preset",ratio:"ratio",replace_name:"Replace Name","secondary-info":"Secondary Info",settings:"settings",smaller:"Smaller",threshold:"Threshold",title:"Title",unit_of_display:"Unit of Display",value:"value"}},At={common:xt,editor:Ct},St={version:"Version",description:"Eine Karte zur Visualizierung von Stromverteilungen",invalid_configuration:"Ungültige Konfiguration",show_warning:"Warnung"},kt={actions:{add:"Hinzufügen",edit:"Bearbeiten",remove:"Entfernen",save:"Speichern"},optional:"Optional",required:"Erforderlich",settings:{action_settings:"Aktions Einstellungen",animation:"Animation",autarky:"Autarkie",attribute:"Attribut",background_color:"Hintergrundfarbe",battery_percentage:"Batterie Ladung %",bigger:"Größer ",calc_excluded:"Von Rechnungen ausgeschlossen",center:"Mittelbereich",color:"Farbe","color-settings":"Farb Einstellungen",color_threshold:"Farb-Schwellenwert",decimals:"Dezimalstellen","display-abs":"Absolute Wertanzeige",entities:"Entities",entity:"Element",equal:"Gleich","grid-buy":"Netz Ankauf","grid-sell":"Netz Verkauf","hide-arrows":"Pfeile Verstecken",icon:"Symbol","invert-value":"Invertierter Wert",name:"Name",preset:"Vorlagen",ratio:"Anteil",replace_name:"Namen ersetzen","secondary-info":"Zusatzinformationen",settings:"Einstellungen",smaller:"Kleiner",threshold:"Schwellenwert",title:"Titel",unit_of_display:"Angezeigte Einheit",value:"Wert"}},Ot={common:St,editor:kt};const Tt={en:Object.freeze({__proto__:null,common:xt,editor:Ct,default:At}),de:Object.freeze({__proto__:null,common:St,editor:kt,default:Ot})};function Dt(t,e=!1,i="",n=""){const o=(localStorage.getItem("selectedLanguage")||navigator.language.split("-")[0]||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=t.split(".").reduce(((t,e)=>t[e]),Tt[o])}catch(e){r=t.split(".").reduce(((t,e)=>t[e]),Tt.en)}return void 0===r&&(r=t.split(".").reduce(((t,e)=>t[e]),Tt.en)),""!==i&&""!==n&&(r=r.replace(i,n)),e?function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(r):r}var Mt=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some((function(t,n){return t[0]===e&&(i=n,!0)})),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),n=this.__entries__[i];return n&&n[1]},e.prototype.set=function(e,i){var n=t(this.__entries__,e);~n?this.__entries__[n][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,n=t(i,e);~n&&i.splice(n,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,n=this.__entries__;i<n.length;i++){var o=n[i];t.call(e,o[1],o[0])}},e}()}(),Nt="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Pt="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),It="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Pt):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var Rt=["top","right","bottom","left","width","height","size","weight"],Vt="undefined"!=typeof MutationObserver,Ht=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,n=!1,o=0;function r(){i&&(i=!1,t()),n&&s()}function a(){It(r)}function s(){var t=Date.now();if(i){if(t-o<2)return;n=!0}else i=!0,n=!1,setTimeout(a,e);o=t}return s}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){Nt&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Vt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){Nt&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;Rt.some((function(t){return!!~i.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),jt=function(t,e){for(var i=0,n=Object.keys(e);i<n.length;i++){var o=n[i];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},Lt=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||Pt},zt=Ft(0,0,0,0);function Bt(t){return parseFloat(t)||0}function Ut(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce((function(e,i){return e+Bt(t["border-"+i+"-width"])}),0)}function Wt(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return zt;var n=Lt(t).getComputedStyle(t),o=function(t){for(var e={},i=0,n=["top","right","bottom","left"];i<n.length;i++){var o=n[i],r=t["padding-"+o];e[o]=Bt(r)}return e}(n),r=o.left+o.right,a=o.top+o.bottom,s=Bt(n.width),l=Bt(n.height);if("border-box"===n.boxSizing&&(Math.round(s+r)!==e&&(s-=Ut(n,"left","right")+r),Math.round(l+a)!==i&&(l-=Ut(n,"top","bottom")+a)),!function(t){return t===Lt(t).document.documentElement}(t)){var c=Math.round(s+r)-e,d=Math.round(l+a)-i;1!==Math.abs(c)&&(s-=c),1!==Math.abs(d)&&(l-=d)}return Ft(o.left,o.top,s,l)}var Xt="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof Lt(t).SVGGraphicsElement}:function(t){return t instanceof Lt(t).SVGElement&&"function"==typeof t.getBBox};function qt(t){return Nt?Xt(t)?function(t){var e=t.getBBox();return Ft(0,0,e.width,e.height)}(t):Wt(t):zt}function Ft(t,e,i,n){return{x:t,y:e,width:i,height:n}}var Yt=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Ft(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=qt(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),Gt=function(t,e){var i=function(t){var e=t.x,i=t.y,n=t.width,o=t.height,r="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(r.prototype);return jt(a,{x:e,y:i,width:n,height:o,top:i,right:e+n,bottom:o+i,left:e}),a}(e);jt(this,{target:t,contentRect:i})},Kt=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new Mt,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Lt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new Yt(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Lt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new Gt(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),Zt="undefined"!=typeof WeakMap?new WeakMap:new Mt,Jt=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=Ht.getInstance(),n=new Kt(e,i,this);Zt.set(this,n)};["observe","unobserve","disconnect"].forEach((function(t){Jt.prototype[t]=function(){var e;return(e=Zt.get(this))[t].apply(e,arguments)}}));var Qt=void 0!==Pt.ResizeObserver?Pt.ResizeObserver:Jt,te=Object.freeze({__proto__:null,default:Qt});const ee=t=>(...e)=>({_$litDirective$:t,values:e});class ie{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const ne=(t,e)=>{if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;let i,n;if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(!ne(t[i],e[i]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;for(i of t.entries())if(!ne(i[1],e.get(i[0])))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const o=Object.keys(t);if(n=o.length,n!==Object.keys(e).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(e,o[i]))return!1;for(i=n;0!=i--;){const n=o[i];if(!ne(t[n],e[n]))return!1}return!0}return t!=t&&e!=e};class oe extends HTMLElement{constructor(){super(...arguments),this.holdTime=500}bind(t,e){t.actionHandler&&ne(e,t.actionHandler.options)||(t.actionHandler&&t.removeEventListener("click",t.actionHandler.end),t.actionHandler={options:e},e.disabled||(t.actionHandler.end=i=>{const n=t;i.cancelable&&i.preventDefault(),clearTimeout(this.timer),this.timer=void 0,e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,ut(n,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,ut(n,"action",{action:"double_tap"})):ut(n,"action",{action:"tap"})},t.addEventListener("click",t.actionHandler.end)))}}customElements.define("action-handler-power-distribution-card",oe);const re=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-power-distribution-card"))return t.querySelector("action-handler-power-distribution-card");const e=document.createElement("action-handler-power-distribution-card");return t.appendChild(e),e})();i&&i.bind(t,e)},ae=ee(class extends ie{update(t,[e]){return re(t.element,e),N}render(t){}}),se={},le=ee(class extends ie{constructor(){super(...arguments),this.nt=se}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.nt)&&this.nt.length===e.length&&e.every(((t,e)=>t===this.nt[e])))return N}else if(this.nt===e)return N;return this.nt=Array.isArray(e)?Array.from(e):e,this.render(e,i)}});var ce="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",de="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function he(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function ue(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?he(Object(i),!0).forEach((function(e){fe(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):he(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function pe(t){return pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pe(t)}function fe(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function ge(){return ge=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},ge.apply(this,arguments)}function ve(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}function me(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var be=me(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),_e=me(/Edge/i),ye=me(/firefox/i),$e=me(/safari/i)&&!me(/chrome/i)&&!me(/android/i),we=me(/iP(ad|od|hone)/i),Ee=me(/chrome/i)&&me(/android/i),xe={capture:!1,passive:!1};function Ce(t,e,i){t.addEventListener(e,i,!be&&xe)}function Ae(t,e,i){t.removeEventListener(e,i,!be&&xe)}function Se(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function ke(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function Oe(t,e,i,n){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&Se(t,e):Se(t,e))||n&&t===i)return t;if(t===i)break}while(t=ke(t))}return null}var Te,De=/\s+/g;function Me(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(De," ").replace(" "+e+" "," ");t.className=(n+(i?" "+e:"")).replace(De," ")}}function Ne(t,e,i){var n=t&&t.style;if(n){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in n||-1!==e.indexOf("webkit")||(e="-webkit-"+e),n[e]=i+("string"==typeof i?"":"px")}}function Pe(t,e){var i="";if("string"==typeof t)i=t;else do{var n=Ne(t,"transform");n&&"none"!==n&&(i=n+" "+i)}while(!e&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function Ie(t,e,i){if(t){var n=t.getElementsByTagName(e),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function Re(){var t=document.scrollingElement;return t||document.documentElement}function Ve(t,e,i,n,o){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==Re()?(a=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(o=o||t.parentNode,!be))do{if(o&&o.getBoundingClientRect&&("none"!==Ne(o,"transform")||i&&"static"!==Ne(o,"position"))){var u=o.getBoundingClientRect();a-=u.top+parseInt(Ne(o,"border-top-width")),s-=u.left+parseInt(Ne(o,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(o=o.parentNode);if(n&&t!==window){var p=Pe(o||t),f=p&&p.a,g=p&&p.d;p&&(l=(a/=g)+(d/=g),c=(s/=f)+(h/=f))}return{top:a,left:s,bottom:l,right:c,width:h,height:d}}}function He(t,e,i){for(var n=Ue(t,!0),o=Ve(t)[e];n;){var r=Ve(n)[i];if(!("top"===i||"left"===i?o>=r:o<=r))return n;if(n===Re())break;n=Ue(n,!1)}return!1}function je(t,e,i,n){for(var o=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==Wi.ghost&&(n||a[r]!==Wi.dragged)&&Oe(a[r],i.draggable,t,!1)){if(o===e)return a[r];o++}r++}return null}function Le(t,e){for(var i=t.lastElementChild;i&&(i===Wi.ghost||"none"===Ne(i,"display")||e&&!Se(i,e));)i=i.previousElementSibling;return i||null}function ze(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Wi.clone||e&&!Se(t,e)||i++;return i}function Be(t){var e=0,i=0,n=Re();if(t)do{var o=Pe(t),r=o.a,a=o.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[e,i]}function Ue(t,e){if(!t||!t.getBoundingClientRect)return Re();var i=t,n=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=Ne(i);if(i.clientWidth<i.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){if(!i.getBoundingClientRect||i===document.body)return Re();if(n||e)return i;n=!0}}}while(i=i.parentNode);return Re()}function We(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function Xe(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}var qe="Sortable"+(new Date).getTime();function Fe(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach((function(t){if("none"!==Ne(t,"display")&&t!==Wi.ghost){e.push({target:t,rect:Ve(t)});var i=ue({},e[e.length-1].rect);if(t.thisAnimationDuration){var n=Pe(t,!0);n&&(i.top-=n.f,i.left-=n.e)}t.fromRect=i}}))},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[i][n])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var n=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var o=!1,r=0;e.forEach((function(t){var e=0,i=t.target,a=i.fromRect,s=Ve(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=Pe(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&We(l,s)&&!We(a,s)&&(d.top-s.top)/(d.left-s.left)==(a.top-s.top)/(a.left-s.left)&&(e=function(t,e,i,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*n.animation}(d,l,c,n.options)),We(s,a)||(i.prevFromRect=a,i.prevToRect=s,e||(e=n.options.animation),n.animate(i,d,s,e)),e&&(o=!0,r=Math.max(r,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout((function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null}),e),i.thisAnimationDuration=e)})),clearTimeout(t),o?t=setTimeout((function(){"function"==typeof i&&i()}),r):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,n){if(n){Ne(t,"transition",""),Ne(t,"transform","");var o=Pe(this.el),r=o&&o.a,a=o&&o.d,s=(e.left-i.left)/(r||1),l=(e.top-i.top)/(a||1);t.animatingX=!!s,t.animatingY=!!l,Ne(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),Ne(t,"transition","transform "+n+"ms"+(this.options.easing?" "+this.options.easing:"")),Ne(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout((function(){Ne(t,"transition",""),Ne(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1}),n)}}}}var Ye=[],Ge={initializeByDefault:!0},Ke={mount:function(t){for(var e in Ge)Ge.hasOwnProperty(e)&&!(e in t)&&(t[e]=Ge[e]);Ye.forEach((function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")})),Ye.push(t)},pluginEvent:function(t,e,i){var n=this;this.eventCanceled=!1,i.cancel=function(){n.eventCanceled=!0};var o=t+"Global";Ye.forEach((function(n){e[n.pluginName]&&(e[n.pluginName][o]&&e[n.pluginName][o](ue({sortable:e},i)),e.options[n.pluginName]&&e[n.pluginName][t]&&e[n.pluginName][t](ue({sortable:e},i)))}))},initializePlugins:function(t,e,i,n){for(var o in Ye.forEach((function(n){var o=n.pluginName;if(t.options[o]||n.initializeByDefault){var r=new n(t,e,t.options);r.sortable=t,r.options=t.options,t[o]=r,ge(i,r.defaults)}})),t.options)if(t.options.hasOwnProperty(o)){var r=this.modifyOption(t,o,t.options[o]);void 0!==r&&(t.options[o]=r)}},getEventProperties:function(t,e){var i={};return Ye.forEach((function(n){"function"==typeof n.eventProperties&&ge(i,n.eventProperties.call(e[n.pluginName],t))})),i},modifyOption:function(t,e,i){var n;return Ye.forEach((function(o){t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[e]&&(n=o.optionListeners[e].call(t[o.pluginName],i))})),n}};var Ze=["evt"],Je=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.evt,o=ve(i,Ze);Ke.pluginEvent.bind(Wi)(t,e,ue({dragEl:ti,parentEl:ei,ghostEl:ii,rootEl:ni,nextEl:oi,lastDownEl:ri,cloneEl:ai,cloneHidden:si,dragStarted:yi,putSortable:pi,activeSortable:Wi.active,originalEvent:n,oldIndex:li,oldDraggableIndex:di,newIndex:ci,newDraggableIndex:hi,hideGhostForTarget:Li,unhideGhostForTarget:zi,cloneNowHidden:function(){si=!0},cloneNowShown:function(){si=!1},dispatchSortableEvent:function(t){Qe({sortable:e,name:t,originalEvent:n})}},o))};function Qe(t){!function(t){var e=t.sortable,i=t.rootEl,n=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,f=t.extraEventProperties;if(e=e||i&&i[qe]){var g,v=e.options,m="on"+n.charAt(0).toUpperCase()+n.substr(1);!window.CustomEvent||be||_e?(g=document.createEvent("Event")).initEvent(n,!0,!0):g=new CustomEvent(n,{bubbles:!0,cancelable:!0}),g.to=a||i,g.from=s||i,g.item=o||i,g.clone=r,g.oldIndex=l,g.newIndex=c,g.oldDraggableIndex=d,g.newDraggableIndex=h,g.originalEvent=u,g.pullMode=p?p.lastPutMode:void 0;var b=ue(ue({},f),Ke.getEventProperties(n,e));for(var _ in b)g[_]=b[_];i&&i.dispatchEvent(g),v[m]&&v[m].call(e,g)}}(ue({putSortable:pi,cloneEl:ai,targetEl:ti,rootEl:ni,oldIndex:li,oldDraggableIndex:di,newIndex:ci,newDraggableIndex:hi},t))}var ti,ei,ii,ni,oi,ri,ai,si,li,ci,di,hi,ui,pi,fi,gi,vi,mi,bi,_i,yi,$i,wi,Ei,xi,Ci=!1,Ai=!1,Si=[],ki=!1,Oi=!1,Ti=[],Di=!1,Mi=[],Ni="undefined"!=typeof document,Pi=we,Ii=_e||be?"cssFloat":"float",Ri=Ni&&!Ee&&!we&&"draggable"in document.createElement("div"),Vi=function(){if(Ni){if(be)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Hi=function(t,e){var i=Ne(t),n=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=je(t,0,e),r=je(t,1,e),a=o&&Ne(o),s=r&&Ne(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Ve(o).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Ve(r).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return o&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=n&&"none"===i[Ii]||r&&"none"===i[Ii]&&l+c>n)?"vertical":"horizontal"},ji=function(t){function e(t,i){return function(n,o,r,a){var s=n.options.group.name&&o.options.group.name&&n.options.group.name===o.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(n,o,r,a),i)(n,o,r,a);var l=(i?n:o).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},n=t.group;n&&"object"==pe(n)||(n={name:n}),i.name=n.name,i.checkPull=e(n.pull,!0),i.checkPut=e(n.put),i.revertClone=n.revertClone,t.group=i},Li=function(){!Vi&&ii&&Ne(ii,"display","none")},zi=function(){!Vi&&ii&&Ne(ii,"display","")};Ni&&!Ee&&document.addEventListener("click",(function(t){if(Ai)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Ai=!1,!1}),!0);var Bi=function(t){if(ti){var e=function(t,e){var i;return Si.some((function(n){var o=n[qe].options.emptyInsertThreshold;if(o&&!Le(n)){var r=Ve(n),a=t>=r.left-o&&t<=r.right+o,s=e>=r.top-o&&e<=r.bottom+o;return a&&s?i=n:void 0}})),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[qe]._onDragOver(i)}}},Ui=function(t){ti&&ti.parentNode[qe]._isOutsideThisEl(t.target)};function Wi(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=ge({},e),t[qe]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Hi(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Wi.supportPointer&&"PointerEvent"in window&&!$e,emptyInsertThreshold:5};for(var n in Ke.initializePlugins(this,t,i),i)!(n in e)&&(e[n]=i[n]);for(var o in ji(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&Ri,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Ce(t,"pointerdown",this._onTapStart):(Ce(t,"mousedown",this._onTapStart),Ce(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Ce(t,"dragover",this),Ce(t,"dragenter",this)),Si.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),ge(this,Fe())}function Xi(t,e,i,n,o,r,a,s){var l,c,d=t[qe],h=d.options.onMove;return!window.CustomEvent||be||_e?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=n,l.related=o||e,l.relatedRect=r||Ve(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function qi(t){t.draggable=!1}function Fi(){Di=!1}function Yi(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,n=0;i--;)n+=e.charCodeAt(i);return n.toString(36)}function Gi(t){return setTimeout(t,0)}function Ki(t){return clearTimeout(t)}Wi.prototype={constructor:Wi,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||($i=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,ti):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,n=this.options,o=n.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=n.filter;if(function(t){Mi.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var n=e[i];n.checked&&Mi.push(n)}}(i),!ti&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||n.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!$e||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Oe(s,n.draggable,i,!1))&&s.animated||ri===s)){if(li=ze(s),di=ze(s,n.draggable),"function"==typeof c){if(c.call(this,t,s,this))return Qe({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),Je("filter",e,{evt:t}),void(o&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some((function(n){if(n=Oe(l,n.trim(),i,!1))return Qe({sortable:e,rootEl:n,name:"filter",targetEl:s,fromEl:i,toEl:i}),Je("filter",e,{evt:t}),!0}))))return void(o&&t.cancelable&&t.preventDefault());n.handle&&!Oe(l,n.handle,i,!1)||this._prepareDragStart(t,a,s)}}},_prepareDragStart:function(t,e,i){var n,o=this,r=o.el,a=o.options,s=r.ownerDocument;if(i&&!ti&&i.parentNode===r){var l=Ve(i);if(ni=r,ei=(ti=i).parentNode,oi=ti.nextSibling,ri=i,ui=a.group,Wi.dragged=ti,fi={target:ti,clientX:(e||t).clientX,clientY:(e||t).clientY},bi=fi.clientX-l.left,_i=fi.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,ti.style["will-change"]="all",n=function(){Je("delayEnded",o,{evt:t}),Wi.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),!ye&&o.nativeDraggable&&(ti.draggable=!0),o._triggerDragStart(t,e),Qe({sortable:o,name:"choose",originalEvent:t}),Me(ti,a.chosenClass,!0))},a.ignore.split(",").forEach((function(t){Ie(ti,t.trim(),qi)})),Ce(s,"dragover",Bi),Ce(s,"mousemove",Bi),Ce(s,"touchmove",Bi),Ce(s,"mouseup",o._onDrop),Ce(s,"touchend",o._onDrop),Ce(s,"touchcancel",o._onDrop),ye&&this.nativeDraggable&&(this.options.touchStartThreshold=4,ti.draggable=!0),Je("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(_e||be))n();else{if(Wi.eventCanceled)return void this._onDrop();Ce(s,"mouseup",o._disableDelayedDrag),Ce(s,"touchend",o._disableDelayedDrag),Ce(s,"touchcancel",o._disableDelayedDrag),Ce(s,"mousemove",o._delayedDragTouchMoveHandler),Ce(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&Ce(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(n,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){ti&&qi(ti),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;Ae(t,"mouseup",this._disableDelayedDrag),Ae(t,"touchend",this._disableDelayedDrag),Ae(t,"touchcancel",this._disableDelayedDrag),Ae(t,"mousemove",this._delayedDragTouchMoveHandler),Ae(t,"touchmove",this._delayedDragTouchMoveHandler),Ae(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?Ce(document,"pointermove",this._onTouchMove):Ce(document,e?"touchmove":"mousemove",this._onTouchMove):(Ce(ti,"dragend",this),Ce(ni,"dragstart",this._onDragStart));try{document.selection?Gi((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(Ci=!1,ni&&ti){Je("dragStarted",this,{evt:e}),this.nativeDraggable&&Ce(document,"dragover",Ui);var i=this.options;!t&&Me(ti,i.dragClass,!1),Me(ti,i.ghostClass,!0),Wi.active=this,t&&this._appendGhost(),Qe({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(gi){this._lastX=gi.clientX,this._lastY=gi.clientY,Li();for(var t=document.elementFromPoint(gi.clientX,gi.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(gi.clientX,gi.clientY))!==e;)e=t;if(ti.parentNode[qe]._isOutsideThisEl(t),e)do{if(e[qe]){if(e[qe]._onDragOver({clientX:gi.clientX,clientY:gi.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);zi()}},_onTouchMove:function(t){if(fi){var e=this.options,i=e.fallbackTolerance,n=e.fallbackOffset,o=t.touches?t.touches[0]:t,r=ii&&Pe(ii,!0),a=ii&&r&&r.a,s=ii&&r&&r.d,l=Pi&&xi&&Be(xi),c=(o.clientX-fi.clientX+n.x)/(a||1)+(l?l[0]-Ti[0]:0)/(a||1),d=(o.clientY-fi.clientY+n.y)/(s||1)+(l?l[1]-Ti[1]:0)/(s||1);if(!Wi.active&&!Ci){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(ii){r?(r.e+=c-(vi||0),r.f+=d-(mi||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");Ne(ii,"webkitTransform",h),Ne(ii,"mozTransform",h),Ne(ii,"msTransform",h),Ne(ii,"transform",h),vi=c,mi=d,gi=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!ii){var t=this.options.fallbackOnBody?document.body:ni,e=Ve(ti,!0,Pi,!0,t),i=this.options;if(Pi){for(xi=t;"static"===Ne(xi,"position")&&"none"===Ne(xi,"transform")&&xi!==document;)xi=xi.parentNode;xi!==document.body&&xi!==document.documentElement?(xi===document&&(xi=Re()),e.top+=xi.scrollTop,e.left+=xi.scrollLeft):xi=Re(),Ti=Be(xi)}Me(ii=ti.cloneNode(!0),i.ghostClass,!1),Me(ii,i.fallbackClass,!0),Me(ii,i.dragClass,!0),Ne(ii,"transition",""),Ne(ii,"transform",""),Ne(ii,"box-sizing","border-box"),Ne(ii,"margin",0),Ne(ii,"top",e.top),Ne(ii,"left",e.left),Ne(ii,"width",e.width),Ne(ii,"height",e.height),Ne(ii,"opacity","0.8"),Ne(ii,"position",Pi?"absolute":"fixed"),Ne(ii,"zIndex","100000"),Ne(ii,"pointerEvents","none"),Wi.ghost=ii,t.appendChild(ii),Ne(ii,"transform-origin",bi/parseInt(ii.style.width)*100+"% "+_i/parseInt(ii.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,n=t.dataTransfer,o=i.options;Je("dragStart",this,{evt:t}),Wi.eventCanceled?this._onDrop():(Je("setupClone",this),Wi.eventCanceled||((ai=Xe(ti)).removeAttribute("id"),ai.draggable=!1,ai.style["will-change"]="",this._hideClone(),Me(ai,this.options.chosenClass,!1),Wi.clone=ai),i.cloneId=Gi((function(){Je("clone",i),Wi.eventCanceled||(i.options.removeCloneOnHide||ni.insertBefore(ai,ti),i._hideClone(),Qe({sortable:i,name:"clone"}))})),!e&&Me(ti,o.dragClass,!0),e?(Ai=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Ae(document,"mouseup",i._onDrop),Ae(document,"touchend",i._onDrop),Ae(document,"touchcancel",i._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(i,n,ti)),Ce(document,"drop",i),Ne(ti,"transform","translateZ(0)")),Ci=!0,i._dragStartId=Gi(i._dragStarted.bind(i,e,t)),Ce(document,"selectstart",i),yi=!0,$e&&Ne(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,n,o,r=this.el,a=t.target,s=this.options,l=s.group,c=Wi.active,d=ui===l,h=s.sort,u=pi||c,p=this,f=!1;if(!Di){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=Oe(a,s.draggable,r,!0),O("dragOver"),Wi.eventCanceled)return f;if(ti.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return D(!1);if(Ai=!1,c&&!s.disabled&&(d?h||(n=ei!==ni):pi===this||(this.lastPutMode=ui.checkPull(this,c,ti,t))&&l.checkPut(this,c,ti,t))){if(o="vertical"===this._getDirection(t,a),e=Ve(ti),O("dragOverValid"),Wi.eventCanceled)return f;if(n)return ei=ni,T(),this._hideClone(),O("revert"),Wi.eventCanceled||(oi?ni.insertBefore(ti,oi):ni.appendChild(ti)),D(!0);var g=Le(r,s.draggable);if(!g||function(t,e,i){var n=Ve(Le(i.el,i.options.draggable)),o=10;return e?t.clientX>n.right+o||t.clientX<=n.right&&t.clientY>n.bottom&&t.clientX>=n.left:t.clientX>n.right&&t.clientY>n.top||t.clientX<=n.right&&t.clientY>n.bottom+o}(t,o,this)&&!g.animated){if(g===ti)return D(!1);if(g&&r===t.target&&(a=g),a&&(i=Ve(a)),!1!==Xi(ni,r,ti,e,a,i,t,!!a))return T(),g&&g.nextSibling?r.insertBefore(ti,g.nextSibling):r.appendChild(ti),ei=r,M(),D(!0)}else if(g&&function(t,e,i){var n=Ve(je(i.el,0,i.options,!0)),o=10;return e?t.clientX<n.left-o||t.clientY<n.top&&t.clientX<n.right:t.clientY<n.top-o||t.clientY<n.bottom&&t.clientX<n.left}(t,o,this)){var v=je(r,0,s,!0);if(v===ti)return D(!1);if(i=Ve(a=v),!1!==Xi(ni,r,ti,e,a,i,t,!1))return T(),r.insertBefore(ti,v),ei=r,M(),D(!0)}else if(a.parentNode===r){i=Ve(a);var m,b,_,y=ti.parentNode!==r,$=!function(t,e,i){var n=i?t.left:t.top,o=i?t.right:t.bottom,r=i?t.width:t.height,a=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return n===a||o===s||n+r/2===a+l/2}(ti.animated&&ti.toRect||e,a.animated&&a.toRect||i,o),w=o?"top":"left",E=He(a,"top","top")||He(ti,"top","top"),x=E?E.scrollTop:void 0;if($i!==a&&(b=i[w],ki=!1,Oi=!$&&s.invertSwap||y),m=function(t,e,i,n,o,r,a,s){var l=n?t.clientY:t.clientX,c=n?i.height:i.width,d=n?i.top:i.left,h=n?i.bottom:i.right,u=!1;if(!a)if(s&&Ei<c*o){if(!ki&&(1===wi?l>d+c*r/2:l<h-c*r/2)&&(ki=!0),ki)u=!0;else if(1===wi?l<d+Ei:l>h-Ei)return-wi}else if(l>d+c*(1-o)/2&&l<h-c*(1-o)/2)return function(t){return ze(ti)<ze(t)?1:-1}(e);if((u=u||a)&&(l<d+c*r/2||l>h-c*r/2))return l>d+c/2?1:-1;return 0}(t,a,i,o,$?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Oi,$i===a),0!==m){var C=ze(ti);do{C-=m,_=ei.children[C]}while(_&&("none"===Ne(_,"display")||_===ii))}if(0===m||_===a)return D(!1);$i=a,wi=m;var A=a.nextElementSibling,S=!1,k=Xi(ni,r,ti,e,a,i,t,S=1===m);if(!1!==k)return 1!==k&&-1!==k||(S=1===k),Di=!0,setTimeout(Fi,30),T(),S&&!A?r.appendChild(ti):a.parentNode.insertBefore(ti,S?A:a),E&&function(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}(E,0,x-E.scrollTop),ei=ti.parentNode,void 0===b||Oi||(Ei=Math.abs(b-Ve(a)[w])),M(),D(!0)}if(r.contains(ti))return D(!1)}return!1}function O(s,l){Je(s,p,ue({evt:t,isOwner:d,axis:o?"vertical":"horizontal",revert:n,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:a,completed:D,onMove:function(i,n){return Xi(ni,r,ti,e,i,Ve(i),t,n)},changed:M},l))}function T(){O("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function D(e){return O("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(Me(ti,pi?pi.options.ghostClass:c.options.ghostClass,!1),Me(ti,s.ghostClass,!0)),pi!==p&&p!==Wi.active?pi=p:p===Wi.active&&pi&&(pi=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll((function(){O("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a===ti&&!ti.animated||a===r&&!a.animated)&&($i=null),s.dragoverBubble||t.rootEl||a===document||(ti.parentNode[qe]._isOutsideThisEl(t.target),!e&&Bi(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),f=!0}function M(){ci=ze(ti),hi=ze(ti,s.draggable),Qe({sortable:p,name:"change",toEl:r,newIndex:ci,newDraggableIndex:hi,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Ae(document,"mousemove",this._onTouchMove),Ae(document,"touchmove",this._onTouchMove),Ae(document,"pointermove",this._onTouchMove),Ae(document,"dragover",Bi),Ae(document,"mousemove",Bi),Ae(document,"touchmove",Bi)},_offUpEvents:function(){var t=this.el.ownerDocument;Ae(t,"mouseup",this._onDrop),Ae(t,"touchend",this._onDrop),Ae(t,"pointerup",this._onDrop),Ae(t,"touchcancel",this._onDrop),Ae(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;ci=ze(ti),hi=ze(ti,i.draggable),Je("drop",this,{evt:t}),ei=ti&&ti.parentNode,ci=ze(ti),hi=ze(ti,i.draggable),Wi.eventCanceled||(Ci=!1,Oi=!1,ki=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Ki(this.cloneId),Ki(this._dragStartId),this.nativeDraggable&&(Ae(document,"drop",this),Ae(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),$e&&Ne(document.body,"user-select",""),Ne(ti,"transform",""),t&&(yi&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),ii&&ii.parentNode&&ii.parentNode.removeChild(ii),(ni===ei||pi&&"clone"!==pi.lastPutMode)&&ai&&ai.parentNode&&ai.parentNode.removeChild(ai),ti&&(this.nativeDraggable&&Ae(ti,"dragend",this),qi(ti),ti.style["will-change"]="",yi&&!Ci&&Me(ti,pi?pi.options.ghostClass:this.options.ghostClass,!1),Me(ti,this.options.chosenClass,!1),Qe({sortable:this,name:"unchoose",toEl:ei,newIndex:null,newDraggableIndex:null,originalEvent:t}),ni!==ei?(ci>=0&&(Qe({rootEl:ei,name:"add",toEl:ei,fromEl:ni,originalEvent:t}),Qe({sortable:this,name:"remove",toEl:ei,originalEvent:t}),Qe({rootEl:ei,name:"sort",toEl:ei,fromEl:ni,originalEvent:t}),Qe({sortable:this,name:"sort",toEl:ei,originalEvent:t})),pi&&pi.save()):ci!==li&&ci>=0&&(Qe({sortable:this,name:"update",toEl:ei,originalEvent:t}),Qe({sortable:this,name:"sort",toEl:ei,originalEvent:t})),Wi.active&&(null!=ci&&-1!==ci||(ci=li,hi=di),Qe({sortable:this,name:"end",toEl:ei,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){Je("nulling",this),ni=ti=ei=ii=oi=ai=ri=si=fi=gi=yi=ci=hi=li=di=$i=wi=pi=ui=Wi.dragged=Wi.ghost=Wi.clone=Wi.active=null,Mi.forEach((function(t){t.checked=!0})),Mi.length=vi=mi=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":ti&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,n=0,o=i.length,r=this.options;n<o;n++)Oe(t=i[n],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Yi(t));return e},sort:function(t,e){var i={},n=this.el;this.toArray().forEach((function(t,e){var o=n.children[e];Oe(o,this.options.draggable,n,!1)&&(i[t]=o)}),this),e&&this.captureAnimationState(),t.forEach((function(t){i[t]&&(n.removeChild(i[t]),n.appendChild(i[t]))})),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return Oe(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var n=Ke.modifyOption(this,t,e);i[t]=void 0!==n?n:e,"group"===t&&ji(i)},destroy:function(){Je("destroy",this);var t=this.el;t[qe]=null,Ae(t,"mousedown",this._onTapStart),Ae(t,"touchstart",this._onTapStart),Ae(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Ae(t,"dragover",this),Ae(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),Si.splice(Si.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!si){if(Je("hideClone",this),Wi.eventCanceled)return;Ne(ai,"display","none"),this.options.removeCloneOnHide&&ai.parentNode&&ai.parentNode.removeChild(ai),si=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(si){if(Je("showClone",this),Wi.eventCanceled)return;ti.parentNode!=ni||this.options.group.revertClone?oi?ni.insertBefore(ai,oi):ni.appendChild(ai):ni.insertBefore(ai,ti),this.options.group.revertClone&&this.animate(ti,ai),Ne(ai,"display",""),si=!1}}else this._hideClone()}},Ni&&Ce(document,"touchmove",(function(t){(Wi.active||Ci)&&t.cancelable&&t.preventDefault()})),Wi.utils={on:Ce,off:Ae,css:Ne,find:Ie,is:function(t,e){return!!Oe(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:function(t,e){return function(){if(!Te){var i=arguments,n=this;1===i.length?t.call(n,i[0]):t.apply(n,i),Te=setTimeout((function(){Te=void 0}),e)}}},closest:Oe,toggleClass:Me,clone:Xe,index:ze,nextTick:Gi,cancelNextTick:Ki,detectDirection:Hi,getChild:je},Wi.get=function(t){return t[qe]},Wi.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Wi.utils=ue(ue({},Wi.utils),t.utils)),Ke.mount(t)}))},Wi.create=function(t,e){return new Wi(t,e)},Wi.version="1.15.0";var Zi=function(t){var e=t.originalEvent,i=t.putSortable,n=t.dragEl,o=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||o;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:n,putSortable:i}))}};function Ji(){}function Qi(){}Ji.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var n=je(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(e,n):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:Zi},ge(Ji,{pluginName:"revertOnSpill"}),Qi.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:Zi},ge(Qi,{pluginName:"removeOnSpill"});const tn=["none","flash","slide"],en=["none","card","bars"],nn=["autarky","ratio",""],on=["more-info","toggle","navigate","url","call-service","none"];let rn=class extends Z{constructor(){super(...arguments),this._subElementEditor=void 0,this._renderEmptySortable=!1,this._attached=!1}setConfig(t){this._config=t}async firstUpdated(){await this.loadCardHelpers();try{await this._helpers.createCardElement({type:"button",entity:"demo.demo"})}catch(t){}customElements&&await customElements.get("hui-button-card").getConfigElement()}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}render(){var t,e,i,n,o,r,a,s,l,c;return this.hass?this._subElementEditor?this._renderSubElementEditor():M`
      <div class="card-config">
        <ha-textfield
          label="${Dt("editor.settings.title")} (${Dt("editor.optional")})"
          .value=${(null===(t=this._config)||void 0===t?void 0:t.title)||""}
          .configValue=${"title"}
          @input=${this._valueChanged}
        ></ha-textfield>
        <ha-select
          naturalMenuWidth
          fixedMenuPosition
          label="${Dt("editor.settings.animation")}"
          .configValue=${"animation"}
          .value=${(null===(e=this._config)||void 0===e?void 0:e.animation)||"flash"}
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${tn.map((t=>M`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
        <br />
        <div class="entity row">
          <ha-select
            label="${Dt("editor.settings.center")}"
            .configValue=${"type"}
            @selected=${this._centerChanged}
            @closed=${t=>t.stopPropagation()}
            .value=${(null===(n=null===(i=this._config)||void 0===i?void 0:i.center)||void 0===n?void 0:n.type)||"none"}
          >
            ${en.map((t=>M`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
          </ha-select>
          ${"bars"==(null===(r=null===(o=this._config)||void 0===o?void 0:o.center)||void 0===r?void 0:r.type)||"card"==(null===(s=null===(a=this._config)||void 0===a?void 0:a.center)||void 0===s?void 0:s.type)?M`<ha-icon-button
                class="edit-icon"
                .value=${null===(c=null===(l=this._config)||void 0===l?void 0:l.center)||void 0===c?void 0:c.type}
                .path=${de}
                @click="${this._editCenter}"
              ></ha-icon-button>`:""}
        </div>
        <br />
        ${this._renderEntitiesEditor()}
      </div>
    `:M``}_centerChanged(t){if(this._config&&this.hass){if(t.target){const e=t.target;e.configValue&&(this._config=Object.assign(Object.assign({},this._config),{center:Object.assign(Object.assign({},this._config.center),{[e.configValue]:void 0!==e.checked?e.checked:e.value})}))}ut(this,"config-changed",{config:this._config})}}_editCenter(t){if(t.currentTarget){const e=t.currentTarget;this._subElementEditor={type:e.value}}}_renderSubElementEditor(){var t;const e=[M`<div class="header">
        <div class="back-title">
          <mwc-icon-button @click=${this._goBack}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </mwc-icon-button>
        </div>
      </div>`];switch(null===(t=this._subElementEditor)||void 0===t?void 0:t.type){case"entity":e.push(this._entityEditor());break;case"bars":e.push(this._barEditor());break;case"card":e.push(this._cardEditor())}return M`${e}`}_goBack(){var t;this._subElementEditor=void 0,null===(t=this._sortable)||void 0===t||t.destroy(),this._sortable=void 0,this._sortable=this._createSortable()}_itemEntityChanged(t){var e,i;if(!t.target)return;const n=t.target;if(!n.configValue)return;const o=n.i||(null===(e=this._subElementEditor)||void 0===e?void 0:e.index)||0,r=n.configValue.split("."),a=null!=n.checked?n.checked:n.value||(null===(i=t.detail)||void 0===i?void 0:i.value),s=this._config.entities[o][r[0]]||void 0;if((s?r[1]?s[r[1]]:s:void 0)==a)return;const l=[...this._config.entities];l[o]=Object.assign(Object.assign({},l[o]),{[r[0]]:r[1]?Object.assign(Object.assign({},l[o][r[0]]),{[r[1]]:a}):a}),ut(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{entities:l})})}_entityEditor(){var t,e,i,n,o,r,a,s,l;const c=this._config.entities[(null===(t=this._subElementEditor)||void 0===t?void 0:t.index)||0],d=Object.keys(Object.assign({},null===(e=this.hass)||void 0===e?void 0:e.states[c.entity||0].attributes))||[],h=c.secondary_info_entity?Object.keys(Object.assign({},null===(i=this.hass)||void 0===i?void 0:i.states[c.secondary_info_entity||0].attributes)):[];return M`
      <div class="side-by-side">
        <ha-icon-picker
          .label="${Dt("editor.settings.icon")}  (${Dt("editor.optional")})"
          .value=${c.icon}
          .configValue=${"icon"}
          @value-changed=${this._itemEntityChanged}
        ></ha-icon-picker>
        <ha-textfield
          label="${Dt("editor.settings.name")} (${Dt("editor.optional")})"
          .value=${c.name||void 0}
          .configValue=${"name"}
          @input=${this._itemEntityChanged}
        ></ha-textfield>
      </div>
      <div class="side-by-side">
        <ha-entity-picker
          label="${Dt("editor.settings.entity")} (${Dt("editor.required")})"
          allow-custom-entity
          hideClearIcon
          .hass=${this.hass}
          .configValue=${"entity"}
          .value=${c.entity}
          @value-changed=${this._itemEntityChanged}
        ></ha-entity-picker>
        <ha-select
          label="${Dt("editor.settings.attribute")} (${Dt("editor.optional")})"
          .configValue=${"attribute"}
          .value=${c.attribute||""}
          @selected=${this._itemEntityChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${d.length>0?M`<mwc-list-item></mwc-list-item>`:""}
          ${d.map((t=>M`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
      </div>
      <div class="side-by-side">
        <ha-select
          label="${Dt("editor.settings.preset")}"
          .configValue=${"preset"}
          .value=${c.preset||bt[0]}
          @selected=${this._itemEntityChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${bt.map((t=>M`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
        <div class="checkbox">
          <input
            type="checkbox"
            id="hide-arrows"
            .checked="${c.hide_arrows||!1}"
            .configValue=${"hide_arrows"}
            @change=${this._itemEntityChanged}
          />
          <label for="invert-value"> ${Dt("editor.settings.hide-arrows")}</label>
        </div>
      </div>
      <div class="side-by-side">
        ${"battery"===c.preset?M`
                <ha-entity-picker
                  label="${Dt("editor.settings.battery_percentage")} (${Dt("editor.optional")})"
                  allow-custom-entity
                  hideClearIcon
                  .hass=${this.hass}
                  .configValue=${"battery_percentage_entity"}
                  .value=${c.battery_percentage_entity||""}
                  @value-changed=${this._itemEntityChanged}
                ></ha-entity-picker>
              `:"grid"===c.preset?M`
                <ha-entity-picker
                  label="${Dt("editor.settings.grid-buy")} (${Dt("editor.optional")})"
                  allow-custom-entity
                  hideClearIcon
                  .hass=${this.hass}
                  .configValue=${"grid_buy_entity"}
                  .value=${c.grid_buy_entity||""}
                  @value-changed=${this._itemEntityChanged}
                ></ha-entity-picker>
                <ha-entity-picker
                  label="${Dt("editor.settings.grid-sell")} (${Dt("editor.optional")})"
                  allow-custom-entity
                  hideClearIcon
                  .hass=${this.hass}
                  .configValue=${"grid_sell_entity"}
                  .value=${c.grid_sell_entity||""}
                  @value-changed=${this._itemEntityChanged}
                ></ha-entity-picker>
              `:M``}
      </div>
      <br /><br />
      <h3>${Dt("editor.settings.value",!0)} ${Dt("editor.settings.settings",!0)}</h3>
      <div class="side-by-side">
        <ha-textfield
          label="${Dt("editor.settings.unit_of_display")}"
          .value=${c.unit_of_display||""}
          .configValue=${"unit_of_display"}
          @input=${this._itemEntityChanged}
        ></ha-textfield>
        <ha-textfield
          auto-validate
          pattern="[0-9]"
          label="${Dt("editor.settings.decimals")}"
          .value=${c.decimals||""}
          .configValue=${"decimals"}
          @input=${this._itemEntityChanged}
        ></ha-textfield>
      </div>
      <div class="side-by-side">
        <div class="checkbox">
          <input
            type="checkbox"
            id="invert-value"
            .checked="${c.invert_value||!1}"
            .configValue=${"invert_value"}
            @change=${this._itemEntityChanged}
          />
          <label for="invert-value"> ${Dt("editor.settings.invert-value")}</label>
        </div>
        <div class="checkbox">
          <input
            type="checkbox"
            id="display-abs"
            .checked="${0!=c.display_abs}"
            .configValue=${"display_abs"}
            @change=${this._itemEntityChanged}
          />
          <label for="display-abs"> ${Dt("editor.settings.display-abs")} </label>
        </div>
      </div>
      <div class="side-by-side">
        <div class="checkbox">
          <input
            type="checkbox"
            id="calc_excluded"
            .checked="${c.calc_excluded}"
            .configValue=${"calc_excluded"}
            @change=${this._itemEntityChanged}
          />
          <label for="calc_excluded"> ${Dt("editor.settings.calc_excluded")} </label>
        </div>
        <ha-textfield
          label="${Dt("editor.settings.threshold")}"
          .value=${c.threshold||""}
          .configValue=${"threshold"}
          @input=${this._itemEntityChanged}
        ></ha-textfield>
      </div>
      <br />
      <h3>${Dt("editor.settings.secondary-info",!0)}</h3>
      <div class="side-by-side">
        <ha-entity-picker
          label="${Dt("editor.settings.entity")}"
          allow-custom-entity
          hideClearIcon
          .hass=${this.hass}
          .configValue=${"secondary_info_entity"}
          .value=${c.secondary_info_entity}
          @value-changed=${this._itemEntityChanged}
        ></ha-entity-picker>
        <ha-select
          allow-custom-entity
          label="${Dt("editor.settings.attribute")} (${Dt("editor.optional")})"
          .value=${c.secondary_info_attribute||""}
          .configValue=${"secondary_info_attribute"}
          @value-changed=${this._itemEntityChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${h.length>0?M`<mwc-list-item></mwc-list-item>`:void 0}
          ${h.map((t=>M`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
      </div>
      <div class="checkbox">
        <input
          type="checkbox"
          id="hide-arrows"
          .checked="${c.secondary_info_replace_name||!1}"
          .configValue=${"secondary_info_replace_name"}
          @change=${this._itemEntityChanged}
        />
        <label for="invert-value"> ${Dt("editor.settings.replace_name")}</label>
      </div>
      <br />
      <h3>${Dt("editor.settings.color-settings",!0)}</h3>
      <ha-textfield
        label="${Dt("editor.settings.color_threshold")}"
        .value=${c.color_threshold||0}
        .configValue=${"color_threshold"}
        @input=${this._itemEntityChanged}
      ></ha-textfield>
      <table>
        <tr>
          <th>Element</th>
          <th>&gt; ${c.color_threshold||0}</th>
          <th>= ${c.color_threshold||0}</th>
          <th>&lt; ${c.color_threshold||0}</th>
        </tr>
        <tr>
          <th>icon</th>
          <td>
            <ha-textfield
              label="${Dt("editor.settings.bigger")}"
              .value=${(null===(n=c.icon_color)||void 0===n?void 0:n.bigger)||""}
              .configValue=${"icon_color.bigger"}
              @input=${this._itemEntityChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Dt("editor.settings.equal")}"
              .value=${(null===(o=c.icon_color)||void 0===o?void 0:o.equal)||""}
              .configValue=${"icon_color.equal"}
              @input=${this._itemEntityChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Dt("editor.settings.smaller")}"
              .value=${(null===(r=c.icon_color)||void 0===r?void 0:r.smaller)||""}
              .configValue=${"icon_color.smaller"}
              @input=${this._itemEntityChanged}
            ></ha-textfield>
          </td>
        </tr>
        <tr>
          <th>arrows</th>
          <td>
            <ha-textfield
              label="${Dt("editor.settings.bigger")}"
              .value=${(null===(a=c.arrow_color)||void 0===a?void 0:a.bigger)||""}
              .configValue=${"arrow_color.bigger"}
              @input=${this._itemEntityChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Dt("editor.settings.equal")}"
              .value=${(null===(s=c.arrow_color)||void 0===s?void 0:s.equal)||""}
              .configValue=${"arrow_color.equal"}
              @input=${this._itemEntityChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Dt("editor.settings.smaller")}"
              .value=${(null===(l=c.arrow_color)||void 0===l?void 0:l.smaller)||""}
              .configValue=${"arrow_color.smaller"}
              @input=${this._itemEntityChanged}
            ></ha-textfield>
          </td>
        </tr>
      </table>
      <br />
      <h3>${Dt("editor.settings.action_settings")}</h3>
      <div class="side-by-side">
        <hui-action-editor
          .hass=${this.hass}
          .config=${c.tap_action||{action:"more-info"}}
          .actions=${on}
          .configValue=${"tap_action"}
          @value-changed=${this._itemEntityChanged}
        >
        </hui-action-editor>
        <hui-action-editor
          .hass=${this.hass}
          .config=${c.double_tap_action}
          .actions=${on}
          .configValue=${"double_tap_action"}
          @value-changed=${this._itemEntityChanged}
        >
        </hui-action-editor>
      </div>
    `}_barChanged(t){var e;if(!t.target)return;const i=t.target;if(!i.configValue)return;let n;if("content"==i.configValue)n=i.value;else{n=[...this._config.center.content];const t=i.i||(null===(e=this._subElementEditor)||void 0===e?void 0:e.index)||0;n[t]=Object.assign(Object.assign({},n[t]),{[i.configValue]:null!=i.checked?i.checked:i.value})}this._config=Object.assign(Object.assign({},this._config),{center:{type:"bars",content:n}}),ut(this,"config-changed",{config:this._config})}_removeBar(t){var e;const i=(null===(e=t.currentTarget)||void 0===e?void 0:e.i)||0,n=[...this._config.center.content];n.splice(i,1),this._barChanged({target:{configValue:"content",value:n}})}async _addBar(){const t=Object.assign({},{name:"Name",preset:"custom"}),e=[...this._config.center.content||[],t];this._barChanged({target:{configValue:"content",value:e}})}_barEditor(){const t=[];return this._config.center.content&&this._config.center.content.forEach(((e,i)=>t.push(M`
        <div class="bar-editor">
          <h3 style="margin-bottom:6px;">Bar ${i+1}
          <ha-icon-button
            label=${Dt("editor.actions.remove")}
            class="remove-icon"
            .i=${i}
            .path=${ce}
            @click=${this._removeBar}
            >
          </ha-icon-button>
          </h4>
          <div class="side-by-side">
            <ha-textfield
              label="${Dt("editor.settings.name")} (${Dt("editor.optional")})"
              .value=${e.name||""}
              .configValue=${"name"}
              @input=${this._barChanged}
              .i=${i}
            ></ha-textfield>
            <ha-entity-picker
              label="${Dt("editor.settings.entity")}"
              allow-custom-entity
              hideClearIcon
              .hass=${this.hass}
              .configValue=${"entity"}
              .value=${e.entity}
              @value-changed=${this._barChanged}
              .i=${i}
            ></ha-entity-picker>
          </div>
          <div class="side-by-side">
            <div class="checkbox">
              <input
                type="checkbox"
                id="invert-value"
                .checked="${e.invert_value||!1}"
                .configValue=${"invert_value"}
                @change=${this._barChanged}
                .i=${i}
              />
              <label for="invert-value"> ${Dt("editor.settings.invert-value")}</label>
            </div>
            <div>
            <ha-select
              label="${Dt("editor.settings.preset")}"
              .configValue=${"preset"}
              .value=${e.preset||""}
              @selected=${this._barChanged}
              @closed=${t=>t.stopPropagation()}
              .i=${i}
            >
              ${nn.map((t=>M`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
            </ha-select>
          </div>
          </div>
          <div class="side-by-side">
            <ha-textfield
              label="${Dt("editor.settings.color")}"
              .value=${e.bar_color||""}
              .configValue=${"bar_color"}
              @input=${this._barChanged}
              .i=${i}
            ></ha-textfield>
            <ha-textfield
              .label="${Dt("editor.settings.background_color")}"
              .value=${e.bar_bg_color||""}
              .configValue=${"bar_bg_color"}
              @input=${this._barChanged}
              .i=${i}
            ></ha-textfield>
          </div>
          <h3>${Dt("editor.settings.action_settings")}</h3>
      <div class="side-by-side">
        <hui-action-editor
          .hass=${this.hass}
          .config=${e.tap_action}
          .actions=${on}
          .configValue=${"tap_action"}
          @value-changed=${this._barChanged}
          .i=${i}
        >
        </hui-action-editor>
        <hui-action-editor
          .hass=${this.hass}
          .config=${e.double_tap_action}
          .actions=${on}
          .configValue=${"double_tap_action"}
          @value-changed=${this._barChanged}
          .i=${i}
        >
        </hui-action-editor>
      </div>
        </div>
        <br/>
      `))),t.push(M`
      <mwc-icon-button aria-label=${Dt("editor.actions.add")} class="add-icon" @click="${this._addBar}">
        <ha-icon icon="mdi:plus-circle-outline"></ha-icon>
      </mwc-icon-button>
    `),M`${t.map((t=>M`${t}`))}`}_cardEditor(){return M`
      Sadly you cannot edit cards from the visual editor yet.
      <p />
      Check out the
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/JonahKr/power-distribution-card#cards-"
        >Readme</a
      >
      to check out the latest and best way to add it.
    `}_renderEntitiesEditor(){return M`
      <h3>
        ${Dt("editor.settings.entities")}
      </h3>
      <div class="entities">
          ${le([this._config.entities,this._renderEmptySortable],(()=>this._renderEmptySortable?"":this._config.entities.map(((t,e)=>M`
                    <div class="entity">
                      <ha-icon class="handle" icon="mdi:drag"></ha-icon>

                      <ha-entity-picker
                        label="Entity - ${t.preset}"
                        allow-custom-entity
                        hideClearIcon
                        .hass=${this.hass}
                        .configValue=${"entity"}
                        .value=${t.entity}
                        .i=${e}
                        @value-changed=${this._itemEntityChanged}
                      ></ha-entity-picker>

                      <ha-icon-button
                        .label=${Dt("editor.actions.remove")}
                        .path=${ce}
                        class="remove-icon"
                        .i=${e}
                        @click=${this._removeRow}
                      ></ha-icon-button>

                      <ha-icon-button
                        .label=${Dt("editor.actions.edit")}
                        .path=${de}
                        class="edit-icon"
                        .i=${e}
                        @click="${this._editRow}"
                      ></ha-icon-button>
                    </div>
                  `))))}
        </div>
      </div>
      <div class="add-item row">
        <ha-select
          label="${Dt("editor.settings.preset")}"
          name="preset"
          class="add-preset"
          naturalMenuWidth
          fixedMenuPosition
          @closed=${t=>t.stopPropagation()}
          >
            ${bt.map((t=>M`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>

        <ha-entity-picker .hass=${this.hass} name="entity" class="add-entity"></ha-entity-picker>

        <ha-icon-button
          .label=${Dt("editor.actions.add")}
          .path=${"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"}
          class="add-icon"
          @click="${this._addEntity}"
          ></ha-icon-button>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._attached=!0}disconnectedCallback(){super.disconnectedCallback(),this._attached=!1}updated(t){var e,i;super.updated(t);const n=t.has("_attached"),o=t.has("_config");if(o||n)return n&&!this._attached?(null===(e=this._sortable)||void 0===e||e.destroy(),void(this._sortable=void 0)):void(this._sortable||!(null===(i=this._config)||void 0===i?void 0:i.entities)?o&&null==this._subElementEditor&&this._handleEntitiesChanged():this._createSortable())}async _handleEntitiesChanged(){var t;this._renderEmptySortable=!0,await this.updateComplete;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".entities");for(;e.lastElementChild;)e.removeChild(e.lastElementChild);this._renderEmptySortable=!1}_createSortable(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".entities");e&&(this._sortable=new Wi(e,{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onEnd:async t=>this._rowMoved(t)}))}_valueChanged(t){if(this._config&&this.hass){if(t.target){const e=t.target;e.configValue&&(this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value}))}ut(this,"config-changed",{config:this._config})}}async _addEntity(){var t,e;const i=(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".add-preset")).value||null,n=(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".add-entity")).value;if(!i||!n)return;const o=Object.assign({},yt,_t[i],{entity:n,preset:i}),r=this._config.entities.concat(o);this._valueChanged({target:{configValue:"entities",value:r}})}_rowMoved(t){if(t.oldIndex===t.newIndex)return;const e=[...this._config.entities];e.splice(t.newIndex,0,e.splice(t.oldIndex,1)[0]),this._valueChanged({target:{configValue:"entities",value:e}})}_removeRow(t){var e;const i=(null===(e=t.currentTarget)||void 0===e?void 0:e.i)||0,n=[...this._config.entities];n.splice(i,1),this._valueChanged({target:{configValue:"entities",value:n}})}_editRow(t){var e;const i=(null===(e=t.currentTarget)||void 0===e?void 0:e.i)||0;this._subElementEditor={type:"entity",index:i}}static get styles(){return[r`
        .checkbox {
          display: flex;
          align-items: center;
          padding: 8px 0;
        }
        .checkbox input {
          height: 20px;
          width: 20px;
          margin-left: 0;
          margin-right: 8px;
        }
      `,r`
        h3 {
          margin-bottom: 0.5em;
        }
        .row {
          margin-bottom: 12px;
          margin-top: 12px;
          display: block;
        }
        .side-by-side {
          display: flex;
        }
        .side-by-side > * {
          flex: 1 1 0%;
          padding-right: 4px;
        }
        .entity,
        .add-item {
          display: flex;
          align-items: center;
        }
        .entity .handle {
          padding-right: 8px;
          cursor: move;
        }
        .entity ha-entity-picker,
        .add-item ha-entity-picker {
          flex-grow: 1;
        }
        .add-preset {
          padding-right: 8px;
          max-width: 130px;
        }
        .remove-icon,
        .edit-icon,
        .add-icon {
          --mdc-icon-button-size: 36px;
          color: var(--secondary-text-color);
        }
        .secondary {
          font-size: 12px;
          color: var(--secondary-text-color);
        }
      `,r`
        #sortable a:nth-of-type(2n) paper-icon-item {
          animation-name: keyframes1;
          animation-iteration-count: infinite;
          transform-origin: 50% 10%;
          animation-delay: -0.75s;
          animation-duration: 0.25s;
        }
        #sortable a:nth-of-type(2n-1) paper-icon-item {
          animation-name: keyframes2;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          transform-origin: 30% 5%;
          animation-delay: -0.5s;
          animation-duration: 0.33s;
        }
        #sortable a {
          height: 48px;
          display: flex;
        }
        #sortable {
          outline: none;
          display: block !important;
        }
        .hidden-panel {
          display: flex !important;
        }
        .sortable-fallback {
          display: none;
        }
        .sortable-ghost {
          opacity: 0.4;
        }
        .sortable-fallback {
          opacity: 0;
        }
        @keyframes keyframes1 {
          0% {
            transform: rotate(-1deg);
            animation-timing-function: ease-in;
          }
          50% {
            transform: rotate(1.5deg);
            animation-timing-function: ease-out;
          }
        }
        @keyframes keyframes2 {
          0% {
            transform: rotate(1deg);
            animation-timing-function: ease-in;
          }
          50% {
            transform: rotate(-1.5deg);
            animation-timing-function: ease-out;
          }
        }
        .show-panel,
        .hide-panel {
          display: none;
          position: absolute;
          top: 0;
          right: 4px;
          --mdc-icon-button-size: 40px;
        }
        :host([rtl]) .show-panel {
          right: initial;
          left: 4px;
        }
        .hide-panel {
          top: 4px;
          right: 8px;
        }
        :host([rtl]) .hide-panel {
          right: initial;
          left: 8px;
        }
        :host([expanded]) .hide-panel {
          display: block;
        }
        :host([expanded]) .show-panel {
          display: inline-flex;
        }
        paper-icon-item.hidden-panel,
        paper-icon-item.hidden-panel span,
        paper-icon-item.hidden-panel ha-icon[slot='item-icon'] {
          color: var(--secondary-text-color);
          cursor: pointer;
        }
      `]}};t([et({attribute:!1})],rn.prototype,"hass",void 0),t([it()],rn.prototype,"_config",void 0),t([it()],rn.prototype,"_subElementEditor",void 0),t([it()],rn.prototype,"_renderEmptySortable",void 0),t([it()],rn.prototype,"_attached",void 0),rn=t([Q("power-distribution-card-editor")],rn),console.info("%c POWER-DISTRIBUTION-CARD %c 2.5.3","font-weight: 500; color: white; background: #03a9f4;","font-weight: 500; color: #03a9f4; background: white;"),window.customCards.push({type:"power-distribution-card",name:"Power Distribution Card",description:Dt("common.description")});let an=class extends Z{constructor(){super(...arguments),this._narrow=!1}static async getConfigElement(){return document.createElement("power-distribution-card-editor")}static getStubConfig(){return{title:"Title",entities:[],center:{type:"bars",content:[{preset:"autarky",name:Dt("editor.settings.autarky")},{preset:"ratio",name:Dt("editor.settings.ratio")}]}}}async setConfig(t){const e=Object.assign({},$t,t,{entities:[]});if(!t.entities)throw new Error("You need to define Entities!");t.entities.forEach((t=>{if(!t.preset||!bt.includes(t.preset))throw new Error("The preset `"+t.preset+"` is not a valid entry. Please choose a Preset from the List.");{const i=Object.assign({},yt,_t[t.preset],t);e.entities.push(i)}})),this._config=e,"card"==this._config.center.type&&(this._card=this._createCardElement(this._config.center.content))}firstUpdated(){this._config.entities.forEach(((t,e)=>{if(!t.entity)return;const i=this._state({entity:t.entity,attribute:"unit_of_measurement"});t.unit_of_measurement||(this._config.entities[e].unit_of_measurement=i||"W")})),this._adjustWidth(),this._attachObserver(),this.requestUpdate()}updated(t){super.updated(t),this._card&&(t.has("hass")||t.has("editMode"))&&this.hass&&(this._card.hass=this.hass)}static get styles(){return wt}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>this._attachObserver()))}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect()}async _attachObserver(){var t;this._resizeObserver||(await(async()=>{"function"!=typeof Qt&&(window.ResizeObserver=(await Promise.resolve().then((function(){return te}))).default)})(),this._resizeObserver=new Qt(function(t,e,i){var n;return void 0===i&&(i=!1),function(){var o=[].slice.call(arguments),r=this,a=function(){n=null,i||t.apply(r,o)},s=i&&!n;clearTimeout(n),n=setTimeout(a,e),s&&t.apply(r,o)}}((()=>this._adjustWidth()),250,!1)));const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&this._resizeObserver.observe(e)}_adjustWidth(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&(this._narrow=e.offsetWidth<400)}_val(t){var e;let i=t.invert_value?-1:1;"k"==(null===(e=t.unit_of_measurement)||void 0===e?void 0:e.charAt(0))&&(i*=1e3);const n=t.attribute||null;let o=t.entity&&this.hass.states[t.entity]?Number(n?this.hass.states[t.entity].attributes[n]:this.hass.states[t.entity].state):NaN;const r=t.threshold||null;return o=r&&Math.abs(o)<r?0:o,o*i}_state(t){return t.entity&&this.hass.states[t.entity]?t.attribute?this.hass.states[t.entity].attributes[t.attribute]:this.hass.states[t.entity].state:null}render(){const t=[],e=[],i=[];let n=0,o=0;this._config.entities.forEach(((e,r)=>{const a=this._val(e);e.calc_excluded||(e.producer&&a>0&&(o+=a),e.consumer&&a<0&&(n-=a));const s=this._render_item(a,e,r);switch(r%2){case 0:t.push(s);break;case 1:i.push(s)}}));switch(this._config.center.type){case"none":break;case"card":this._card?e.push(this._card):console.warn("NO CARD");break;case"bars":e.push(this._render_bars(n,o))}return M` ${this._narrow?Et:void 0}
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          <div id="left-panel">${t}</div>
          <div id="center-panel">${e}</div>
          <div id="right-panel">${i}</div>
        </div>
      </ha-card>`}_handleAction(t){this.hass&&this._config&&t.detail.action&&function(t,e,i,n){var o;"double_tap"===n&&i.double_tap_action?o=i.double_tap_action:"hold"===n&&i.hold_action?o=i.hold_action:"tap"===n&&i.tap_action&&(o=i.tap_action),vt(t,e,i,o)}(this,this.hass,{entity:t.currentTarget.entity,tap_action:t.currentTarget.tap_action,double_tap_action:t.currentTarget.double_tap_action},t.detail.action)}_render_item(t,e,i){if(!e.entity)return M`<item class="placeholder"></item>`;const n=e.invert_arrow?-1*t:t;t=e.display_abs?Math.abs(t):t;let o=e.unit_of_display||"W";if("k"==o.charAt(0)[0])t/=1e3;else if("adaptive"==e.unit_of_display){let i="W";e.unit_of_measurement&&(i="k"==e.unit_of_measurement[0]?e.unit_of_measurement.substring(1):e.unit_of_measurement),Math.abs(t)>999?(t/=1e3,o="k"+i):o=i}const r=10**(e.decimals||0==e.decimals?e.decimals:2);t=Math.round(t*r)/r;const a=ct(t,this.hass.locale);let s;e.secondary_info_entity&&(s=e.secondary_info_attribute?this._state({entity:e.secondary_info_entity,attribute:e.secondary_info_attribute})+"":`${this._state({entity:e.secondary_info_entity})}${this._state({entity:e.secondary_info_entity,attribute:"unit_of_measurement"})||""}`),e.secondary_info_replace_name&&(e.name=s,s=void 0);let l=e.icon;if("battery"===e.preset&&e.battery_percentage_entity){const t=this._val({entity:e.battery_percentage_entity});isNaN(t)||(l="mdi:battery",t<5?l="mdi:battery-outline":t<95&&(l="mdi:battery-"+(t/10).toFixed(0)+"0"))}let c=!1,d=M``;"grid"===e.preset&&(e.grid_buy_entity||e.grid_sell_entity)&&(c=!0,d=M`
        <div class="buy-sell">
          ${e.grid_buy_entity?M`<div class="grid-buy">
                B:
                ${this._val({entity:e.grid_buy_entity})}${this._state({entity:e.grid_buy_entity,attribute:"unit_of_measurement"})||void 0}
              </div>`:void 0}
          ${e.grid_sell_entity?M`<div class="grid-sell">
                S:
                ${this._val({entity:e.grid_sell_entity})}${this._state({entity:e.grid_sell_entity,attribute:"unit_of_measurement"})||void 0}
              </div>`:void 0}
        </div>
      `);const h=e.color_threshold||0;let u,p;e.icon_color&&(n>h&&(u=e.icon_color.bigger),n<h&&(u=e.icon_color.smaller),n==h&&(u=e.icon_color.equal)),e.arrow_color&&(n>h&&(p=e.arrow_color.bigger),n<h&&(p=e.arrow_color.smaller),n==h&&(p=e.arrow_color.equal));const f=isNaN(t);return M`
      <item
        .entity=${e.entity}
        .tap_action=${e.tap_action}
        .double_tap_action=${e.double_tap_action}
        @action=${this._handleAction}
        .actionHandler=${ae({hasDoubleClick:mt(e.double_tap_action)})}
    ">
        <badge>
          <icon>
            <ha-icon icon="${l}" style="${u?`color:${u};`:""}"></ha-icon>
            ${s?M`<p class="secondary">${s}</p>`:null}
          </icon>
          ${c?d:M`<p class="subtitle">${e.name}</p>`}
        </badge>
        <value>
          <p>${f?"":a} ${f?"":o}</p>
          ${e.hide_arrows?M``:this._render_arrow(0==t||f?"none":i%2==0?n>0?"right":"left":n>0?"left":"right",i,p)}
        <value
      </item>
    `}_render_arrow(t,e,i){const n=this._config.animation,o=`${t}-${e}`;return"none"==t?M` <div class="blank"></div> `:M`
        <svg width="57" height="18" class="arrow">
          <defs>
            <polygon id="arrow-right-${e}" points="0 0, 0 16, 16 8" fill="${i}" />
            <polygon id="arrow-left-${e}" points="16 0, 16 16, 0 8" fill="${i}" />
            <g id="slide-${e}" class="arrow-color">
              <use href="#arrow-${o}" x="-36" />
              <use href="#arrow-${o}" x="-12" />
              <use href="#arrow-${o}" x="12" />
              <use href="#arrow-${o}" x="36" />
            </g>
            <g id="flash-${e}" fill="red">
              <use href="#arrow-${o}" x="0" style="animation-delay: ${"right"==t?0:2}s;" id="a-flash" />
              <use href="#arrow-${o}" x="20" style="animation-delay: 1s;" id="a-flash" />
              <use href="#arrow-${o}" x="40" style="animation-delay: ${"right"==t?2:0}s;" id="a-flash" />
            </g>
            <g id="none-${e}" class="arrow-color">
              <use href="#arrow-${o}" x="0" />
              <use href="#arrow-${o}" x="20" />
              <use href="#arrow-${o}" x="40" />
            </g>
          </defs>
          <use href="#${n}-${e}" id="a-${n}-${t}" />
        </svg>
      `}_render_bars(t,e){const i=[];return this._config.center.content&&0!=this._config.center.content.length?(this._config.center.content.forEach((n=>{let o=-1;switch(n.preset){case"autarky":n.entity||(o=0!=t?Math.min(Math.round(100*e/Math.abs(t)),100):0);break;case"ratio":n.entity||(o=0!=e?Math.min(Math.round(100*Math.abs(t)/e),100):0)}o<0&&(o=parseInt(this._val(n).toFixed(0),10)),i.push(M`
        <div
          class="bar-element"
          .entity=${n.entity}
          .tap_action=${n.tap_action}
          .double_tap_action=${n.double_tap_action}
          @action=${this._handleAction}
          .actionHandler=${ae({hasDoubleClick:mt(n.double_tap_action)})}
          style="${n.tap_action||n.double_tap_action?"cursor: pointer;":""}"
        >
          <p class="bar-percentage">${o}%</p>
          <div class="bar-wrapper" style="${n.bar_bg_color?`background-color:${n.bar_bg_color};`:""}">
            <bar style="height:${o}%; background-color:${n.bar_color};" />
          </div>
          <p>${n.name||""}</p>
        </div>
      `)})),M`${i.map((t=>M`${t}`))}`):M``}_createCardElement(t){const e=function(t,e){void 0===e&&(e=!1);var i=function(t,e){return n("hui-error-card",{type:"error",error:t,config:e})},n=function(t,e){var n=window.document.createElement(t);try{if(!n.setConfig)return;n.setConfig(e)}catch(n){return console.error(t,n),i(n.message,e)}return n};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);var o=t.type;if(o&&o.startsWith("custom:"))o=o.substr("custom:".length);else if(e)if(pt.has(o))o="hui-"+o+"-row";else{if(!t.entity)return i("Invalid config given.",t);var r=t.entity.split(".",1)[0];o="hui-"+(ft[r]||"text")+"-entity-row"}else o="hui-"+o+"-card";if(customElements.get(o))return n(o,t);var a=i("Custom element doesn't exist: "+t.type+".",t);a.style.display="None";var s=setTimeout((function(){a.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(s),ut(a,"ll-rebuild",{},a)})),a}(t);return this.hass&&(e.hass=this.hass),e.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rebuildCard(e,t)}),{once:!0}),e}_rebuildCard(t,e){const i=this._createCardElement(e);t.parentElement&&t.parentElement.replaceChild(i,t),this._card===t&&(this._card=i)}};t([et()],an.prototype,"hass",void 0),t([it()],an.prototype,"_config",void 0),t([et()],an.prototype,"_card",void 0),t([it()],an.prototype,"_narrow",void 0),an=t([Q("power-distribution-card")],an);export{an as PowerDistributionCard};
