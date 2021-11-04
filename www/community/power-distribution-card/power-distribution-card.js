/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
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
 */;var s;const l=window.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},d=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Eh(i,e);void 0!==n&&(this._$Eu.set(n,i),t.push(n))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),n=window.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=h){var n,o;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const a=(null!==(o=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==o?o:c.toAttribute)(e,i.type);this._$Ei=t,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Ei=null}}_$AK(t,e){var i,n,o;const r=this.constructor,a=r._$Eu.get(t);if(void 0!==a&&this._$Ei!==a){const t=r.getPropertyOptions(a),s=t.converter,l=null!==(o=null!==(n=null===(i=s)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:"function"==typeof s?s:null)&&void 0!==o?o:c.fromAttribute;this._$Ei=a,this[a]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:u}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.0.1");const f=globalThis.trustedTypes,g=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,m="?"+v,b=`<${m}>`,_=document,y=(t="")=>_.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,C=/>/g,S=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,A=/'/g,k=/"/g,O=/^(?:script|style|textarea)$/i,T=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),D=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),M=new WeakMap,P=_.createTreeWalker(_,129,null,!1),R=(t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":"",a=E;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===E?"!--"===l[1]?a=x:void 0!==l[1]?a=C:void 0!==l[2]?(O.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=S):void 0!==l[3]&&(a=S):a===S?">"===l[0]?(a=null!=o?o:E,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?S:'"'===l[3]?k:A):a===k||a===A?a=S:a===x||a===C?a=E:(a=S,o=void 0);const h=a===S&&t[e+1].startsWith("/>")?" ":"";r+=a===E?i+b:c>=0?(n.push(s),i.slice(0,c)+"$lit$"+i.slice(c)+v+h):i+v+(-2===c?(n.push(void 0),e):h)}const s=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==g?g.createHTML(s):s,n]};class I{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const a=t.length-1,s=this.parts,[l,c]=R(t,e);if(this.el=I.createElement(l,i),P.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=P.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(v)){const i=c[r++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(v),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?B:"?"===e[1]?U:"@"===e[1]?L:z})}else s.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(O.test(n.tagName)){const t=n.textContent.split(v),e=t.length-1;if(e>0){n.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],y()),P.nextNode(),s.push({type:2,index:++o});n.append(t[e],y())}}}else if(8===n.nodeType)if(n.data===m)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(v,t+1));)s.push({type:7,index:o}),t+=v.length-1}o++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function j(t,e,i=t,n){var o,r,a,s;if(e===D)return e;let l=void 0!==n?null===(o=i._$Cl)||void 0===o?void 0:o[n]:i._$Cu;const c=w(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(a=(s=i)._$Cl)&&void 0!==a?a:s._$Cl=[])[n]=l:i._$Cu=l),void 0!==l&&(e=j(t,l._$AS(t,e.values),l,n)),e}class H{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(i,!0);P.currentNode=o;let r=P.nextNode(),a=0,s=0,l=n[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new V(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new W(r,this,t)),this.v.push(e),l=n[++s]}a!==(null==l?void 0:l.index)&&(r=P.nextNode(),a++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class V{constructor(t,e,i,n){var o;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),w(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==D&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return $(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==N&&w(this._$AH)?this._$AA.nextSibling.data=t:this.S(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=I.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new H(o,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new I(t)),e}M(t){$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new V(this.A(y()),this.A(y()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class z{constructor(t,e,i,n,o){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=j(this,t,e,0),r=!w(t)||t!==this._$AH&&t!==D,r&&(this._$AH=t);else{const n=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=j(this,n[i+a],e,a),s===D&&(s=this._$AH[a]),r||(r=!w(s)||s!==this._$AH[a]),s===N?t=N:t!==N&&(t+=(null!=s?s:"")+o[a+1]),this._$AH[a]=s}r&&!n&&this.k(t)}k(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class B extends z{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===N?void 0:t}}class U extends z{constructor(){super(...arguments),this.type=4}k(t){t&&t!==N?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class L extends z{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=j(this,t,e,0))&&void 0!==i?i:N)===D)return;const n=this._$AH,o=t===N&&n!==N||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==N&&(n===N||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const X=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F,Y;null==X||X(I,V),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.0.1");class q extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var n,o;const r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let a=r._$litPart$;if(void 0===a){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=a=new V(e.insertBefore(y(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return D}}q.finalized=!0,q._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:q});const G=globalThis.litElementPolyfillSupport;null==G||G({LitElement:q}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const K=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,J=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Z(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):J(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Q(t){return Z({...t,state:!0})}var tt="[^\\s]+";function et(t,e){for(var i=[],n=0,o=t.length;n<o;n++)i.push(t[n].substr(0,e));return i}var it=function(t){return function(e,i){var n=i[t].map((function(t){return t.toLowerCase()})),o=n.indexOf(e.toLowerCase());return o>-1?o:null}};function nt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var n=0,o=e;n<o.length;n++){var r=o[n];for(var a in r)t[a]=r[a]}return t}var ot=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],rt=["January","February","March","April","May","June","July","August","September","October","November","December"],at=et(rt,3),st={dayNamesShort:et(ot,3),dayNames:ot,monthNamesShort:at,monthNames:rt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},lt=(nt({},st),function(t){return+t-1}),ct=[null,"[1-9]\\d?"],dt=[null,tt],ht=["isPm",tt,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],ut=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}];it("monthNamesShort"),it("monthNames");var pt,ft;!function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}(),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(pt||(pt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ft||(ft={}));var gt=function(t,e){var i=e||{};if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var n=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=n,i.maximumFractionDigits=n}return i},vt=["closed","locked","off"],mt=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},bt=new Set(["call-service","divider","section","weblink","cast","select"]),_t={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},yt=function(t){mt(window,"haptic",t)},wt=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(yt("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&mt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),mt(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var n,o=function(t){return t.substr(0,t.indexOf("."))}(e),r="group"===o?"homeassistant":o;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(r,n,{entity_id:e})})(t,e,vt.includes(t.states[e].state))}(e,i.entity),yt("success"));break;case"call-service":if(!n.service)return void yt("failure");var o=n.service.split(".",2);e.callService(o[0],o[1],n.service_data),yt("success");break;case"fire-dom-event":mt(t,"ll-custom",n)}};function $t(t){return void 0!==t&&"none"!==t.action}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Et=t=>(...e)=>({_$litDirective$:t,values:e});class xt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct={},St=Et(class extends xt{constructor(){super(...arguments),this.ot=Ct}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((t,e)=>t===this.ot[e])))return D}else if(this.ot===e)return D;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,i)}});
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function At(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function kt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?At(Object(i),!0).forEach((function(e){Tt(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):At(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function Ot(t){return Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ot(t)}function Tt(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Dt(){return Dt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Dt.apply(this,arguments)}function Nt(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}function Mt(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var Pt=Mt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Rt=Mt(/Edge/i),It=Mt(/firefox/i),jt=Mt(/safari/i)&&!Mt(/chrome/i)&&!Mt(/android/i),Ht=Mt(/iP(ad|od|hone)/i),Vt=Mt(/chrome/i)&&Mt(/android/i),zt={capture:!1,passive:!1};function Bt(t,e,i){t.addEventListener(e,i,!Pt&&zt)}function Ut(t,e,i){t.removeEventListener(e,i,!Pt&&zt)}function Lt(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function Wt(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function Xt(t,e,i,n){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&Lt(t,e):Lt(t,e))||n&&t===i)return t;if(t===i)break}while(t=Wt(t))}return null}var Ft,Yt=/\s+/g;function qt(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(Yt," ").replace(" "+e+" "," ");t.className=(n+(i?" "+e:"")).replace(Yt," ")}}function Gt(t,e,i){var n=t&&t.style;if(n){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in n||-1!==e.indexOf("webkit")||(e="-webkit-"+e),n[e]=i+("string"==typeof i?"":"px")}}function Kt(t,e){var i="";if("string"==typeof t)i=t;else do{var n=Gt(t,"transform");n&&"none"!==n&&(i=n+" "+i)}while(!e&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function Jt(t,e,i){if(t){var n=t.getElementsByTagName(e),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function Zt(){var t=document.scrollingElement;return t||document.documentElement}function Qt(t,e,i,n,o){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==Zt()?(a=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(o=o||t.parentNode,!Pt))do{if(o&&o.getBoundingClientRect&&("none"!==Gt(o,"transform")||i&&"static"!==Gt(o,"position"))){var u=o.getBoundingClientRect();a-=u.top+parseInt(Gt(o,"border-top-width")),s-=u.left+parseInt(Gt(o,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(o=o.parentNode);if(n&&t!==window){var p=Kt(o||t),f=p&&p.a,g=p&&p.d;p&&(l=(a/=g)+(d/=g),c=(s/=f)+(h/=f))}return{top:a,left:s,bottom:l,right:c,width:h,height:d}}}function te(t,e,i){for(var n=re(t,!0),o=Qt(t)[e];n;){var r=Qt(n)[i];if(!("top"===i||"left"===i?o>=r:o<=r))return n;if(n===Zt())break;n=re(n,!1)}return!1}function ee(t,e,i,n){for(var o=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==ai.ghost&&(n||a[r]!==ai.dragged)&&Xt(a[r],i.draggable,t,!1)){if(o===e)return a[r];o++}r++}return null}function ie(t,e){for(var i=t.lastElementChild;i&&(i===ai.ghost||"none"===Gt(i,"display")||e&&!Lt(i,e));)i=i.previousElementSibling;return i||null}function ne(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===ai.clone||e&&!Lt(t,e)||i++;return i}function oe(t){var e=0,i=0,n=Zt();if(t)do{var o=Kt(t),r=o.a,a=o.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[e,i]}function re(t,e){if(!t||!t.getBoundingClientRect)return Zt();var i=t,n=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=Gt(i);if(i.clientWidth<i.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){if(!i.getBoundingClientRect||i===document.body)return Zt();if(n||e)return i;n=!0}}}while(i=i.parentNode);return Zt()}function ae(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function se(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}var le="Sortable"+(new Date).getTime();function ce(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach((function(t){if("none"!==Gt(t,"display")&&t!==ai.ghost){e.push({target:t,rect:Qt(t)});var i=kt({},e[e.length-1].rect);if(t.thisAnimationDuration){var n=Kt(t,!0);n&&(i.top-=n.f,i.left-=n.e)}t.fromRect=i}}))},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[i][n])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var n=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var o=!1,r=0;e.forEach((function(t){var e=0,i=t.target,a=i.fromRect,s=Qt(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=Kt(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&ae(l,s)&&!ae(a,s)&&(d.top-s.top)/(d.left-s.left)==(a.top-s.top)/(a.left-s.left)&&(e=function(t,e,i,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*n.animation}(d,l,c,n.options)),ae(s,a)||(i.prevFromRect=a,i.prevToRect=s,e||(e=n.options.animation),n.animate(i,d,s,e)),e&&(o=!0,r=Math.max(r,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout((function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null}),e),i.thisAnimationDuration=e)})),clearTimeout(t),o?t=setTimeout((function(){"function"==typeof i&&i()}),r):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,n){if(n){Gt(t,"transition",""),Gt(t,"transform","");var o=Kt(this.el),r=o&&o.a,a=o&&o.d,s=(e.left-i.left)/(r||1),l=(e.top-i.top)/(a||1);t.animatingX=!!s,t.animatingY=!!l,Gt(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),Gt(t,"transition","transform "+n+"ms"+(this.options.easing?" "+this.options.easing:"")),Gt(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout((function(){Gt(t,"transition",""),Gt(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1}),n)}}}}var de=[],he={initializeByDefault:!0},ue={mount:function(t){for(var e in he)he.hasOwnProperty(e)&&!(e in t)&&(t[e]=he[e]);de.forEach((function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")})),de.push(t)},pluginEvent:function(t,e,i){var n=this;this.eventCanceled=!1,i.cancel=function(){n.eventCanceled=!0};var o=t+"Global";de.forEach((function(n){e[n.pluginName]&&(e[n.pluginName][o]&&e[n.pluginName][o](kt({sortable:e},i)),e.options[n.pluginName]&&e[n.pluginName][t]&&e[n.pluginName][t](kt({sortable:e},i)))}))},initializePlugins:function(t,e,i,n){for(var o in de.forEach((function(n){var o=n.pluginName;if(t.options[o]||n.initializeByDefault){var r=new n(t,e,t.options);r.sortable=t,r.options=t.options,t[o]=r,Dt(i,r.defaults)}})),t.options)if(t.options.hasOwnProperty(o)){var r=this.modifyOption(t,o,t.options[o]);void 0!==r&&(t.options[o]=r)}},getEventProperties:function(t,e){var i={};return de.forEach((function(n){"function"==typeof n.eventProperties&&Dt(i,n.eventProperties.call(e[n.pluginName],t))})),i},modifyOption:function(t,e,i){var n;return de.forEach((function(o){t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[e]&&(n=o.optionListeners[e].call(t[o.pluginName],i))})),n}};var pe=["evt"],fe=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.evt,o=Nt(i,pe);ue.pluginEvent.bind(ai)(t,e,kt({dragEl:ve,parentEl:me,ghostEl:be,rootEl:_e,nextEl:ye,lastDownEl:we,cloneEl:$e,cloneHidden:Ee,dragStarted:Ie,putSortable:Oe,activeSortable:ai.active,originalEvent:n,oldIndex:xe,oldDraggableIndex:Se,newIndex:Ce,newDraggableIndex:Ae,hideGhostForTarget:ii,unhideGhostForTarget:ni,cloneNowHidden:function(){Ee=!0},cloneNowShown:function(){Ee=!1},dispatchSortableEvent:function(t){ge({sortable:e,name:t,originalEvent:n})}},o))};function ge(t){!function(t){var e=t.sortable,i=t.rootEl,n=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,f=t.extraEventProperties;if(e=e||i&&i[le]){var g,v=e.options,m="on"+n.charAt(0).toUpperCase()+n.substr(1);!window.CustomEvent||Pt||Rt?(g=document.createEvent("Event")).initEvent(n,!0,!0):g=new CustomEvent(n,{bubbles:!0,cancelable:!0}),g.to=a||i,g.from=s||i,g.item=o||i,g.clone=r,g.oldIndex=l,g.newIndex=c,g.oldDraggableIndex=d,g.newDraggableIndex=h,g.originalEvent=u,g.pullMode=p?p.lastPutMode:void 0;var b=kt(kt({},f),ue.getEventProperties(n,e));for(var _ in b)g[_]=b[_];i&&i.dispatchEvent(g),v[m]&&v[m].call(e,g)}}(kt({putSortable:Oe,cloneEl:$e,targetEl:ve,rootEl:_e,oldIndex:xe,oldDraggableIndex:Se,newIndex:Ce,newDraggableIndex:Ae},t))}var ve,me,be,_e,ye,we,$e,Ee,xe,Ce,Se,Ae,ke,Oe,Te,De,Ne,Me,Pe,Re,Ie,je,He,Ve,ze,Be=!1,Ue=!1,Le=[],We=!1,Xe=!1,Fe=[],Ye=!1,qe=[],Ge="undefined"!=typeof document,Ke=Ht,Je=Rt||Pt?"cssFloat":"float",Ze=Ge&&!Vt&&!Ht&&"draggable"in document.createElement("div"),Qe=function(){if(Ge){if(Pt)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),ti=function(t,e){var i=Gt(t),n=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=ee(t,0,e),r=ee(t,1,e),a=o&&Gt(o),s=r&&Gt(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Qt(o).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Qt(r).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return o&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=n&&"none"===i[Je]||r&&"none"===i[Je]&&l+c>n)?"vertical":"horizontal"},ei=function(t){function e(t,i){return function(n,o,r,a){var s=n.options.group.name&&o.options.group.name&&n.options.group.name===o.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(n,o,r,a),i)(n,o,r,a);var l=(i?n:o).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},n=t.group;n&&"object"==Ot(n)||(n={name:n}),i.name=n.name,i.checkPull=e(n.pull,!0),i.checkPut=e(n.put),i.revertClone=n.revertClone,t.group=i},ii=function(){!Qe&&be&&Gt(be,"display","none")},ni=function(){!Qe&&be&&Gt(be,"display","")};Ge&&document.addEventListener("click",(function(t){if(Ue)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Ue=!1,!1}),!0);var oi=function(t){if(ve){var e=function(t,e){var i;return Le.some((function(n){var o=n[le].options.emptyInsertThreshold;if(o&&!ie(n)){var r=Qt(n),a=t>=r.left-o&&t<=r.right+o,s=e>=r.top-o&&e<=r.bottom+o;return a&&s?i=n:void 0}})),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[le]._onDragOver(i)}}},ri=function(t){ve&&ve.parentNode[le]._isOutsideThisEl(t.target)};function ai(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Dt({},e),t[le]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return ti(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==ai.supportPointer&&"PointerEvent"in window&&!jt,emptyInsertThreshold:5};for(var n in ue.initializePlugins(this,t,i),i)!(n in e)&&(e[n]=i[n]);for(var o in ei(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&Ze,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Bt(t,"pointerdown",this._onTapStart):(Bt(t,"mousedown",this._onTapStart),Bt(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Bt(t,"dragover",this),Bt(t,"dragenter",this)),Le.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Dt(this,ce())}function si(t,e,i,n,o,r,a,s){var l,c,d=t[le],h=d.options.onMove;return!window.CustomEvent||Pt||Rt?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=n,l.related=o||e,l.relatedRect=r||Qt(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function li(t){t.draggable=!1}function ci(){Ye=!1}function di(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,n=0;i--;)n+=e.charCodeAt(i);return n.toString(36)}function hi(t){return setTimeout(t,0)}function ui(t){return clearTimeout(t)}ai.prototype={constructor:ai,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(je=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,ve):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,n=this.options,o=n.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=n.filter;if(function(t){qe.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var n=e[i];n.checked&&qe.push(n)}}(i),!ve&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||n.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!jt||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Xt(s,n.draggable,i,!1))&&s.animated||we===s)){if(xe=ne(s),Se=ne(s,n.draggable),"function"==typeof c){if(c.call(this,t,s,this))return ge({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),fe("filter",e,{evt:t}),void(o&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some((function(n){if(n=Xt(l,n.trim(),i,!1))return ge({sortable:e,rootEl:n,name:"filter",targetEl:s,fromEl:i,toEl:i}),fe("filter",e,{evt:t}),!0}))))return void(o&&t.cancelable&&t.preventDefault());n.handle&&!Xt(l,n.handle,i,!1)||this._prepareDragStart(t,a,s)}}},_prepareDragStart:function(t,e,i){var n,o=this,r=o.el,a=o.options,s=r.ownerDocument;if(i&&!ve&&i.parentNode===r){var l=Qt(i);if(_e=r,me=(ve=i).parentNode,ye=ve.nextSibling,we=i,ke=a.group,ai.dragged=ve,Te={target:ve,clientX:(e||t).clientX,clientY:(e||t).clientY},Pe=Te.clientX-l.left,Re=Te.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,ve.style["will-change"]="all",n=function(){fe("delayEnded",o,{evt:t}),ai.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),!It&&o.nativeDraggable&&(ve.draggable=!0),o._triggerDragStart(t,e),ge({sortable:o,name:"choose",originalEvent:t}),qt(ve,a.chosenClass,!0))},a.ignore.split(",").forEach((function(t){Jt(ve,t.trim(),li)})),Bt(s,"dragover",oi),Bt(s,"mousemove",oi),Bt(s,"touchmove",oi),Bt(s,"mouseup",o._onDrop),Bt(s,"touchend",o._onDrop),Bt(s,"touchcancel",o._onDrop),It&&this.nativeDraggable&&(this.options.touchStartThreshold=4,ve.draggable=!0),fe("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(Rt||Pt))n();else{if(ai.eventCanceled)return void this._onDrop();Bt(s,"mouseup",o._disableDelayedDrag),Bt(s,"touchend",o._disableDelayedDrag),Bt(s,"touchcancel",o._disableDelayedDrag),Bt(s,"mousemove",o._delayedDragTouchMoveHandler),Bt(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&Bt(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(n,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){ve&&li(ve),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;Ut(t,"mouseup",this._disableDelayedDrag),Ut(t,"touchend",this._disableDelayedDrag),Ut(t,"touchcancel",this._disableDelayedDrag),Ut(t,"mousemove",this._delayedDragTouchMoveHandler),Ut(t,"touchmove",this._delayedDragTouchMoveHandler),Ut(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?Bt(document,"pointermove",this._onTouchMove):Bt(document,e?"touchmove":"mousemove",this._onTouchMove):(Bt(ve,"dragend",this),Bt(_e,"dragstart",this._onDragStart));try{document.selection?hi((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(Be=!1,_e&&ve){fe("dragStarted",this,{evt:e}),this.nativeDraggable&&Bt(document,"dragover",ri);var i=this.options;!t&&qt(ve,i.dragClass,!1),qt(ve,i.ghostClass,!0),ai.active=this,t&&this._appendGhost(),ge({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(De){this._lastX=De.clientX,this._lastY=De.clientY,ii();for(var t=document.elementFromPoint(De.clientX,De.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(De.clientX,De.clientY))!==e;)e=t;if(ve.parentNode[le]._isOutsideThisEl(t),e)do{if(e[le]){if(e[le]._onDragOver({clientX:De.clientX,clientY:De.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);ni()}},_onTouchMove:function(t){if(Te){var e=this.options,i=e.fallbackTolerance,n=e.fallbackOffset,o=t.touches?t.touches[0]:t,r=be&&Kt(be,!0),a=be&&r&&r.a,s=be&&r&&r.d,l=Ke&&ze&&oe(ze),c=(o.clientX-Te.clientX+n.x)/(a||1)+(l?l[0]-Fe[0]:0)/(a||1),d=(o.clientY-Te.clientY+n.y)/(s||1)+(l?l[1]-Fe[1]:0)/(s||1);if(!ai.active&&!Be){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(be){r?(r.e+=c-(Ne||0),r.f+=d-(Me||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");Gt(be,"webkitTransform",h),Gt(be,"mozTransform",h),Gt(be,"msTransform",h),Gt(be,"transform",h),Ne=c,Me=d,De=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!be){var t=this.options.fallbackOnBody?document.body:_e,e=Qt(ve,!0,Ke,!0,t),i=this.options;if(Ke){for(ze=t;"static"===Gt(ze,"position")&&"none"===Gt(ze,"transform")&&ze!==document;)ze=ze.parentNode;ze!==document.body&&ze!==document.documentElement?(ze===document&&(ze=Zt()),e.top+=ze.scrollTop,e.left+=ze.scrollLeft):ze=Zt(),Fe=oe(ze)}qt(be=ve.cloneNode(!0),i.ghostClass,!1),qt(be,i.fallbackClass,!0),qt(be,i.dragClass,!0),Gt(be,"transition",""),Gt(be,"transform",""),Gt(be,"box-sizing","border-box"),Gt(be,"margin",0),Gt(be,"top",e.top),Gt(be,"left",e.left),Gt(be,"width",e.width),Gt(be,"height",e.height),Gt(be,"opacity","0.8"),Gt(be,"position",Ke?"absolute":"fixed"),Gt(be,"zIndex","100000"),Gt(be,"pointerEvents","none"),ai.ghost=be,t.appendChild(be),Gt(be,"transform-origin",Pe/parseInt(be.style.width)*100+"% "+Re/parseInt(be.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,n=t.dataTransfer,o=i.options;fe("dragStart",this,{evt:t}),ai.eventCanceled?this._onDrop():(fe("setupClone",this),ai.eventCanceled||(($e=se(ve)).draggable=!1,$e.style["will-change"]="",this._hideClone(),qt($e,this.options.chosenClass,!1),ai.clone=$e),i.cloneId=hi((function(){fe("clone",i),ai.eventCanceled||(i.options.removeCloneOnHide||_e.insertBefore($e,ve),i._hideClone(),ge({sortable:i,name:"clone"}))})),!e&&qt(ve,o.dragClass,!0),e?(Ue=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Ut(document,"mouseup",i._onDrop),Ut(document,"touchend",i._onDrop),Ut(document,"touchcancel",i._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(i,n,ve)),Bt(document,"drop",i),Gt(ve,"transform","translateZ(0)")),Be=!0,i._dragStartId=hi(i._dragStarted.bind(i,e,t)),Bt(document,"selectstart",i),Ie=!0,jt&&Gt(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,n,o,r=this.el,a=t.target,s=this.options,l=s.group,c=ai.active,d=ke===l,h=s.sort,u=Oe||c,p=this,f=!1;if(!Ye){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=Xt(a,s.draggable,r,!0),O("dragOver"),ai.eventCanceled)return f;if(ve.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return D(!1);if(Ue=!1,c&&!s.disabled&&(d?h||(n=me!==_e):Oe===this||(this.lastPutMode=ke.checkPull(this,c,ve,t))&&l.checkPut(this,c,ve,t))){if(o="vertical"===this._getDirection(t,a),e=Qt(ve),O("dragOverValid"),ai.eventCanceled)return f;if(n)return me=_e,T(),this._hideClone(),O("revert"),ai.eventCanceled||(ye?_e.insertBefore(ve,ye):_e.appendChild(ve)),D(!0);var g=ie(r,s.draggable);if(!g||function(t,e,i){var n=Qt(ie(i.el,i.options.draggable)),o=10;return e?t.clientX>n.right+o||t.clientX<=n.right&&t.clientY>n.bottom&&t.clientX>=n.left:t.clientX>n.right&&t.clientY>n.top||t.clientX<=n.right&&t.clientY>n.bottom+o}(t,o,this)&&!g.animated){if(g===ve)return D(!1);if(g&&r===t.target&&(a=g),a&&(i=Qt(a)),!1!==si(_e,r,ve,e,a,i,t,!!a))return T(),r.appendChild(ve),me=r,N(),D(!0)}else if(g&&function(t,e,i){var n=Qt(ee(i.el,0,i.options,!0)),o=10;return e?t.clientX<n.left-o||t.clientY<n.top&&t.clientX<n.right:t.clientY<n.top-o||t.clientY<n.bottom&&t.clientX<n.left}(t,o,this)){var v=ee(r,0,s,!0);if(v===ve)return D(!1);if(i=Qt(a=v),!1!==si(_e,r,ve,e,a,i,t,!1))return T(),r.insertBefore(ve,v),me=r,N(),D(!0)}else if(a.parentNode===r){i=Qt(a);var m,b,_,y=ve.parentNode!==r,w=!function(t,e,i){var n=i?t.left:t.top,o=i?t.right:t.bottom,r=i?t.width:t.height,a=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return n===a||o===s||n+r/2===a+l/2}(ve.animated&&ve.toRect||e,a.animated&&a.toRect||i,o),$=o?"top":"left",E=te(a,"top","top")||te(ve,"top","top"),x=E?E.scrollTop:void 0;if(je!==a&&(b=i[$],We=!1,Xe=!w&&s.invertSwap||y),m=function(t,e,i,n,o,r,a,s){var l=n?t.clientY:t.clientX,c=n?i.height:i.width,d=n?i.top:i.left,h=n?i.bottom:i.right,u=!1;if(!a)if(s&&Ve<c*o){if(!We&&(1===He?l>d+c*r/2:l<h-c*r/2)&&(We=!0),We)u=!0;else if(1===He?l<d+Ve:l>h-Ve)return-He}else if(l>d+c*(1-o)/2&&l<h-c*(1-o)/2)return function(t){return ne(ve)<ne(t)?1:-1}(e);if((u=u||a)&&(l<d+c*r/2||l>h-c*r/2))return l>d+c/2?1:-1;return 0}(t,a,i,o,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Xe,je===a),0!==m){var C=ne(ve);do{C-=m,_=me.children[C]}while(_&&("none"===Gt(_,"display")||_===be))}if(0===m||_===a)return D(!1);je=a,He=m;var S=a.nextElementSibling,A=!1,k=si(_e,r,ve,e,a,i,t,A=1===m);if(!1!==k)return 1!==k&&-1!==k||(A=1===k),Ye=!0,setTimeout(ci,30),T(),A&&!S?r.appendChild(ve):a.parentNode.insertBefore(ve,A?S:a),E&&function(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}(E,0,x-E.scrollTop),me=ve.parentNode,void 0===b||Xe||(Ve=Math.abs(b-Qt(a)[$])),N(),D(!0)}if(r.contains(ve))return D(!1)}return!1}function O(s,l){fe(s,p,kt({evt:t,isOwner:d,axis:o?"vertical":"horizontal",revert:n,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:a,completed:D,onMove:function(i,n){return si(_e,r,ve,e,i,Qt(i),t,n)},changed:N},l))}function T(){O("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function D(e){return O("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(qt(ve,Oe?Oe.options.ghostClass:c.options.ghostClass,!1),qt(ve,s.ghostClass,!0)),Oe!==p&&p!==ai.active?Oe=p:p===ai.active&&Oe&&(Oe=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll((function(){O("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a===ve&&!ve.animated||a===r&&!a.animated)&&(je=null),s.dragoverBubble||t.rootEl||a===document||(ve.parentNode[le]._isOutsideThisEl(t.target),!e&&oi(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),f=!0}function N(){Ce=ne(ve),Ae=ne(ve,s.draggable),ge({sortable:p,name:"change",toEl:r,newIndex:Ce,newDraggableIndex:Ae,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Ut(document,"mousemove",this._onTouchMove),Ut(document,"touchmove",this._onTouchMove),Ut(document,"pointermove",this._onTouchMove),Ut(document,"dragover",oi),Ut(document,"mousemove",oi),Ut(document,"touchmove",oi)},_offUpEvents:function(){var t=this.el.ownerDocument;Ut(t,"mouseup",this._onDrop),Ut(t,"touchend",this._onDrop),Ut(t,"pointerup",this._onDrop),Ut(t,"touchcancel",this._onDrop),Ut(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;Ce=ne(ve),Ae=ne(ve,i.draggable),fe("drop",this,{evt:t}),me=ve&&ve.parentNode,Ce=ne(ve),Ae=ne(ve,i.draggable),ai.eventCanceled||(Be=!1,Xe=!1,We=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),ui(this.cloneId),ui(this._dragStartId),this.nativeDraggable&&(Ut(document,"drop",this),Ut(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),jt&&Gt(document.body,"user-select",""),Gt(ve,"transform",""),t&&(Ie&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),be&&be.parentNode&&be.parentNode.removeChild(be),(_e===me||Oe&&"clone"!==Oe.lastPutMode)&&$e&&$e.parentNode&&$e.parentNode.removeChild($e),ve&&(this.nativeDraggable&&Ut(ve,"dragend",this),li(ve),ve.style["will-change"]="",Ie&&!Be&&qt(ve,Oe?Oe.options.ghostClass:this.options.ghostClass,!1),qt(ve,this.options.chosenClass,!1),ge({sortable:this,name:"unchoose",toEl:me,newIndex:null,newDraggableIndex:null,originalEvent:t}),_e!==me?(Ce>=0&&(ge({rootEl:me,name:"add",toEl:me,fromEl:_e,originalEvent:t}),ge({sortable:this,name:"remove",toEl:me,originalEvent:t}),ge({rootEl:me,name:"sort",toEl:me,fromEl:_e,originalEvent:t}),ge({sortable:this,name:"sort",toEl:me,originalEvent:t})),Oe&&Oe.save()):Ce!==xe&&Ce>=0&&(ge({sortable:this,name:"update",toEl:me,originalEvent:t}),ge({sortable:this,name:"sort",toEl:me,originalEvent:t})),ai.active&&(null!=Ce&&-1!==Ce||(Ce=xe,Ae=Se),ge({sortable:this,name:"end",toEl:me,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){fe("nulling",this),_e=ve=me=be=ye=$e=we=Ee=Te=De=Ie=Ce=Ae=xe=Se=je=He=Oe=ke=ai.dragged=ai.ghost=ai.clone=ai.active=null,qe.forEach((function(t){t.checked=!0})),qe.length=Ne=Me=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":ve&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,n=0,o=i.length,r=this.options;n<o;n++)Xt(t=i[n],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||di(t));return e},sort:function(t,e){var i={},n=this.el;this.toArray().forEach((function(t,e){var o=n.children[e];Xt(o,this.options.draggable,n,!1)&&(i[t]=o)}),this),e&&this.captureAnimationState(),t.forEach((function(t){i[t]&&(n.removeChild(i[t]),n.appendChild(i[t]))})),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return Xt(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var n=ue.modifyOption(this,t,e);i[t]=void 0!==n?n:e,"group"===t&&ei(i)},destroy:function(){fe("destroy",this);var t=this.el;t[le]=null,Ut(t,"mousedown",this._onTapStart),Ut(t,"touchstart",this._onTapStart),Ut(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Ut(t,"dragover",this),Ut(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),Le.splice(Le.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Ee){if(fe("hideClone",this),ai.eventCanceled)return;Gt($e,"display","none"),this.options.removeCloneOnHide&&$e.parentNode&&$e.parentNode.removeChild($e),Ee=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(Ee){if(fe("showClone",this),ai.eventCanceled)return;ve.parentNode!=_e||this.options.group.revertClone?ye?_e.insertBefore($e,ye):_e.appendChild($e):_e.insertBefore($e,ve),this.options.group.revertClone&&this.animate(ve,$e),Gt($e,"display",""),Ee=!1}}else this._hideClone()}},Ge&&Bt(document,"touchmove",(function(t){(ai.active||Be)&&t.cancelable&&t.preventDefault()})),ai.utils={on:Bt,off:Ut,css:Gt,find:Jt,is:function(t,e){return!!Xt(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:function(t,e){return function(){if(!Ft){var i=arguments,n=this;1===i.length?t.call(n,i[0]):t.apply(n,i),Ft=setTimeout((function(){Ft=void 0}),e)}}},closest:Xt,toggleClass:qt,clone:se,index:ne,nextTick:hi,cancelNextTick:ui,detectDirection:ti,getChild:ee},ai.get=function(t){return t[le]},ai.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(ai.utils=kt(kt({},ai.utils),t.utils)),ue.mount(t)}))},ai.create=function(t,e){return new ai(t,e)},ai.version="1.14.0";var pi=function(t){var e=t.originalEvent,i=t.putSortable,n=t.dragEl,o=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||o;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:n,putSortable:i}))}};function fi(){}function gi(){}fi.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var n=ee(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(e,n):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:pi},Dt(fi,{pluginName:"revertOnSpill"}),gi.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:pi},Dt(gi,{pluginName:"removeOnSpill"});var vi={version:"Version",description:"A Lovelace Card for visualizing power distributions.",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},mi={actions:{add:"Add",edit:"Edit",remove:"Remove",save:"Save"},optional:"Optional",required:"Required",settings:{action_settings:"Action Settings",animation:"Animation",autarky:"autarky",attribute:"Attribute",background_color:"Background Color",battery_percentage:"Battery Charge %",bigger:"Bigger",calc_excluded:"Excluded from Calculations",center:"Center",color:"Color","color-settings":"Color Settings",decimals:"Decimals","display-abs":"Display Absolute Value",entities:"Entities",entity:"Entity",equal:"Equal","grid-buy":"Grid Buy","grid-sell":"Grid Sell","hide-arrows":"Hide Arrows",icon:"Icon","invert-value":"Invert Value",name:"Name",preset:"Preset",ratio:"ratio","secondary-info":"Secondary Info",settings:"settings",smaller:"Smaller",threshold:"Threshold",title:"Title",unit_of_display:"Unit of Display",value:"value"}},bi={common:vi,editor:mi},_i={version:"Version",description:"Eine Karte zur Visualizierung von Stromverteilungen",invalid_configuration:"Ungültige Konfiguration",show_warning:"Warnung"},yi={actions:{add:"Hinzufügen",edit:"Bearbeiten",remove:"Entfernen",save:"Speichern"},optional:"Optional",required:"Erforderlich",settings:{action_settings:"Aktions Einstellungen",animation:"Animation",autarky:"Autarkie",attribute:"Attribut",background_color:"Hintergrundfarbe",battery_percentage:"Batterie Ladung %",bigger:"Größer ",calc_excluded:"Von Rechnungen ausgeschlossen",center:"Mittelbereich",color:"Farbe","color-settings":"Farb Einstellungen",decimals:"Dezimalstellen","display-abs":"Absolute Wertanzeige",entities:"Entities",entity:"Element",equal:"Gleich","grid-buy":"Netz Ankauf","grid-sell":"Netz Verkauf","hide-arrows":"Pfeile Verstecken",icon:"Symbol","invert-value":"Invertierter Wert",name:"Name",preset:"Vorlagen",ratio:"Anteil","secondary-info":"Zusatzinformationen",settings:"Einstellungen",smaller:"Kleiner",threshold:"Schwellenwert",title:"Titel",unit_of_display:"Angezeigte Einheit",value:"Wert"}},wi={common:_i,editor:yi};const $i={en:Object.freeze({__proto__:null,common:vi,editor:mi,default:bi}),de:Object.freeze({__proto__:null,common:_i,editor:yi,default:wi})};function Ei(t,e=!1,i="",n=""){const o=(localStorage.getItem("selectedLanguage")||navigator.language.split("-")[0]||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=t.split(".").reduce(((t,e)=>t[e]),$i[o])}catch(e){r=t.split(".").reduce(((t,e)=>t[e]),$i.en)}return void 0===r&&(r=t.split(".").reduce(((t,e)=>t[e]),$i.en)),""!==i&&""!==n&&(r=r.replace(i,n)),e?function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(r):r}const xi=["battery","car_charger","consumer","grid","home","hydro","pool","producer","solar","wind"],Ci={battery:{consumer:!0,icon:"mdi:battery-outline",name:"battery",producer:!0},car_charger:{consumer:!0,icon:"mdi:car-electric",name:"car"},consumer:{consumer:!0,icon:"mdi:lightbulb",name:"consumer"},grid:{icon:"mdi:transmission-tower",name:"grid"},home:{consumer:!0,icon:"mdi:home-assistant",name:"home"},hydro:{icon:"mdi:hydro-power",name:"hydro",producer:!0},pool:{consumer:!0,icon:"mdi:pool",name:"pool"},producer:{icon:"mdi:lightning-bolt-outline",name:"producer",producer:!0},solar:{icon:"mdi:solar-power",name:"solar",producer:!0},wind:{icon:"mdi:wind-turbine",name:"wind",producer:!0}},Si={decimals:2,display_abs:!0,name:"",unit_of_display:"W"},Ai={type:"",title:void 0,animation:"flash",entities:[],center:{type:"none"}},ki=["none","flash","slide"],Oi=["none","card","bars"],Ti=["autarky","ratio",""],Di=["more-info","toggle","navigate","url","call-service","none"];let Ni=class extends q{constructor(){super(...arguments),this._subElementEditor=void 0,this._renderEmptySortable=!1,this._attached=!1}setConfig(t){this._config=t}async firstUpdated(){await this.loadCardHelpers();try{await this._helpers.createCardElement({type:"calendar",entities:["calendar.does_not_exist"]}),await this._helpers.createCardElement({type:"button",entity:"demo.demo"})}catch(t){}customElements&&(await customElements.get("hui-calendar-card").getConfigElement(),await customElements.get("hui-button-card").getConfigElement())}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}render(){var t,e,i,n,o,r,a,s,l,c;return this.hass?this._subElementEditor?this._renderSubElementEditor():T`
      <div class="card-config">
        <paper-input
          .label="${Ei("editor.settings.title")} (${Ei("editor.optional")})"
          .value=${(null===(t=this._config)||void 0===t?void 0:t.title)||""}
          .configValue=${"title"}
          @value-changed=${this._valueChanged}
        ></paper-input>
        <paper-dropdown-menu
          label="${Ei("editor.settings.animation")}"
          .configValue=${"animation"}
          @value-changed=${this._valueChanged}
        >
          <paper-listbox slot="dropdown-content" .selected=${ki.indexOf((null===(e=this._config)||void 0===e?void 0:e.animation)||"flash")}>
            ${ki.map((t=>T`<paper-item>${t}</paper-item>`))}
          </paper-listbox>
        </paper-dropdown-menu>
        <br />
        <div class="entity">
          <paper-dropdown-menu
            label="${Ei("editor.settings.center")}"
            .configValue=${"type"}
            @value-changed=${this._centerChanged}
          >
            <paper-listbox slot="dropdown-content" .selected="${Oi.indexOf((null===(n=null===(i=this._config)||void 0===i?void 0:i.center)||void 0===n?void 0:n.type)||"none")}">
              ${Oi.map((t=>T`<paper-item>${t}</paper-item>`))}
            </paper-listbox>
          </paper-dropdown-menu>
          ${"bars"==(null===(r=null===(o=this._config)||void 0===o?void 0:o.center)||void 0===r?void 0:r.type)||"card"==(null===(s=null===(a=this._config)||void 0===a?void 0:a.center)||void 0===s?void 0:s.type)?T`<mwc-icon-button
                aria-label=${Ei("editor.actions.edit")}
                class="edit-icon"
                .value=${null===(c=null===(l=this._config)||void 0===l?void 0:l.center)||void 0===c?void 0:c.type}
                @click="${this._editCenter}"
              >
                <ha-icon icon="mdi:pencil"></ha-icon>
              </mwc-icon-button>`:""}
        </div>
        <br />
        ${this._renderEntitiesEditor()}
      </div>
    `:T``}_centerChanged(t){if(this._config&&this.hass){if(t.target){const e=t.target;e.configValue&&(this._config=Object.assign(Object.assign({},this._config),{center:Object.assign(Object.assign({},this._config.center),{[e.configValue]:void 0!==e.checked?e.checked:e.value})}))}mt(this,"config-changed",{config:this._config})}}_editCenter(t){if(t.currentTarget){const e=t.currentTarget;this._subElementEditor={type:e.value}}}_renderSubElementEditor(){var t;const e=[T`<div class="header">
        <div class="back-title">
          <mwc-icon-button @click=${this._goBack}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </mwc-icon-button>
        </div>
      </div>`];switch(null===(t=this._subElementEditor)||void 0===t?void 0:t.type){case"entity":e.push(this._entityEditor());break;case"bars":e.push(this._barEditor());break;case"card":e.push(this._cardEditor())}return T`${e}`}_goBack(){var t;this._subElementEditor=void 0,null===(t=this._sortable)||void 0===t||t.destroy(),this._sortable=void 0,this._sortable=this._createSortable()}_itemEntityChanged(t){var e,i;if(!t.target)return;const n=t.target;if(!n.configValue)return;const o=n.index||(null===(e=this._subElementEditor)||void 0===e?void 0:e.index)||0,r=n.configValue.split("."),a=null!=n.checked?n.checked:null===(i=t.detail)||void 0===i?void 0:i.value,s=this._config.entities[o][r[0]]||void 0;if((s?r[1]?s[r[1]]:s:void 0)==a)return;const l=[...this._config.entities];l[o]=Object.assign(Object.assign({},l[o]),{[r[0]]:r[1]?Object.assign(Object.assign({},l[o][r[0]]),{[r[1]]:a}):a}),mt(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{entities:l})})}_entityEditor(){var t,e,i,n,o,r;const a=this._config.entities[(null===(t=this._subElementEditor)||void 0===t?void 0:t.index)||0],s=Object.keys(Object.assign({},null===(e=this.hass)||void 0===e?void 0:e.states[a.entity||0].attributes))||[],l=a.secondary_info_entity?Object.keys(Object.assign({},null===(i=this.hass)||void 0===i?void 0:i.states[a.secondary_info_entity||0].attributes)):[];return T`
      <div class="side-by-side">
        <ha-icon-input
          .label="${Ei("editor.settings.icon")}  (${Ei("editor.optional")})"
          .value=${a.icon}
          .configValue=${"icon"}
          @value-changed=${this._itemEntityChanged}
        ></ha-icon-input>
        <paper-input
          .label="${Ei("editor.settings.name")} (${Ei("editor.optional")})"
          .value=${a.name||void 0}
          .configValue=${"name"}
          @value-changed=${this._itemEntityChanged}
        ></paper-input>
      </div>
      <div class="side-by-side">
        <ha-entity-picker
          label="${Ei("editor.settings.entity")} (${Ei("editor.required")})"
          allow-custom-entity
          hideClearIcon
          .hass=${this.hass}
          .configValue=${"entity"}
          .value=${a.entity}
          @value-changed=${this._itemEntityChanged}
        ></ha-entity-picker>
        <paper-dropdown-menu
          label="${Ei("editor.settings.attribute")} (${Ei("editor.optional")})"
          .configValue=${"attribute"}
          @value-changed=${this._itemEntityChanged}
        >
          <paper-listbox
            slot="dropdown-content"
            .selected=${s.indexOf(a.attribute||"")+(a.attribute?1:0)}
          >
            ${s.length>0?T`<paper-item></paper-item>`:void 0}
            ${s.map((t=>T`<paper-item>${t}</paper-item>`))}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
      <div class="side-by-side">
        <paper-dropdown-menu
          label="${Ei("editor.settings.preset")}"
          .configValue=${"preset"}
          @value-changed=${this._itemEntityChanged}
        >
          <paper-listbox slot="dropdown-content" .selected=${xi.indexOf(a.preset||xi[0])}>
            ${xi.map((t=>T`<paper-item>${t}</paper-item>`))}
          </paper-listbox>
        </paper-dropdown-menu>
        <div class="checkbox">
          <input
            type="checkbox"
            id="hide-arrows"
            .checked="${a.hide_arrows||!1}"
            .configValue=${"hide_arrows"}
            @change=${this._itemEntityChanged}
          />
          <label for="invert-value"> ${Ei("editor.settings.hide-arrows")}</label>
        </div>
      </div>
      <div class="side-by-side">
        ${"battery"===a.preset?T`
                <ha-entity-picker
                  label="${Ei("editor.settings.battery_percentage")} (${Ei("editor.optional")})"
                  allow-custom-entity
                  hideClearIcon
                  .hass=${this.hass}
                  .configValue=${"battery_percentage_entity"}
                  .value=${a.battery_percentage_entity||""}
                  @value-changed=${this._itemEntityChanged}
                ></ha-entity-picker>
              `:"grid"===a.preset?T`
                <ha-entity-picker
                  label="${Ei("editor.settings.grid-buy")} (${Ei("editor.optional")})"
                  allow-custom-entity
                  hideClearIcon
                  .hass=${this.hass}
                  .configValue=${"grid_buy_entity"}
                  .value=${a.grid_buy_entity||""}
                  @value-changed=${this._itemEntityChanged}
                ></ha-entity-picker>
                <ha-entity-picker
                  label="${Ei("editor.settings.grid-sell")} (${Ei("editor.optional")})"
                  allow-custom-entity
                  hideClearIcon
                  .hass=${this.hass}
                  .configValue=${"grid_sell_entity"}
                  .value=${a.grid_sell_entity||""}
                  @value-changed=${this._itemEntityChanged}
                ></ha-entity-picker>
              `:T``}
      </div>
      <br /><br />
      <h3>${Ei("editor.settings.value",!0)} ${Ei("editor.settings.settings",!0)}</h3>
      <div class="side-by-side">
        <paper-input
          .label="${Ei("editor.settings.unit_of_display")}"
          .value=${a.unit_of_display||void 0}
          .configValue=${"unit_of_display"}
          @value-changed=${this._itemEntityChanged}
        ></paper-input>
        <paper-input
          auto-validate
          pattern="[0-9]"
          .label="${Ei("editor.settings.decimals")}"
          .value=${a.decimals||void 0}
          .configValue=${"decimals"}
          @value-changed=${this._itemEntityChanged}
        ></paper-input>
      </div>
      <div class="side-by-side">
        <div class="checkbox">
          <input
            type="checkbox"
            id="invert-value"
            .checked="${a.invert_value||!1}"
            .configValue=${"invert_value"}
            @change=${this._itemEntityChanged}
          />
          <label for="invert-value"> ${Ei("editor.settings.invert-value")}</label>
        </div>
        <div class="checkbox">
          <input
            type="checkbox"
            id="display-abs"
            .checked="${0!=a.display_abs}"
            .configValue=${"display_abs"}
            @change=${this._itemEntityChanged}
          />
          <label for="display-abs"> ${Ei("editor.settings.display-abs")} </label>
        </div>
      </div>
      <div class="side-by-side">
        <div class="checkbox">
          <input
            type="checkbox"
            id="calc_excluded"
            .checked="${a.calc_excluded}"
            .configValue=${"calc_excluded"}
            @change=${this._itemEntityChanged}
          />
          <label for="calc_excluded"> ${Ei("editor.settings.calc_excluded")} </label>
        </div>
        <paper-input
          .label="${Ei("editor.settings.threshold")}"
          .value=${a.threshold||void 0}
          .configValue=${"threshold"}
          @value-changed=${this._itemEntityChanged}
        ></paper-input>
      </div>
      <br />
      <h3>${Ei("editor.settings.secondary-info",!0)}</h3>
      <div class="side-by-side">
        <ha-entity-picker
          label="${Ei("editor.settings.entity")}"
          allow-custom-entity
          hideClearIcon
          .hass=${this.hass}
          .configValue=${"secondary_info_entity"}
          .value=${a.secondary_info_entity}
          @value-changed=${this._itemEntityChanged}
        ></ha-entity-picker>
        <paper-dropdown-menu
          allow-custom-entity
          label="${Ei("editor.settings.attribute")} (${Ei("editor.optional")})"
          .configValue=${"secondary_info_attribute"}
          @value-changed=${this._itemEntityChanged}
        >
          <paper-listbox
            slot="dropdown-content"
            .selected=${l.indexOf(a.secondary_info_attribute||"")+(a.secondary_info_attribute?1:0)}
          >
            ${l.length>0?T`<paper-item></paper-item>`:void 0}
            ${l.map((t=>T`<paper-item>${t}</paper-item>`))}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
      <br />
      <h3>${Ei("editor.settings.color-settings",!0)}</h3>
      <table>
        <tr>
          <th>Element</th>
          <th>&gt; 0</th>
          <th>= 0</th>
          <th>&lt; 0</th>
        </tr>
        <tr>
          <th>icon</th>
          <td>
            <paper-input
              .label="${Ei("editor.settings.bigger")}"
              .value=${(null===(n=a.icon_color)||void 0===n?void 0:n.bigger)||void 0}
              .configValue=${"icon_color.bigger"}
              @value-changed=${this._itemEntityChanged}
            ></paper-input>
          </td>
          <td>
            <paper-input
              .label="${Ei("editor.settings.equal")}"
              .value=${(null===(o=a.icon_color)||void 0===o?void 0:o.equal)||void 0}
              .configValue=${"icon_color.equal"}
              @value-changed=${this._itemEntityChanged}
            ></paper-input>
          </td>
          <td>
            <paper-input
              .label="${Ei("editor.settings.smaller")}"
              .value=${(null===(r=a.icon_color)||void 0===r?void 0:r.smaller)||void 0}
              .configValue=${"icon_color.smaller"}
              @value-changed=${this._itemEntityChanged}
            ></paper-input>
          </td>
        </tr>
      </table>
      <br />
      <h3>${Ei("editor.settings.action_settings")}</h3>
      <div class="side-by-side">
        <hui-action-editor
          .hass=${this.hass}
          .config=${a.tap_action||{action:"more-info"}}
          .actions=${Di}
          .configValue=${"tap_action"}
          @value-changed=${this._itemEntityChanged}
        >
        </hui-action-editor>
        <hui-action-editor
          .hass=${this.hass}
          .config=${a.double_tap_action}
          .actions=${Di}
          .configValue=${"double_tap_action"}
          @value-changed=${this._itemEntityChanged}
        >
        </hui-action-editor>
      </div>
    `}_barChanged(t){var e,i;if(!t.target)return;const n=t.target;if(!n.configValue)return;let o;if("content"==n.configValue)o=n.value;else{o=[...this._config.center.content];const r=n.index||(null===(e=this._subElementEditor)||void 0===e?void 0:e.index)||0;o[r]=Object.assign(Object.assign({},o[r]),{[n.configValue]:null!=n.checked?n.checked:null===(i=t.detail)||void 0===i?void 0:i.value})}this._config=Object.assign(Object.assign({},this._config),{center:{type:"bars",content:o}}),mt(this,"config-changed",{config:this._config})}_removeBar(t){var e;const i=(null===(e=t.currentTarget)||void 0===e?void 0:e.index)||0,n=[...this._config.center.content];n.splice(i,1),this._barChanged({target:{configValue:"content",value:n}})}async _addBar(){const t=Object.assign({},{name:"Name",preset:"custom"}),e=[...this._config.center.content||[],t];this._barChanged({target:{configValue:"content",value:e}})}_barEditor(){const t=[];return this._config.center.content&&this._config.center.content.forEach(((e,i)=>t.push(T`
        <div class="bar-editor">
          <h3 style="margin-bottom:6px;">Bar ${i+1}
          <mwc-icon-button
            aria-label=${Ei("editor.actions.remove")}
            class="remove-icon"
            .index=${i}
            @click=${this._removeBar}
            >
            <ha-icon icon="mdi:close"></ha-icon>
          </mwc-icon-button>
          </h4>
          <div class="side-by-side">
            <paper-input
              .label="${Ei("editor.settings.name")} (${Ei("editor.optional")})"
              .value=${e.name||""}
              .configValue=${"name"}
              @value-changed=${this._barChanged}
              .index=${i}
            ></paper-input>
            <ha-entity-picker
              label="${Ei("editor.settings.entity")}"
              allow-custom-entity
              hideClearIcon
              .hass=${this.hass}
              .configValue=${"entity"}
              .value=${e.entity}
              @value-changed=${this._barChanged}
              .index=${i}
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
                .index=${i}
              />
              <label for="invert-value"> ${Ei("editor.settings.invert-value")}</label>
            </div>
            <div>
            <paper-dropdown-menu
              label="${Ei("editor.settings.preset")}"
              .configValue=${"preset"}
              @value-changed=${this._barChanged}
              .index=${i}
            >
              <paper-listbox slot="dropdown-content" .selected=${Ti.indexOf(e.preset||"")}>
                ${Ti.map((t=>T`<paper-item>${t}</paper-item>`))}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          </div>
          <div class="side-by-side">
            <paper-input
              .label="${Ei("editor.settings.color")}"
              .value=${e.bar_color||""}
              .configValue=${"bar_color"}
              @value-changed=${this._barChanged}
              .index=${i}
            ></paper-input>
            <paper-input
              .label="${Ei("editor.settings.background_color")}"
              .value=${e.bar_bg_color||""}
              .configValue=${"bar_bg_color"}
              @value-changed=${this._barChanged}
              .index=${i}
            ></paper-input>
          </div>
          <h3>${Ei("editor.settings.action_settings")}</h3>
      <div class="side-by-side">
        <hui-action-editor
          .hass=${this.hass}
          .config=${e.tap_action}
          .actions=${Di}
          .configValue=${"tap_action"}
          @value-changed=${this._barChanged}
          .index=${i}
        >
        </hui-action-editor>
        <hui-action-editor
          .hass=${this.hass}
          .config=${e.double_tap_action}
          .actions=${Di}
          .configValue=${"double_tap_action"}
          @value-changed=${this._barChanged}
          .index=${i}
        >
        </hui-action-editor>
      </div>
        </div>
        <br/>
      `))),t.push(T`
      <mwc-icon-button aria-label=${Ei("editor.actions.add")} class="add-icon" @click="${this._addBar}">
        <ha-icon icon="mdi:plus-circle-outline"></ha-icon>
      </mwc-icon-button>
    `),T`${t.map((t=>T`${t}`))}`}_cardEditor(){return T`
      Sadly you cannot edit cards from the visual editor yet.
      <p />
      Check out the
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/JonahKr/power-distribution-card#cards-"
        >Readme</a
      >
      to check out the latest and best way to add it.
    `}_renderEntitiesEditor(){return T`
      <h3>
        ${Ei("editor.settings.entities")}
      </h3>
      <div class="entities">
          ${St([this._config.entities,this._renderEmptySortable],(()=>this._renderEmptySortable?"":this._config.entities.map(((t,e)=>T`
                    <div class="entity">
                      <ha-icon class="handle" icon="mdi:drag"></ha-icon>

                      <ha-entity-picker
                        label="Entity - ${t.preset}"
                        allow-custom-entity
                        hideClearIcon
                        .hass=${this.hass}
                        .configValue=${"entity"}
                        .value=${t.entity}
                        .index=${e}
                        @value-changed=${this._itemEntityChanged}
                      ></ha-entity-picker>

                      <mwc-icon-button
                        aria-label=${Ei("editor.actions.remove")}
                        class="remove-icon"
                        .index=${e}
                        @click=${this._removeRow}
                      >
                        <ha-icon icon="mdi:close"></ha-icon>
                      </mwc-icon-button>

                      <mwc-icon-button
                        aria-label=${Ei("editor.actions.edit")}
                        class="edit-icon"
                        .index=${e}
                        @click="${this._editRow}"
                      >
                        <ha-icon icon="mdi:pencil"></ha-icon>
                      </mwc-icon-button>
                    </div>
                  `))))}
        </div>
      </div>
      <div class="add-item">
        <paper-dropdown-menu
          label="${Ei("editor.settings.preset")}"
          name="preset"
          class="add-preset"
          >
          <paper-listbox slot="dropdown-content" .selected=1>
            ${xi.map((t=>T`<paper-item>${t}</paper-item>`))}
          </paper-listbox>
        </paper-dropdown-menu>

        <ha-entity-picker .hass=${this.hass} name="entity" class="add-entity"></ha-entity-picker>

        <mwc-icon-button
          aria-label=${Ei("editor.actions.add")}
          class="add-icon"
          @click="${this._addEntity}"
          >
          <ha-icon icon="mdi:plus-circle-outline"></ha-icon>
        </mwc-icon-button>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._attached=!0}disconnectedCallback(){super.disconnectedCallback(),this._attached=!1}updated(t){var e,i;super.updated(t);const n=t.has("_attached"),o=t.has("_config");if(o||n)return n&&!this._attached?(null===(e=this._sortable)||void 0===e||e.destroy(),void(this._sortable=void 0)):void(this._sortable||!(null===(i=this._config)||void 0===i?void 0:i.entities)?o&&null==this._subElementEditor&&this._handleEntitiesChanged():this._createSortable())}async _handleEntitiesChanged(){var t;this._renderEmptySortable=!0,await this.updateComplete;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".entities");for(;e.lastElementChild;)e.removeChild(e.lastElementChild);this._renderEmptySortable=!1}_createSortable(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".entities");e&&(this._sortable=new ai(e,{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onEnd:async t=>this._rowMoved(t)}))}_valueChanged(t){if(this._config&&this.hass){if(t.target){const e=t.target;e.configValue&&(this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value}))}mt(this,"config-changed",{config:this._config})}}async _addEntity(){var t,e;const i=(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".add-preset")).value||null,n=(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".add-entity")).value;if(!i||!n)return;const o=Object.assign({},Si,Ci[i],{entity:n,preset:i}),r=this._config.entities.concat(o);this._valueChanged({target:{configValue:"entities",value:r}})}_rowMoved(t){if(t.oldIndex===t.newIndex)return;const e=[...this._config.entities];e.splice(t.newIndex,0,e.splice(t.oldIndex,1)[0]),this._valueChanged({target:{configValue:"entities",value:e}})}_removeRow(t){var e;const i=(null===(e=t.currentTarget)||void 0===e?void 0:e.index)||0,n=[...this._config.entities];n.splice(i,1),this._valueChanged({target:{configValue:"entities",value:n}})}_editRow(t){var e;const i=(null===(e=t.currentTarget)||void 0===e?void 0:e.index)||0;this._subElementEditor={type:"entity",index:i}}static get styles(){return[r`
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
        paper-dropdown-menu {
          width: 100%;
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
      `]}};t([Z({attribute:!1})],Ni.prototype,"hass",void 0),t([Q()],Ni.prototype,"_config",void 0),t([Q()],Ni.prototype,"_subElementEditor",void 0),t([Q()],Ni.prototype,"_renderEmptySortable",void 0),t([Q()],Ni.prototype,"_attached",void 0),Ni=t([K("power-distribution-card-editor")],Ni);const Mi=r`
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
    font-size: 12px;
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
`,Pi=T`
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
`;var Ri=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some((function(t,n){return t[0]===e&&(i=n,!0)})),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),n=this.__entries__[i];return n&&n[1]},e.prototype.set=function(e,i){var n=t(this.__entries__,e);~n?this.__entries__[n][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,n=t(i,e);~n&&i.splice(n,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,n=this.__entries__;i<n.length;i++){var o=n[i];t.call(e,o[1],o[0])}},e}()}(),Ii="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,ji="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Hi="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(ji):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var Vi=["top","right","bottom","left","width","height","size","weight"],zi="undefined"!=typeof MutationObserver,Bi=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,n=!1,o=0;function r(){i&&(i=!1,t()),n&&s()}function a(){Hi(r)}function s(){var t=Date.now();if(i){if(t-o<2)return;n=!0}else i=!0,n=!1,setTimeout(a,e);o=t}return s}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){Ii&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),zi?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){Ii&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;Vi.some((function(t){return!!~i.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),Ui=function(t,e){for(var i=0,n=Object.keys(e);i<n.length;i++){var o=n[i];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},Li=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||ji},Wi=Ki(0,0,0,0);function Xi(t){return parseFloat(t)||0}function Fi(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce((function(e,i){return e+Xi(t["border-"+i+"-width"])}),0)}function Yi(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return Wi;var n=Li(t).getComputedStyle(t),o=function(t){for(var e={},i=0,n=["top","right","bottom","left"];i<n.length;i++){var o=n[i],r=t["padding-"+o];e[o]=Xi(r)}return e}(n),r=o.left+o.right,a=o.top+o.bottom,s=Xi(n.width),l=Xi(n.height);if("border-box"===n.boxSizing&&(Math.round(s+r)!==e&&(s-=Fi(n,"left","right")+r),Math.round(l+a)!==i&&(l-=Fi(n,"top","bottom")+a)),!function(t){return t===Li(t).document.documentElement}(t)){var c=Math.round(s+r)-e,d=Math.round(l+a)-i;1!==Math.abs(c)&&(s-=c),1!==Math.abs(d)&&(l-=d)}return Ki(o.left,o.top,s,l)}var qi="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof Li(t).SVGGraphicsElement}:function(t){return t instanceof Li(t).SVGElement&&"function"==typeof t.getBBox};function Gi(t){return Ii?qi(t)?function(t){var e=t.getBBox();return Ki(0,0,e.width,e.height)}(t):Yi(t):Wi}function Ki(t,e,i,n){return{x:t,y:e,width:i,height:n}}var Ji=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Ki(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=Gi(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),Zi=function(t,e){var i=function(t){var e=t.x,i=t.y,n=t.width,o=t.height,r="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(r.prototype);return Ui(a,{x:e,y:i,width:n,height:o,top:i,right:e+n,bottom:o+i,left:e}),a}(e);Ui(this,{target:t,contentRect:i})},Qi=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new Ri,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Li(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new Ji(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Li(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new Zi(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),tn="undefined"!=typeof WeakMap?new WeakMap:new Ri,en=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=Bi.getInstance(),n=new Qi(e,i,this);tn.set(this,n)};["observe","unobserve","disconnect"].forEach((function(t){en.prototype[t]=function(){var e;return(e=tn.get(this))[t].apply(e,arguments)}}));var nn=void 0!==ji.ResizeObserver?ji.ResizeObserver:en,on=Object.freeze({__proto__:null,default:nn});const rn=(t,e)=>{if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;let i,n;if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(!rn(t[i],e[i]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;for(i of t.entries())if(!rn(i[1],e.get(i[0])))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const o=Object.keys(t);if(n=o.length,n!==Object.keys(e).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(e,o[i]))return!1;for(i=n;0!=i--;){const n=o[i];if(!rn(t[n],e[n]))return!1}return!0}return t!=t&&e!=e};class an extends HTMLElement{constructor(){super(...arguments),this.holdTime=500}bind(t,e){t.actionHandler&&rn(e,t.actionHandler.options)||(t.actionHandler&&t.removeEventListener("click",t.actionHandler.end),t.actionHandler={options:e},e.disabled||(t.actionHandler.end=i=>{const n=t;i.cancelable&&i.preventDefault(),clearTimeout(this.timer),this.timer=void 0,e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,mt(n,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,mt(n,"action",{action:"double_tap"})):mt(n,"action",{action:"tap"})},t.addEventListener("click",t.actionHandler.end)))}}customElements.define("action-handler-power-distribution-card",an);const sn=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-power-distribution-card"))return t.querySelector("action-handler-power-distribution-card");const e=document.createElement("action-handler-power-distribution-card");return t.appendChild(e),e})();i&&i.bind(t,e)},ln=Et(class extends xt{update(t,[e]){return sn(t.element,e),D}render(t){}});console.info("%c POWER-DISTRIBUTION-CARD %c 2.4.0","font-weight: 500; color: white; background: #03a9f4;","font-weight: 500; color: #03a9f4; background: white;"),window.customCards.push({type:"power-distribution-card",name:"Power Distribution Card",description:Ei("common.description")});let cn=class extends q{constructor(){super(...arguments),this._narrow=!1}static async getConfigElement(){return document.createElement("power-distribution-card-editor")}static getStubConfig(){return{title:"Title",entities:[],center:{type:"bars",content:[{preset:"autarky",name:Ei("editor.settings.autarky")},{preset:"ratio",name:Ei("editor.settings.ratio")}]}}}async setConfig(t){const e=Object.assign({},Ai,t,{entities:[]});if(!t.entities)throw new Error("You need to define Entities!");t.entities.forEach((t=>{if(!t.preset||!xi.includes(t.preset))throw new Error("The preset `"+t.preset+"` is not a valid entry. Please choose a Preset from the List.");{const i=Object.assign({},Si,Ci[t.preset],t);e.entities.push(i)}})),this._config=e,"card"==this._config.center.type&&(this._card=this._createCardElement(this._config.center.content))}firstUpdated(){this._config.entities.forEach(((t,e)=>{if(!t.entity)return;const i=this.hass.states[t.entity].attributes.unit_of_measurement;t.unit_of_measurement||(this._config.entities[e].unit_of_measurement=i||"W")})),this._adjustWidth(),this._attachObserver(),this.requestUpdate()}updated(t){super.updated(t),this._card&&(t.has("hass")||t.has("editMode"))&&this.hass&&(this._card.hass=this.hass)}static get styles(){return Mi}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>this._attachObserver()))}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect()}async _attachObserver(){var t;this._resizeObserver||(await(async()=>{"function"!=typeof nn&&(window.ResizeObserver=(await Promise.resolve().then((function(){return on}))).default)})(),this._resizeObserver=new nn(function(t,e,i){var n;return void 0===i&&(i=!1),function(){var o=[].slice.call(arguments),r=this,a=function(){n=null,i||t.apply(r,o)},s=i&&!n;clearTimeout(n),n=setTimeout(a,e),s&&t.apply(r,o)}}((()=>this._adjustWidth()),250,!1)));const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&this._resizeObserver.observe(e)}_adjustWidth(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&(this._narrow=e.offsetWidth<400)}_val(t){var e;let i=t.invert_value?-1:1;"k"==(null===(e=t.unit_of_measurement)||void 0===e?void 0:e.charAt(0))&&(i*=1e3);const n=t.attribute||null;let o=t.entity?Number(n?this.hass.states[t.entity].attributes[n]:this.hass.states[t.entity].state):NaN;const r=t.threshold||null;return o=r&&Math.abs(o)<r?0:o,o*i}render(){const t=[],e=[],i=[];let n=0,o=0;this._config.entities.forEach(((e,r)=>{const a=this._val(e);e.calc_excluded||(e.producer&&a>0&&(o+=a),e.consumer&&a<0&&(n-=a));const s=this._render_item(a,e,r);switch(r%2){case 0:t.push(s);break;case 1:i.push(s)}}));switch(this._config.center.type){case"none":break;case"card":this._card?e.push(this._card):console.warn("NO CARD");break;case"bars":e.push(this._render_bars(n,o))}return T` ${this._narrow?Pi:void 0}
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          <div id="left-panel">${t}</div>
          <div id="center-panel">${e}</div>
          <div id="right-panel">${i}</div>
        </div>
      </ha-card>`}_handleAction(t){this.hass&&this._config&&t.detail.action&&function(t,e,i,n){var o;"double_tap"===n&&i.double_tap_action?o=i.double_tap_action:"hold"===n&&i.hold_action?o=i.hold_action:"tap"===n&&i.tap_action&&(o=i.tap_action),wt(t,e,i,o)}(this,this.hass,{entity:t.currentTarget.entity,tap_action:t.currentTarget.tap_action,double_tap_action:t.currentTarget.double_tap_action},t.detail.action)}_render_item(t,e,i){if(!e.entity)return T`<item class="placeholder"></item>`;const n=e.invert_arrow?-1*t:t;t=e.display_abs?Math.abs(t):t;let o=e.unit_of_display||"W";if("k"==o.charAt(0)[0])t/=1e3;else if("adaptive"==e.unit_of_display){let i="W";e.unit_of_measurement&&(i="k"==e.unit_of_measurement[0]?e.unit_of_measurement.substring(1):e.unit_of_measurement),Math.abs(t)>999?(t/=1e3,o="k"+i):o=i}const r=10**(e.decimals||0==e.decimals?e.decimals:2),a=function(t,e,i){var n;switch(null==e?void 0:e.number_format){case pt.comma_decimal:n=["en-US","en"];break;case pt.decimal_comma:n=["de","es","it"];break;case pt.space_comma:n=["fr","sv","cs"];break;case pt.system:n=void 0;break;default:n=null==e?void 0:e.language}if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},!Number.isNaN(Number(t))&&Intl&&(null==e?void 0:e.number_format)!==pt.none)try{return new Intl.NumberFormat(n,gt(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,gt(t,i)).format(Number(t))}return t?t.toString():""}(t=Math.round(t*r)/r,this.hass.locale);let s=e.icon;if("battery"===e.preset&&e.battery_percentage_entity){const t=this._val({entity:e.battery_percentage_entity});isNaN(t)||(s="mdi:battery",t<5?s="mdi:battery-outline":t<95&&(s="mdi:battery-"+(t/10).toFixed(0)+"0"))}let l,c=!1,d=T``;"grid"===e.preset&&(e.grid_buy_entity||e.grid_sell_entity)&&(c=!0,d=T`
        <div class="buy-sell">
          ${e.grid_buy_entity?T`<div class="grid-buy">
                B: ${this._val({entity:e.grid_buy_entity})}
                ${this.hass.states[e.grid_buy_entity].attributes.unit_of_measurement||void 0}
              </div>`:void 0}
          ${e.grid_sell_entity?T`<div class="grid-sell">
                S: ${this._val({entity:e.grid_sell_entity})}
                ${this.hass.states[e.grid_sell_entity].attributes.unit_of_measurement||void 0}
              </div>`:void 0}
        </div>
      `),e.icon_color&&(n>0&&(l=e.icon_color.bigger),n<0&&(l=e.icon_color.smaller),0==n&&(l=e.icon_color.equal));const h=isNaN(t);return T`
      <item
        .entity=${e.entity}
        .tap_action=${e.tap_action}
        .double_tap_action=${e.double_tap_action}
        @action=${this._handleAction}
        .actionHandler=${ln({hasDoubleClick:$t(e.double_tap_action)})}
    ">
        <badge>
          <icon>
            <ha-icon icon="${s}" style="${l?`color:${l};`:""}"></ha-icon>
            ${e.secondary_info_attribute?T`<p class="secondary">
                    ${this._val({entity:e.secondary_info_entity,attribute:e.secondary_info_attribute})}
                  </p>`:e.secondary_info_entity?T`<p class="secondary">
                    ${this._val({entity:e.secondary_info_entity})}
                    ${this.hass.states[e.secondary_info_entity].attributes.unit_of_measurement}
                  </p>`:""}
          </icon>
          ${c?d:T`<p class="subtitle">${e.name}</p>`}
        </badge>
        <value>
          <p>${h?"":a} ${h?"":o}</p>
          ${e.hide_arrows?T``:this._render_arrow(0==t||h?"none":i%2==0?n>0?"right":"left":n>0?"left":"right",i)}
        <value
      </item>
    `}_render_arrow(t,e){const i=this._config.animation;return"none"==t?T` <div class="blank"></div> `:T`
        <svg width="57" height="18" class="arrow">
          <defs>
            <polygon id="arrow-right" points="0 0, 0 16, 16 8" />
            <polygon id="arrow-left" points="16 0, 16 16, 0 8" />
            <g id="slide-${e}" class="arrow-color">
              <use href="#arrow-${t}" x="-36" />
              <use href="#arrow-${t}" x="-12" />
              <use href="#arrow-${t}" x="12" />
              <use href="#arrow-${t}" x="36" />
            </g>
            <g id="flash-${e}">
              <use
                href="#arrow-${t}"
                x="0"
                style="animation-delay: ${"right"==t?0:2}s;"
                id="a-flash"
              />
              <use href="#arrow-${t}" x="20" style="animation-delay: 1s;" id="a-flash" />
              <use
                href="#arrow-${t}"
                x="40"
                style="animation-delay: ${"right"==t?2:0}s;"
                id="a-flash"
              />
            </g>
            <g id="none-${e}" class="arrow-color">
              <use href="#arrow-${t}" x="0" />
              <use href="#arrow-${t}" x="20" />
              <use href="#arrow-${t}" x="40" />
            </g>
          </defs>
          <use href="#${i}-${e}" id="a-${i}-${t}" />
        </svg>
      `}_render_bars(t,e){const i=[];return this._config.center.content&&0!=this._config.center.content.length?(this._config.center.content.forEach((n=>{let o=-1;switch(n.preset){case"autarky":n.entity||(o=0!=t?Math.min(Math.round(100*e/Math.abs(t)),100):0);break;case"ratio":n.entity||(o=0!=e?Math.min(Math.round(100*Math.abs(t)/e),100):0)}o<0&&(o=parseInt(this._val(n).toFixed(0),10)),i.push(T`
        <div
          class="bar-element"
          .entity=${n.entity}
          .tap_action=${n.tap_action}
          .double_tap_action=${n.double_tap_action}
          @action=${this._handleAction}
          .actionHandler=${ln({hasDoubleClick:$t(n.double_tap_action)})}
          style="${n.tap_action||n.double_tap_action?"cursor: pointer;":""}"
        >
          <p class="bar-percentage">${o}%</p>
          <div class="bar-wrapper" style="${n.bar_bg_color?`background-color:${n.bar_bg_color};`:""}">
            <bar style="height:${o}%; background-color:${n.bar_color};" />
          </div>
          <p>${n.name||""}</p>
        </div>
      `)})),T`${i.map((t=>T`${t}`))}`):T``}_createCardElement(t){const e=function(t,e){void 0===e&&(e=!1);var i=function(t,e){return n("hui-error-card",{type:"error",error:t,config:e})},n=function(t,e){var n=window.document.createElement(t);try{n.setConfig(e)}catch(n){return console.error(t,n),i(n.message,e)}return n};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);var o=t.type;if(o&&o.startsWith("custom:"))o=o.substr("custom:".length);else if(e)if(bt.has(o))o="hui-"+o+"-row";else{if(!t.entity)return i("Invalid config given.",t);var r=t.entity.split(".",1)[0];o="hui-"+(_t[r]||"text")+"-entity-row"}else o="hui-"+o+"-card";if(customElements.get(o))return n(o,t);var a=i("Custom element doesn't exist: "+t.type+".",t);a.style.display="None";var s=setTimeout((function(){a.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(s),mt(a,"ll-rebuild",{},a)})),a}(t);return this.hass&&(e.hass=this.hass),e.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rebuildCard(e,t)}),{once:!0}),e}_rebuildCard(t,e){const i=this._createCardElement(e);t.parentElement&&t.parentElement.replaceChild(i,t),this._card===t&&(this._card=i)}};t([Z()],cn.prototype,"hass",void 0),t([Q()],cn.prototype,"_config",void 0),t([Z()],cn.prototype,"_card",void 0),t([Q()],cn.prototype,"_narrow",void 0),cn=t([K("power-distribution-card")],cn);export{cn as PowerDistributionCard};
