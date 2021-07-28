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
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class n{constructor(t,e){if(e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return e&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const o=new Map,r=t=>{let e=o.get(t);return void 0===e&&o.set(t,e=new n(t,i)),e},a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(t instanceof n)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return r(i)},s=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>r("string"==typeof t?t:t+""))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l,c,d,h;const u={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};class g extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this.Πp(i,e);void 0!==n&&(this.Πm.set(n,i),t.push(n))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=f){var n,o;const r=this.constructor.Πp(t,i);if(void 0!==r&&!0===i.reflect){const a=(null!==(o=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==o?o:u.toAttribute)(e,i.type);this.Πh=t,null==a?this.removeAttribute(r):this.setAttribute(r,a),this.Πh=null}}K(t,e){var i,n,o;const r=this.constructor,a=r.Πm.get(t);if(void 0!==a&&this.Πh!==a){const t=r.getPropertyOptions(a),s=t.converter,l=null!==(o=null!==(n=null===(i=s)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:"function"==typeof s?s:null)&&void 0!==o?o:u.fromAttribute;this.Πh=a,this[a]=l(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v,m,b,y;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null===(c=(l=globalThis).reactiveElementPlatformSupport)||void 0===c||c.call(l,{ReactiveElement:g}),(null!==(d=(h=globalThis).reactiveElementVersions)&&void 0!==d?d:h.reactiveElementVersions=[]).push("1.0.0-rc.2");const _=globalThis.trustedTypes,w=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,E=`lit$${(Math.random()+"").slice(9)}$`,$="?"+E,x=`<${$}>`,C=document,S=(t="")=>C.createComment(t),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,A=/>/g,N=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,M=/'/g,P=/"/g,R=/^(?:script|style|textarea)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),j=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),H=new WeakMap,z=C.createTreeWalker(C,129,null,!1);class B{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const a=t.length-1,s=this.parts,[l,c]=((t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":"",a=T;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===T?"!--"===l[1]?a=D:void 0!==l[1]?a=A:void 0!==l[2]?(R.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=N):void 0!==l[3]&&(a=N):a===N?">"===l[0]?(a=null!=o?o:T,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?N:'"'===l[3]?P:M):a===P||a===M?a=N:a===D||a===A?a=T:(a=N,o=void 0);const h=a===N&&t[e+1].startsWith("/>")?" ":"";r+=a===T?i+x:c>=0?(n.push(s),i.slice(0,c)+"$lit$"+i.slice(c)+E+h):i+E+(-2===c?(n.push(void 0),e):h)}const s=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==w?w.createHTML(s):s,n]})(t,e);if(this.el=B.createElement(l,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=z.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(E)){const i=c[r++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(E),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?F:"@"===e[1]?Y:X})}else s.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(R.test(n.tagName)){const t=n.textContent.split(E),e=t.length-1;if(e>0){n.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],S()),z.nextNode(),s.push({type:2,index:++o});n.append(t[e],S())}}}else if(8===n.nodeType)if(n.data===$)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(E,t+1));)s.push({type:7,index:o}),t+=E.length-1}o++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,n){var o,r,a,s;if(e===j)return e;let l=void 0!==n?null===(o=i.Σi)||void 0===o?void 0:o[n]:i.Σo;const c=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l.O)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l.T(t,i,n)),void 0!==n?(null!==(a=(s=i).Σi)&&void 0!==a?a:s.Σi=[])[n]=l:i.Σo=l),void 0!==l&&(e=L(t,l.S(t,e.values),l,n)),e}class U{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:n}=this.D,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);z.currentNode=o;let r=z.nextNode(),a=0,s=0,l=n[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new W(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new G(r,this,t)),this.l.push(e),l=n[++s]}a!==(null==l?void 0:l.index)&&(r=z.nextNode(),a++)}return o}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class W{constructor(t,e,i,n){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=n}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=L(this,t,e),k(t)?t===V||null==t||""===t?(this.H!==V&&this.R(),this.H=V):t!==this.H&&t!==j&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return O(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(C.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this.C(t):(void 0===n.el&&(n.el=B.createElement(n.h,this.options)),n);if((null===(e=this.H)||void 0===e?void 0:e.D)===o)this.H.v(i);else{const t=new U(o,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new B(t)),e}g(t){O(this.H)||(this.H=[],this.R());const e=this.H;let i,n=0;for(const o of t)n===e.length?e.push(i=new W(this.k(S()),this.k(S()),this,this.options)):i=e[n],i.I(o),n++;n<e.length&&(this.R(i&&i.B.nextSibling,n),e.length=n)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class X{constructor(t,e,i,n,o){this.type=1,this.H=V,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(V),this.strings=i):this.H=V}get tagName(){return this.element.tagName}I(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=L(this,t,e,0),r=!k(t)||t!==this.H&&t!==j,r&&(this.H=t);else{const n=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=L(this,n[i+a],e,a),s===j&&(s=this.H[a]),r||(r=!k(s)||s!==this.H[a]),s===V?t=V:t!==V&&(t+=(null!=s?s:"")+o[a+1]),this.H[a]=s}r&&!n&&this.W(t)}W(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends X{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===V?void 0:t}}class F extends X{constructor(){super(...arguments),this.type=4}W(t){t&&t!==V?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Y extends X{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=L(this,t,e,0))&&void 0!==i?i:V)===j)return;const n=this.H,o=t===V&&n!==V||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==V&&(n===V||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class G{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){L(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,J,Z,Q,tt,et;null===(m=(v=globalThis).litHtmlPlatformSupport)||void 0===m||m.call(v,B,W),(null!==(b=(y=globalThis).litHtmlVersions)&&void 0!==b?b:y.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(K=(et=globalThis).litElementVersions)&&void 0!==K?K:et.litElementVersions=[]).push("3.0.0-rc.2");class it extends g{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var n,o;const r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let a=r._$litPart$;if(void 0===a){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=a=new W(e.insertBefore(S(),t),t,void 0,i)}return a.I(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return j}}it.finalized=!0,it._$litElement$=!0,null===(Z=(J=globalThis).litElementHydrateSupport)||void 0===Z||Z.call(J,{LitElement:it}),null===(tt=(Q=globalThis).litElementPlatformSupport)||void 0===tt||tt.call(Q,{LitElement:it});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ot=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function rt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ot(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function at(t){return rt({...t,state:!0,attribute:!1})}var st="[^\\s]+";function lt(t,e){for(var i=[],n=0,o=t.length;n<o;n++)i.push(t[n].substr(0,e));return i}var ct=function(t){return function(e,i){var n=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return n>-1?n:null}};function dt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var n=0,o=e;n<o.length;n++){var r=o[n];for(var a in r)t[a]=r[a]}return t}var ht=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ut=["January","February","March","April","May","June","July","August","September","October","November","December"],pt=lt(ut,3),ft={dayNamesShort:lt(ht,3),dayNames:ht,monthNamesShort:pt,monthNames:ut,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},gt=(dt({},ft),function(t){return+t-1}),vt=[null,"[1-9]\\d?"],mt=[null,st],bt=["isPm",st,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],yt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}];ct("monthNamesShort"),ct("monthNames");var _t;!function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}(),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(_t||(_t={}));var wt=function(t,e){var i=e||{};if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var n=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=n,i.maximumFractionDigits=n}return i},Et=["closed","locked","off"],$t=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},xt=new Set(["call-service","divider","section","weblink","cast","select"]),Ct={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},St=function(t){$t(window,"haptic",t)},kt=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(St("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&$t(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),$t(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var n,o=function(t){return t.substr(0,t.indexOf("."))}(e),r="group"===o?"homeassistant":o;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(r,n,{entity_id:e})})(t,e,Et.includes(t.states[e].state))}(e,i.entity),St("success"));break;case"call-service":if(!n.service)return void St("failure");var o=n.service.split(".",2);e.callService(o[0],o[1],n.service_data),St("success");break;case"fire-dom-event":$t(t,"ll-custom",n)}};function Ot(t){return void 0!==t&&"none"!==t.action}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Tt=t=>(...e)=>({_$litDirective$:t,values:e});class Dt{constructor(t){}T(t,e,i){this.Σdt=t,this.M=e,this.Σct=i}S(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At={},Nt=Tt(class extends Dt{constructor(){super(...arguments),this.$t=At}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.$t)&&this.$t.length===e.length&&e.every(((t,e)=>t===this.$t[e])))return j}else if(this.$t===e)return j;return this.$t=Array.isArray(e)?Array.from(e):e,this.render(e,i)}});
/**!
 * Sortable 1.13.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Mt(t){return(Mt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Pt(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Rt(){return(Rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function It(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),n.forEach((function(e){Pt(t,e,i[e])}))}return t}function jt(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}function Vt(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var Ht=Vt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),zt=Vt(/Edge/i),Bt=Vt(/firefox/i),Lt=Vt(/safari/i)&&!Vt(/chrome/i)&&!Vt(/android/i),Ut=Vt(/iP(ad|od|hone)/i),Wt=Vt(/chrome/i)&&Vt(/android/i),Xt={capture:!1,passive:!1};function qt(t,e,i){t.addEventListener(e,i,!Ht&&Xt)}function Ft(t,e,i){t.removeEventListener(e,i,!Ht&&Xt)}function Yt(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function Gt(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function Kt(t,e,i,n){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&Yt(t,e):Yt(t,e))||n&&t===i)return t;if(t===i)break}while(t=Gt(t))}return null}var Jt,Zt=/\s+/g;function Qt(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(Zt," ").replace(" "+e+" "," ");t.className=(n+(i?" "+e:"")).replace(Zt," ")}}function te(t,e,i){var n=t&&t.style;if(n){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in n||-1!==e.indexOf("webkit")||(e="-webkit-"+e),n[e]=i+("string"==typeof i?"":"px")}}function ee(t,e){var i="";if("string"==typeof t)i=t;else do{var n=te(t,"transform");n&&"none"!==n&&(i=n+" "+i)}while(!e&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function ie(t,e,i){if(t){var n=t.getElementsByTagName(e),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function ne(){var t=document.scrollingElement;return t||document.documentElement}function oe(t,e,i,n,o){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==ne()?(a=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(o=o||t.parentNode,!Ht))do{if(o&&o.getBoundingClientRect&&("none"!==te(o,"transform")||i&&"static"!==te(o,"position"))){var u=o.getBoundingClientRect();a-=u.top+parseInt(te(o,"border-top-width")),s-=u.left+parseInt(te(o,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(o=o.parentNode);if(n&&t!==window){var p=ee(o||t),f=p&&p.a,g=p&&p.d;p&&(l=(a/=g)+(d/=g),c=(s/=f)+(h/=f))}return{top:a,left:s,bottom:l,right:c,width:h,height:d}}}function re(t,e,i){for(var n=de(t,!0),o=oe(t)[e];n;){var r=oe(n)[i];if(!("top"===i||"left"===i?o>=r:o<=r))return n;if(n===ne())break;n=de(n,!1)}return!1}function ae(t,e,i){for(var n=0,o=0,r=t.children;o<r.length;){if("none"!==r[o].style.display&&r[o]!==di.ghost&&r[o]!==di.dragged&&Kt(r[o],i.draggable,t,!1)){if(n===e)return r[o];n++}o++}return null}function se(t,e){for(var i=t.lastElementChild;i&&(i===di.ghost||"none"===te(i,"display")||e&&!Yt(i,e));)i=i.previousElementSibling;return i||null}function le(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===di.clone||e&&!Yt(t,e)||i++;return i}function ce(t){var e=0,i=0,n=ne();if(t)do{var o=ee(t),r=o.a,a=o.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[e,i]}function de(t,e){if(!t||!t.getBoundingClientRect)return ne();var i=t,n=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=te(i);if(i.clientWidth<i.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){if(!i.getBoundingClientRect||i===document.body)return ne();if(n||e)return i;n=!0}}}while(i=i.parentNode);return ne()}function he(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function ue(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}var pe="Sortable"+(new Date).getTime();function fe(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach((function(t){if("none"!==te(t,"display")&&t!==di.ghost){e.push({target:t,rect:oe(t)});var i=It({},e[e.length-1].rect);if(t.thisAnimationDuration){var n=ee(t,!0);n&&(i.top-=n.f,i.left-=n.e)}t.fromRect=i}}))},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[i][n])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var n=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var o=!1,r=0;e.forEach((function(t){var e=0,i=t.target,a=i.fromRect,s=oe(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=ee(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&he(l,s)&&!he(a,s)&&(d.top-s.top)/(d.left-s.left)==(a.top-s.top)/(a.left-s.left)&&(e=function(t,e,i,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*n.animation}(d,l,c,n.options)),he(s,a)||(i.prevFromRect=a,i.prevToRect=s,e||(e=n.options.animation),n.animate(i,d,s,e)),e&&(o=!0,r=Math.max(r,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout((function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null}),e),i.thisAnimationDuration=e)})),clearTimeout(t),o?t=setTimeout((function(){"function"==typeof i&&i()}),r):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,n){if(n){te(t,"transition",""),te(t,"transform","");var o=ee(this.el),r=o&&o.a,a=o&&o.d,s=(e.left-i.left)/(r||1),l=(e.top-i.top)/(a||1);t.animatingX=!!s,t.animatingY=!!l,te(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),te(t,"transition","transform "+n+"ms"+(this.options.easing?" "+this.options.easing:"")),te(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout((function(){te(t,"transition",""),te(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1}),n)}}}}var ge=[],ve={initializeByDefault:!0},me={mount:function(t){for(var e in ve)ve.hasOwnProperty(e)&&!(e in t)&&(t[e]=ve[e]);ge.forEach((function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")})),ge.push(t)},pluginEvent:function(t,e,i){var n=this;this.eventCanceled=!1,i.cancel=function(){n.eventCanceled=!0};var o=t+"Global";ge.forEach((function(n){e[n.pluginName]&&(e[n.pluginName][o]&&e[n.pluginName][o](It({sortable:e},i)),e.options[n.pluginName]&&e[n.pluginName][t]&&e[n.pluginName][t](It({sortable:e},i)))}))},initializePlugins:function(t,e,i,n){for(var o in ge.forEach((function(n){var o=n.pluginName;if(t.options[o]||n.initializeByDefault){var r=new n(t,e,t.options);r.sortable=t,r.options=t.options,t[o]=r,Rt(i,r.defaults)}})),t.options)if(t.options.hasOwnProperty(o)){var r=this.modifyOption(t,o,t.options[o]);void 0!==r&&(t.options[o]=r)}},getEventProperties:function(t,e){var i={};return ge.forEach((function(n){"function"==typeof n.eventProperties&&Rt(i,n.eventProperties.call(e[n.pluginName],t))})),i},modifyOption:function(t,e,i){var n;return ge.forEach((function(o){t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[e]&&(n=o.optionListeners[e].call(t[o.pluginName],i))})),n}};var be=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.evt,o=jt(i,["evt"]);me.pluginEvent.bind(di)(t,e,It({dragEl:_e,parentEl:we,ghostEl:Ee,rootEl:$e,nextEl:xe,lastDownEl:Ce,cloneEl:Se,cloneHidden:ke,dragStarted:ze,putSortable:Me,activeSortable:di.active,originalEvent:n,oldIndex:Oe,oldDraggableIndex:De,newIndex:Te,newDraggableIndex:Ae,hideGhostForTarget:ai,unhideGhostForTarget:si,cloneNowHidden:function(){ke=!0},cloneNowShown:function(){ke=!1},dispatchSortableEvent:function(t){ye({sortable:e,name:t,originalEvent:n})}},o))};function ye(t){!function(t){var e=t.sortable,i=t.rootEl,n=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,f=t.extraEventProperties;if(e=e||i&&i[pe]){var g,v=e.options,m="on"+n.charAt(0).toUpperCase()+n.substr(1);!window.CustomEvent||Ht||zt?(g=document.createEvent("Event")).initEvent(n,!0,!0):g=new CustomEvent(n,{bubbles:!0,cancelable:!0}),g.to=a||i,g.from=s||i,g.item=o||i,g.clone=r,g.oldIndex=l,g.newIndex=c,g.oldDraggableIndex=d,g.newDraggableIndex=h,g.originalEvent=u,g.pullMode=p?p.lastPutMode:void 0;var b=It({},f,me.getEventProperties(n,e));for(var y in b)g[y]=b[y];i&&i.dispatchEvent(g),v[m]&&v[m].call(e,g)}}(It({putSortable:Me,cloneEl:Se,targetEl:_e,rootEl:$e,oldIndex:Oe,oldDraggableIndex:De,newIndex:Te,newDraggableIndex:Ae},t))}var _e,we,Ee,$e,xe,Ce,Se,ke,Oe,Te,De,Ae,Ne,Me,Pe,Re,Ie,je,Ve,He,ze,Be,Le,Ue,We,Xe=!1,qe=!1,Fe=[],Ye=!1,Ge=!1,Ke=[],Je=!1,Ze=[],Qe="undefined"!=typeof document,ti=Ut,ei=zt||Ht?"cssFloat":"float",ii=Qe&&!Wt&&!Ut&&"draggable"in document.createElement("div"),ni=function(){if(Qe){if(Ht)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),oi=function(t,e){var i=te(t),n=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=ae(t,0,e),r=ae(t,1,e),a=o&&te(o),s=r&&te(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+oe(o).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+oe(r).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return o&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=n&&"none"===i[ei]||r&&"none"===i[ei]&&l+c>n)?"vertical":"horizontal"},ri=function(t){function e(t,i){return function(n,o,r,a){var s=n.options.group.name&&o.options.group.name&&n.options.group.name===o.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(n,o,r,a),i)(n,o,r,a);var l=(i?n:o).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},n=t.group;n&&"object"==Mt(n)||(n={name:n}),i.name=n.name,i.checkPull=e(n.pull,!0),i.checkPut=e(n.put),i.revertClone=n.revertClone,t.group=i},ai=function(){!ni&&Ee&&te(Ee,"display","none")},si=function(){!ni&&Ee&&te(Ee,"display","")};Qe&&document.addEventListener("click",(function(t){if(qe)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),qe=!1,!1}),!0);var li=function(t){if(_e){var e=function(t,e){var i;return Fe.some((function(n){if(!se(n)){var o=oe(n),r=n[pe].options.emptyInsertThreshold,a=t>=o.left-r&&t<=o.right+r,s=e>=o.top-r&&e<=o.bottom+r;return r&&a&&s?i=n:void 0}})),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[pe]._onDragOver(i)}}},ci=function(t){_e&&_e.parentNode[pe]._isOutsideThisEl(t.target)};function di(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Rt({},e),t[pe]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return oi(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==di.supportPointer&&"PointerEvent"in window&&!Lt,emptyInsertThreshold:5};for(var n in me.initializePlugins(this,t,i),i)!(n in e)&&(e[n]=i[n]);for(var o in ri(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&ii,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?qt(t,"pointerdown",this._onTapStart):(qt(t,"mousedown",this._onTapStart),qt(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(qt(t,"dragover",this),qt(t,"dragenter",this)),Fe.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Rt(this,fe())}function hi(t,e,i,n,o,r,a,s){var l,c,d=t[pe],h=d.options.onMove;return!window.CustomEvent||Ht||zt?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=n,l.related=o||e,l.relatedRect=r||oe(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function ui(t){t.draggable=!1}function pi(){Je=!1}function fi(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,n=0;i--;)n+=e.charCodeAt(i);return n.toString(36)}function gi(t){return setTimeout(t,0)}function vi(t){return clearTimeout(t)}di.prototype={constructor:di,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Be=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,_e):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,n=this.options,o=n.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=n.filter;if(function(t){Ze.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var n=e[i];n.checked&&Ze.push(n)}}(i),!_e&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||n.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Lt||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Kt(s,n.draggable,i,!1))&&s.animated||Ce===s)){if(Oe=le(s),De=le(s,n.draggable),"function"==typeof c){if(c.call(this,t,s,this))return ye({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),be("filter",e,{evt:t}),void(o&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some((function(n){if(n=Kt(l,n.trim(),i,!1))return ye({sortable:e,rootEl:n,name:"filter",targetEl:s,fromEl:i,toEl:i}),be("filter",e,{evt:t}),!0}))))return void(o&&t.cancelable&&t.preventDefault());n.handle&&!Kt(l,n.handle,i,!1)||this._prepareDragStart(t,a,s)}}},_prepareDragStart:function(t,e,i){var n,o=this,r=o.el,a=o.options,s=r.ownerDocument;if(i&&!_e&&i.parentNode===r){var l=oe(i);if($e=r,we=(_e=i).parentNode,xe=_e.nextSibling,Ce=i,Ne=a.group,di.dragged=_e,Pe={target:_e,clientX:(e||t).clientX,clientY:(e||t).clientY},Ve=Pe.clientX-l.left,He=Pe.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,_e.style["will-change"]="all",n=function(){be("delayEnded",o,{evt:t}),di.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),!Bt&&o.nativeDraggable&&(_e.draggable=!0),o._triggerDragStart(t,e),ye({sortable:o,name:"choose",originalEvent:t}),Qt(_e,a.chosenClass,!0))},a.ignore.split(",").forEach((function(t){ie(_e,t.trim(),ui)})),qt(s,"dragover",li),qt(s,"mousemove",li),qt(s,"touchmove",li),qt(s,"mouseup",o._onDrop),qt(s,"touchend",o._onDrop),qt(s,"touchcancel",o._onDrop),Bt&&this.nativeDraggable&&(this.options.touchStartThreshold=4,_e.draggable=!0),be("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(zt||Ht))n();else{if(di.eventCanceled)return void this._onDrop();qt(s,"mouseup",o._disableDelayedDrag),qt(s,"touchend",o._disableDelayedDrag),qt(s,"touchcancel",o._disableDelayedDrag),qt(s,"mousemove",o._delayedDragTouchMoveHandler),qt(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&qt(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(n,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){_e&&ui(_e),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;Ft(t,"mouseup",this._disableDelayedDrag),Ft(t,"touchend",this._disableDelayedDrag),Ft(t,"touchcancel",this._disableDelayedDrag),Ft(t,"mousemove",this._delayedDragTouchMoveHandler),Ft(t,"touchmove",this._delayedDragTouchMoveHandler),Ft(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?qt(document,"pointermove",this._onTouchMove):qt(document,e?"touchmove":"mousemove",this._onTouchMove):(qt(_e,"dragend",this),qt($e,"dragstart",this._onDragStart));try{document.selection?gi((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(Xe=!1,$e&&_e){be("dragStarted",this,{evt:e}),this.nativeDraggable&&qt(document,"dragover",ci);var i=this.options;!t&&Qt(_e,i.dragClass,!1),Qt(_e,i.ghostClass,!0),di.active=this,t&&this._appendGhost(),ye({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(Re){this._lastX=Re.clientX,this._lastY=Re.clientY,ai();for(var t=document.elementFromPoint(Re.clientX,Re.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Re.clientX,Re.clientY))!==e;)e=t;if(_e.parentNode[pe]._isOutsideThisEl(t),e)do{if(e[pe]){if(e[pe]._onDragOver({clientX:Re.clientX,clientY:Re.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);si()}},_onTouchMove:function(t){if(Pe){var e=this.options,i=e.fallbackTolerance,n=e.fallbackOffset,o=t.touches?t.touches[0]:t,r=Ee&&ee(Ee,!0),a=Ee&&r&&r.a,s=Ee&&r&&r.d,l=ti&&We&&ce(We),c=(o.clientX-Pe.clientX+n.x)/(a||1)+(l?l[0]-Ke[0]:0)/(a||1),d=(o.clientY-Pe.clientY+n.y)/(s||1)+(l?l[1]-Ke[1]:0)/(s||1);if(!di.active&&!Xe){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(Ee){r?(r.e+=c-(Ie||0),r.f+=d-(je||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");te(Ee,"webkitTransform",h),te(Ee,"mozTransform",h),te(Ee,"msTransform",h),te(Ee,"transform",h),Ie=c,je=d,Re=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Ee){var t=this.options.fallbackOnBody?document.body:$e,e=oe(_e,!0,ti,!0,t),i=this.options;if(ti){for(We=t;"static"===te(We,"position")&&"none"===te(We,"transform")&&We!==document;)We=We.parentNode;We!==document.body&&We!==document.documentElement?(We===document&&(We=ne()),e.top+=We.scrollTop,e.left+=We.scrollLeft):We=ne(),Ke=ce(We)}Qt(Ee=_e.cloneNode(!0),i.ghostClass,!1),Qt(Ee,i.fallbackClass,!0),Qt(Ee,i.dragClass,!0),te(Ee,"transition",""),te(Ee,"transform",""),te(Ee,"box-sizing","border-box"),te(Ee,"margin",0),te(Ee,"top",e.top),te(Ee,"left",e.left),te(Ee,"width",e.width),te(Ee,"height",e.height),te(Ee,"opacity","0.8"),te(Ee,"position",ti?"absolute":"fixed"),te(Ee,"zIndex","100000"),te(Ee,"pointerEvents","none"),di.ghost=Ee,t.appendChild(Ee),te(Ee,"transform-origin",Ve/parseInt(Ee.style.width)*100+"% "+He/parseInt(Ee.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,n=t.dataTransfer,o=i.options;be("dragStart",this,{evt:t}),di.eventCanceled?this._onDrop():(be("setupClone",this),di.eventCanceled||((Se=ue(_e)).draggable=!1,Se.style["will-change"]="",this._hideClone(),Qt(Se,this.options.chosenClass,!1),di.clone=Se),i.cloneId=gi((function(){be("clone",i),di.eventCanceled||(i.options.removeCloneOnHide||$e.insertBefore(Se,_e),i._hideClone(),ye({sortable:i,name:"clone"}))})),!e&&Qt(_e,o.dragClass,!0),e?(qe=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Ft(document,"mouseup",i._onDrop),Ft(document,"touchend",i._onDrop),Ft(document,"touchcancel",i._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(i,n,_e)),qt(document,"drop",i),te(_e,"transform","translateZ(0)")),Xe=!0,i._dragStartId=gi(i._dragStarted.bind(i,e,t)),qt(document,"selectstart",i),ze=!0,Lt&&te(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,n,o,r=this.el,a=t.target,s=this.options,l=s.group,c=di.active,d=Ne===l,h=s.sort,u=Me||c,p=this,f=!1;if(!Je){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=Kt(a,s.draggable,r,!0),O("dragOver"),di.eventCanceled)return f;if(_e.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return D(!1);if(qe=!1,c&&!s.disabled&&(d?h||(n=!$e.contains(_e)):Me===this||(this.lastPutMode=Ne.checkPull(this,c,_e,t))&&l.checkPut(this,c,_e,t))){if(o="vertical"===this._getDirection(t,a),e=oe(_e),O("dragOverValid"),di.eventCanceled)return f;if(n)return we=$e,T(),this._hideClone(),O("revert"),di.eventCanceled||(xe?$e.insertBefore(_e,xe):$e.appendChild(_e)),D(!0);var g=se(r,s.draggable);if(!g||function(t,e,i){var n=oe(se(i.el,i.options.draggable)),o=10;return e?t.clientX>n.right+o||t.clientX<=n.right&&t.clientY>n.bottom&&t.clientX>=n.left:t.clientX>n.right&&t.clientY>n.top||t.clientX<=n.right&&t.clientY>n.bottom+o}(t,o,this)&&!g.animated){if(g===_e)return D(!1);if(g&&r===t.target&&(a=g),a&&(i=oe(a)),!1!==hi($e,r,_e,e,a,i,t,!!a))return T(),r.appendChild(_e),we=r,A(),D(!0)}else if(a.parentNode===r){i=oe(a);var v,m,b,y=_e.parentNode!==r,_=!function(t,e,i){var n=i?t.left:t.top,o=i?t.right:t.bottom,r=i?t.width:t.height,a=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return n===a||o===s||n+r/2===a+l/2}(_e.animated&&_e.toRect||e,a.animated&&a.toRect||i,o),w=o?"top":"left",E=re(a,"top","top")||re(_e,"top","top"),$=E?E.scrollTop:void 0;if(Be!==a&&(m=i[w],Ye=!1,Ge=!_&&s.invertSwap||y),0!==(v=function(t,e,i,n,o,r,a,s){var l=n?t.clientY:t.clientX,c=n?i.height:i.width,d=n?i.top:i.left,h=n?i.bottom:i.right,u=!1;if(!a)if(s&&Ue<c*o){if(!Ye&&(1===Le?l>d+c*r/2:l<h-c*r/2)&&(Ye=!0),Ye)u=!0;else if(1===Le?l<d+Ue:l>h-Ue)return-Le}else if(l>d+c*(1-o)/2&&l<h-c*(1-o)/2)return function(t){return le(_e)<le(t)?1:-1}(e);if((u=u||a)&&(l<d+c*r/2||l>h-c*r/2))return l>d+c/2?1:-1;return 0}(t,a,i,o,_?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Ge,Be===a))){var x=le(_e);do{x-=v,b=we.children[x]}while(b&&("none"===te(b,"display")||b===Ee))}if(0===v||b===a)return D(!1);Be=a,Le=v;var C=a.nextElementSibling,S=!1,k=hi($e,r,_e,e,a,i,t,S=1===v);if(!1!==k)return 1!==k&&-1!==k||(S=1===k),Je=!0,setTimeout(pi,30),T(),S&&!C?r.appendChild(_e):a.parentNode.insertBefore(_e,S?C:a),E&&function(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}(E,0,$-E.scrollTop),we=_e.parentNode,void 0===m||Ge||(Ue=Math.abs(m-oe(a)[w])),A(),D(!0)}if(r.contains(_e))return D(!1)}return!1}function O(s,l){be(s,p,It({evt:t,isOwner:d,axis:o?"vertical":"horizontal",revert:n,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:a,completed:D,onMove:function(i,n){return hi($e,r,_e,e,i,oe(i),t,n)},changed:A},l))}function T(){O("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function D(e){return O("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(Qt(_e,Me?Me.options.ghostClass:c.options.ghostClass,!1),Qt(_e,s.ghostClass,!0)),Me!==p&&p!==di.active?Me=p:p===di.active&&Me&&(Me=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll((function(){O("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a===_e&&!_e.animated||a===r&&!a.animated)&&(Be=null),s.dragoverBubble||t.rootEl||a===document||(_e.parentNode[pe]._isOutsideThisEl(t.target),!e&&li(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),f=!0}function A(){Te=le(_e),Ae=le(_e,s.draggable),ye({sortable:p,name:"change",toEl:r,newIndex:Te,newDraggableIndex:Ae,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Ft(document,"mousemove",this._onTouchMove),Ft(document,"touchmove",this._onTouchMove),Ft(document,"pointermove",this._onTouchMove),Ft(document,"dragover",li),Ft(document,"mousemove",li),Ft(document,"touchmove",li)},_offUpEvents:function(){var t=this.el.ownerDocument;Ft(t,"mouseup",this._onDrop),Ft(t,"touchend",this._onDrop),Ft(t,"pointerup",this._onDrop),Ft(t,"touchcancel",this._onDrop),Ft(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;Te=le(_e),Ae=le(_e,i.draggable),be("drop",this,{evt:t}),we=_e&&_e.parentNode,Te=le(_e),Ae=le(_e,i.draggable),di.eventCanceled||(Xe=!1,Ge=!1,Ye=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),vi(this.cloneId),vi(this._dragStartId),this.nativeDraggable&&(Ft(document,"drop",this),Ft(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Lt&&te(document.body,"user-select",""),te(_e,"transform",""),t&&(ze&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),Ee&&Ee.parentNode&&Ee.parentNode.removeChild(Ee),($e===we||Me&&"clone"!==Me.lastPutMode)&&Se&&Se.parentNode&&Se.parentNode.removeChild(Se),_e&&(this.nativeDraggable&&Ft(_e,"dragend",this),ui(_e),_e.style["will-change"]="",ze&&!Xe&&Qt(_e,Me?Me.options.ghostClass:this.options.ghostClass,!1),Qt(_e,this.options.chosenClass,!1),ye({sortable:this,name:"unchoose",toEl:we,newIndex:null,newDraggableIndex:null,originalEvent:t}),$e!==we?(Te>=0&&(ye({rootEl:we,name:"add",toEl:we,fromEl:$e,originalEvent:t}),ye({sortable:this,name:"remove",toEl:we,originalEvent:t}),ye({rootEl:we,name:"sort",toEl:we,fromEl:$e,originalEvent:t}),ye({sortable:this,name:"sort",toEl:we,originalEvent:t})),Me&&Me.save()):Te!==Oe&&Te>=0&&(ye({sortable:this,name:"update",toEl:we,originalEvent:t}),ye({sortable:this,name:"sort",toEl:we,originalEvent:t})),di.active&&(null!=Te&&-1!==Te||(Te=Oe,Ae=De),ye({sortable:this,name:"end",toEl:we,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){be("nulling",this),$e=_e=we=Ee=xe=Se=Ce=ke=Pe=Re=ze=Te=Ae=Oe=De=Be=Le=Me=Ne=di.dragged=di.ghost=di.clone=di.active=null,Ze.forEach((function(t){t.checked=!0})),Ze.length=Ie=je=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":_e&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,n=0,o=i.length,r=this.options;n<o;n++)Kt(t=i[n],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||fi(t));return e},sort:function(t,e){var i={},n=this.el;this.toArray().forEach((function(t,e){var o=n.children[e];Kt(o,this.options.draggable,n,!1)&&(i[t]=o)}),this),e&&this.captureAnimationState(),t.forEach((function(t){i[t]&&(n.removeChild(i[t]),n.appendChild(i[t]))})),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return Kt(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var n=me.modifyOption(this,t,e);i[t]=void 0!==n?n:e,"group"===t&&ri(i)},destroy:function(){be("destroy",this);var t=this.el;t[pe]=null,Ft(t,"mousedown",this._onTapStart),Ft(t,"touchstart",this._onTapStart),Ft(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Ft(t,"dragover",this),Ft(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),Fe.splice(Fe.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!ke){if(be("hideClone",this),di.eventCanceled)return;te(Se,"display","none"),this.options.removeCloneOnHide&&Se.parentNode&&Se.parentNode.removeChild(Se),ke=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(ke){if(be("showClone",this),di.eventCanceled)return;_e.parentNode!=$e||this.options.group.revertClone?xe?$e.insertBefore(Se,xe):$e.appendChild(Se):$e.insertBefore(Se,_e),this.options.group.revertClone&&this.animate(_e,Se),te(Se,"display",""),ke=!1}}else this._hideClone()}},Qe&&qt(document,"touchmove",(function(t){(di.active||Xe)&&t.cancelable&&t.preventDefault()})),di.utils={on:qt,off:Ft,css:te,find:ie,is:function(t,e){return!!Kt(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:function(t,e){return function(){if(!Jt){var i=arguments,n=this;1===i.length?t.call(n,i[0]):t.apply(n,i),Jt=setTimeout((function(){Jt=void 0}),e)}}},closest:Kt,toggleClass:Qt,clone:ue,index:le,nextTick:gi,cancelNextTick:vi,detectDirection:oi,getChild:ae},di.get=function(t){return t[pe]},di.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(di.utils=It({},di.utils,t.utils)),me.mount(t)}))},di.create=function(t,e){return new di(t,e)},di.version="1.13.0";var mi=function(t){var e=t.originalEvent,i=t.putSortable,n=t.dragEl,o=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||o;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:n,putSortable:i}))}};function bi(){}function yi(){}bi.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var n=ae(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(e,n):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:mi},Rt(bi,{pluginName:"revertOnSpill"}),yi.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:mi},Rt(yi,{pluginName:"removeOnSpill"});var _i={version:"Version",description:"A Lovelace Card for visualizing power distributions.",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},wi={actions:{add:"Add",edit:"Edit",remove:"Remove",save:"Save"},optional:"Optional",required:"Required",settings:{action_settings:"Action Settings",animation:"Animation",autarky:"autarky",attribute:"Attribute",background_color:"Background Color",bigger:"Bigger",calc_excluded:"Excluded from Calculations",center:"Center",color:"Color","color-settings":"Color Settings",decimals:"Decimals","display-abs":"Display Absolute Value",entities:"Entities",entity:"Entity",equal:"Equal","hide-arrows":"Hide Arrows",icon:"Icon","invert-value":"Invert Value",name:"Name",preset:"Preset",ratio:"ratio","secondary-info":"Secondary Info",settings:"settings",smaller:"Smaller",threshold:"Threshold",title:"Title",unit_of_display:"Unit of Display",value:"value"}},Ei={common:_i,editor:wi},$i={version:"Version",description:"Eine Karte zur Visualizierung von Stromverteilungen",invalid_configuration:"Ungültige Konfiguration",show_warning:"Warnung"},xi={actions:{add:"Hinzufügen",edit:"Bearbeiten",remove:"Entfernen",save:"Speichern"},optional:"Optional",required:"Erforderlich",settings:{action_settings:"Aktions Einstellungen",animation:"Animation",autarky:"Autarkie",attribute:"Attribut",background_color:"Hintergrundfarbe",bigger:"Größer ",calc_excluded:"Von Rechnungen ausgeschlossen",center:"Mittelbereich",color:"Farbe","color-settings":"Farb Einstellungen",decimals:"Dezimalstellen","display-abs":"Absolute Wertanzeige",entities:"Entities",entity:"Element",equal:"Gleich","hide-arrows":"Pfeile Verstecken",icon:"Symbol","invert-value":"Invertierter Wert",name:"Name",preset:"Vorlagen",ratio:"Anteil","secondary-info":"Zusatzinformationen",settings:"Einstellungen",smaller:"Kleiner",threshold:"Schwellenwert",title:"Titel",unit_of_display:"Angezeigte Einheit",value:"Wert"}},Ci={common:$i,editor:xi};const Si={en:Object.freeze({__proto__:null,common:_i,editor:wi,default:Ei}),de:Object.freeze({__proto__:null,common:$i,editor:xi,default:Ci})};function ki(t,e=!1,i="",n=""){const o=(localStorage.getItem("selectedLanguage")||navigator.language.split("-")[0]||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=t.split(".").reduce(((t,e)=>t[e]),Si[o])}catch(e){r=t.split(".").reduce(((t,e)=>t[e]),Si.en)}return void 0===r&&(r=t.split(".").reduce(((t,e)=>t[e]),Si.en)),""!==i&&""!==n&&(r=r.replace(i,n)),e?function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(r):r}const Oi=["battery","car_charger","consumer","grid","home","hydro","pool","producer","solar","wind"],Ti={battery:{consumer:!0,icon:"mdi:battery-outline",name:"battery",producer:!0},car_charger:{consumer:!0,icon:"mdi:car-electric",name:"car"},consumer:{consumer:!0,icon:"mdi:lightbulb",name:"consumer"},grid:{icon:"mdi:transmission-tower",name:"grid"},home:{consumer:!0,icon:"mdi:home-assistant",name:"home"},hydro:{icon:"mdi:hydro-power",name:"hydro",producer:!0},pool:{consumer:!0,icon:"mdi:pool",name:"pool"},producer:{icon:"mdi:lightning-bolt-outline",name:"producer",producer:!0},solar:{icon:"mdi:solar-power",name:"solar",producer:!0},wind:{icon:"mdi:wind-turbine",name:"wind",producer:!0}},Di={decimals:2,display_abs:!0,name:"",unit_of_display:"W"},Ai={type:"",title:void 0,animation:"flash",entities:[],center:{type:"none"}},Ni=["none","flash","slide"],Mi=["none","card","bars"],Pi=["autarky","ratio",""],Ri=["more-info","toggle","navigate","url","call-service","none"];let Ii=class extends it{constructor(){super(...arguments),this._subElementEditor=void 0,this._renderEmptySortable=!1,this._attached=!1}setConfig(t){this._config=t}async firstUpdated(){await this.loadCardHelpers();try{await this._helpers.createCardElement({type:"calendar",entities:["calendar.does_not_exist"]}),await this._helpers.createCardElement({type:"button",entity:"demo.demo"})}catch(t){}await customElements.get("hui-calendar-card").getConfigElement(),await customElements.get("hui-button-card").getConfigElement()}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}render(){var t,e,i,n,o,r,a,s,l,c;return this.hass?this._subElementEditor?this._renderSubElementEditor():I`
      <div class="card-config">
        <paper-input
          .label="${ki("editor.settings.title")} (${ki("editor.optional")})"
          .value=${(null===(t=this._config)||void 0===t?void 0:t.title)||""}
          .configValue=${"title"}
          @value-changed=${this._valueChanged}
        ></paper-input>
        <paper-dropdown-menu
          label="${ki("editor.settings.animation")}"
          .configValue=${"animation"}
          @value-changed=${this._valueChanged}
        >
          <paper-listbox slot="dropdown-content" .selected=${Ni.indexOf((null===(e=this._config)||void 0===e?void 0:e.animation)||"flash")}>
            ${Ni.map((t=>I`<paper-item>${t}</paper-item>`))}
          </paper-listbox>
        </paper-dropdown-menu>
        <br />
        <div class="entity">
          <paper-dropdown-menu
            label="${ki("editor.settings.center")}"
            .configValue=${"type"}
            @value-changed=${this._centerChanged}
          >
            <paper-listbox slot="dropdown-content" .selected="${Mi.indexOf((null===(n=null===(i=this._config)||void 0===i?void 0:i.center)||void 0===n?void 0:n.type)||"none")}">
              ${Mi.map((t=>I`<paper-item>${t}</paper-item>`))}
            </paper-listbox>
          </paper-dropdown-menu>
          ${"bars"==(null===(r=null===(o=this._config)||void 0===o?void 0:o.center)||void 0===r?void 0:r.type)||"card"==(null===(s=null===(a=this._config)||void 0===a?void 0:a.center)||void 0===s?void 0:s.type)?I`<mwc-icon-button
                aria-label=${ki("editor.actions.edit")}
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
    `:I``}_centerChanged(t){if(this._config&&this.hass){if(t.target){const e=t.target;e.configValue&&(this._config=Object.assign(Object.assign({},this._config),{center:Object.assign(Object.assign({},this._config.center),{[e.configValue]:void 0!==e.checked?e.checked:e.value})}))}$t(this,"config-changed",{config:this._config})}}_editCenter(t){if(t.currentTarget){const e=t.currentTarget;this._subElementEditor={type:e.value}}}_renderSubElementEditor(){var t;const e=[I`<div class="header">
        <div class="back-title">
          <mwc-icon-button @click=${this._goBack}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </mwc-icon-button>
        </div>
      </div>`];switch(null===(t=this._subElementEditor)||void 0===t?void 0:t.type){case"entity":e.push(this._entityEditor());break;case"bars":e.push(this._barEditor());break;case"card":e.push(this._cardEditor())}return I`${e}`}_goBack(){var t;this._subElementEditor=void 0,null===(t=this._sortable)||void 0===t||t.destroy(),this._sortable=void 0,this._sortable=this._createSortable()}_itemEntityChanged(t){var e,i;if(!t.target)return;const n=t.target;if(!n.configValue)return;const o=n.index||(null===(e=this._subElementEditor)||void 0===e?void 0:e.index)||0,r=n.configValue.split("."),a=null!=n.checked?n.checked:null===(i=t.detail)||void 0===i?void 0:i.value,s=this._config.entities[o][r[0]]||void 0;if((s?r[1]?s[r[1]]:s:void 0)==a)return;const l=[...this._config.entities];l[o]=Object.assign(Object.assign({},l[o]),{[r[0]]:r[1]?Object.assign(Object.assign({},l[o][r[0]]),{[r[1]]:a}):a}),$t(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{entities:l})})}_entityEditor(){var t,e,i,n,o,r;const a=this._config.entities[(null===(t=this._subElementEditor)||void 0===t?void 0:t.index)||0],s=Object.keys(Object.assign({},null===(e=this.hass)||void 0===e?void 0:e.states[a.entity||0].attributes))||[],l=a.secondary_info_entity?Object.keys(Object.assign({},null===(i=this.hass)||void 0===i?void 0:i.states[a.secondary_info_entity||0].attributes)):[];return I`
      <div class="side-by-side">
        <ha-icon-input
          .label="${ki("editor.settings.icon")}  (${ki("editor.optional")})"
          .value=${a.icon}
          .configValue=${"icon"}
          @value-changed=${this._itemEntityChanged}
        ></ha-icon-input>
        <paper-input
          .label="${ki("editor.settings.name")} (${ki("editor.optional")})"
          .value=${a.name||void 0}
          .configValue=${"name"}
          @value-changed=${this._itemEntityChanged}
        ></paper-input>
      </div>
      <div class="side-by-side">
        <ha-entity-picker
          label="${ki("editor.settings.entity")} (${ki("editor.required")})"
          allow-custom-entity
          hideClearIcon
          .hass=${this.hass}
          .configValue=${"entity"}
          .value=${a.entity}
          @value-changed=${this._itemEntityChanged}
        ></ha-entity-picker>
        <paper-dropdown-menu
          label="${ki("editor.settings.attribute")} (${ki("editor.optional")})"
          .configValue=${"attribute"}
          @value-changed=${this._itemEntityChanged}
        >
          <paper-listbox
            slot="dropdown-content"
            .selected=${s.indexOf(a.attribute||"")+(a.attribute?1:0)}
          >
            ${s.length>0?I`<paper-item></paper-item>`:void 0}
            ${s.map((t=>I`<paper-item>${t}</paper-item>`))}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
      <div class="side-by-side">
        <paper-dropdown-menu
          label="${ki("editor.settings.preset")}"
          .configValue=${"preset"}
          @value-changed=${this._itemEntityChanged}
        >
          <paper-listbox slot="dropdown-content" .selected=${Oi.indexOf(a.preset||Oi[0])}>
            ${Oi.map((t=>I`<paper-item>${t}</paper-item>`))}
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
          <label for="invert-value"> ${ki("editor.settings.hide-arrows")}</label>
        </div>
      </div>
      <br /><br />
      <h3>${ki("editor.settings.value",!0)} ${ki("editor.settings.settings",!0)}</h3>
      <div class="side-by-side">
        <paper-input
          .label="${ki("editor.settings.unit_of_display")}"
          .value=${a.unit_of_display||void 0}
          .configValue=${"unit_of_display"}
          @value-changed=${this._itemEntityChanged}
        ></paper-input>
        <paper-input
          auto-validate
          pattern="[0-9]"
          .label="${ki("editor.settings.decimals")}"
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
          <label for="invert-value"> ${ki("editor.settings.invert-value")}</label>
        </div>
        <div class="checkbox">
          <input
            type="checkbox"
            id="display-abs"
            .checked="${0!=a.display_abs}"
            .configValue=${"display_abs"}
            @change=${this._itemEntityChanged}
          />
          <label for="display-abs"> ${ki("editor.settings.display-abs")} </label>
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
          <label for="calc_excluded"> ${ki("editor.settings.calc_excluded")} </label>
        </div>
        <paper-input
          .label="${ki("editor.settings.threshold")}"
          .value=${a.threshold||void 0}
          .configValue=${"threshold"}
          @value-changed=${this._itemEntityChanged}
        ></paper-input>
      </div>
      <br />
      <h3>${ki("editor.settings.secondary-info",!0)}</h3>
      <div class="side-by-side">
        <ha-entity-picker
          label="${ki("editor.settings.entity")}"
          allow-custom-entity
          hideClearIcon
          .hass=${this.hass}
          .configValue=${"secondary_info_entity"}
          .value=${a.secondary_info_entity}
          @value-changed=${this._itemEntityChanged}
        ></ha-entity-picker>
        <paper-dropdown-menu
          allow-custom-entity
          label="${ki("editor.settings.attribute")} (${ki("editor.optional")})"
          .configValue=${"secondary_info_attribute"}
          @value-changed=${this._itemEntityChanged}
        >
          <paper-listbox
            slot="dropdown-content"
            .selected=${l.indexOf(a.secondary_info_attribute||"")+(a.secondary_info_attribute?1:0)}
          >
            ${l.length>0?I`<paper-item></paper-item>`:void 0}
            ${l.map((t=>I`<paper-item>${t}</paper-item>`))}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
      <br />
      <h3>${ki("editor.settings.color-settings",!0)}</h3>
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
              .label="${ki("editor.settings.bigger")}"
              .value=${(null===(n=a.icon_color)||void 0===n?void 0:n.bigger)||void 0}
              .configValue=${"icon_color.bigger"}
              @value-changed=${this._itemEntityChanged}
            ></paper-input>
          </td>
          <td>
            <paper-input
              .label="${ki("editor.settings.equal")}"
              .value=${(null===(o=a.icon_color)||void 0===o?void 0:o.equal)||void 0}
              .configValue=${"icon_color.equal"}
              @value-changed=${this._itemEntityChanged}
            ></paper-input>
          </td>
          <td>
            <paper-input
              .label="${ki("editor.settings.smaller")}"
              .value=${(null===(r=a.icon_color)||void 0===r?void 0:r.smaller)||void 0}
              .configValue=${"icon_color.smaller"}
              @value-changed=${this._itemEntityChanged}
            ></paper-input>
          </td>
        </tr>
      </table>
      <br />
      <h3>${ki("editor.settings.action_settings")}</h3>
      <div class="side-by-side">
        <hui-action-editor
          .hass=${this.hass}
          .config=${a.tap_action||{action:"more-info"}}
          .actions=${Ri}
          .configValue=${"tap_action"}
          @value-changed=${this._itemEntityChanged}
        >
        </hui-action-editor>
        <hui-action-editor
          .hass=${this.hass}
          .config=${a.double_tap_action}
          .actions=${Ri}
          .configValue=${"double_tap_action"}
          @value-changed=${this._itemEntityChanged}
        >
        </hui-action-editor>
      </div>
    `}_barChanged(t){var e,i;if(!t.target)return;const n=t.target;if(!n.configValue)return;let o;if("content"==n.configValue)o=n.value;else{o=[...this._config.center.content];const r=n.index||(null===(e=this._subElementEditor)||void 0===e?void 0:e.index)||0;o[r]=Object.assign(Object.assign({},o[r]),{[n.configValue]:null!=n.checked?n.checked:null===(i=t.detail)||void 0===i?void 0:i.value})}this._config=Object.assign(Object.assign({},this._config),{center:{type:"bars",content:o}}),$t(this,"config-changed",{config:this._config})}_removeBar(t){var e;const i=(null===(e=t.currentTarget)||void 0===e?void 0:e.index)||0,n=[...this._config.center.content];n.splice(i,1),this._barChanged({target:{configValue:"content",value:n}})}async _addBar(){const t=Object.assign({},{name:"Name",preset:"custom"}),e=[...this._config.center.content||[],t];this._barChanged({target:{configValue:"content",value:e}})}_barEditor(){const t=[];return this._config.center.content&&this._config.center.content.forEach(((e,i)=>t.push(I`
        <div class="bar-editor">
          <h3 style="margin-bottom:6px;">Bar ${i+1}
          <mwc-icon-button
            aria-label=${ki("editor.actions.remove")}
            class="remove-icon"
            .index=${i}
            @click=${this._removeBar}
            >
            <ha-icon icon="mdi:close"></ha-icon>
          </mwc-icon-button>
          </h4>
          <div class="side-by-side">
            <paper-input
              .label="${ki("editor.settings.name")} (${ki("editor.optional")})"
              .value=${e.name||""}
              .configValue=${"name"}
              @value-changed=${this._barChanged}
              .index=${i}
            ></paper-input>
            <ha-entity-picker
              label="${ki("editor.settings.entity")}"
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
              <label for="invert-value"> ${ki("editor.settings.invert-value")}</label>
            </div>
            <div>
            <paper-dropdown-menu
              label="${ki("editor.settings.preset")}"
              .configValue=${"preset"}
              @value-changed=${this._barChanged}
              .index=${i}
            >
              <paper-listbox slot="dropdown-content" .selected=${Pi.indexOf(e.preset||"")}>
                ${Pi.map((t=>I`<paper-item>${t}</paper-item>`))}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          </div>
          <div class="side-by-side">
            <paper-input
              .label="${ki("editor.settings.color")}"
              .value=${e.bar_color||""}
              .configValue=${"bar_color"}
              @value-changed=${this._barChanged}
              .index=${i}
            ></paper-input>
            <paper-input
              .label="${ki("editor.settings.background_color")}"
              .value=${e.bar_bg_color||""}
              .configValue=${"bar_bg_color"}
              @value-changed=${this._barChanged}
              .index=${i}
            ></paper-input>
          </div>
          <h3>${ki("editor.settings.action_settings")}</h3>
      <div class="side-by-side">
        <hui-action-editor
          .hass=${this.hass}
          .config=${e.tap_action}
          .actions=${Ri}
          .configValue=${"tap_action"}
          @value-changed=${this._barChanged}
          .index=${i}
        >
        </hui-action-editor>
        <hui-action-editor
          .hass=${this.hass}
          .config=${e.double_tap_action}
          .actions=${Ri}
          .configValue=${"double_tap_action"}
          @value-changed=${this._barChanged}
          .index=${i}
        >
        </hui-action-editor>
      </div>
        </div>
        <br/>
      `))),t.push(I`
      <mwc-icon-button aria-label=${ki("editor.actions.add")} class="add-icon" @click="${this._addBar}">
        <ha-icon icon="mdi:plus-circle-outline"></ha-icon>
      </mwc-icon-button>
    `),I`${t.map((t=>I`${t}`))}`}_cardEditor(){return I`
      Sadly you cannot edit cards from the visual editor yet.
      <p />
      Check out the
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/JonahKr/power-distribution-card#cards-"
        >Readme</a
      >
      to check out the latest and best way to add it.
    `}_renderEntitiesEditor(){return I`
      <h3>
        ${ki("editor.settings.entities")}
      </h3>
      <div class="entities">
          ${Nt([this._config.entities,this._renderEmptySortable],(()=>this._renderEmptySortable?"":this._config.entities.map(((t,e)=>I`
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
                        aria-label=${ki("editor.actions.remove")}
                        class="remove-icon"
                        .index=${e}
                        @click=${this._removeRow}
                      >
                        <ha-icon icon="mdi:close"></ha-icon>
                      </mwc-icon-button>

                      <mwc-icon-button
                        aria-label=${ki("editor.actions.edit")}
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
          label="${ki("editor.settings.preset")}"
          name="preset"
          class="add-preset"
          >
          <paper-listbox slot="dropdown-content" .selected=1>
            ${Oi.map((t=>I`<paper-item>${t}</paper-item>`))}
          </paper-listbox>
        </paper-dropdown-menu>

        <ha-entity-picker .hass=${this.hass} name="entity" class="add-entity"></ha-entity-picker>

        <mwc-icon-button
          aria-label=${ki("editor.actions.add")}
          class="add-icon"
          @click="${this._addEntity}"
          >
          <ha-icon icon="mdi:plus-circle-outline"></ha-icon>
        </mwc-icon-button>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._attached=!0}disconnectedCallback(){super.disconnectedCallback(),this._attached=!1}updated(t){var e,i;super.updated(t);const n=t.has("_attached"),o=t.has("_config");if(o||n)return n&&!this._attached?(null===(e=this._sortable)||void 0===e||e.destroy(),void(this._sortable=void 0)):void(this._sortable||!(null===(i=this._config)||void 0===i?void 0:i.entities)?o&&null==this._subElementEditor&&this._handleEntitiesChanged():this._createSortable())}async _handleEntitiesChanged(){var t;this._renderEmptySortable=!0,await this.updateComplete;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".entities");for(;e.lastElementChild;)e.removeChild(e.lastElementChild);this._renderEmptySortable=!1}_createSortable(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".entities");e&&(this._sortable=new di(e,{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onEnd:async t=>this._rowMoved(t)}))}_valueChanged(t){if(this._config&&this.hass){if(t.target){const e=t.target;e.configValue&&(this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value}))}$t(this,"config-changed",{config:this._config})}}async _addEntity(){var t,e;const i=(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".add-preset")).value||null,n=(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".add-entity")).value;if(!i||!n)return;const o=Object.assign({},Di,Ti[i],{entity:n,preset:i}),r=this._config.entities.concat(o);this._valueChanged({target:{configValue:"entities",value:r}})}_rowMoved(t){if(t.oldIndex===t.newIndex)return;const e=[...this._config.entities];e.splice(t.newIndex,0,e.splice(t.oldIndex,1)[0]),this._valueChanged({target:{configValue:"entities",value:e}})}_removeRow(t){var e;const i=(null===(e=t.currentTarget)||void 0===e?void 0:e.index)||0,n=[...this._config.entities];n.splice(i,1),this._valueChanged({target:{configValue:"entities",value:n}})}_editRow(t){var e;const i=(null===(e=t.currentTarget)||void 0===e?void 0:e.index)||0;this._subElementEditor={type:"entity",index:i}}static get styles(){return[a`
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
      `,a`
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
      `,a`
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
      `]}};t([rt({attribute:!1})],Ii.prototype,"hass",void 0),t([at()],Ii.prototype,"_config",void 0),t([at()],Ii.prototype,"_subElementEditor",void 0),t([at()],Ii.prototype,"_renderEmptySortable",void 0),t([at()],Ii.prototype,"_attached",void 0),Ii=t([nt("power-distribution-card-editor")],Ii);const ji=a`
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
`,Vi=I`
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
`;var Hi=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some((function(t,n){return t[0]===e&&(i=n,!0)})),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),n=this.__entries__[i];return n&&n[1]},e.prototype.set=function(e,i){var n=t(this.__entries__,e);~n?this.__entries__[n][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,n=t(i,e);~n&&i.splice(n,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,n=this.__entries__;i<n.length;i++){var o=n[i];t.call(e,o[1],o[0])}},e}()}(),zi="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Bi="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Li="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Bi):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var Ui=["top","right","bottom","left","width","height","size","weight"],Wi="undefined"!=typeof MutationObserver,Xi=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,n=!1,o=0;function r(){i&&(i=!1,t()),n&&s()}function a(){Li(r)}function s(){var t=Date.now();if(i){if(t-o<2)return;n=!0}else i=!0,n=!1,setTimeout(a,e);o=t}return s}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){zi&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Wi?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){zi&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;Ui.some((function(t){return!!~i.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),qi=function(t,e){for(var i=0,n=Object.keys(e);i<n.length;i++){var o=n[i];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},Fi=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||Bi},Yi=tn(0,0,0,0);function Gi(t){return parseFloat(t)||0}function Ki(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce((function(e,i){return e+Gi(t["border-"+i+"-width"])}),0)}function Ji(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return Yi;var n=Fi(t).getComputedStyle(t),o=function(t){for(var e={},i=0,n=["top","right","bottom","left"];i<n.length;i++){var o=n[i],r=t["padding-"+o];e[o]=Gi(r)}return e}(n),r=o.left+o.right,a=o.top+o.bottom,s=Gi(n.width),l=Gi(n.height);if("border-box"===n.boxSizing&&(Math.round(s+r)!==e&&(s-=Ki(n,"left","right")+r),Math.round(l+a)!==i&&(l-=Ki(n,"top","bottom")+a)),!function(t){return t===Fi(t).document.documentElement}(t)){var c=Math.round(s+r)-e,d=Math.round(l+a)-i;1!==Math.abs(c)&&(s-=c),1!==Math.abs(d)&&(l-=d)}return tn(o.left,o.top,s,l)}var Zi="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof Fi(t).SVGGraphicsElement}:function(t){return t instanceof Fi(t).SVGElement&&"function"==typeof t.getBBox};function Qi(t){return zi?Zi(t)?function(t){var e=t.getBBox();return tn(0,0,e.width,e.height)}(t):Ji(t):Yi}function tn(t,e,i,n){return{x:t,y:e,width:i,height:n}}var en=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=tn(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=Qi(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),nn=function(t,e){var i=function(t){var e=t.x,i=t.y,n=t.width,o=t.height,r="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(r.prototype);return qi(a,{x:e,y:i,width:n,height:o,top:i,right:e+n,bottom:o+i,left:e}),a}(e);qi(this,{target:t,contentRect:i})},on=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new Hi,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Fi(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new en(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Fi(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new nn(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),rn="undefined"!=typeof WeakMap?new WeakMap:new Hi,an=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=Xi.getInstance(),n=new on(e,i,this);rn.set(this,n)};["observe","unobserve","disconnect"].forEach((function(t){an.prototype[t]=function(){var e;return(e=rn.get(this))[t].apply(e,arguments)}}));var sn=void 0!==Bi.ResizeObserver?Bi.ResizeObserver:an,ln=Object.freeze({__proto__:null,default:sn});const cn=(t,e)=>{if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;let i,n;if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(!cn(t[i],e[i]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;for(i of t.entries())if(!cn(i[1],e.get(i[0])))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const o=Object.keys(t);if(n=o.length,n!==Object.keys(e).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(e,o[i]))return!1;for(i=n;0!=i--;){const n=o[i];if(!cn(t[n],e[n]))return!1}return!0}return t!=t&&e!=e};class dn extends HTMLElement{constructor(){super(...arguments),this.holdTime=500}bind(t,e){t.actionHandler&&cn(e,t.actionHandler.options)||(t.actionHandler&&t.removeEventListener("click",t.actionHandler.end),t.actionHandler={options:e},e.disabled||(t.actionHandler.end=i=>{const n=t;i.cancelable&&i.preventDefault(),clearTimeout(this.timer),this.timer=void 0,e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,$t(n,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,$t(n,"action",{action:"double_tap"})):$t(n,"action",{action:"tap"})},t.addEventListener("click",t.actionHandler.end)))}}customElements.define("action-handler-power-distribution-card",dn);const hn=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-power-distribution-card"))return t.querySelector("action-handler-power-distribution-card");const e=document.createElement("action-handler-power-distribution-card");return t.appendChild(e),e})();i&&i.bind(t,e)},un=Tt(class extends Dt{update(t,[e]){return hn(t.element,e),j}render(t){}});console.info("%c POWER-DISTRIBUTION-CARD %c 2.3.1","font-weight: 500; color: white; background: #03a9f4;","font-weight: 500; color: #03a9f4; background: white;"),window.customCards.push({type:"power-distribution-card",name:"Power Distribution Card",description:ki("common.description")});let pn=class extends it{constructor(){super(...arguments),this._narrow=!1}static async getConfigElement(){return document.createElement("power-distribution-card-editor")}static getStubConfig(){return{title:"Title",entities:[],center:{type:"bars",content:[{preset:"autarky",name:ki("editor.settings.autarky")},{preset:"ratio",name:ki("editor.settings.ratio")}]}}}async setConfig(t){const e=Object.assign({},Ai,t,{entities:[]});if(!t.entities)throw new Error("You need to define Entities!");t.entities.forEach((t=>{if(!t.preset||!Oi.includes(t.preset))throw new Error("The preset `"+t.preset+"` is not a valid entry. Please choose a Preset from the List.");{const i=Object.assign({},Di,Ti[t.preset],t);e.entities.push(i)}})),this._config=e,"card"==this._config.center.type&&(this._card=this._createCardElement(this._config.center.content))}firstUpdated(){this._config.entities.forEach(((t,e)=>{if(!t.entity)return;const i=this.hass.states[t.entity].attributes.unit_of_measurement;t.unit_of_measurement||(this._config.entities[e].unit_of_measurement=i||"W")})),this._adjustWidth(),this._attachObserver(),this.requestUpdate()}updated(t){super.updated(t),this._card&&(t.has("hass")||t.has("editMode"))&&this.hass&&(this._card.hass=this.hass)}static get styles(){return ji}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>this._attachObserver()))}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect()}async _attachObserver(){var t;this._resizeObserver||(await(async()=>{"function"!=typeof sn&&(window.ResizeObserver=(await Promise.resolve().then((function(){return ln}))).default)})(),this._resizeObserver=new sn(function(t,e,i){var n;return void 0===i&&(i=!1),function(){var o=[].slice.call(arguments),r=this,a=function(){n=null,i||t.apply(r,o)},s=i&&!n;clearTimeout(n),n=setTimeout(a,e),s&&t.apply(r,o)}}((()=>this._adjustWidth()),250,!1)));const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&this._resizeObserver.observe(e)}_adjustWidth(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&(this._narrow=e.offsetWidth<400)}_val(t){var e;let i=t.invert_value?-1:1;"k"==(null===(e=t.unit_of_measurement)||void 0===e?void 0:e.charAt(0))&&(i*=1e3);const n=t.attribute||null;let o=t.entity?Number(n?this.hass.states[t.entity].attributes[n]:this.hass.states[t.entity].state):NaN;const r=t.threshold||null;return o=r&&Math.abs(o)<r?0:o,o*i}render(){const t=[],e=[],i=[];let n=0,o=0;this._config.entities.forEach(((e,r)=>{const a=this._val(e);e.calc_excluded||(e.producer&&a>0&&(o+=a),e.consumer&&a<0&&(n-=a));const s=this._render_item(a,e,r);switch(r%2){case 0:t.push(s);break;case 1:i.push(s)}}));switch(this._config.center.type){case"none":break;case"card":this._card?e.push(this._card):console.warn("NO CARD");break;case"bars":e.push(this._render_bars(n,o))}return I` ${this._narrow?Vi:void 0}
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          <div id="left-panel">${t}</div>
          <div id="center-panel">${e}</div>
          <div id="right-panel">${i}</div>
        </div>
      </ha-card>`}_handleAction(t){this.hass&&this._config&&t.detail.action&&function(t,e,i,n){var o;"double_tap"===n&&i.double_tap_action?o=i.double_tap_action:"hold"===n&&i.hold_action?o=i.hold_action:"tap"===n&&i.tap_action&&(o=i.tap_action),kt(t,e,i,o)}(this,this.hass,{entity:t.currentTarget.entity,tap_action:t.currentTarget.tap_action,double_tap_action:t.currentTarget.double_tap_action},t.detail.action)}_render_item(t,e,i){if(!e.entity)return I`<item class="placeholder"></item>`;const n=e.invert_arrow?-1*t:t;t=e.display_abs?Math.abs(t):t;let o=e.unit_of_display||"W";if("k"==o.charAt(0)[0])t/=1e3;else if("adaptive"==e.unit_of_display){let i="W";e.unit_of_measurement&&(i="k"==e.unit_of_measurement[0]?e.unit_of_measurement.substring(1):e.unit_of_measurement),Math.abs(t)>999?(t/=1e3,o="k"+i):o=i}const r=10**(e.decimals||0==e.decimals?e.decimals:2),a=function(t,e,i){var n;switch(null==e?void 0:e.number_format){case _t.comma_decimal:n=["en-US","en"];break;case _t.decimal_comma:n=["de","es","it"];break;case _t.space_comma:n=["fr","sv","cs"];break;case _t.system:n=void 0;break;default:n=null==e?void 0:e.language}if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},!Number.isNaN(Number(t))&&Intl&&(null==e?void 0:e.number_format)!==_t.none)try{return new Intl.NumberFormat(n,wt(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,wt(t,i)).format(Number(t))}return t?t.toString():""}(t=Math.round(t*r)/r,this.hass.locale);let s;e.icon_color&&(n>0&&(s=e.icon_color.bigger),n<0&&(s=e.icon_color.smaller),0==n&&(s=e.icon_color.equal));const l=isNaN(t);return I`
      <item
        .entity=${e.entity}
        .tap_action=${e.tap_action}
        .double_tap_action=${e.double_tap_action}
        @action=${this._handleAction}
        .actionHandler=${un({hasDoubleClick:Ot(e.double_tap_action)})}
    ">
        <badge>
          <icon>
            <ha-icon icon="${e.icon}" style="${s?`color:${s};`:""}"></ha-icon>
            ${e.secondary_info_attribute?I`<p class="secondary">
                    ${this._val({entity:e.secondary_info_entity,attribute:e.secondary_info_attribute})}
                  </p>`:e.secondary_info_entity?I`<p class="secondary">
                    ${this._val({entity:e.secondary_info_entity})}
                    ${this.hass.states[e.secondary_info_entity].attributes.unit_of_measurement}
                  </p>`:""}
          </icon>
          <p class="subtitle">${e.name}</p>
        </badge>
        <value>
          <p>${l?"":a} ${l?"":o}</p>
          ${e.hide_arrows?I``:this._render_arrow(0==t||l?"none":i%2==0?n>0?"right":"left":n>0?"left":"right",i)}
        <value
      </item>
    `}_render_arrow(t,e){const i=this._config.animation;return"none"==t?I` <div class="blank"></div> `:I`
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
      `}_render_bars(t,e){const i=[];return this._config.center.content&&0!=this._config.center.content.length?(this._config.center.content.forEach((n=>{let o=-1;switch(n.preset){case"autarky":n.entity||(o=0!=t?Math.min(Math.round(100*e/Math.abs(t)),100):0);break;case"ratio":n.entity||(o=0!=e?Math.min(Math.round(100*Math.abs(t)/e),100):0)}o<0&&(o=this._val(n)),i.push(I`
        <div
          class="bar-element"
          .entity=${n.entity}
          .tap_action=${n.tap_action}
          .double_tap_action=${n.double_tap_action}
          @action=${this._handleAction}
          .actionHandler=${un({hasDoubleClick:Ot(n.double_tap_action)})}
          style="${n.tap_action||n.double_tap_action?"cursor: pointer;":""}"
        >
          <p class="bar-percentage">${o}%</p>
          <div class="bar-wrapper" style="${n.bar_bg_color?`background-color:${n.bar_bg_color};`:""}">
            <bar style="height:${o}%; background-color:${n.bar_color};" />
          </div>
          <p>${n.name||""}</p>
        </div>
      `)})),I`${i.map((t=>I`${t}`))}`):I``}_createCardElement(t){const e=function(t,e){void 0===e&&(e=!1);var i=function(t,e){return n("hui-error-card",{type:"error",error:t,config:e})},n=function(t,e){var n=window.document.createElement(t);try{n.setConfig(e)}catch(n){return console.error(t,n),i(n.message,e)}return n};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);var o=t.type;if(o&&o.startsWith("custom:"))o=o.substr("custom:".length);else if(e)if(xt.has(o))o="hui-"+o+"-row";else{if(!t.entity)return i("Invalid config given.",t);var r=t.entity.split(".",1)[0];o="hui-"+(Ct[r]||"text")+"-entity-row"}else o="hui-"+o+"-card";if(customElements.get(o))return n(o,t);var a=i("Custom element doesn't exist: "+t.type+".",t);a.style.display="None";var s=setTimeout((function(){a.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(s),$t(a,"ll-rebuild",{},a)})),a}(t);return this.hass&&(e.hass=this.hass),e.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rebuildCard(e,t)}),{once:!0}),e}_rebuildCard(t,e){const i=this._createCardElement(e);t.parentElement&&t.parentElement.replaceChild(i,t),this._card===t&&(this._card=i)}};t([rt()],pn.prototype,"hass",void 0),t([at()],pn.prototype,"_config",void 0),t([rt()],pn.prototype,"_card",void 0),t([at()],pn.prototype,"_narrow",void 0),pn=t([nt("power-distribution-card")],pn);export{pn as PowerDistributionCard};
