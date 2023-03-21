function t(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new r(i,t,n)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:f};let v=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{i?t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((i=>{const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var n;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,o=n._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=n.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:v}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.1");const b=window,_=b.trustedTypes,y=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,$="?"+w,E=`<${$}>`,x=document,S=(t="")=>x.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,D=t=>A(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,k=/>/g,M=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),P=/'/g,N=/"/g,I=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),j=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),B=new WeakMap,V=x.createTreeWalker(x,129,null,!1),L=(t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":"",a=O;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===O?"!--"===l[1]?a=T:void 0!==l[1]?a=k:void 0!==l[2]?(I.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=M):void 0!==l[3]&&(a=M):a===M?">"===l[0]?(a=null!=o?o:O,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?M:'"'===l[3]?N:P):a===N||a===P?a=M:a===T||a===k?a=O:(a=M,o=void 0);const h=a===M&&t[e+1].startsWith("/>")?" ":"";r+=a===O?i+E:c>=0?(n.push(s),i.slice(0,c)+"$lit$"+i.slice(c)+w+h):i+w+(-2===c?(n.push(void 0),e):h)}const s=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(s):s,n]};class X{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const a=t.length-1,s=this.parts,[l,c]=L(t,e);if(this.el=X.createElement(l,i),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=V.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(w)){const i=c[r++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(w),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?U:"?"===e[1]?G:"@"===e[1]?K:W})}else s.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(I.test(n.tagName)){const t=n.textContent.split(w),e=t.length-1;if(e>0){n.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],S()),V.nextNode(),s.push({type:2,index:++o});n.append(t[e],S())}}}else if(8===n.nodeType)if(n.data===$)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(w,t+1));)s.push({type:7,index:o}),t+=w.length-1}o++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,n){var o,r,a,s;if(e===j)return e;let l=void 0!==n?null===(o=i._$Co)||void 0===o?void 0:o[n]:i._$Cl;const c=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(a=(s=i)._$Co)&&void 0!==a?a:s._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,n)),e}let Y=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);V.currentNode=o;let r=V.nextNode(),a=0,s=0,l=n[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new F(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new Z(r,this,t)),this.u.push(e),l=n[++s]}a!==(null==l?void 0:l.index)&&(r=V.nextNode(),a++)}return o}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class F{constructor(t,e,i,n){var o;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cm=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),C(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==j&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):D(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==H&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=X.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.p(i);else{const t=new Y(o,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new X(t)),e}k(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new F(this.O(S()),this.O(S()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class W{constructor(t,e,i,n,o){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=z(this,t,e,0),r=!C(t)||t!==this._$AH&&t!==j,r&&(this._$AH=t);else{const n=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=z(this,n[i+a],e,a),s===j&&(s=this._$AH[a]),r||(r=!C(s)||s!==this._$AH[a]),s===H?t=H:t!==H&&(t+=(null!=s?s:"")+o[a+1]),this._$AH[a]=s}r&&!n&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class U extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}const q=_?_.emptyScript:"";class G extends W{constructor(){super(...arguments),this.type=4}j(t){t&&t!==H?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}let K=class extends W{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:H)===j)return;const n=this._$AH,o=t===H&&n!==H||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==H&&(n===H||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}};class Z{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const J={P:"$lit$",A:w,M:$,C:1,L:L,R:Y,D:D,V:z,I:F,H:W,N:G,U:K,B:U,F:Z},Q=b.litHtmlPolyfillSupport;null==Q||Q(X,F),(null!==(m=b.litHtmlVersions)&&void 0!==m?m:b.litHtmlVersions=[]).push("2.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,et;let it=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,o;const r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let a=r._$litPart$;if(void 0===a){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=a=new F(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return j}};it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:it}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function at(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function st(t){return at({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lt,ct,dt;function ht(){return(ht=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ct||(ct={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(dt||(dt={}));var ut=function(t,e,i){var n=e?function(t){switch(t.number_format){case ct.comma_decimal:return["en-US","en"];case ct.decimal_comma:return["de","es","it"];case ct.space_comma:return["fr","sv","cs"];case ct.system:return;default:return t.language}}(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==ct.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,pt(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,pt(t,i)).format(Number(t))}return"string"==typeof t?t:function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)}(t,null==i?void 0:i.maximumFractionDigits).toString()+("currency"===(null==i?void 0:i.style)?" "+i.currency:"")},pt=function(t,e){var i=ht({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var n=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=n,i.maximumFractionDigits=n}return i},ft=["closed","locked","off"],gt=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},vt=new Set(["call-service","divider","section","weblink","cast","select"]),mt={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},bt=function(t){gt(window,"haptic",t)},_t=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(bt("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&gt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),gt(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var n,o=function(t){return t.substr(0,t.indexOf("."))}(e),r="group"===o?"homeassistant":o;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(r,n,{entity_id:e})})(t,e,ft.includes(t.states[e].state))}(e,i.entity),bt("success"));break;case"call-service":if(!n.service)return void bt("failure");var o=n.service.split(".",2);e.callService(o[0],o[1],n.service_data,n.target),bt("success");break;case"fire-dom-event":gt(t,"ll-custom",n)}};function yt(t){return void 0!==t&&"none"!==t.action}const wt=["battery","car_charger","consumer","grid","home","hydro","pool","producer","solar","wind","heating","placeholder"],$t={battery:{consumer:!0,icon:"mdi:battery-outline",name:"battery",producer:!0},car_charger:{consumer:!0,icon:"mdi:car-electric",name:"car"},consumer:{consumer:!0,icon:"mdi:lightbulb",name:"consumer"},grid:{icon:"mdi:transmission-tower",name:"grid"},home:{consumer:!0,icon:"mdi:home-assistant",name:"home"},hydro:{icon:"mdi:hydro-power",name:"hydro",producer:!0},pool:{consumer:!0,icon:"mdi:pool",name:"pool"},producer:{icon:"mdi:lightning-bolt-outline",name:"producer",producer:!0},solar:{icon:"mdi:solar-power",name:"solar",producer:!0},wind:{icon:"mdi:wind-turbine",name:"wind",producer:!0},heating:{icon:"mdi:radiator",name:"heating",consumer:!0},placeholder:{name:"placeholder"}},Et={decimals:2,display_abs:!0,name:"",unit_of_display:"W"},xt={type:"",title:void 0,animation:"flash",entities:[],center:{type:"none"}},St=a`
  * {
    box-sizing: border-box;
  }

  p {
    margin: 4px 0 4px 0;
    text-align: center;
  }

  .card-content {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1.5fr;
    column-gap: 10px;
  }

  #center-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 2;
    flex-wrap: wrap;
    min-width: 100px;
  }

  #center-panel > div {
    display: flex;
    width: 100%;
    min-height: 150px;
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
    width: 50%;
    min-width: 54px;
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
    width: 55px;
    height: 4px;
    margin: 8px auto 8px auto;
    opacity: 0.2;
    background-color: var(--secondary-text-color);
  }

  .arrow-container {
    display: flex;
    width: 55px;
    height: 16px;
    overflow: hidden;
    margin: auto;
  }

  .left {
    transform: rotate(180deg);
  }

  .arrow {
    width: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 16px solid var(--secondary-text-color);
    margin: 0 1.5px;
  }

  .flash {
    animation: flash 3s infinite steps(1);
    opacity: 0.2;
  }

  @keyframes flash {
    0%,
    66% {
      opacity: 0.2;
    }
    33% {
      opacity: 0.8;
    }
  }

  .delay-1 {
    animation-delay: 1s;
  }
  .delay-2 {
    animation-delay: 2s;
  }

  .slide {
    animation: slide 1.5s linear infinite both;
    position: relative;
    left: -19px;
  }

  @keyframes slide {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(19px);
      transform: translateX(19px);
    }
  }
`,Ct=R`
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
`;var At={version:"Version",description:"A Lovelace Card for visualizing power distributions.",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},Dt={actions:{add:"Add",edit:"Edit",remove:"Remove",save:"Save"},optional:"Optional",required:"Required",settings:{action_settings:"Action Settings",animation:"Animation",autarky:"autarky",attribute:"Attribute",background_color:"Background Color",battery_percentage:"Battery Charge %",bigger:"Bigger",calc_excluded:"Excluded from Calculations",center:"Center",color:"Color","color-settings":"Color Settings",color_threshold:"Color Threshold",decimals:"Decimals","display-abs":"Display Absolute Value",double_tap_action:"Double Tap Action",entities:"Entities",entity:"Entity",equal:"Equal","grid-buy":"Grid Buy","grid-sell":"Grid Sell","hide-arrows":"Hide Arrows",icon:"Icon","invert-value":"Invert Value",name:"Name",preset:"Preset",ratio:"ratio",replace_name:"Replace Name","secondary-info":"Secondary Info",settings:"settings",smaller:"Smaller",tap_action:"Tap Action",threshold:"Threshold",title:"Title",unit_of_display:"Unit of Display",value:"value"}},Ot={common:At,editor:Dt},Tt={version:"Version",description:"Eine Karte zur Visualizierung von Stromverteilungen",invalid_configuration:"Ungültige Konfiguration",show_warning:"Warnung"},kt={actions:{add:"Hinzufügen",edit:"Bearbeiten",remove:"Entfernen",save:"Speichern"},optional:"Optional",required:"Erforderlich",settings:{action_settings:"Interaktions Einstellungen",animation:"Animation",autarky:"Autarkie",attribute:"Attribut",background_color:"Hintergrundfarbe",battery_percentage:"Batterie Ladung %",bigger:"Größer ",calc_excluded:"Von Rechnungen ausschließen",center:"Mittelbereich",color:"Farbe","color-settings":"Farb Einstellungen",color_threshold:"Farb-Schwellenwert",decimals:"Dezimalstellen","display-abs":"Absolute Wertanzeige",double_tap_action:"Doppel Tipp Aktion",entities:"Entities",entity:"Element",equal:"Gleich","grid-buy":"Netz Ankauf","grid-sell":"Netz Verkauf","hide-arrows":"Pfeile Verstecken",icon:"Symbol","invert-value":"Wert Invertieren",name:"Name",preset:"Vorlagen",ratio:"Anteil",replace_name:"Namen Ersetzen","secondary-info":"Zusatzinformationen",settings:"Einstellungen",smaller:"Kleiner",tap_action:"Tipp Aktion",threshold:"Schwellenwert",title:"Titel",unit_of_display:"Angezeigte Einheit",value:"Wert"}},Mt={common:Tt,editor:kt};const Pt={en:Object.freeze({__proto__:null,common:At,default:Ot,editor:Dt}),de:Object.freeze({__proto__:null,common:Tt,default:Mt,editor:kt})};function Nt(t,e=!1,i="",n=""){const o=(localStorage.getItem("selectedLanguage")||navigator.language.split("-")[0]||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=t.split(".").reduce(((t,e)=>t[e]),Pt[o])}catch(e){r=t.split(".").reduce(((t,e)=>t[e]),Pt.en)}return void 0===r&&(r=t.split(".").reduce(((t,e)=>t[e]),Pt.en)),""!==i&&""!==n&&(r=r.replace(i,n)),e?function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(r):r}var It=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some((function(t,n){return t[0]===e&&(i=n,!0)})),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),n=this.__entries__[i];return n&&n[1]},e.prototype.set=function(e,i){var n=t(this.__entries__,e);~n?this.__entries__[n][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,n=t(i,e);~n&&i.splice(n,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,n=this.__entries__;i<n.length;i++){var o=n[i];t.call(e,o[1],o[0])}},e}()}(),Rt="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,jt="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Ht="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(jt):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},Bt=2;var Vt=["top","right","bottom","left","width","height","size","weight"],Lt="undefined"!=typeof MutationObserver,Xt=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,n=!1,o=0;function r(){i&&(i=!1,t()),n&&s()}function a(){Ht(r)}function s(){var t=Date.now();if(i){if(t-o<Bt)return;n=!0}else i=!0,n=!1,setTimeout(a,e);o=t}return s}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){Rt&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Lt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){Rt&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;Vt.some((function(t){return!!~i.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),zt=function(t,e){for(var i=0,n=Object.keys(e);i<n.length;i++){var o=n[i];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},Yt=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||jt},Ft=Zt(0,0,0,0);function Wt(t){return parseFloat(t)||0}function Ut(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce((function(e,i){return e+Wt(t["border-"+i+"-width"])}),0)}function qt(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return Ft;var n=Yt(t).getComputedStyle(t),o=function(t){for(var e={},i=0,n=["top","right","bottom","left"];i<n.length;i++){var o=n[i],r=t["padding-"+o];e[o]=Wt(r)}return e}(n),r=o.left+o.right,a=o.top+o.bottom,s=Wt(n.width),l=Wt(n.height);if("border-box"===n.boxSizing&&(Math.round(s+r)!==e&&(s-=Ut(n,"left","right")+r),Math.round(l+a)!==i&&(l-=Ut(n,"top","bottom")+a)),!function(t){return t===Yt(t).document.documentElement}(t)){var c=Math.round(s+r)-e,d=Math.round(l+a)-i;1!==Math.abs(c)&&(s-=c),1!==Math.abs(d)&&(l-=d)}return Zt(o.left,o.top,s,l)}var Gt="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof Yt(t).SVGGraphicsElement}:function(t){return t instanceof Yt(t).SVGElement&&"function"==typeof t.getBBox};function Kt(t){return Rt?Gt(t)?function(t){var e=t.getBBox();return Zt(0,0,e.width,e.height)}(t):qt(t):Ft}function Zt(t,e,i,n){return{x:t,y:e,width:i,height:n}}var Jt=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Zt(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=Kt(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),Qt=function(t,e){var i=function(t){var e=t.x,i=t.y,n=t.width,o=t.height,r="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(r.prototype);return zt(a,{x:e,y:i,width:n,height:o,top:i,right:e+n,bottom:o+i,left:e}),a}(e);zt(this,{target:t,contentRect:i})},te=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new It,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Yt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new Jt(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Yt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new Qt(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),ee="undefined"!=typeof WeakMap?new WeakMap:new It,ie=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=Xt.getInstance(),n=new te(e,i,this);ee.set(this,n)};["observe","unobserve","disconnect"].forEach((function(t){ie.prototype[t]=function(){var e;return(e=ee.get(this))[t].apply(e,arguments)}}));var ne=void 0!==jt.ResizeObserver?jt.ResizeObserver:ie,oe=Object.freeze({__proto__:null,default:ne});function re(t,e,i){const n=new CustomEvent(e,{bubbles:!1,composed:!1,detail:i});t.dispatchEvent(n)}const ae=2,se=t=>(...e)=>({_$litDirective$:t,values:e});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class le{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const ce=(t,e)=>{if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;let i,n;if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(!ce(t[i],e[i]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;for(i of t.entries())if(!ce(i[1],e.get(i[0])))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!==e.length)return!1;for(i=n;0!=i--;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const o=Object.keys(t);if(n=o.length,n!==Object.keys(e).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(e,o[i]))return!1;for(i=n;0!=i--;){const n=o[i];if(!ce(t[n],e[n]))return!1}return!0}return t!=t&&e!=e},de=["more-info","toggle","navigate","url","call-service","none"];class he extends HTMLElement{constructor(){super(...arguments),this.holdTime=500}bind(t,e){t.actionHandler&&ce(e,t.actionHandler.options)||(t.actionHandler&&t.removeEventListener("click",t.actionHandler.end),t.actionHandler={options:e},e.disabled||(t.actionHandler.end=i=>{const n=t;i.cancelable&&i.preventDefault(),clearTimeout(this.timer),this.timer=void 0,e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,gt(n,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,gt(n,"action",{action:"double_tap"})):gt(n,"action",{action:"tap"})},t.addEventListener("click",t.actionHandler.end)))}}customElements.define("action-handler-power-distribution-card",he);const ue=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-power-distribution-card"))return t.querySelector("action-handler-power-distribution-card");const e=document.createElement("action-handler-power-distribution-card");return t.appendChild(e),e})();i&&i.bind(t,e)},pe=se(class extends le{update(t,[e]){return ue(t.element,e),j}render(t){}});var fe="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",ge="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";let ve=class extends it{render(){var t,e,i,n,o,r,a,s;if(!this.hass||!this.config||"placeholder"==this.config.preset)return R``;const l=this.config;let c=[];l.entity&&(c=Object.keys(Object.assign({},null===(t=this.hass)||void 0===t?void 0:t.states[l.entity||0].attributes))||[]);let d=[];return l.secondary_info_entity&&(d=Object.keys(Object.assign({},null===(e=this.hass)||void 0===e?void 0:e.states[l.secondary_info_entity].attributes))||[]),R`
        <div class="side-by-side">
        <ha-icon-picker
          .label="${Nt("editor.settings.icon")}  (${Nt("editor.optional")})"
          .value=${l.icon}
          .configValue=${"icon"}
          @value-changed=${this._valueChanged}
        ></ha-icon-picker>
        <ha-textfield
          label="${Nt("editor.settings.name")} (${Nt("editor.optional")})"
          .value=${l.name||void 0}
          .configValue=${"name"}
          @input=${this._valueChanged}
        ></ha-textfield>
      </div>
      <div class="side-by-side">
        <ha-entity-picker
          label="${Nt("editor.settings.entity")} (${Nt("editor.required")})"
          allow-custom-entity
          hideClearIcon
          .hass=${this.hass}
          .configValue=${"entity"}
          .value=${l.entity}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>
        <ha-select
          label="${Nt("editor.settings.attribute")} (${Nt("editor.optional")})"
          .configValue=${"attribute"}
          .value=${l.attribute||""}
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${c.length>0?R`<mwc-list-item></mwc-list-item>`:""}
          ${c.map((t=>R`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
      </div>
      <div class="side-by-side">
        <ha-select
          label="${Nt("editor.settings.preset")}"
          .configValue=${"preset"}
          .value=${l.preset||wt[0]}
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${wt.map((t=>R`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
        <div class="checkbox">
          <input
            type="checkbox"
            id="hide-arrows"
            .checked="${l.hide_arrows||!1}"
            .configValue=${"hide_arrows"}
            @change=${this._valueChanged}
          />
          <label for="hide-arrows"> ${Nt("editor.settings.hide-arrows")}</label>
        </div>
      </div>
      <div class="side-by-side">
        ${this._renderPresetFeatures()}
      </div>
      <br /><br />
      <h3>${Nt("editor.settings.value",!0)} ${Nt("editor.settings.settings",!0)}</h3>
      <div class="side-by-side">
        <ha-textfield
          label="${Nt("editor.settings.unit_of_display")}"
          .value=${l.unit_of_display||""}
          .configValue=${"unit_of_display"}
          @input=${this._valueChanged}
        ></ha-textfield>
        <ha-textfield
          auto-validate
          pattern="[0-9]"
          label="${Nt("editor.settings.decimals")}"
          .value=${l.decimals||""}
          .configValue=${"decimals"}
          @input=${this._valueChanged}
        ></ha-textfield>
      </div>
      <div class="side-by-side">
        <div class="checkbox">
          <input
            type="checkbox"
            id="invert-value"
            .checked="${l.invert_value||!1}"
            .configValue=${"invert_value"}
            @change=${this._valueChanged}
          />
          <label for="invert-value"> ${Nt("editor.settings.invert-value")}</label>
        </div>
        <div class="checkbox">
          <input
            type="checkbox"
            id="display-abs"
            .checked="${0!=l.display_abs}"
            .configValue=${"display_abs"}
            @change=${this._valueChanged}
          />
          <label for="display-abs"> ${Nt("editor.settings.display-abs")} </label>
        </div>
      </div>
      <div class="side-by-side">
        <div class="checkbox">
          <input
            type="checkbox"
            id="calc_excluded"
            .checked="${l.calc_excluded}"
            .configValue=${"calc_excluded"}
            @change=${this._valueChanged}
          />
          <label for="calc_excluded"> ${Nt("editor.settings.calc_excluded")} </label>
        </div>
        <ha-textfield
          label="${Nt("editor.settings.threshold")}"
          .value=${l.threshold||""}
          .configValue=${"threshold"}
          @input=${this._valueChanged}
        ></ha-textfield>
      </div>
      <br />
      <h3>${Nt("editor.settings.secondary-info",!0)}</h3>
      <div class="side-by-side">
        <ha-entity-picker
          label="${Nt("editor.settings.entity")}"
          allow-custom-entity
          hideClearIcon
          .hass=${this.hass}
          .configValue=${"secondary_info_entity"}
          .value=${l.secondary_info_entity}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>
        <ha-select
          allow-custom-entity
          label="${Nt("editor.settings.attribute")} (${Nt("editor.optional")})"
          .value=${l.secondary_info_attribute||""}
          .configValue=${"secondary_info_attribute"}
          @value-changed=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${d.length>0?R`<mwc-list-item></mwc-list-item>`:void 0}
          ${d.map((t=>R`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
      </div>
      <div class="checkbox">
        <input
          type="checkbox"
          id="secondary_info_replace_name"
          .checked="${l.secondary_info_replace_name||!1}"
          .configValue=${"secondary_info_replace_name"}
          @change=${this._valueChanged}
        />
        <label for="secondary_info_replace_name"> ${Nt("editor.settings.replace_name")}</label>
      </div>
      <br />
      <h3>${Nt("editor.settings.color-settings",!0)}</h3>
      <ha-textfield
        label="${Nt("editor.settings.color_threshold")}"
        .value=${l.color_threshold||0}
        .configValue=${"color_threshold"}
        @input=${this._valueChanged}
      ></ha-textfield>
      <table>
        <tr>
          <th>Element</th>
          <th>&gt; ${l.color_threshold||0}</th>
          <th>= ${l.color_threshold||0}</th>
          <th>&lt; ${l.color_threshold||0}</th>
        </tr>
        <tr>
          <th>icon</th>
          <td>
            <ha-textfield
              label="${Nt("editor.settings.bigger")}"
              .value=${(null===(i=l.icon_color)||void 0===i?void 0:i.bigger)||""}
              .configValue=${"icon_color.bigger"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Nt("editor.settings.equal")}"
              .value=${(null===(n=l.icon_color)||void 0===n?void 0:n.equal)||""}
              .configValue=${"icon_color.equal"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Nt("editor.settings.smaller")}"
              .value=${(null===(o=l.icon_color)||void 0===o?void 0:o.smaller)||""}
              .configValue=${"icon_color.smaller"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
        </tr>
        <tr>
          <th>arrows</th>
          <td>
            <ha-textfield
              label="${Nt("editor.settings.bigger")}"
              .value=${(null===(r=l.arrow_color)||void 0===r?void 0:r.bigger)||""}
              .configValue=${"arrow_color.bigger"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Nt("editor.settings.equal")}"
              .value=${(null===(a=l.arrow_color)||void 0===a?void 0:a.equal)||""}
              .configValue=${"arrow_color.equal"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
          <td>
            <ha-textfield
              label="${Nt("editor.settings.smaller")}"
              .value=${(null===(s=l.arrow_color)||void 0===s?void 0:s.smaller)||""}
              .configValue=${"arrow_color.smaller"}
              @input=${this._colorChanged}
            ></ha-textfield>
          </td>
        </tr>
      </table>
      <br />
      <h3>${Nt("editor.settings.action_settings")}</h3>
      <div class="side-by-side">
        <ha-selector
          label="${Nt("editor.settings.tap_action")}"
          .hass=${this.hass}
          .selector=${{"ui-action":{actions:de}}}
          .value=${l.tap_action||{action:"more-info"}}
          .configValue=${"tap_action"}
          @value-changed=${this._colorChanged}
        >
        </ha-selector>
        <ha-selector
          label="${Nt("editor.settings.double_tap_action")}"
          .hass=${this.hass}
          .selector=${{"ui-action":{actions:de}}}
          .value=${l.double_tap_action}
          .configValue=${"double_tap_action"}
          @value-changed=${this._colorChanged}
        >
        </ha-selector>
      </div>
        `}_renderPresetFeatures(){if(!this.config||!this.hass)return R``;switch(this.config.preset){case"battery":return R`
                <ha-entity-picker
                  label="${Nt("editor.settings.battery_percentage")} (${Nt("editor.optional")})"
                  allow-custom-entity
                  hideClearIcon
                  .hass=${this.hass}
                  .configValue=${"battery_percentage_entity"}
                  .value=${this.config.battery_percentage_entity||""}
                  @value-changed=${this._valueChanged}
                ></ha-entity-picker>
              `;case"grid":return R`
                <ha-entity-picker
                  label="${Nt("editor.settings.grid-buy")} (${Nt("editor.optional")})"
                  allow-custom-entity
                  hideClearIcon
                  .hass=${this.hass}
                  .configValue=${"grid_buy_entity"}
                  .value=${this.config.grid_buy_entity||""}
                  @value-changed=${this._valueChanged}
                ></ha-entity-picker>
                <ha-entity-picker
                  label="${Nt("editor.settings.grid-sell")} (${Nt("editor.optional")})"
                  allow-custom-entity
                  hideClearIcon
                  .hass=${this.hass}
                  .configValue=${"grid_sell_entity"}
                  .value=${this.config.grid_sell_entity||""}
                  @value-changed=${this._valueChanged}
                ></ha-entity-picker>
              `;default:return R``}}_valueChanged(t){if(t.stopPropagation(),!this.config||!this.hass)return;const e=t.target,i=void 0!==e.checked?e.checked:t.detail.value||e.value||t.detail.config,n=e.configValue;n&&this.config[n]!==i&&re(this,"config-changed",Object.assign(Object.assign({},this.config),{[n]:i}))}_colorChanged(t){if(t.stopPropagation(),!this.config||!this.hass)return;const e=t.target,i=e.value,n=e.configValue;if(!n)return;const[o,r]=n.split("."),a=Object.assign({},this.config[o])||{};a[r]=i,n&&this.config[o]!==a&&re(this,"config-changed",Object.assign(Object.assign({},this.config),{[o]:a}))}static get styles(){return a`
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
      `}};t([at({attribute:!1})],ve.prototype,"config",void 0),t([at({attribute:!1})],ve.prototype,"hass",void 0),ve=t([ot("power-distribution-card-item-editor")],ve);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:me}=J,be=()=>document.createComment(""),_e=(t,e,i)=>{var n;const o=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=o.insertBefore(be(),r),n=o.insertBefore(be(),r);i=new me(e,n,t,t.options)}else{const e=i._$AB.nextSibling,a=i._$AM,s=a!==t;if(s){let e;null===(n=i._$AQ)||void 0===n||n.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==a._$AU&&i._$AP(e)}if(e!==r||s){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;o.insertBefore(t,r),t=e}}}return i},ye=(t,e,i=t)=>(t._$AI(e,i),t),we={},$e=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let i=t._$AA;const n=t._$AB.nextSibling;for(;i!==n;){const t=i.nextSibling;i.remove(),i=t}},Ee=(t,e,i)=>{const n=new Map;for(let o=e;o<=i;o++)n.set(t[o],o);return n},xe=se(class extends le{constructor(t){if(super(t),t.type!==ae)throw Error("repeat() can only be used in text expressions")}ht(t,e,i){let n;void 0===i?i=e:void 0!==e&&(n=e);const o=[],r=[];let a=0;for(const e of t)o[a]=n?n(e,a):a,r[a]=i(e,a),a++;return{values:r,keys:o}}render(t,e,i){return this.ht(t,e,i).values}update(t,[e,i,n]){var o;const r=(t=>t._$AH)(t),{values:a,keys:s}=this.ht(e,i,n);if(!Array.isArray(r))return this.ut=s,a;const l=null!==(o=this.ut)&&void 0!==o?o:this.ut=[],c=[];let d,h,u=0,p=r.length-1,f=0,g=a.length-1;for(;u<=p&&f<=g;)if(null===r[u])u++;else if(null===r[p])p--;else if(l[u]===s[f])c[f]=ye(r[u],a[f]),u++,f++;else if(l[p]===s[g])c[g]=ye(r[p],a[g]),p--,g--;else if(l[u]===s[g])c[g]=ye(r[u],a[g]),_e(t,c[g+1],r[u]),u++,g--;else if(l[p]===s[f])c[f]=ye(r[p],a[f]),_e(t,r[u],r[p]),p--,f++;else if(void 0===d&&(d=Ee(s,f,g),h=Ee(l,u,p)),d.has(l[u]))if(d.has(l[p])){const e=h.get(s[f]),i=void 0!==e?r[e]:null;if(null===i){const e=_e(t,r[u]);ye(e,a[f]),c[f]=e}else c[f]=ye(i,a[f]),_e(t,r[u],i),r[e]=null;f++}else $e(r[p]),p--;else $e(r[u]),u++;for(;f<=g;){const e=_e(t,c[g+1]);ye(e,a[f]),c[f++]=e}for(;u<=p;){const t=r[u++];null!==t&&$e(t)}return this.ut=s,((t,e=we)=>{t._$AH=e})(t,c),j}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Se(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function Ce(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Se(Object(i),!0).forEach((function(e){De(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Se(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function Ae(t){return Ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ae(t)}function De(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Oe(){return Oe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Oe.apply(this,arguments)}function Te(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}function ke(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var Me=ke(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Pe=ke(/Edge/i),Ne=ke(/firefox/i),Ie=ke(/safari/i)&&!ke(/chrome/i)&&!ke(/android/i),Re=ke(/iP(ad|od|hone)/i),je=ke(/chrome/i)&&ke(/android/i),He={capture:!1,passive:!1};function Be(t,e,i){t.addEventListener(e,i,!Me&&He)}function Ve(t,e,i){t.removeEventListener(e,i,!Me&&He)}function Le(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function Xe(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function ze(t,e,i,n){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&Le(t,e):Le(t,e))||n&&t===i)return t;if(t===i)break}while(t=Xe(t))}return null}var Ye,Fe=/\s+/g;function We(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(Fe," ").replace(" "+e+" "," ");t.className=(n+(i?" "+e:"")).replace(Fe," ")}}function Ue(t,e,i){var n=t&&t.style;if(n){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in n||-1!==e.indexOf("webkit")||(e="-webkit-"+e),n[e]=i+("string"==typeof i?"":"px")}}function qe(t,e){var i="";if("string"==typeof t)i=t;else do{var n=Ue(t,"transform");n&&"none"!==n&&(i=n+" "+i)}while(!e&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function Ge(t,e,i){if(t){var n=t.getElementsByTagName(e),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function Ke(){var t=document.scrollingElement;return t||document.documentElement}function Ze(t,e,i,n,o){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==Ke()?(a=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(o=o||t.parentNode,!Me))do{if(o&&o.getBoundingClientRect&&("none"!==Ue(o,"transform")||i&&"static"!==Ue(o,"position"))){var u=o.getBoundingClientRect();a-=u.top+parseInt(Ue(o,"border-top-width")),s-=u.left+parseInt(Ue(o,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(o=o.parentNode);if(n&&t!==window){var p=qe(o||t),f=p&&p.a,g=p&&p.d;p&&(l=(a/=g)+(d/=g),c=(s/=f)+(h/=f))}return{top:a,left:s,bottom:l,right:c,width:h,height:d}}}function Je(t,e,i){for(var n=ni(t,!0),o=Ze(t)[e];n;){var r=Ze(n)[i];if(!("top"===i||"left"===i?o>=r:o<=r))return n;if(n===Ke())break;n=ni(n,!1)}return!1}function Qe(t,e,i,n){for(var o=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==sn.ghost&&(n||a[r]!==sn.dragged)&&ze(a[r],i.draggable,t,!1)){if(o===e)return a[r];o++}r++}return null}function ti(t,e){for(var i=t.lastElementChild;i&&(i===sn.ghost||"none"===Ue(i,"display")||e&&!Le(i,e));)i=i.previousElementSibling;return i||null}function ei(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===sn.clone||e&&!Le(t,e)||i++;return i}function ii(t){var e=0,i=0,n=Ke();if(t)do{var o=qe(t),r=o.a,a=o.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[e,i]}function ni(t,e){if(!t||!t.getBoundingClientRect)return Ke();var i=t,n=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=Ue(i);if(i.clientWidth<i.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){if(!i.getBoundingClientRect||i===document.body)return Ke();if(n||e)return i;n=!0}}}while(i=i.parentNode);return Ke()}function oi(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function ri(t,e){return function(){if(!Ye){var i=arguments;1===i.length?t.call(this,i[0]):t.apply(this,i),Ye=setTimeout((function(){Ye=void 0}),e)}}}function ai(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function si(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}var li="Sortable"+(new Date).getTime();function ci(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach((function(t){if("none"!==Ue(t,"display")&&t!==sn.ghost){e.push({target:t,rect:Ze(t)});var i=Ce({},e[e.length-1].rect);if(t.thisAnimationDuration){var n=qe(t,!0);n&&(i.top-=n.f,i.left-=n.e)}t.fromRect=i}}))},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[i][n])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var n=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var o=!1,r=0;e.forEach((function(t){var e=0,i=t.target,a=i.fromRect,s=Ze(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=qe(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&oi(l,s)&&!oi(a,s)&&(d.top-s.top)/(d.left-s.left)==(a.top-s.top)/(a.left-s.left)&&(e=function(t,e,i,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*n.animation}(d,l,c,n.options)),oi(s,a)||(i.prevFromRect=a,i.prevToRect=s,e||(e=n.options.animation),n.animate(i,d,s,e)),e&&(o=!0,r=Math.max(r,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout((function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null}),e),i.thisAnimationDuration=e)})),clearTimeout(t),o?t=setTimeout((function(){"function"==typeof i&&i()}),r):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,n){if(n){Ue(t,"transition",""),Ue(t,"transform","");var o=qe(this.el),r=o&&o.a,a=o&&o.d,s=(e.left-i.left)/(r||1),l=(e.top-i.top)/(a||1);t.animatingX=!!s,t.animatingY=!!l,Ue(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),Ue(t,"transition","transform "+n+"ms"+(this.options.easing?" "+this.options.easing:"")),Ue(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout((function(){Ue(t,"transition",""),Ue(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1}),n)}}}}var di=[],hi={initializeByDefault:!0},ui={mount:function(t){for(var e in hi)hi.hasOwnProperty(e)&&!(e in t)&&(t[e]=hi[e]);di.forEach((function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")})),di.push(t)},pluginEvent:function(t,e,i){var n=this;this.eventCanceled=!1,i.cancel=function(){n.eventCanceled=!0};var o=t+"Global";di.forEach((function(n){e[n.pluginName]&&(e[n.pluginName][o]&&e[n.pluginName][o](Ce({sortable:e},i)),e.options[n.pluginName]&&e[n.pluginName][t]&&e[n.pluginName][t](Ce({sortable:e},i)))}))},initializePlugins:function(t,e,i,n){for(var o in di.forEach((function(n){var o=n.pluginName;if(t.options[o]||n.initializeByDefault){var r=new n(t,e,t.options);r.sortable=t,r.options=t.options,t[o]=r,Oe(i,r.defaults)}})),t.options)if(t.options.hasOwnProperty(o)){var r=this.modifyOption(t,o,t.options[o]);void 0!==r&&(t.options[o]=r)}},getEventProperties:function(t,e){var i={};return di.forEach((function(n){"function"==typeof n.eventProperties&&Oe(i,n.eventProperties.call(e[n.pluginName],t))})),i},modifyOption:function(t,e,i){var n;return di.forEach((function(o){t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[e]&&(n=o.optionListeners[e].call(t[o.pluginName],i))})),n}};var pi=["evt"],fi=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.evt,o=Te(i,pi);ui.pluginEvent.bind(sn)(t,e,Ce({dragEl:vi,parentEl:mi,ghostEl:bi,rootEl:_i,nextEl:yi,lastDownEl:wi,cloneEl:$i,cloneHidden:Ei,dragStarted:Ri,putSortable:Oi,activeSortable:sn.active,originalEvent:n,oldIndex:xi,oldDraggableIndex:Ci,newIndex:Si,newDraggableIndex:Ai,hideGhostForTarget:nn,unhideGhostForTarget:on,cloneNowHidden:function(){Ei=!0},cloneNowShown:function(){Ei=!1},dispatchSortableEvent:function(t){gi({sortable:e,name:t,originalEvent:n})}},o))};function gi(t){!function(t){var e=t.sortable,i=t.rootEl,n=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,f=t.extraEventProperties;if(e=e||i&&i[li]){var g,v=e.options,m="on"+n.charAt(0).toUpperCase()+n.substr(1);!window.CustomEvent||Me||Pe?(g=document.createEvent("Event")).initEvent(n,!0,!0):g=new CustomEvent(n,{bubbles:!0,cancelable:!0}),g.to=a||i,g.from=s||i,g.item=o||i,g.clone=r,g.oldIndex=l,g.newIndex=c,g.oldDraggableIndex=d,g.newDraggableIndex=h,g.originalEvent=u,g.pullMode=p?p.lastPutMode:void 0;var b=Ce(Ce({},f),ui.getEventProperties(n,e));for(var _ in b)g[_]=b[_];i&&i.dispatchEvent(g),v[m]&&v[m].call(e,g)}}(Ce({putSortable:Oi,cloneEl:$i,targetEl:vi,rootEl:_i,oldIndex:xi,oldDraggableIndex:Ci,newIndex:Si,newDraggableIndex:Ai},t))}var vi,mi,bi,_i,yi,wi,$i,Ei,xi,Si,Ci,Ai,Di,Oi,Ti,ki,Mi,Pi,Ni,Ii,Ri,ji,Hi,Bi,Vi,Li=!1,Xi=!1,zi=[],Yi=!1,Fi=!1,Wi=[],Ui=!1,qi=[],Gi="undefined"!=typeof document,Ki=Re,Zi=Pe||Me?"cssFloat":"float",Ji=Gi&&!je&&!Re&&"draggable"in document.createElement("div"),Qi=function(){if(Gi){if(Me)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),tn=function(t,e){var i=Ue(t),n=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=Qe(t,0,e),r=Qe(t,1,e),a=o&&Ue(o),s=r&&Ue(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Ze(o).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Ze(r).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return o&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=n&&"none"===i[Zi]||r&&"none"===i[Zi]&&l+c>n)?"vertical":"horizontal"},en=function(t){function e(t,i){return function(n,o,r,a){var s=n.options.group.name&&o.options.group.name&&n.options.group.name===o.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(n,o,r,a),i)(n,o,r,a);var l=(i?n:o).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},n=t.group;n&&"object"==Ae(n)||(n={name:n}),i.name=n.name,i.checkPull=e(n.pull,!0),i.checkPut=e(n.put),i.revertClone=n.revertClone,t.group=i},nn=function(){!Qi&&bi&&Ue(bi,"display","none")},on=function(){!Qi&&bi&&Ue(bi,"display","")};Gi&&!je&&document.addEventListener("click",(function(t){if(Xi)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Xi=!1,!1}),!0);var rn=function(t){if(vi){var e=function(t,e){var i;return zi.some((function(n){var o=n[li].options.emptyInsertThreshold;if(o&&!ti(n)){var r=Ze(n),a=t>=r.left-o&&t<=r.right+o,s=e>=r.top-o&&e<=r.bottom+o;return a&&s?i=n:void 0}})),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[li]._onDragOver(i)}}},an=function(t){vi&&vi.parentNode[li]._isOutsideThisEl(t.target)};function sn(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Oe({},e),t[li]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return tn(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==sn.supportPointer&&"PointerEvent"in window&&!Ie,emptyInsertThreshold:5};for(var n in ui.initializePlugins(this,t,i),i)!(n in e)&&(e[n]=i[n]);for(var o in en(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&Ji,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Be(t,"pointerdown",this._onTapStart):(Be(t,"mousedown",this._onTapStart),Be(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Be(t,"dragover",this),Be(t,"dragenter",this)),zi.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Oe(this,ci())}function ln(t,e,i,n,o,r,a,s){var l,c,d=t[li],h=d.options.onMove;return!window.CustomEvent||Me||Pe?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=n,l.related=o||e,l.relatedRect=r||Ze(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function cn(t){t.draggable=!1}function dn(){Ui=!1}function hn(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,n=0;i--;)n+=e.charCodeAt(i);return n.toString(36)}function un(t){return setTimeout(t,0)}function pn(t){return clearTimeout(t)}sn.prototype={constructor:sn,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(ji=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,vi):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,n=this.options,o=n.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=n.filter;if(function(t){qi.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var n=e[i];n.checked&&qi.push(n)}}(i),!vi&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||n.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Ie||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=ze(s,n.draggable,i,!1))&&s.animated||wi===s)){if(xi=ei(s),Ci=ei(s,n.draggable),"function"==typeof c){if(c.call(this,t,s,this))return gi({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),fi("filter",e,{evt:t}),void(o&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some((function(n){if(n=ze(l,n.trim(),i,!1))return gi({sortable:e,rootEl:n,name:"filter",targetEl:s,fromEl:i,toEl:i}),fi("filter",e,{evt:t}),!0}))))return void(o&&t.cancelable&&t.preventDefault());n.handle&&!ze(l,n.handle,i,!1)||this._prepareDragStart(t,a,s)}}},_prepareDragStart:function(t,e,i){var n,o=this,r=o.el,a=o.options,s=r.ownerDocument;if(i&&!vi&&i.parentNode===r){var l=Ze(i);if(_i=r,mi=(vi=i).parentNode,yi=vi.nextSibling,wi=i,Di=a.group,sn.dragged=vi,Ti={target:vi,clientX:(e||t).clientX,clientY:(e||t).clientY},Ni=Ti.clientX-l.left,Ii=Ti.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,vi.style["will-change"]="all",n=function(){fi("delayEnded",o,{evt:t}),sn.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),!Ne&&o.nativeDraggable&&(vi.draggable=!0),o._triggerDragStart(t,e),gi({sortable:o,name:"choose",originalEvent:t}),We(vi,a.chosenClass,!0))},a.ignore.split(",").forEach((function(t){Ge(vi,t.trim(),cn)})),Be(s,"dragover",rn),Be(s,"mousemove",rn),Be(s,"touchmove",rn),Be(s,"mouseup",o._onDrop),Be(s,"touchend",o._onDrop),Be(s,"touchcancel",o._onDrop),Ne&&this.nativeDraggable&&(this.options.touchStartThreshold=4,vi.draggable=!0),fi("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(Pe||Me))n();else{if(sn.eventCanceled)return void this._onDrop();Be(s,"mouseup",o._disableDelayedDrag),Be(s,"touchend",o._disableDelayedDrag),Be(s,"touchcancel",o._disableDelayedDrag),Be(s,"mousemove",o._delayedDragTouchMoveHandler),Be(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&Be(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(n,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){vi&&cn(vi),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;Ve(t,"mouseup",this._disableDelayedDrag),Ve(t,"touchend",this._disableDelayedDrag),Ve(t,"touchcancel",this._disableDelayedDrag),Ve(t,"mousemove",this._delayedDragTouchMoveHandler),Ve(t,"touchmove",this._delayedDragTouchMoveHandler),Ve(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?Be(document,"pointermove",this._onTouchMove):Be(document,e?"touchmove":"mousemove",this._onTouchMove):(Be(vi,"dragend",this),Be(_i,"dragstart",this._onDragStart));try{document.selection?un((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(Li=!1,_i&&vi){fi("dragStarted",this,{evt:e}),this.nativeDraggable&&Be(document,"dragover",an);var i=this.options;!t&&We(vi,i.dragClass,!1),We(vi,i.ghostClass,!0),sn.active=this,t&&this._appendGhost(),gi({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(ki){this._lastX=ki.clientX,this._lastY=ki.clientY,nn();for(var t=document.elementFromPoint(ki.clientX,ki.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ki.clientX,ki.clientY))!==e;)e=t;if(vi.parentNode[li]._isOutsideThisEl(t),e)do{if(e[li]){if(e[li]._onDragOver({clientX:ki.clientX,clientY:ki.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);on()}},_onTouchMove:function(t){if(Ti){var e=this.options,i=e.fallbackTolerance,n=e.fallbackOffset,o=t.touches?t.touches[0]:t,r=bi&&qe(bi,!0),a=bi&&r&&r.a,s=bi&&r&&r.d,l=Ki&&Vi&&ii(Vi),c=(o.clientX-Ti.clientX+n.x)/(a||1)+(l?l[0]-Wi[0]:0)/(a||1),d=(o.clientY-Ti.clientY+n.y)/(s||1)+(l?l[1]-Wi[1]:0)/(s||1);if(!sn.active&&!Li){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(bi){r?(r.e+=c-(Mi||0),r.f+=d-(Pi||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");Ue(bi,"webkitTransform",h),Ue(bi,"mozTransform",h),Ue(bi,"msTransform",h),Ue(bi,"transform",h),Mi=c,Pi=d,ki=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!bi){var t=this.options.fallbackOnBody?document.body:_i,e=Ze(vi,!0,Ki,!0,t),i=this.options;if(Ki){for(Vi=t;"static"===Ue(Vi,"position")&&"none"===Ue(Vi,"transform")&&Vi!==document;)Vi=Vi.parentNode;Vi!==document.body&&Vi!==document.documentElement?(Vi===document&&(Vi=Ke()),e.top+=Vi.scrollTop,e.left+=Vi.scrollLeft):Vi=Ke(),Wi=ii(Vi)}We(bi=vi.cloneNode(!0),i.ghostClass,!1),We(bi,i.fallbackClass,!0),We(bi,i.dragClass,!0),Ue(bi,"transition",""),Ue(bi,"transform",""),Ue(bi,"box-sizing","border-box"),Ue(bi,"margin",0),Ue(bi,"top",e.top),Ue(bi,"left",e.left),Ue(bi,"width",e.width),Ue(bi,"height",e.height),Ue(bi,"opacity","0.8"),Ue(bi,"position",Ki?"absolute":"fixed"),Ue(bi,"zIndex","100000"),Ue(bi,"pointerEvents","none"),sn.ghost=bi,t.appendChild(bi),Ue(bi,"transform-origin",Ni/parseInt(bi.style.width)*100+"% "+Ii/parseInt(bi.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,n=t.dataTransfer,o=i.options;fi("dragStart",this,{evt:t}),sn.eventCanceled?this._onDrop():(fi("setupClone",this),sn.eventCanceled||(($i=si(vi)).removeAttribute("id"),$i.draggable=!1,$i.style["will-change"]="",this._hideClone(),We($i,this.options.chosenClass,!1),sn.clone=$i),i.cloneId=un((function(){fi("clone",i),sn.eventCanceled||(i.options.removeCloneOnHide||_i.insertBefore($i,vi),i._hideClone(),gi({sortable:i,name:"clone"}))})),!e&&We(vi,o.dragClass,!0),e?(Xi=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Ve(document,"mouseup",i._onDrop),Ve(document,"touchend",i._onDrop),Ve(document,"touchcancel",i._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(i,n,vi)),Be(document,"drop",i),Ue(vi,"transform","translateZ(0)")),Li=!0,i._dragStartId=un(i._dragStarted.bind(i,e,t)),Be(document,"selectstart",i),Ri=!0,Ie&&Ue(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,n,o,r=this.el,a=t.target,s=this.options,l=s.group,c=sn.active,d=Di===l,h=s.sort,u=Oi||c,p=this,f=!1;if(!Ui){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=ze(a,s.draggable,r,!0),O("dragOver"),sn.eventCanceled)return f;if(vi.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return k(!1);if(Xi=!1,c&&!s.disabled&&(d?h||(n=mi!==_i):Oi===this||(this.lastPutMode=Di.checkPull(this,c,vi,t))&&l.checkPut(this,c,vi,t))){if(o="vertical"===this._getDirection(t,a),e=Ze(vi),O("dragOverValid"),sn.eventCanceled)return f;if(n)return mi=_i,T(),this._hideClone(),O("revert"),sn.eventCanceled||(yi?_i.insertBefore(vi,yi):_i.appendChild(vi)),k(!0);var g=ti(r,s.draggable);if(!g||function(t,e,i){var n=Ze(ti(i.el,i.options.draggable)),o=10;return e?t.clientX>n.right+o||t.clientX<=n.right&&t.clientY>n.bottom&&t.clientX>=n.left:t.clientX>n.right&&t.clientY>n.top||t.clientX<=n.right&&t.clientY>n.bottom+o}(t,o,this)&&!g.animated){if(g===vi)return k(!1);if(g&&r===t.target&&(a=g),a&&(i=Ze(a)),!1!==ln(_i,r,vi,e,a,i,t,!!a))return T(),g&&g.nextSibling?r.insertBefore(vi,g.nextSibling):r.appendChild(vi),mi=r,M(),k(!0)}else if(g&&function(t,e,i){var n=Ze(Qe(i.el,0,i.options,!0)),o=10;return e?t.clientX<n.left-o||t.clientY<n.top&&t.clientX<n.right:t.clientY<n.top-o||t.clientY<n.bottom&&t.clientX<n.left}(t,o,this)){var v=Qe(r,0,s,!0);if(v===vi)return k(!1);if(i=Ze(a=v),!1!==ln(_i,r,vi,e,a,i,t,!1))return T(),r.insertBefore(vi,v),mi=r,M(),k(!0)}else if(a.parentNode===r){i=Ze(a);var m,b,_,y=vi.parentNode!==r,w=!function(t,e,i){var n=i?t.left:t.top,o=i?t.right:t.bottom,r=i?t.width:t.height,a=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return n===a||o===s||n+r/2===a+l/2}(vi.animated&&vi.toRect||e,a.animated&&a.toRect||i,o),$=o?"top":"left",E=Je(a,"top","top")||Je(vi,"top","top"),x=E?E.scrollTop:void 0;if(ji!==a&&(b=i[$],Yi=!1,Fi=!w&&s.invertSwap||y),m=function(t,e,i,n,o,r,a,s){var l=n?t.clientY:t.clientX,c=n?i.height:i.width,d=n?i.top:i.left,h=n?i.bottom:i.right,u=!1;if(!a)if(s&&Bi<c*o){if(!Yi&&(1===Hi?l>d+c*r/2:l<h-c*r/2)&&(Yi=!0),Yi)u=!0;else if(1===Hi?l<d+Bi:l>h-Bi)return-Hi}else if(l>d+c*(1-o)/2&&l<h-c*(1-o)/2)return function(t){return ei(vi)<ei(t)?1:-1}(e);if((u=u||a)&&(l<d+c*r/2||l>h-c*r/2))return l>d+c/2?1:-1;return 0}(t,a,i,o,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Fi,ji===a),0!==m){var S=ei(vi);do{S-=m,_=mi.children[S]}while(_&&("none"===Ue(_,"display")||_===bi))}if(0===m||_===a)return k(!1);ji=a,Hi=m;var C=a.nextElementSibling,A=!1,D=ln(_i,r,vi,e,a,i,t,A=1===m);if(!1!==D)return 1!==D&&-1!==D||(A=1===D),Ui=!0,setTimeout(dn,30),T(),A&&!C?r.appendChild(vi):a.parentNode.insertBefore(vi,A?C:a),E&&ai(E,0,x-E.scrollTop),mi=vi.parentNode,void 0===b||Fi||(Bi=Math.abs(b-Ze(a)[$])),M(),k(!0)}if(r.contains(vi))return k(!1)}return!1}function O(s,l){fi(s,p,Ce({evt:t,isOwner:d,axis:o?"vertical":"horizontal",revert:n,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:a,completed:k,onMove:function(i,n){return ln(_i,r,vi,e,i,Ze(i),t,n)},changed:M},l))}function T(){O("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function k(e){return O("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(We(vi,Oi?Oi.options.ghostClass:c.options.ghostClass,!1),We(vi,s.ghostClass,!0)),Oi!==p&&p!==sn.active?Oi=p:p===sn.active&&Oi&&(Oi=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll((function(){O("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a===vi&&!vi.animated||a===r&&!a.animated)&&(ji=null),s.dragoverBubble||t.rootEl||a===document||(vi.parentNode[li]._isOutsideThisEl(t.target),!e&&rn(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),f=!0}function M(){Si=ei(vi),Ai=ei(vi,s.draggable),gi({sortable:p,name:"change",toEl:r,newIndex:Si,newDraggableIndex:Ai,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Ve(document,"mousemove",this._onTouchMove),Ve(document,"touchmove",this._onTouchMove),Ve(document,"pointermove",this._onTouchMove),Ve(document,"dragover",rn),Ve(document,"mousemove",rn),Ve(document,"touchmove",rn)},_offUpEvents:function(){var t=this.el.ownerDocument;Ve(t,"mouseup",this._onDrop),Ve(t,"touchend",this._onDrop),Ve(t,"pointerup",this._onDrop),Ve(t,"touchcancel",this._onDrop),Ve(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;Si=ei(vi),Ai=ei(vi,i.draggable),fi("drop",this,{evt:t}),mi=vi&&vi.parentNode,Si=ei(vi),Ai=ei(vi,i.draggable),sn.eventCanceled||(Li=!1,Fi=!1,Yi=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),pn(this.cloneId),pn(this._dragStartId),this.nativeDraggable&&(Ve(document,"drop",this),Ve(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ie&&Ue(document.body,"user-select",""),Ue(vi,"transform",""),t&&(Ri&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),bi&&bi.parentNode&&bi.parentNode.removeChild(bi),(_i===mi||Oi&&"clone"!==Oi.lastPutMode)&&$i&&$i.parentNode&&$i.parentNode.removeChild($i),vi&&(this.nativeDraggable&&Ve(vi,"dragend",this),cn(vi),vi.style["will-change"]="",Ri&&!Li&&We(vi,Oi?Oi.options.ghostClass:this.options.ghostClass,!1),We(vi,this.options.chosenClass,!1),gi({sortable:this,name:"unchoose",toEl:mi,newIndex:null,newDraggableIndex:null,originalEvent:t}),_i!==mi?(Si>=0&&(gi({rootEl:mi,name:"add",toEl:mi,fromEl:_i,originalEvent:t}),gi({sortable:this,name:"remove",toEl:mi,originalEvent:t}),gi({rootEl:mi,name:"sort",toEl:mi,fromEl:_i,originalEvent:t}),gi({sortable:this,name:"sort",toEl:mi,originalEvent:t})),Oi&&Oi.save()):Si!==xi&&Si>=0&&(gi({sortable:this,name:"update",toEl:mi,originalEvent:t}),gi({sortable:this,name:"sort",toEl:mi,originalEvent:t})),sn.active&&(null!=Si&&-1!==Si||(Si=xi,Ai=Ci),gi({sortable:this,name:"end",toEl:mi,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){fi("nulling",this),_i=vi=mi=bi=yi=$i=wi=Ei=Ti=ki=Ri=Si=Ai=xi=Ci=ji=Hi=Oi=Di=sn.dragged=sn.ghost=sn.clone=sn.active=null,qi.forEach((function(t){t.checked=!0})),qi.length=Mi=Pi=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":vi&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,n=0,o=i.length,r=this.options;n<o;n++)ze(t=i[n],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||hn(t));return e},sort:function(t,e){var i={},n=this.el;this.toArray().forEach((function(t,e){var o=n.children[e];ze(o,this.options.draggable,n,!1)&&(i[t]=o)}),this),e&&this.captureAnimationState(),t.forEach((function(t){i[t]&&(n.removeChild(i[t]),n.appendChild(i[t]))})),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return ze(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var n=ui.modifyOption(this,t,e);i[t]=void 0!==n?n:e,"group"===t&&en(i)},destroy:function(){fi("destroy",this);var t=this.el;t[li]=null,Ve(t,"mousedown",this._onTapStart),Ve(t,"touchstart",this._onTapStart),Ve(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Ve(t,"dragover",this),Ve(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),zi.splice(zi.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Ei){if(fi("hideClone",this),sn.eventCanceled)return;Ue($i,"display","none"),this.options.removeCloneOnHide&&$i.parentNode&&$i.parentNode.removeChild($i),Ei=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(Ei){if(fi("showClone",this),sn.eventCanceled)return;vi.parentNode!=_i||this.options.group.revertClone?yi?_i.insertBefore($i,yi):_i.appendChild($i):_i.insertBefore($i,vi),this.options.group.revertClone&&this.animate(vi,$i),Ue($i,"display",""),Ei=!1}}else this._hideClone()}},Gi&&Be(document,"touchmove",(function(t){(sn.active||Li)&&t.cancelable&&t.preventDefault()})),sn.utils={on:Be,off:Ve,css:Ue,find:Ge,is:function(t,e){return!!ze(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:ri,closest:ze,toggleClass:We,clone:si,index:ei,nextTick:un,cancelNextTick:pn,detectDirection:tn,getChild:Qe},sn.get=function(t){return t[li]},sn.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(sn.utils=Ce(Ce({},sn.utils),t.utils)),ui.mount(t)}))},sn.create=function(t,e){return new sn(t,e)},sn.version="1.15.0";var fn,gn,vn,mn,bn,_n,yn=[],wn=!1;function $n(){yn.forEach((function(t){clearInterval(t.pid)})),yn=[]}function En(){clearInterval(_n)}var xn=ri((function(t,e,i,n){if(e.scroll){var o,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=Ke(),d=!1;gn!==i&&(gn=i,$n(),fn=e.scroll,o=e.scrollFn,!0===fn&&(fn=ni(i,!0)));var h=0,u=fn;do{var p=u,f=Ze(p),g=f.top,v=f.bottom,m=f.left,b=f.right,_=f.width,y=f.height,w=void 0,$=void 0,E=p.scrollWidth,x=p.scrollHeight,S=Ue(p),C=p.scrollLeft,A=p.scrollTop;p===c?(w=_<E&&("auto"===S.overflowX||"scroll"===S.overflowX||"visible"===S.overflowX),$=y<x&&("auto"===S.overflowY||"scroll"===S.overflowY||"visible"===S.overflowY)):(w=_<E&&("auto"===S.overflowX||"scroll"===S.overflowX),$=y<x&&("auto"===S.overflowY||"scroll"===S.overflowY));var D=w&&(Math.abs(b-r)<=s&&C+_<E)-(Math.abs(m-r)<=s&&!!C),O=$&&(Math.abs(v-a)<=s&&A+y<x)-(Math.abs(g-a)<=s&&!!A);if(!yn[h])for(var T=0;T<=h;T++)yn[T]||(yn[T]={});yn[h].vx==D&&yn[h].vy==O&&yn[h].el===p||(yn[h].el=p,yn[h].vx=D,yn[h].vy=O,clearInterval(yn[h].pid),0==D&&0==O||(d=!0,yn[h].pid=setInterval(function(){n&&0===this.layer&&sn.active._onTouchMove(bn);var e=yn[this.layer].vy?yn[this.layer].vy*l:0,i=yn[this.layer].vx?yn[this.layer].vx*l:0;"function"==typeof o&&"continue"!==o.call(sn.dragged.parentNode[li],i,e,t,bn,yn[this.layer].el)||ai(yn[this.layer].el,i,e)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&u!==c&&(u=ni(u,!1)));wn=d}}),30),Sn=function(t){var e=t.originalEvent,i=t.putSortable,n=t.dragEl,o=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||o;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:n,putSortable:i}))}};function Cn(){}function An(){}
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Dn(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function On(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Dn(Object(i),!0).forEach((function(e){kn(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Dn(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function Tn(t){return Tn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tn(t)}function kn(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Mn(){return Mn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Mn.apply(this,arguments)}function Pn(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}Cn.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var n=Qe(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(e,n):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:Sn},Oe(Cn,{pluginName:"revertOnSpill"}),An.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:Sn},Oe(An,{pluginName:"removeOnSpill"}),sn.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?Be(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Be(document,"pointermove",this._handleFallbackAutoScroll):e.touches?Be(document,"touchmove",this._handleFallbackAutoScroll):Be(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?Ve(document,"dragover",this._handleAutoScroll):(Ve(document,"pointermove",this._handleFallbackAutoScroll),Ve(document,"touchmove",this._handleFallbackAutoScroll),Ve(document,"mousemove",this._handleFallbackAutoScroll)),En(),$n(),clearTimeout(Ye),Ye=void 0},nulling:function(){bn=gn=fn=wn=_n=vn=mn=null,yn.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,n=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(n,o);if(bn=t,e||this.options.forceAutoScrollFallback||Pe||Me||Ie){xn(t,this.options,r,e);var a=ni(r,!0);!wn||_n&&n===vn&&o===mn||(_n&&En(),_n=setInterval((function(){var r=ni(document.elementFromPoint(n,o),!0);r!==a&&(a=r,$n()),xn(t,i.options,r,e)}),10),vn=n,mn=o)}else{if(!this.options.bubbleScroll||ni(r,!0)===Ke())return void $n();xn(t,this.options,ni(r,!1),!1)}}},Oe(t,{pluginName:"scroll",initializeByDefault:!0})}),sn.mount(An,Cn);function Nn(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var In=Nn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Rn=Nn(/Edge/i),jn=Nn(/firefox/i),Hn=Nn(/safari/i)&&!Nn(/chrome/i)&&!Nn(/android/i),Bn=Nn(/iP(ad|od|hone)/i),Vn=Nn(/chrome/i)&&Nn(/android/i),Ln={capture:!1,passive:!1};function Xn(t,e,i){t.addEventListener(e,i,!In&&Ln)}function zn(t,e,i){t.removeEventListener(e,i,!In&&Ln)}function Yn(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function Fn(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function Wn(t,e,i,n){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&Yn(t,e):Yn(t,e))||n&&t===i)return t;if(t===i)break}while(t=Fn(t))}return null}var Un,qn=/\s+/g;function Gn(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(qn," ").replace(" "+e+" "," ");t.className=(n+(i?" "+e:"")).replace(qn," ")}}function Kn(t,e,i){var n=t&&t.style;if(n){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in n||-1!==e.indexOf("webkit")||(e="-webkit-"+e),n[e]=i+("string"==typeof i?"":"px")}}function Zn(t,e){var i="";if("string"==typeof t)i=t;else do{var n=Kn(t,"transform");n&&"none"!==n&&(i=n+" "+i)}while(!e&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function Jn(t,e,i){if(t){var n=t.getElementsByTagName(e),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function Qn(){var t=document.scrollingElement;return t||document.documentElement}function to(t,e,i,n,o){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==Qn()?(a=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(o=o||t.parentNode,!In))do{if(o&&o.getBoundingClientRect&&("none"!==Kn(o,"transform")||i&&"static"!==Kn(o,"position"))){var u=o.getBoundingClientRect();a-=u.top+parseInt(Kn(o,"border-top-width")),s-=u.left+parseInt(Kn(o,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(o=o.parentNode);if(n&&t!==window){var p=Zn(o||t),f=p&&p.a,g=p&&p.d;p&&(l=(a/=g)+(d/=g),c=(s/=f)+(h/=f))}return{top:a,left:s,bottom:l,right:c,width:h,height:d}}}function eo(t,e,i){for(var n=ao(t,!0),o=to(t)[e];n;){var r=to(n)[i];if(!("top"===i||"left"===i?o>=r:o<=r))return n;if(n===Qn())break;n=ao(n,!1)}return!1}function io(t,e,i,n){for(var o=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==dr.ghost&&(n||a[r]!==dr.dragged)&&Wn(a[r],i.draggable,t,!1)){if(o===e)return a[r];o++}r++}return null}function no(t,e){for(var i=t.lastElementChild;i&&(i===dr.ghost||"none"===Kn(i,"display")||e&&!Yn(i,e));)i=i.previousElementSibling;return i||null}function oo(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===dr.clone||e&&!Yn(t,e)||i++;return i}function ro(t){var e=0,i=0,n=Qn();if(t)do{var o=Zn(t),r=o.a,a=o.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[e,i]}function ao(t,e){if(!t||!t.getBoundingClientRect)return Qn();var i=t,n=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=Kn(i);if(i.clientWidth<i.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){if(!i.getBoundingClientRect||i===document.body)return Qn();if(n||e)return i;n=!0}}}while(i=i.parentNode);return Qn()}function so(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function lo(t,e){return function(){if(!Un){var i=arguments;1===i.length?t.call(this,i[0]):t.apply(this,i),Un=setTimeout((function(){Un=void 0}),e)}}}function co(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function ho(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}var uo="Sortable"+(new Date).getTime();function po(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach((function(t){if("none"!==Kn(t,"display")&&t!==dr.ghost){e.push({target:t,rect:to(t)});var i=On({},e[e.length-1].rect);if(t.thisAnimationDuration){var n=Zn(t,!0);n&&(i.top-=n.f,i.left-=n.e)}t.fromRect=i}}))},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[i][n])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var n=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var o=!1,r=0;e.forEach((function(t){var e=0,i=t.target,a=i.fromRect,s=to(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=Zn(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&so(l,s)&&!so(a,s)&&(d.top-s.top)/(d.left-s.left)==(a.top-s.top)/(a.left-s.left)&&(e=function(t,e,i,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*n.animation}(d,l,c,n.options)),so(s,a)||(i.prevFromRect=a,i.prevToRect=s,e||(e=n.options.animation),n.animate(i,d,s,e)),e&&(o=!0,r=Math.max(r,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout((function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null}),e),i.thisAnimationDuration=e)})),clearTimeout(t),o?t=setTimeout((function(){"function"==typeof i&&i()}),r):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,n){if(n){Kn(t,"transition",""),Kn(t,"transform","");var o=Zn(this.el),r=o&&o.a,a=o&&o.d,s=(e.left-i.left)/(r||1),l=(e.top-i.top)/(a||1);t.animatingX=!!s,t.animatingY=!!l,Kn(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),Kn(t,"transition","transform "+n+"ms"+(this.options.easing?" "+this.options.easing:"")),Kn(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout((function(){Kn(t,"transition",""),Kn(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1}),n)}}}}var fo=[],go={initializeByDefault:!0},vo={mount:function(t){for(var e in go)go.hasOwnProperty(e)&&!(e in t)&&(t[e]=go[e]);fo.forEach((function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")})),fo.push(t)},pluginEvent:function(t,e,i){var n=this;this.eventCanceled=!1,i.cancel=function(){n.eventCanceled=!0};var o=t+"Global";fo.forEach((function(n){e[n.pluginName]&&(e[n.pluginName][o]&&e[n.pluginName][o](On({sortable:e},i)),e.options[n.pluginName]&&e[n.pluginName][t]&&e[n.pluginName][t](On({sortable:e},i)))}))},initializePlugins:function(t,e,i,n){for(var o in fo.forEach((function(n){var o=n.pluginName;if(t.options[o]||n.initializeByDefault){var r=new n(t,e,t.options);r.sortable=t,r.options=t.options,t[o]=r,Mn(i,r.defaults)}})),t.options)if(t.options.hasOwnProperty(o)){var r=this.modifyOption(t,o,t.options[o]);void 0!==r&&(t.options[o]=r)}},getEventProperties:function(t,e){var i={};return fo.forEach((function(n){"function"==typeof n.eventProperties&&Mn(i,n.eventProperties.call(e[n.pluginName],t))})),i},modifyOption:function(t,e,i){var n;return fo.forEach((function(o){t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[e]&&(n=o.optionListeners[e].call(t[o.pluginName],i))})),n}};var mo=["evt"],bo=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.evt,o=Pn(i,mo);vo.pluginEvent.bind(dr)(t,e,On({dragEl:yo,parentEl:wo,ghostEl:$o,rootEl:Eo,nextEl:xo,lastDownEl:So,cloneEl:Co,cloneHidden:Ao,dragStarted:Vo,putSortable:Po,activeSortable:dr.active,originalEvent:n,oldIndex:Do,oldDraggableIndex:To,newIndex:Oo,newDraggableIndex:ko,hideGhostForTarget:ar,unhideGhostForTarget:sr,cloneNowHidden:function(){Ao=!0},cloneNowShown:function(){Ao=!1},dispatchSortableEvent:function(t){_o({sortable:e,name:t,originalEvent:n})}},o))};function _o(t){!function(t){var e=t.sortable,i=t.rootEl,n=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,f=t.extraEventProperties;if(e=e||i&&i[uo]){var g,v=e.options,m="on"+n.charAt(0).toUpperCase()+n.substr(1);!window.CustomEvent||In||Rn?(g=document.createEvent("Event")).initEvent(n,!0,!0):g=new CustomEvent(n,{bubbles:!0,cancelable:!0}),g.to=a||i,g.from=s||i,g.item=o||i,g.clone=r,g.oldIndex=l,g.newIndex=c,g.oldDraggableIndex=d,g.newDraggableIndex=h,g.originalEvent=u,g.pullMode=p?p.lastPutMode:void 0;var b=On(On({},f),vo.getEventProperties(n,e));for(var _ in b)g[_]=b[_];i&&i.dispatchEvent(g),v[m]&&v[m].call(e,g)}}(On({putSortable:Po,cloneEl:Co,targetEl:yo,rootEl:Eo,oldIndex:Do,oldDraggableIndex:To,newIndex:Oo,newDraggableIndex:ko},t))}var yo,wo,$o,Eo,xo,So,Co,Ao,Do,Oo,To,ko,Mo,Po,No,Io,Ro,jo,Ho,Bo,Vo,Lo,Xo,zo,Yo,Fo=!1,Wo=!1,Uo=[],qo=!1,Go=!1,Ko=[],Zo=!1,Jo=[],Qo="undefined"!=typeof document,tr=Bn,er=Rn||In?"cssFloat":"float",ir=Qo&&!Vn&&!Bn&&"draggable"in document.createElement("div"),nr=function(){if(Qo){if(In)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),or=function(t,e){var i=Kn(t),n=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=io(t,0,e),r=io(t,1,e),a=o&&Kn(o),s=r&&Kn(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+to(o).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+to(r).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return o&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=n&&"none"===i[er]||r&&"none"===i[er]&&l+c>n)?"vertical":"horizontal"},rr=function(t){function e(t,i){return function(n,o,r,a){var s=n.options.group.name&&o.options.group.name&&n.options.group.name===o.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(n,o,r,a),i)(n,o,r,a);var l=(i?n:o).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},n=t.group;n&&"object"==Tn(n)||(n={name:n}),i.name=n.name,i.checkPull=e(n.pull,!0),i.checkPut=e(n.put),i.revertClone=n.revertClone,t.group=i},ar=function(){!nr&&$o&&Kn($o,"display","none")},sr=function(){!nr&&$o&&Kn($o,"display","")};Qo&&!Vn&&document.addEventListener("click",(function(t){if(Wo)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Wo=!1,!1}),!0);var lr=function(t){if(yo){var e=function(t,e){var i;return Uo.some((function(n){var o=n[uo].options.emptyInsertThreshold;if(o&&!no(n)){var r=to(n),a=t>=r.left-o&&t<=r.right+o,s=e>=r.top-o&&e<=r.bottom+o;return a&&s?i=n:void 0}})),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[uo]._onDragOver(i)}}},cr=function(t){yo&&yo.parentNode[uo]._isOutsideThisEl(t.target)};function dr(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Mn({},e),t[uo]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return or(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==dr.supportPointer&&"PointerEvent"in window&&!Hn,emptyInsertThreshold:5};for(var n in vo.initializePlugins(this,t,i),i)!(n in e)&&(e[n]=i[n]);for(var o in rr(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&ir,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Xn(t,"pointerdown",this._onTapStart):(Xn(t,"mousedown",this._onTapStart),Xn(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Xn(t,"dragover",this),Xn(t,"dragenter",this)),Uo.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Mn(this,po())}function hr(t,e,i,n,o,r,a,s){var l,c,d=t[uo],h=d.options.onMove;return!window.CustomEvent||In||Rn?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=n,l.related=o||e,l.relatedRect=r||to(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function ur(t){t.draggable=!1}function pr(){Zo=!1}function fr(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,n=0;i--;)n+=e.charCodeAt(i);return n.toString(36)}function gr(t){return setTimeout(t,0)}function vr(t){return clearTimeout(t)}dr.prototype={constructor:dr,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Lo=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,yo):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,n=this.options,o=n.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=n.filter;if(function(t){Jo.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var n=e[i];n.checked&&Jo.push(n)}}(i),!yo&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||n.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Hn||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Wn(s,n.draggable,i,!1))&&s.animated||So===s)){if(Do=oo(s),To=oo(s,n.draggable),"function"==typeof c){if(c.call(this,t,s,this))return _o({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),bo("filter",e,{evt:t}),void(o&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some((function(n){if(n=Wn(l,n.trim(),i,!1))return _o({sortable:e,rootEl:n,name:"filter",targetEl:s,fromEl:i,toEl:i}),bo("filter",e,{evt:t}),!0}))))return void(o&&t.cancelable&&t.preventDefault());n.handle&&!Wn(l,n.handle,i,!1)||this._prepareDragStart(t,a,s)}}},_prepareDragStart:function(t,e,i){var n,o=this,r=o.el,a=o.options,s=r.ownerDocument;if(i&&!yo&&i.parentNode===r){var l=to(i);if(Eo=r,wo=(yo=i).parentNode,xo=yo.nextSibling,So=i,Mo=a.group,dr.dragged=yo,No={target:yo,clientX:(e||t).clientX,clientY:(e||t).clientY},Ho=No.clientX-l.left,Bo=No.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,yo.style["will-change"]="all",n=function(){bo("delayEnded",o,{evt:t}),dr.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),!jn&&o.nativeDraggable&&(yo.draggable=!0),o._triggerDragStart(t,e),_o({sortable:o,name:"choose",originalEvent:t}),Gn(yo,a.chosenClass,!0))},a.ignore.split(",").forEach((function(t){Jn(yo,t.trim(),ur)})),Xn(s,"dragover",lr),Xn(s,"mousemove",lr),Xn(s,"touchmove",lr),Xn(s,"mouseup",o._onDrop),Xn(s,"touchend",o._onDrop),Xn(s,"touchcancel",o._onDrop),jn&&this.nativeDraggable&&(this.options.touchStartThreshold=4,yo.draggable=!0),bo("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(Rn||In))n();else{if(dr.eventCanceled)return void this._onDrop();Xn(s,"mouseup",o._disableDelayedDrag),Xn(s,"touchend",o._disableDelayedDrag),Xn(s,"touchcancel",o._disableDelayedDrag),Xn(s,"mousemove",o._delayedDragTouchMoveHandler),Xn(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&Xn(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(n,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){yo&&ur(yo),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;zn(t,"mouseup",this._disableDelayedDrag),zn(t,"touchend",this._disableDelayedDrag),zn(t,"touchcancel",this._disableDelayedDrag),zn(t,"mousemove",this._delayedDragTouchMoveHandler),zn(t,"touchmove",this._delayedDragTouchMoveHandler),zn(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?Xn(document,"pointermove",this._onTouchMove):Xn(document,e?"touchmove":"mousemove",this._onTouchMove):(Xn(yo,"dragend",this),Xn(Eo,"dragstart",this._onDragStart));try{document.selection?gr((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(Fo=!1,Eo&&yo){bo("dragStarted",this,{evt:e}),this.nativeDraggable&&Xn(document,"dragover",cr);var i=this.options;!t&&Gn(yo,i.dragClass,!1),Gn(yo,i.ghostClass,!0),dr.active=this,t&&this._appendGhost(),_o({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(Io){this._lastX=Io.clientX,this._lastY=Io.clientY,ar();for(var t=document.elementFromPoint(Io.clientX,Io.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Io.clientX,Io.clientY))!==e;)e=t;if(yo.parentNode[uo]._isOutsideThisEl(t),e)do{if(e[uo]){if(e[uo]._onDragOver({clientX:Io.clientX,clientY:Io.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);sr()}},_onTouchMove:function(t){if(No){var e=this.options,i=e.fallbackTolerance,n=e.fallbackOffset,o=t.touches?t.touches[0]:t,r=$o&&Zn($o,!0),a=$o&&r&&r.a,s=$o&&r&&r.d,l=tr&&Yo&&ro(Yo),c=(o.clientX-No.clientX+n.x)/(a||1)+(l?l[0]-Ko[0]:0)/(a||1),d=(o.clientY-No.clientY+n.y)/(s||1)+(l?l[1]-Ko[1]:0)/(s||1);if(!dr.active&&!Fo){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if($o){r?(r.e+=c-(Ro||0),r.f+=d-(jo||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");Kn($o,"webkitTransform",h),Kn($o,"mozTransform",h),Kn($o,"msTransform",h),Kn($o,"transform",h),Ro=c,jo=d,Io=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!$o){var t=this.options.fallbackOnBody?document.body:Eo,e=to(yo,!0,tr,!0,t),i=this.options;if(tr){for(Yo=t;"static"===Kn(Yo,"position")&&"none"===Kn(Yo,"transform")&&Yo!==document;)Yo=Yo.parentNode;Yo!==document.body&&Yo!==document.documentElement?(Yo===document&&(Yo=Qn()),e.top+=Yo.scrollTop,e.left+=Yo.scrollLeft):Yo=Qn(),Ko=ro(Yo)}Gn($o=yo.cloneNode(!0),i.ghostClass,!1),Gn($o,i.fallbackClass,!0),Gn($o,i.dragClass,!0),Kn($o,"transition",""),Kn($o,"transform",""),Kn($o,"box-sizing","border-box"),Kn($o,"margin",0),Kn($o,"top",e.top),Kn($o,"left",e.left),Kn($o,"width",e.width),Kn($o,"height",e.height),Kn($o,"opacity","0.8"),Kn($o,"position",tr?"absolute":"fixed"),Kn($o,"zIndex","100000"),Kn($o,"pointerEvents","none"),dr.ghost=$o,t.appendChild($o),Kn($o,"transform-origin",Ho/parseInt($o.style.width)*100+"% "+Bo/parseInt($o.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,n=t.dataTransfer,o=i.options;bo("dragStart",this,{evt:t}),dr.eventCanceled?this._onDrop():(bo("setupClone",this),dr.eventCanceled||((Co=ho(yo)).removeAttribute("id"),Co.draggable=!1,Co.style["will-change"]="",this._hideClone(),Gn(Co,this.options.chosenClass,!1),dr.clone=Co),i.cloneId=gr((function(){bo("clone",i),dr.eventCanceled||(i.options.removeCloneOnHide||Eo.insertBefore(Co,yo),i._hideClone(),_o({sortable:i,name:"clone"}))})),!e&&Gn(yo,o.dragClass,!0),e?(Wo=!0,i._loopId=setInterval(i._emulateDragOver,50)):(zn(document,"mouseup",i._onDrop),zn(document,"touchend",i._onDrop),zn(document,"touchcancel",i._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(i,n,yo)),Xn(document,"drop",i),Kn(yo,"transform","translateZ(0)")),Fo=!0,i._dragStartId=gr(i._dragStarted.bind(i,e,t)),Xn(document,"selectstart",i),Vo=!0,Hn&&Kn(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,n,o,r=this.el,a=t.target,s=this.options,l=s.group,c=dr.active,d=Mo===l,h=s.sort,u=Po||c,p=this,f=!1;if(!Zo){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=Wn(a,s.draggable,r,!0),O("dragOver"),dr.eventCanceled)return f;if(yo.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return k(!1);if(Wo=!1,c&&!s.disabled&&(d?h||(n=wo!==Eo):Po===this||(this.lastPutMode=Mo.checkPull(this,c,yo,t))&&l.checkPut(this,c,yo,t))){if(o="vertical"===this._getDirection(t,a),e=to(yo),O("dragOverValid"),dr.eventCanceled)return f;if(n)return wo=Eo,T(),this._hideClone(),O("revert"),dr.eventCanceled||(xo?Eo.insertBefore(yo,xo):Eo.appendChild(yo)),k(!0);var g=no(r,s.draggable);if(!g||function(t,e,i){var n=to(no(i.el,i.options.draggable)),o=10;return e?t.clientX>n.right+o||t.clientX<=n.right&&t.clientY>n.bottom&&t.clientX>=n.left:t.clientX>n.right&&t.clientY>n.top||t.clientX<=n.right&&t.clientY>n.bottom+o}(t,o,this)&&!g.animated){if(g===yo)return k(!1);if(g&&r===t.target&&(a=g),a&&(i=to(a)),!1!==hr(Eo,r,yo,e,a,i,t,!!a))return T(),g&&g.nextSibling?r.insertBefore(yo,g.nextSibling):r.appendChild(yo),wo=r,M(),k(!0)}else if(g&&function(t,e,i){var n=to(io(i.el,0,i.options,!0)),o=10;return e?t.clientX<n.left-o||t.clientY<n.top&&t.clientX<n.right:t.clientY<n.top-o||t.clientY<n.bottom&&t.clientX<n.left}(t,o,this)){var v=io(r,0,s,!0);if(v===yo)return k(!1);if(i=to(a=v),!1!==hr(Eo,r,yo,e,a,i,t,!1))return T(),r.insertBefore(yo,v),wo=r,M(),k(!0)}else if(a.parentNode===r){i=to(a);var m,b,_,y=yo.parentNode!==r,w=!function(t,e,i){var n=i?t.left:t.top,o=i?t.right:t.bottom,r=i?t.width:t.height,a=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return n===a||o===s||n+r/2===a+l/2}(yo.animated&&yo.toRect||e,a.animated&&a.toRect||i,o),$=o?"top":"left",E=eo(a,"top","top")||eo(yo,"top","top"),x=E?E.scrollTop:void 0;if(Lo!==a&&(b=i[$],qo=!1,Go=!w&&s.invertSwap||y),m=function(t,e,i,n,o,r,a,s){var l=n?t.clientY:t.clientX,c=n?i.height:i.width,d=n?i.top:i.left,h=n?i.bottom:i.right,u=!1;if(!a)if(s&&zo<c*o){if(!qo&&(1===Xo?l>d+c*r/2:l<h-c*r/2)&&(qo=!0),qo)u=!0;else if(1===Xo?l<d+zo:l>h-zo)return-Xo}else if(l>d+c*(1-o)/2&&l<h-c*(1-o)/2)return function(t){return oo(yo)<oo(t)?1:-1}(e);if((u=u||a)&&(l<d+c*r/2||l>h-c*r/2))return l>d+c/2?1:-1;return 0}(t,a,i,o,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Go,Lo===a),0!==m){var S=oo(yo);do{S-=m,_=wo.children[S]}while(_&&("none"===Kn(_,"display")||_===$o))}if(0===m||_===a)return k(!1);Lo=a,Xo=m;var C=a.nextElementSibling,A=!1,D=hr(Eo,r,yo,e,a,i,t,A=1===m);if(!1!==D)return 1!==D&&-1!==D||(A=1===D),Zo=!0,setTimeout(pr,30),T(),A&&!C?r.appendChild(yo):a.parentNode.insertBefore(yo,A?C:a),E&&co(E,0,x-E.scrollTop),wo=yo.parentNode,void 0===b||Go||(zo=Math.abs(b-to(a)[$])),M(),k(!0)}if(r.contains(yo))return k(!1)}return!1}function O(s,l){bo(s,p,On({evt:t,isOwner:d,axis:o?"vertical":"horizontal",revert:n,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:a,completed:k,onMove:function(i,n){return hr(Eo,r,yo,e,i,to(i),t,n)},changed:M},l))}function T(){O("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function k(e){return O("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(Gn(yo,Po?Po.options.ghostClass:c.options.ghostClass,!1),Gn(yo,s.ghostClass,!0)),Po!==p&&p!==dr.active?Po=p:p===dr.active&&Po&&(Po=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll((function(){O("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a===yo&&!yo.animated||a===r&&!a.animated)&&(Lo=null),s.dragoverBubble||t.rootEl||a===document||(yo.parentNode[uo]._isOutsideThisEl(t.target),!e&&lr(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),f=!0}function M(){Oo=oo(yo),ko=oo(yo,s.draggable),_o({sortable:p,name:"change",toEl:r,newIndex:Oo,newDraggableIndex:ko,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){zn(document,"mousemove",this._onTouchMove),zn(document,"touchmove",this._onTouchMove),zn(document,"pointermove",this._onTouchMove),zn(document,"dragover",lr),zn(document,"mousemove",lr),zn(document,"touchmove",lr)},_offUpEvents:function(){var t=this.el.ownerDocument;zn(t,"mouseup",this._onDrop),zn(t,"touchend",this._onDrop),zn(t,"pointerup",this._onDrop),zn(t,"touchcancel",this._onDrop),zn(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;Oo=oo(yo),ko=oo(yo,i.draggable),bo("drop",this,{evt:t}),wo=yo&&yo.parentNode,Oo=oo(yo),ko=oo(yo,i.draggable),dr.eventCanceled||(Fo=!1,Go=!1,qo=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),vr(this.cloneId),vr(this._dragStartId),this.nativeDraggable&&(zn(document,"drop",this),zn(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Hn&&Kn(document.body,"user-select",""),Kn(yo,"transform",""),t&&(Vo&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),$o&&$o.parentNode&&$o.parentNode.removeChild($o),(Eo===wo||Po&&"clone"!==Po.lastPutMode)&&Co&&Co.parentNode&&Co.parentNode.removeChild(Co),yo&&(this.nativeDraggable&&zn(yo,"dragend",this),ur(yo),yo.style["will-change"]="",Vo&&!Fo&&Gn(yo,Po?Po.options.ghostClass:this.options.ghostClass,!1),Gn(yo,this.options.chosenClass,!1),_o({sortable:this,name:"unchoose",toEl:wo,newIndex:null,newDraggableIndex:null,originalEvent:t}),Eo!==wo?(Oo>=0&&(_o({rootEl:wo,name:"add",toEl:wo,fromEl:Eo,originalEvent:t}),_o({sortable:this,name:"remove",toEl:wo,originalEvent:t}),_o({rootEl:wo,name:"sort",toEl:wo,fromEl:Eo,originalEvent:t}),_o({sortable:this,name:"sort",toEl:wo,originalEvent:t})),Po&&Po.save()):Oo!==Do&&Oo>=0&&(_o({sortable:this,name:"update",toEl:wo,originalEvent:t}),_o({sortable:this,name:"sort",toEl:wo,originalEvent:t})),dr.active&&(null!=Oo&&-1!==Oo||(Oo=Do,ko=To),_o({sortable:this,name:"end",toEl:wo,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){bo("nulling",this),Eo=yo=wo=$o=xo=Co=So=Ao=No=Io=Vo=Oo=ko=Do=To=Lo=Xo=Po=Mo=dr.dragged=dr.ghost=dr.clone=dr.active=null,Jo.forEach((function(t){t.checked=!0})),Jo.length=Ro=jo=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":yo&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,n=0,o=i.length,r=this.options;n<o;n++)Wn(t=i[n],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||fr(t));return e},sort:function(t,e){var i={},n=this.el;this.toArray().forEach((function(t,e){var o=n.children[e];Wn(o,this.options.draggable,n,!1)&&(i[t]=o)}),this),e&&this.captureAnimationState(),t.forEach((function(t){i[t]&&(n.removeChild(i[t]),n.appendChild(i[t]))})),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return Wn(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var n=vo.modifyOption(this,t,e);i[t]=void 0!==n?n:e,"group"===t&&rr(i)},destroy:function(){bo("destroy",this);var t=this.el;t[uo]=null,zn(t,"mousedown",this._onTapStart),zn(t,"touchstart",this._onTapStart),zn(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(zn(t,"dragover",this),zn(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),Uo.splice(Uo.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Ao){if(bo("hideClone",this),dr.eventCanceled)return;Kn(Co,"display","none"),this.options.removeCloneOnHide&&Co.parentNode&&Co.parentNode.removeChild(Co),Ao=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(Ao){if(bo("showClone",this),dr.eventCanceled)return;yo.parentNode!=Eo||this.options.group.revertClone?xo?Eo.insertBefore(Co,xo):Eo.appendChild(Co):Eo.insertBefore(Co,yo),this.options.group.revertClone&&this.animate(yo,Co),Kn(Co,"display",""),Ao=!1}}else this._hideClone()}},Qo&&Xn(document,"touchmove",(function(t){(dr.active||Fo)&&t.cancelable&&t.preventDefault()})),dr.utils={on:Xn,off:zn,css:Kn,find:Jn,is:function(t,e){return!!Wn(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:lo,closest:Wn,toggleClass:Gn,clone:ho,index:oo,nextTick:gr,cancelNextTick:vr,detectDirection:or,getChild:io},dr.get=function(t){return t[uo]},dr.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(dr.utils=On(On({},dr.utils),t.utils)),vo.mount(t)}))},dr.create=function(t,e){return new dr(t,e)},dr.version="1.15.0";var mr,br,_r,yr,wr,$r,Er=[],xr=!1;function Sr(){Er.forEach((function(t){clearInterval(t.pid)})),Er=[]}function Cr(){clearInterval($r)}var Ar=lo((function(t,e,i,n){if(e.scroll){var o,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=Qn(),d=!1;br!==i&&(br=i,Sr(),mr=e.scroll,o=e.scrollFn,!0===mr&&(mr=ao(i,!0)));var h=0,u=mr;do{var p=u,f=to(p),g=f.top,v=f.bottom,m=f.left,b=f.right,_=f.width,y=f.height,w=void 0,$=void 0,E=p.scrollWidth,x=p.scrollHeight,S=Kn(p),C=p.scrollLeft,A=p.scrollTop;p===c?(w=_<E&&("auto"===S.overflowX||"scroll"===S.overflowX||"visible"===S.overflowX),$=y<x&&("auto"===S.overflowY||"scroll"===S.overflowY||"visible"===S.overflowY)):(w=_<E&&("auto"===S.overflowX||"scroll"===S.overflowX),$=y<x&&("auto"===S.overflowY||"scroll"===S.overflowY));var D=w&&(Math.abs(b-r)<=s&&C+_<E)-(Math.abs(m-r)<=s&&!!C),O=$&&(Math.abs(v-a)<=s&&A+y<x)-(Math.abs(g-a)<=s&&!!A);if(!Er[h])for(var T=0;T<=h;T++)Er[T]||(Er[T]={});Er[h].vx==D&&Er[h].vy==O&&Er[h].el===p||(Er[h].el=p,Er[h].vx=D,Er[h].vy=O,clearInterval(Er[h].pid),0==D&&0==O||(d=!0,Er[h].pid=setInterval(function(){n&&0===this.layer&&dr.active._onTouchMove(wr);var e=Er[this.layer].vy?Er[this.layer].vy*l:0,i=Er[this.layer].vx?Er[this.layer].vx*l:0;"function"==typeof o&&"continue"!==o.call(dr.dragged.parentNode[uo],i,e,t,wr,Er[this.layer].el)||co(Er[this.layer].el,i,e)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&u!==c&&(u=ao(u,!1)));xr=d}}),30),Dr=function(t){var e=t.originalEvent,i=t.putSortable,n=t.dragEl,o=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||o;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:n,putSortable:i}))}};function Or(){}function Tr(){}Or.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var n=io(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(e,n):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:Dr},Mn(Or,{pluginName:"revertOnSpill"}),Tr.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:Dr},Mn(Tr,{pluginName:"removeOnSpill"});var kr=[Tr,Or];dr.mount(kr,new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?Xn(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Xn(document,"pointermove",this._handleFallbackAutoScroll):e.touches?Xn(document,"touchmove",this._handleFallbackAutoScroll):Xn(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?zn(document,"dragover",this._handleAutoScroll):(zn(document,"pointermove",this._handleFallbackAutoScroll),zn(document,"touchmove",this._handleFallbackAutoScroll),zn(document,"mousemove",this._handleFallbackAutoScroll)),Cr(),Sr(),clearTimeout(Un),Un=void 0},nulling:function(){wr=br=mr=xr=$r=_r=yr=null,Er.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,n=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(n,o);if(wr=t,e||this.options.forceAutoScrollFallback||Rn||In||Hn){Ar(t,this.options,r,e);var a=ao(r,!0);!xr||$r&&n===_r&&o===yr||($r&&Cr(),$r=setInterval((function(){var r=ao(document.elementFromPoint(n,o),!0);r!==a&&(a=r,Sr()),Ar(t,i.options,r,e)}),10),_r=n,yr=o)}else{if(!this.options.bubbleScroll||ao(r,!0)===Qn())return void Sr();Ar(t,this.options,ao(r,!1),!1)}}},Mn(t,{pluginName:"scroll",initializeByDefault:!0})});let Mr=class extends it{constructor(){super(...arguments),this._entityKeys=new WeakMap}_getKey(t){return this._entityKeys.has(t)||this._entityKeys.set(t,Math.random().toString()),this._entityKeys.get(t)}disconnectedCallback(){this._destroySortable()}_destroySortable(){var t;null===(t=this._sortable)||void 0===t||t.destroy(),this._sortable=void 0}async firstUpdated(){this._createSortable()}_createSortable(){this._sortable=new sn(this.shadowRoot.querySelector(".entities"),{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onChoose:t=>{t.item.placeholder=document.createComment("sort-placeholder"),t.item.after(t.item.placeholder)},onEnd:t=>{t.item.placeholder&&(t.item.placeholder.replaceWith(t.item),delete t.item.placeholder),this._rowMoved(t)}})}render(){return this.entities&&this.hass?R`
          <h3>
              ${Nt("editor.settings.entities")}
          </h3>
          <div class="entities">
              ${xe(this.entities,(t=>this._getKey(t)),((t,e)=>R`
                  <div class="entity">
                    <div class="handle" >
                      <ha-icon icon="mdi:drag"></ha-icon>
                    </div>
                    <ha-entity-picker
                        label="Entity - ${t.preset}"
                        allow-custom-entity
                        hideClearIcon
                        .hass=${this.hass}
                        .configValue=${"entity"}
                        .value=${t.entity}
                        .index=${e}
                        @value-changed=${this._valueChanged}
                    ></ha-entity-picker>

                    <ha-icon-button
                        .label=${Nt("editor.actions.remove")}
                        .path=${fe}
                        class="remove-icon"
                        .index=${e}
                        @click=${this._removeRow}
                    ></ha-icon-button>

                    <ha-icon-button
                        .label=${Nt("editor.actions.edit")}
                        .path=${ge}
                        class="edit-icon"
                        .index=${e}
                        @click="${this._editRow}"
                    ></ha-icon-button>
                  </div>
                  `))}
          </div>
          <div class="add-item row">
              <ha-select
              label="${Nt("editor.settings.preset")}"
              name="preset"
              class="add-preset"
              naturalMenuWidth
              fixedMenuPosition
              @closed=${t=>t.stopPropagation()}
              >
                  ${wt.map((t=>R`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
              </ha-select>

          <ha-entity-picker .hass=${this.hass} name="entity" class="add-entity"></ha-entity-picker>

          <ha-icon-button
          .label=${Nt("editor.actions.add")}
          .path=${"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"}
          class="add-icon"
          @click="${this._addRow}"
          ></ha-icon-button>
          </div>
      `:H}_valueChanged(t){if(!this.entities||!this.hass)return;const e=t.detail.value,i=t.target.index,n=this.entities.concat();""===e||void 0===e?n.splice(i,1):n[i]=Object.assign(Object.assign({},n[i]),{entity:e}),re(this,"config-changed",{config:n})}_removeRow(t){t.stopPropagation();const e=t.currentTarget.index;if(null!=e){const t=this.entities.concat();t.splice(e,1),re(this,"config-changed",t)}}_editRow(t){t.stopPropagation();const e=t.target.index;null!=e&&re(this,"edit-item",e)}_addRow(t){if(t.stopPropagation(),!this.entities||!this.hass)return;const e=this.shadowRoot.querySelector(".add-preset").value,i=this.shadowRoot.querySelector(".add-entity").value,n=Object.assign({},Et,$t[e],{entity:i,preset:""==i?"placeholder":e});re(this,"config-changed",[...this.entities,n])}_rowMoved(t){if(t.stopPropagation(),t.oldIndex===t.newIndex||!this.entities)return;const e=this.entities.concat();e.splice(t.newIndex,0,e.splice(t.oldIndex,1)[0]),re(this,"config-changed",e)}static get styles(){return a`
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
        paper-icon-item.hidden-panel ha-icon[slot="item-icon"] {
          color: var(--secondary-text-color);
          cursor: pointer;
        }
        .entity,
        .add-item {
          display: flex;
          align-items: center;
        }
        .entity {
          display: flex;
          align-items: center;
        }
        .entity .handle {
          padding-right: 8px;
          cursor: move;
          padding-inline-end: 8px;
          padding-inline-start: initial;
          direction: var(--direction);
        }
        .entity .handle > * {
          pointer-events: none;
        }
        .entity ha-entity-picker,
        .add-item ha-entity-picker {
          flex-grow: 1;
        }
        .entities {
          margin-bottom: 8px;
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
        `}};t([at({attribute:!1})],Mr.prototype,"entities",void 0),t([at({attribute:!1})],Mr.prototype,"hass",void 0),Mr=t([ot("power-distribution-card-items-editor")],Mr);const Pr=["none","flash","slide"],Nr=["none","card","bars"],Ir=["autarky","ratio",""],Rr=["more-info","toggle","navigate","url","call-service","none"];let jr=class extends it{constructor(){super(...arguments),this._subElementEditor=void 0}async setConfig(t){this._config=t}async firstUpdated(){var t,e;customElements.get("ha-form")&&customElements.get("hui-action-editor")||null===(t=customElements.get("hui-button-card"))||void 0===t||t.getConfigElement(),customElements.get("ha-entity-picker")||null===(e=customElements.get("hui-entities-card"))||void 0===e||e.getConfigElement()}render(){var t,e,i,n,o,r,a,s,l,c;return this.hass?this._subElementEditor?this._renderSubElementEditor():R`
      <div class="card-config">
        <ha-textfield
          label="${Nt("editor.settings.title")} (${Nt("editor.optional")})"
          .value=${(null===(t=this._config)||void 0===t?void 0:t.title)||""}
          .configValue=${"title"}
          @input=${this._valueChanged}
        ></ha-textfield>
        <ha-select
          naturalMenuWidth
          fixedMenuPosition
          label="${Nt("editor.settings.animation")}"
          .configValue=${"animation"}
          .value=${(null===(e=this._config)||void 0===e?void 0:e.animation)||"flash"}
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          ${Pr.map((t=>R`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
        </ha-select>
        <br />
        <div class="entity row">
          <ha-select
            label="${Nt("editor.settings.center")}"
            .configValue=${"type"}
            @selected=${this._centerChanged}
            @closed=${t=>t.stopPropagation()}
            .value=${(null===(n=null===(i=this._config)||void 0===i?void 0:i.center)||void 0===n?void 0:n.type)||"none"}
          >
            ${Nr.map((t=>R`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
          </ha-select>
          ${"bars"==(null===(r=null===(o=this._config)||void 0===o?void 0:o.center)||void 0===r?void 0:r.type)||"card"==(null===(s=null===(a=this._config)||void 0===a?void 0:a.center)||void 0===s?void 0:s.type)?R`<ha-icon-button
                class="edit-icon"
                .value=${null===(c=null===(l=this._config)||void 0===l?void 0:l.center)||void 0===c?void 0:c.type}
                .path=${ge}
                @click="${this._editCenter}"
              ></ha-icon-button>`:""}
        </div>
        <br />
        <power-distribution-card-items-editor
          .hass=${this.hass}
          .entities=${this._config.entities}
          @edit-item=${this._edit_item}
          @config-changed=${this._entitiesChanged}
        >
        </power-distribution-card-items-editor>
      </div>
    `:R``}_entitiesChanged(t){t.stopPropagation(),this._config&&this.hass&&gt(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{entities:t.detail})})}_edit_item(t){if(t.stopPropagation(),!this._config||!this.hass)return;const e=t.detail;this._subElementEditor={type:"entity",index:e}}_renderSubElementEditor(){var t,e,i;const n=[R`
        <div class="header">
          <div class="back-title">
            <mwc-icon-button @click=${this._goBack}>
              <ha-icon icon="mdi:arrow-left"></ha-icon>
            </mwc-icon-button>
          </div>
        </div>`];switch(null===(t=this._subElementEditor)||void 0===t||t.index,null===(e=this._subElementEditor)||void 0===e?void 0:e.type){case"entity":n.push(R`
          <power-distribution-card-item-editor
            .hass=${this.hass}
            .config=${this._config.entities[(null===(i=this._subElementEditor)||void 0===i?void 0:i.index)||0]}
            @config-changed=${this._itemChanged}
          >
          </power-distribution-card-item-editor>
          `);break;case"bars":n.push(this._barEditor());break;case"card":n.push(this._cardEditor())}return R`${n}`}_goBack(){this._subElementEditor=void 0}_itemChanged(t){var e;if(t.stopPropagation(),!this._config||!this.hass)return;const i=null===(e=this._subElementEditor)||void 0===e?void 0:e.index;if(null!=i){const e=[...this._config.entities];e[i]=t.detail,gt(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{entities:e})})}}_centerChanged(t){if(this._config&&this.hass){if(t.target){const e=t.target;e.configValue&&(this._config=Object.assign(Object.assign({},this._config),{center:Object.assign(Object.assign({},this._config.center),{[e.configValue]:void 0!==e.checked?e.checked:e.value})}))}gt(this,"config-changed",{config:this._config})}}_editCenter(t){t.currentTarget&&(this._subElementEditor={type:t.currentTarget.value})}_barChanged(t){var e;if(!t.target)return;const i=t.target;if(!i.configValue)return;let n;if("content"==i.configValue)n=i.value;else{n=[...this._config.center.content];const t=i.i||(null===(e=this._subElementEditor)||void 0===e?void 0:e.index)||0;n[t]=Object.assign(Object.assign({},n[t]),{[i.configValue]:null!=i.checked?i.checked:i.value})}this._config=Object.assign(Object.assign({},this._config),{center:{type:"bars",content:n}}),gt(this,"config-changed",{config:this._config})}_removeBar(t){var e;const i=(null===(e=t.currentTarget)||void 0===e?void 0:e.i)||0,n=[...this._config.center.content];n.splice(i,1),this._barChanged({target:{configValue:"content",value:n}})}async _addBar(){const t=Object.assign({},{name:"Name",preset:"custom"}),e=[...this._config.center.content||[],t];this._barChanged({target:{configValue:"content",value:e}})}_barEditor(){const t=[];return this._config.center.content&&this._config.center.content.forEach(((e,i)=>t.push(R`
        <div class="bar-editor">
          <h3 style="margin-bottom:6px;">Bar ${i+1}
          <ha-icon-button
            label=${Nt("editor.actions.remove")}
            class="remove-icon"
            .i=${i}
            .path=${fe}
            @click=${this._removeBar}
            >
          </ha-icon-button>
          </h4>
          <div class="side-by-side">
            <ha-textfield
              label="${Nt("editor.settings.name")} (${Nt("editor.optional")})"
              .value=${e.name||""}
              .configValue=${"name"}
              @input=${this._barChanged}
              .i=${i}
            ></ha-textfield>
            <ha-entity-picker
              label="${Nt("editor.settings.entity")}"
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
              <label for="invert-value"> ${Nt("editor.settings.invert-value")}</label>
            </div>
            <div>
            <ha-select
              label="${Nt("editor.settings.preset")}"
              .configValue=${"preset"}
              .value=${e.preset||""}
              @selected=${this._barChanged}
              @closed=${t=>t.stopPropagation()}
              .i=${i}
            >
              ${Ir.map((t=>R`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
            </ha-select>
          </div>
          </div>
          <div class="side-by-side">
            <ha-textfield
              label="${Nt("editor.settings.color")}"
              .value=${e.bar_color||""}
              .configValue=${"bar_color"}
              @input=${this._barChanged}
              .i=${i}
            ></ha-textfield>
            <ha-textfield
              .label="${Nt("editor.settings.background_color")}"
              .value=${e.bar_bg_color||""}
              .configValue=${"bar_bg_color"}
              @input=${this._barChanged}
              .i=${i}
            ></ha-textfield>
          </div>
          <h3>${Nt("editor.settings.action_settings")}</h3>
      <div class="side-by-side">
        <hui-action-editor
          .hass=${this.hass}
          .config=${e.tap_action}
          .actions=${Rr}
          .configValue=${"tap_action"}
          @value-changed=${this._barChanged}
          .i=${i}
        >
        </hui-action-editor>
        <hui-action-editor
          .hass=${this.hass}
          .config=${e.double_tap_action}
          .actions=${Rr}
          .configValue=${"double_tap_action"}
          @value-changed=${this._barChanged}
          .i=${i}
        >
        </hui-action-editor>
      </div>
        </div>
        <br/>
      `))),t.push(R`
      <mwc-icon-button aria-label=${Nt("editor.actions.add")} class="add-icon" @click="${this._addBar}">
        <ha-icon icon="mdi:plus-circle-outline"></ha-icon>
      </mwc-icon-button>
    `),R`${t.map((t=>R`${t}`))}`}_cardEditor(){return R`
      Sadly you cannot edit cards from the visual editor yet.
      <p />
      Check out the
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/JonahKr/power-distribution-card#cards-"
        >Readme</a
      >
      to check out the latest and best way to add it.
    `}_valueChanged(t){if(this._config&&this.hass){if(t.target){const e=t.target;e.configValue&&(this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value}))}gt(this,"config-changed",{config:this._config})}}static get styles(){return[a`
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
        }`]}};t([at({attribute:!1})],jr.prototype,"hass",void 0),t([st()],jr.prototype,"_config",void 0),t([st()],jr.prototype,"_subElementEditor",void 0),jr=t([ot("power-distribution-card-editor")],jr);var Hr=Object.freeze({__proto__:null,get PowerDistributionCardEditor(){return jr}});console.info("%c POWER-DISTRIBUTION-CARD %c 2.5.9 ","font-weight: 500; color: white; background: #03a9f4;","font-weight: 500; color: #03a9f4; background: white;"),window.customCards.push({type:"power-distribution-card",name:"Power Distribution Card",description:Nt("common.description")});let Br=class extends it{constructor(){super(...arguments),this._narrow=!1}static async getConfigElement(){return await Promise.resolve().then((function(){return Hr})),document.createElement("power-distribution-card-editor")}static getStubConfig(){return{title:"Title",entities:[],center:{type:"bars",content:[{preset:"autarky",name:Nt("editor.settings.autarky")},{preset:"ratio",name:Nt("editor.settings.ratio")}]}}}async setConfig(t){const e=Object.assign({},xt,t,{entities:[]});if(!t.entities)throw new Error("You need to define Entities!");t.entities.forEach((t=>{if(!t.preset||!wt.includes(t.preset))throw new Error("The preset `"+t.preset+"` is not a valid entry. Please choose a Preset from the List.");{const i=Object.assign({},Et,$t[t.preset],t);e.entities.push(i)}})),this._config=e,"card"==this._config.center.type&&(this._card=this._createCardElement(this._config.center.content))}firstUpdated(){const t=this._config;if(t.entities.forEach(((t,e)=>{if(!t.entity)return;const i=this._state({entity:t.entity,attribute:"unit_of_measurement"});t.unit_of_measurement||(this._config.entities[e].unit_of_measurement=i||"W")})),"bars"==t.center.type){const e=t.center.content.map((t=>{let e="%";return t.entity&&(e=this._state({entity:t.entity,attribute:"unit_of_measurement"})),Object.assign(Object.assign({},t),{unit_of_measurement:t.unit_of_measurement||e})}));this._config=Object.assign(Object.assign({},this._config),{center:Object.assign(Object.assign({},this._config.center),{content:e})})}this._adjustWidth(),this._attachObserver(),this.requestUpdate()}updated(t){super.updated(t),this._card&&(t.has("hass")||t.has("editMode"))&&this.hass&&(this._card.hass=this.hass)}static get styles(){return St}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>this._attachObserver()))}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect()}async _attachObserver(){var t;this._resizeObserver||(await(async()=>{"function"!=typeof ne&&(window.ResizeObserver=(await Promise.resolve().then((function(){return oe}))).default)})(),this._resizeObserver=new ne(function(t,e,i){var n;return void 0===i&&(i=!1),function(){var o=[].slice.call(arguments),r=this,a=i&&!n;clearTimeout(n),n=setTimeout((function(){n=null,i||t.apply(r,o)}),e),a&&t.apply(r,o)}}((()=>this._adjustWidth()),250,!1)));const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&this._resizeObserver.observe(e)}_adjustWidth(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&(this._narrow=e.offsetWidth<400)}_val(t){var e;let i=t.invert_value?-1:1;"k"==(null===(e=t.unit_of_measurement)||void 0===e?void 0:e.charAt(0))&&(i*=1e3);let n=this._state(t);const o=t.threshold||null;return n=o&&Math.abs(n)<o?0:n,n*i}_state(t){return t.entity&&this.hass.states[t.entity]?t.attribute?this.hass.states[t.entity].attributes[t.attribute]:this.hass.states[t.entity].state:null}render(){const t=[],e=[],i=[];let n=0,o=0;this._config.entities.forEach(((e,r)=>{const a=this._val(e);e.calc_excluded||(e.producer&&a>0&&(o+=a),e.consumer&&a<0&&(n-=a));const s=this._render_item(a,e,r);r%2==0?t.push(s):i.push(s)}));switch(this._config.center.type){case"none":break;case"card":this._card?e.push(this._card):console.warn("NO CARD");break;case"bars":e.push(this._render_bars(n,o))}return R` ${this._narrow?Ct:void 0}
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          <div id="left-panel">${t}</div>
          <div id="center-panel">${e}</div>
          <div id="right-panel">${i}</div>
        </div>
      </ha-card>`}_handleAction(t){this.hass&&this._config&&t.detail.action&&function(t,e,i,n){var o;"double_tap"===n&&i.double_tap_action?o=i.double_tap_action:"hold"===n&&i.hold_action?o=i.hold_action:"tap"===n&&i.tap_action&&(o=i.tap_action),_t(t,e,i,o)}(this,this.hass,{entity:t.currentTarget.entity,tap_action:t.currentTarget.tap_action,double_tap_action:t.currentTarget.double_tap_action},t.detail.action)}_render_item(t,e,i){if(!e.entity)return R`<item class="placeholder"></item>`;let n=t,o=e.unit_of_display||"W";if("k"==o.charAt(0)[0])n/=1e3;else if("adaptive"==e.unit_of_display){let t="W";e.unit_of_measurement&&(t="k"==e.unit_of_measurement[0]?e.unit_of_measurement.substring(1):e.unit_of_measurement),Math.abs(n)>999?(n/=1e3,o="k"+t):o=t}const r=10**(e.decimals||0==e.decimals?e.decimals:2);n=Math.round(n*r)/r;const a=e.invert_arrow?-1*n:n;n=e.display_abs?Math.abs(n):n;const s=ut(n,this.hass.locale);let l;e.secondary_info_entity&&(l=e.secondary_info_attribute?this._state({entity:e.secondary_info_entity,attribute:e.secondary_info_attribute})+"":`${this._state({entity:e.secondary_info_entity})}${this._state({entity:e.secondary_info_entity,attribute:"unit_of_measurement"})||""}`),e.secondary_info_replace_name&&(e.name=l,l=void 0);let c=e.icon;if("battery"===e.preset&&e.battery_percentage_entity){const t=this._val({entity:e.battery_percentage_entity});isNaN(t)||(c="mdi:battery",t<5?c="mdi:battery-outline":t<95&&(c="mdi:battery-"+(t/10).toFixed(0)+"0"))}let d=!1,h=R``;"grid"===e.preset&&(e.grid_buy_entity||e.grid_sell_entity)&&(d=!0,h=R`
        <div class="buy-sell">
          ${e.grid_buy_entity?R`<div class="grid-buy">
                B:
                ${this._val({entity:e.grid_buy_entity})}${this._state({entity:e.grid_buy_entity,attribute:"unit_of_measurement"})||void 0}
              </div>`:void 0}
          ${e.grid_sell_entity?R`<div class="grid-sell">
                S:
                ${this._val({entity:e.grid_sell_entity})}${this._state({entity:e.grid_sell_entity,attribute:"unit_of_measurement"})||void 0}
              </div>`:void 0}
        </div>
      `);const u=e.color_threshold||0;let p,f;e.icon_color&&(a>u&&(p=e.icon_color.bigger),a<u&&(p=e.icon_color.smaller),a==u&&(p=e.icon_color.equal)),e.arrow_color&&(a>u&&(f=e.arrow_color.bigger),a<u&&(f=e.arrow_color.smaller),a==u&&(f=e.arrow_color.equal));const g=isNaN(n);return R`
      <item
        .entity=${e.entity}
        .tap_action=${e.tap_action}
        .double_tap_action=${e.double_tap_action}
        @action=${this._handleAction}
        .actionHandler=${pe({hasDoubleClick:yt(e.double_tap_action)})}
    ">
        <badge>
          <icon>
            <ha-icon icon="${c}" style="${p?`color:${p};`:""}"></ha-icon>
            ${l?R`<p class="secondary">${l}</p>`:null}
          </icon>
          ${d?h:R`<p class="subtitle">${e.name}</p>`}
        </badge>
        <value>
          <p>${g?"":s} ${g?"":o}</p>
          ${e.hide_arrows?R``:this._render_arrow(0==t||g?"none":i%2==0?a>0?"right":"left":a>0?"left":"right",f)}
        <value
      </item>
    `}_render_arrow(t,e){const i=this._config.animation;return"none"==t?R` <div class="blank" style="${e?`background-color:${e};`:""}"></div> `:R`
        <div class="arrow-container ${t}">
          <div class="arrow ${i} " style="border-left-color: ${e};"></div>
          <div class="arrow ${i} ${"flash"==i?"delay-1":""}" style="border-left-color: ${e};"></div>
          <div class="arrow ${i} ${"flash"==i?"delay-2":""}" style="border-left-color: ${e};"></div>
          <div class="arrow ${i}" style="border-left-color: ${e};"></div>
        </div>
      `}_render_bars(t,e){const i=[];return this._config.center.content&&0!=this._config.center.content.length?(this._config.center.content.forEach((n=>{let o=-1;switch(n.preset){case"autarky":n.entity||(o=0!=t?Math.min(Math.round(100*e/Math.abs(t)),100):0);break;case"ratio":n.entity||(o=0!=e?Math.min(Math.round(100*Math.abs(t)/e),100):0)}o<0&&(o=parseInt(this._val(n).toFixed(0),10)),i.push(R`
        <div
          class="bar-element"
          .entity=${n.entity}
          .tap_action=${n.tap_action}
          .double_tap_action=${n.double_tap_action}
          @action=${this._handleAction}
          .actionHandler=${pe({hasDoubleClick:yt(n.double_tap_action)})}
          style="${n.tap_action||n.double_tap_action?"cursor: pointer;":""}"
        >
          <p class="bar-percentage">${o}${n.unit_of_measurement||"%"}</p>
          <div class="bar-wrapper" style="${n.bar_bg_color?`background-color:${n.bar_bg_color};`:""}">
            <bar style="height:${o}%; background-color:${n.bar_color};" />
          </div>
          <p>${n.name||""}</p>
        </div>
      `)})),R`${i.map((t=>R`${t}`))}`):R``}_createCardElement(t){const e=function(t,e){void 0===e&&(e=!1);var i=function(t,e){return n("hui-error-card",{type:"error",error:t,config:e})},n=function(t,e){var n=window.document.createElement(t);try{if(!n.setConfig)return;n.setConfig(e)}catch(n){return console.error(t,n),i(n.message,e)}return n};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);var o=t.type;if(o&&o.startsWith("custom:"))o=o.substr("custom:".length);else if(e)if(vt.has(o))o="hui-"+o+"-row";else{if(!t.entity)return i("Invalid config given.",t);var r=t.entity.split(".",1)[0];o="hui-"+(mt[r]||"text")+"-entity-row"}else o="hui-"+o+"-card";if(customElements.get(o))return n(o,t);var a=i("Custom element doesn't exist: "+t.type+".",t);a.style.display="None";var s=setTimeout((function(){a.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(s),gt(a,"ll-rebuild",{},a)})),a}(t);return this.hass&&(e.hass=this.hass),e.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rebuildCard(e,t)}),{once:!0}),e}_rebuildCard(t,e){const i=this._createCardElement(e);t.parentElement&&t.parentElement.replaceChild(i,t),this._card===t&&(this._card=i)}};t([at()],Br.prototype,"hass",void 0),t([st()],Br.prototype,"_config",void 0),t([at()],Br.prototype,"_card",void 0),t([st()],Br.prototype,"_narrow",void 0),Br=t([ot("power-distribution-card")],Br);export{Br as PowerDistributionCard};
