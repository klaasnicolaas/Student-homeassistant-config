/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function t(t,e,i,n){var s,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(r<3?s(o):r>3?s(e,i,o):s(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}var e=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,i="[^\\s]+",n=/\[([^]*?)\]/gm;function s(t,e){for(var i=[],n=0,s=t.length;n<s;n++)i.push(t[n].substr(0,e));return i}var r=function(t){return function(e,i){var n=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return n>-1?n:null}};function o(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var n=0,s=e;n<s.length;n++){var r=s[n];for(var o in r)t[o]=r[o]}return t}var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=["January","February","March","April","May","June","July","August","September","October","November","December"],c=s(l,3),d={dayNamesShort:s(a,3),dayNames:a,monthNamesShort:c,monthNames:l,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},h=o({},d),u=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},p={D:function(t){return String(t.getDate())},DD:function(t){return u(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return u(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return u(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return u(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return u(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return u(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return u(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return u(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return u(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return u(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return u(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+u(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+u(Math.floor(Math.abs(e)/60),2)+":"+u(Math.abs(e)%60,2)}},m=function(t){return+t-1},g=[null,"[1-9]\\d?"],f=[null,i],v=["isPm",i,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],y=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],_=(r("monthNamesShort"),r("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var S=function(t,i,s){if(void 0===i&&(i=_.default),void 0===s&&(s={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var r=[];i=(i=_[i]||i).replace(n,(function(t,e){return r.push(e),"@@@"}));var a=o(o({},h),s);return(i=i.replace(e,(function(e){return p[e](t,a)}))).replace(/@@@/g,(function(){return r.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();function b(t){return t.substr(0,t.indexOf("."))}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,x=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},C=`{{lit-${String(Math.random()).slice(2)}}}`,N=`\x3c!--${C}--\x3e`,E=new RegExp(`${C}|${N}`);class P{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],s=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,a=0;const{strings:l,values:{length:c}}=t;for(;a<c;){const t=s.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)M(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=l[a],i=$.exec(e)[2],n=i.toLowerCase()+"$lit$",s=t.getAttribute(n);t.removeAttribute(n);const r=s.split(E);this.parts.push({type:"attribute",index:o,name:i,strings:r}),a+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(C)>=0){const n=t.parentNode,s=e.split(E),r=s.length-1;for(let e=0;e<r;e++){let i,r=s[e];if(""===r)i=T();else{const t=$.exec(r);null!==t&&M(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(r)}n.insertBefore(i,t),this.parts.push({type:"node",index:++o})}""===s[r]?(n.insertBefore(T(),t),i.push(t)):t.data=s[r],a+=r}}else if(8===t.nodeType)if(t.data===C){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(T(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(i.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(C,e+1));)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const M=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},k=t=>-1!==t.index,T=()=>document.createComment(""),$=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function V(t,e){const{element:{content:i},parts:n}=t,s=document.createTreeWalker(i,133,null,!1);let r=O(n),o=n[r],a=-1,l=0;const c=[];let d=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,r=O(n,r),o=n[r]}c.forEach(t=>t.parentNode.removeChild(t))}const A=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},O=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(k(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const D=new WeakMap,H=t=>"function"==typeof t&&D.has(t),U={},j={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class I{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=w?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let s,r=0,o=0,a=n.nextNode();for(;r<i.length;)if(s=i[r],k(s)){for(;o<s.index;)o++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,s.name,s.strings,this.options));r++}else this.__parts.push(void 0),r++;return w&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const L=` ${C} `;class R{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],s=t.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===t.indexOf("--\x3e",s+1);const r=$.exec(t);e+=null===r?t+(i?L:N):t.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+C}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Y=t=>null===t||!("object"==typeof t||"function"==typeof t),z=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class F{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new B(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(Y(t)||!z(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class B{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===U||Y(t)&&t===this.value||(this.value=t,H(t)||(this.committer.dirty=!0))}commit(){for(;H(this.value);){const t=this.value;this.value=U,t(this)}this.value!==U&&this.committer.commit()}}class q{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(T()),this.endNode=t.appendChild(T())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=T()),t.__insert(this.endNode=T())}insertAfterPart(t){t.__insert(this.startNode=T()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;H(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=U,t(this)}const t=this.__pendingValue;t!==U&&(Y(t)?t!==this.value&&this.__commitText(t):t instanceof R?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):z(t)?this.__commitIterable(t):t===j?(this.value=j,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof I&&this.value.template===e)this.value.update(t.values);else{const i=new I(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const s of t)i=e[n],void 0===i&&(i=new q(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(s),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){x(this.startNode.parentNode,t.nextSibling,this.endNode)}}class W{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;H(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=U,t(this)}if(this.__pendingValue===U)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=U}}class G extends F{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new J(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class J extends B{}let Z=!1;(()=>{try{const t={get capture(){return Z=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class K{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;H(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=U,t(this)}if(this.__pendingValue===U)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=Q(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=U}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Q=t=>t&&(Z?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function X(t){let e=tt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},tt.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(C);return i=e.keyString.get(n),void 0===i&&(i=new P(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const tt=new Map,et=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const it=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,n){const s=e[0];if("."===s){return new G(t,e.slice(1),i).parts}return"@"===s?[new K(t,e.slice(1),n.eventContext)]:"?"===s?[new W(t,e.slice(1),i)]:new F(t,e,i).parts}handleTextExpression(t){return new q(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const nt=(t,...e)=>new R(t,e,"html",it)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,st=(t,e)=>`${t}--${e}`;let rt=!0;void 0===window.ShadyCSS?rt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),rt=!1);const ot=t=>e=>{const i=st(e.type,t);let n=tt.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},tt.set(i,n));let s=n.stringsArray.get(e.strings);if(void 0!==s)return s;const r=e.strings.join(C);if(s=n.keyString.get(r),void 0===s){const i=e.getTemplateElement();rt&&window.ShadyCSS.prepareTemplateDom(i,t),s=new P(e,i),n.keyString.set(r,s)}return n.stringsArray.set(e.strings,s),s},at=["html","svg"],lt=new Set,ct=(t,e,i)=>{lt.add(t);const n=i?i.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:r}=s;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=s[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{at.forEach(e=>{const i=tt.get(st(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),V(t,i)})})})(t);const a=n.content;i?function(t,e,i=null){const{element:{content:n},parts:s}=t;if(null==i)return void n.appendChild(e);const r=document.createTreeWalker(n,133,null,!1);let o=O(s),a=0,l=-1;for(;r.nextNode();){for(l++,r.currentNode===i&&(a=A(e),i.parentNode.insertBefore(e,i));-1!==o&&s[o].index===l;){if(a>0){for(;-1!==o;)s[o].index+=a,o=O(s,o);return}o=O(s,o)}}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),V(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const dt={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},ht=(t,e)=>e!==t&&(e==e||t==t),ut={attribute:!0,type:String,converter:dt,reflect:!1,hasChanged:ht};class pt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=ut){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this._requestUpdate(t,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||ut}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=ht){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||dt,s="function"==typeof n?n:n.fromAttribute;return s?s(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||dt.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=ut){const n=this.constructor,s=n._attributeNameForProperty(t,i);if(void 0!==s){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const n=this.constructor,s=n.getPropertyOptions(t);n._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}pt.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const mt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),gt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ft(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):gt(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const vt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yt=Symbol();class _t{constructor(t,e){if(e!==yt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(vt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const St=(t,...e)=>{const i=e.reduce((e,i,n)=>e+(t=>{if(t instanceof _t)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1],t[0]);return new _t(i,yt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const bt={};class wt extends pt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),n=[];i.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?vt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==bt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return bt}}wt.finalized=!0,wt.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,s=et.has(e),r=rt&&11===e.nodeType&&!!e.host,o=r&&!lt.has(n),a=o?document.createDocumentFragment():e;if(((t,e,i)=>{let n=et.get(e);void 0===n&&(x(e,e.firstChild),et.set(e,n=new q(Object.assign({templateFactory:X},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,a,Object.assign({templateFactory:ot(n)},i)),o){const t=et.get(a);et.delete(a);const i=t.value instanceof I?t.value.template:void 0;ct(n,a,i),x(e,e.firstChild),e.appendChild(a),et.set(e,t)}!s&&r&&window.ShadyCSS.styleElement(e.host)};
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class xt{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const Ct=new WeakMap,Nt=(Et=t=>e=>{if(!(e instanceof B)||e instanceof J||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:n}=i;let s=Ct.get(e);void 0===s&&(n.setAttribute("class",i.strings.join(" ")),Ct.set(e,s=new Set));const r=n.classList||new xt(n);s.forEach(e=>{e in t||(r.remove(e),s.delete(e))});for(const e in t){const i=t[e];i!=s.has(e)&&(i?(r.add(e),s.add(e)):(r.remove(e),s.delete(e)))}"function"==typeof r.commit&&r.commit()},(...t)=>{const e=Et(...t);return D.set(e,!0),e});var Et,Pt,Mt,kt;!function(t){let e,i;!function(t){t.LEFT="left",t.CENTER="center",t.RIGHT="right"}(e=t.AlignControls||(t.AlignControls={})),function(t){t.HEADER="header",t.INSIDE="inside"}(i=t.Name||(t.Name={}))}(Pt||(Pt={})),function(t){t.UP="up",t.DOWN="down"}(Mt||(Mt={})),function(t){t.AM="AM",t.PM="PM"}(kt||(kt={}));const Tt=Pt.AlignControls.CENTER,$t=Pt.Name.HEADER;class Vt{constructor(t,e,i){this._value=t,this._step=e,this._limit=i}get value(){return this._value}setStringValue(t){this.isValidString(t)&&this.setValue(parseInt(t))}stepUpdate(t,e=this._step){t===Mt.UP?this.increment(e):this.decrement(e)}toString(){return this.value<10?`0${this.value}`:this.value.toString()}increment(t=this._step){this.setValue(this.value+t)}decrement(t=this._step){this.setValue(this.value-t)}setValue(t){isNaN(t)||((t>=this._limit||t<0)&&(t=(t+this._limit)%this._limit),this._value=t)}isValidString(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<this._limit}}class At extends Vt{constructor(t,e=1,i){super(t,e,At.VALUE_LIMIT),this.hourMode=i}get minValue(){return 12===this.hourMode?1:0}get maxValue(){return 12===this.hourMode?12:At.VALUE_LIMIT-1}togglePeriod(){this.setValue(this.value+12)}toString(){let t;return 12===this.hourMode?(t=(this.value+12)%12,t=0===t?12:t):t=this.value,t<10?`0${t}`:t.toString()}}At.VALUE_LIMIT=24;class Ot extends Vt{constructor(t,e=5){super(t,e,Ot.VALUE_LIMIT),this.minValue=0,this.maxValue=Ot.VALUE_LIMIT-1}willOverflow(t){const e=t===Mt.UP?this.value+this._step:this.value-this._step;return e>=this._limit||e<0}}Ot.VALUE_LIMIT=60;class Dt{constructor(t,e,i=!1){this.hour=t,this.minute=e,this._linkValues=i}hourStep(t){this.hour.stepUpdate(t)}minuteStep(t){this._linkValues&&this.minute.willOverflow(t)&&this.hour.stepUpdate(t,1),this.minute.stepUpdate(t)}get value(){return`${this.hour.value}:${this.minute.value}`}}class Ht{static error(t,e){const i=document.createElement("hui-error-card");return i.setConfig({type:"error",error:t,origConfig:e}),nt`${i}`}static headerName(t){return nt`
      <div class="time-picker-header">
        ${t}
      </div>
    `}static nestedName(t,e){return nt`<state-badge .stateObj=${e}></state-badge>
      <div class="entity-name-inside">${t}</div>`}}var Ut;let jt=Ut=class extends wt{get amClass(){return{"time-period":!0,active:this.period===kt.AM}}get pmClass(){return{"time-period":!0,active:this.period===kt.PM}}render(){return nt`<div class="time-period-selector">
      ${"single"===this.mode?this.renderSingle():this.renderDouble()}
    </div>`}onTimePeriodChange(){const t=new CustomEvent(Ut.EVENT_TOGGLE);this.dispatchEvent(t)}renderSingle(){return nt`<div class="time-period active" @click=${this.onTimePeriodChange}>
      ${this.period}<mwc-ripple></mwc-ripple>
    </div>`}renderDouble(){return nt`<div class=${Nt(this.amClass)} @click=${this.onTimePeriodChange}>
        AM<mwc-ripple></mwc-ripple>
      </div>
      <div class=${Nt(this.pmClass)} @click=${this.onTimePeriodChange}>
        PM<mwc-ripple></mwc-ripple>
      </div>`}static get styles(){return St`
      .time-period-selector {
        padding: 0 8px;
      }

      .time-period {
        width: 30px;
        padding: 8px;
        background: var(--tpc-off-color);
        color: var(--tpc-text-color);
        text-align: center;
        font-size: 1em;
        cursor: pointer;
      }

      .time-period.active {
        background: var(--tpc-accent-color);
      }
    `}};var It;jt.EVENT_TOGGLE="toggle",t([ft()],jt.prototype,"period",void 0),t([ft()],jt.prototype,"mode",void 0),jt=Ut=t([mt("time-period")],jt);let Lt=It=class extends wt{render(){return nt`
      <div class="time-unit">
        ${this.renderStepChanger(Mt.UP)}
        <input
          class="time-input"
          type="number"
          placeholder="MM"
          min=${this.unit.minValue}
          max=${this.unit.maxValue}
          .value="${this.unit.toString()}"
          @change=${this.onInputChange}
        />
        ${this.renderStepChanger(Mt.DOWN)}
      </div>
    `}onInputChange({target:{value:t}}){this.unit.setStringValue(t);const e=new CustomEvent(It.EVENT_UPDATE);this.dispatchEvent(e)}onStepChangerClick(t){const e=new CustomEvent(It.EVENT_STEP_CHANGE,{detail:{direction:t}});this.dispatchEvent(e)}renderStepChanger(t){return nt`
      <div class="time-picker-icon" @click=${()=>this.onStepChangerClick(t)}>
        <ha-icon .icon="hass:chevron-${t}"></ha-icon>
        <mwc-ripple id="ripple"></mwc-ripple>
      </div>
    `}static get styles(){return St`
      .time-unit {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 8px;
      }

      .time-picker-icon {
        width: 30px;
        padding: 8px;
        text-align: center;
        cursor: pointer;
        color: var(--tpc-icon-color);
      }

      .time-input {
        width: 30px;
        padding: 8px 8px 6px;
        background: var(--tpc-elements-background-color);
        border: 0;
        border-bottom: 2px solid var(--tpc-elements-background-color);
        color: var(--tpc-text-color, #fff);
        text-align: center;
        font-size: 1em;
        -moz-appearance: textfield;

        transition: border-color 0.2s ease-in-out;
      }

      .time-input:focus {
        outline: none;
      }

      .time-input:invalid {
        box-shadow: none;
        outline: none;
        border: 0;
        border-bottom: 2px solid red;
      }

      .time-input::-webkit-inner-spin-button,
      .time-input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `}};var Rt;Lt.EVENT_UPDATE="update",Lt.EVENT_STEP_CHANGE="stepChange",t([ft()],Lt.prototype,"unit",void 0),Lt=It=t([mt("time-unit")],Lt);let Yt=Rt=class extends wt{get entity(){return this.hass.states[this.config.entity]}get datetimeEntities(){return Object.keys(this.hass.states).filter(t=>"input_datetime"===b(t)&&!0===this.hass.states[t].attributes.has_time)}render(){var t,e,i,n,s,r,o;return nt`<div class="card-config">
      <paper-dropdown-menu
        style="width: 100%"
        label="Entity (Required)"
        .configValue=${"entity"}
        @value-changed=${this.onValueChange}
      >
        <paper-listbox
          slot="dropdown-content"
          .selected=${this.datetimeEntities.indexOf(this.config.entity)}
        >
          ${this.datetimeEntities.map(t=>nt`<paper-item>${t}</paper-item>`)}
        </paper-listbox>
      </paper-dropdown-menu>
      <paper-input
        label="Name (Optional)"
        .configValue=${"name"}
        .value=${this.config.name}
        .placeholder=${null===(t=this.entity)||void 0===t?void 0:t.attributes.friendly_name}
        @value-changed=${this.onValueChange}
      ></paper-input>
      <div class="side-by-side">
        <div>
          <ha-switch
            style="margin-left: 10px"
            .checked="${!Boolean(null===(e=this.config.hide)||void 0===e?void 0:e.name)}"
            .configValue="${"hide_name"}"
            @change="${this.onHideNameChange}"
          ></ha-switch>
          Show name?
        </div>
        <paper-dropdown-menu
          style="width: 100%"
          label="Name Position (Optional)"
          @value-changed=${this.onLayoutNameChange}
        >
          <paper-listbox
            slot="dropdown-content"
            .selected=${Object.values(Pt.Name).indexOf(null!==(n=null===(i=this.config.layout)||void 0===i?void 0:i.name)&&void 0!==n?n:$t)}
          >
            ${Object.values(Pt.Name).map(t=>nt`<paper-item>${t}</paper-item>`)}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
      <div class="side-by-side">
        <paper-input
          type="number"
          label="Hour Step (Optional)"
          .configValue=${"hour_step"}
          .value=${this.config.hour_step||1}
          @value-changed=${this.onValueChange}
        ></paper-input>
        <paper-input
          type="number"
          label="Minute Step (Optional)"
          .configValue=${"minute_step"}
          .value=${this.config.minute_step||5}
          @value-changed=${this.onValueChange}
        ></paper-input>
      </div>
      <div class="side-by-side">
        <div>
          <ha-switch
            .checked="${12===this.config.hour_mode}"
            .configValue="${"hour_mode"}"
            @change="${this.onHourModeChange}"
          ></ha-switch>
          12-Hour mode
        </div>
        ${12===this.config.hour_mode?nt`<div>
              <ha-switch
                .checked="${"single"===(null===(s=this.config.layout)||void 0===s?void 0:s.hour_mode)}"
                .configValue="${"hour_mode_layout"}"
                @change="${this.onHourModeLayoutChange}"
              ></ha-switch>
              "Single" hour mode layout
            </div>`:""}
      </div>
      <div class="side-by-side">
        <paper-dropdown-menu
          style="width: 100%"
          label="Align Controls (Optional)"
          @value-changed=${this.onLayoutAlignChange}
        >
          <paper-listbox
            slot="dropdown-content"
            .selected=${Object.values(Pt.AlignControls).indexOf(null!==(o=null===(r=this.config.layout)||void 0===r?void 0:r.align_controls)&&void 0!==o?o:Tt)}
          >
            ${Object.values(Pt.AlignControls).map(t=>nt`<paper-item>${t}</paper-item>`)}
          </paper-listbox>
        </paper-dropdown-menu>
        <div>
          <ha-switch
            .checked="${this.config.link_values}"
            .configValue="${"link_values"}"
            @change="${this.onLinkValuesChange}"
          ></ha-switch>
          Link Values
        </div>
      </div>
    </div>`}setConfig(t){this.config=t}onHourModeChange({target:{checked:t}}){const e=t?12:24,i=Object.assign(Object.assign({},this.config),{hour_mode:e});this.dispatch(i)}onHideNameChange({target:{checked:t}}){const e=Object.assign(Object.assign({},this.config),{hide:{name:!t}});this.dispatch(e)}onLayoutAlignChange({detail:{value:t}}){const e=Object.assign(Object.assign({},this.config.layout),{align_controls:t}),i=Object.assign(Object.assign({},this.config),{layout:e});this.dispatch(i)}onLayoutNameChange({detail:{value:t}}){const e=Object.assign(Object.assign({},this.config.layout),{name:t}),i=Object.assign(Object.assign({},this.config),{layout:e});this.dispatch(i)}onHourModeLayoutChange({target:{checked:t}}){const e=t?"single":"double",i=Object.assign(Object.assign({},this.config),{layout:Object.assign(Object.assign({},this.config.layout),{hour_mode:e})});this.dispatch(i)}onLinkValuesChange({target:{checked:t}}){const e=Object.assign(Object.assign({},this.config),{link_values:t});this.dispatch(e)}onValueChange(t){const e=t.target.configValue;let i=t.detail.value;if(Rt.NUMBER_PROPERTIES.indexOf(e)>-1&&(i=parseInt(i),isNaN(i)))return;if(this.config[e]===i)return;const n=Object.assign(Object.assign({},this.config),{[e]:i});this.dispatch(n)}dispatch(t){const e=new CustomEvent(Rt.CONFIG_CHANGED_EVENT,{bubbles:!0,composed:!0,detail:{config:t}});this.dispatchEvent(e)}static get styles(){return St`
      ha-switch {
        padding: 16px 0;
        margin-right: 16px;
      }
      .side-by-side {
        display: flex;
      }
      .side-by-side > * {
        flex: 1;
        padding-right: 4px;
      }
      .suffix {
        margin: 0 8px;
      }
    `}};Yt.NUMBER_PROPERTIES=["hour_step","minute_step","hour_mode"],Yt.CONFIG_CHANGED_EVENT="config-changed",t([ft({type:Object})],Yt.prototype,"hass",void 0),t([ft()],Yt.prototype,"config",void 0),Yt=Rt=t([mt("time-picker-card-editor")],Yt),console.info("%c  TIME-PICKER-CARD  \n%c  Version 1.0.1    ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"time-picker-card",name:"Time Picker Card",description:"A Time Picker card for setting the time value of Input Datetime entities."});let zt=class extends wt{get entity(){return this.hass.states[this.config.entity]}get hasNameInHeader(){var t,e;return Boolean(this.name)&&!1===Boolean(null===(t=this.config.hide)||void 0===t?void 0:t.name)&&(null===(e=this.config.layout)||void 0===e?void 0:e.name)!==Pt.Name.INSIDE}get hasNameInside(){var t,e;return Boolean(this.name)&&!1===Boolean(null===(t=this.config.hide)||void 0===t?void 0:t.name)&&(null===(e=this.config.layout)||void 0===e?void 0:e.name)===Pt.Name.INSIDE}get name(){var t;return this.config.name||(null===(t=this.entity)||void 0===t?void 0:t.attributes.friendly_name)}get shouldShowPeriod(){return 12===this.config.hour_mode}get layoutAlign(){var t,e;return null!==(e=null===(t=this.config.layout)||void 0===t?void 0:t.align_controls)&&void 0!==e?e:Tt}get rowClass(){return{"time-picker-row":!0,"with-header-name":this.hasNameInHeader}}get contentClass(){return{"time-picker-content":!0,[`layout-${this.layoutAlign}`]:!0}}render(){var t,e;if(!this.entity)return Ht.error("Entity not found",this.config);if("input_datetime"!==b(this.entity.entity_id))return Ht.error("You must set an input_datetime entity",this.config);if(!this.entity.attributes.has_time)return Ht.error("You must set an input_datetime entity that sets has_time: true",this.config);const{hour:i,minute:n}=this.entity.attributes,s=new At(i,this.config.hour_step,this.config.hour_mode),r=new Ot(n,this.config.minute_step);return this.time=new Dt(s,r,this.config.link_values),this.period=s.value>=12?kt.PM:kt.AM,nt`
      <ha-card>
        ${this.hasNameInHeader?Ht.headerName(this.name):""}
        <div class=${Nt(this.rowClass)}>
          ${this.hasNameInside?Ht.nestedName(this.name,this.entity):""}

          <div class=${Nt(this.contentClass)}>
            <time-unit
              .unit=${this.time.hour}
              @stepChange=${this.onHourStepChange}
              @update=${this.callHassService}
            ></time-unit>
            <div class="time-separator">:</div>
            <time-unit
              .unit=${this.time.minute}
              @stepChange=${this.onMinuteStepChange}
              @update=${this.callHassService}
            ></time-unit>

            ${this.shouldShowPeriod?nt`<time-period
                  .period=${this.period}
                  .mode=${null!==(e=null===(t=this.config.layout)||void 0===t?void 0:t.hour_mode)&&void 0!==e?e:"double"}
                  @toggle=${this.onPeriodToggle}
                ></time-period>`:""}
          </div>
        </div>
      </ha-card>
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.entity)throw new Error("You must set an entity");if(t.hour_mode&&12!==t.hour_mode&&24!==t.hour_mode)throw new Error("Invalid hour_mode: select either 12 or 24");this.config=t}getCardSize(){return 3}onPeriodToggle(){this.time.hour.togglePeriod(),this.callHassService()}onHourStepChange(t){this.time.hourStep(t.detail.direction),this.callHassService()}onMinuteStepChange(t){this.time.minuteStep(t.detail.direction),this.callHassService()}callHassService(){if(!this.hass)throw new Error("Unable to update datetime");return this.hass.callService("input_datetime","set_datetime",{entity_id:this.entity.entity_id,time:this.time.value})}static get styles(){return St`
      :host {
        --tpc-elements-background-color: var(
          --time-picker-elements-background-color,
          var(--primary-color)
        );

        --tpc-icon-color: var(--time-picker-icon-color, var(--primary-text-color));
        --tpc-text-color: var(--time-picker-text-color, #fff);
        --tpc-accent-color: var(--time-picker-accent-color, var(--primary-color));
        --tpc-off-color: var(--time-picker-off-color, var(--disabled-text-color));

        --tpc-border-radius: var(--time-picker-border-radius, var(--ha-card-border-radius, 4px));
      }

      .time-picker-header {
        padding: 16px;
        color: var(--tpc-text-color);
        background-color: var(--tpc-elements-background-color);
        border-top-left-radius: var(--tpc-border-radius);
        border-top-right-radius: var(--tpc-border-radius);
        font-size: 1em;
        text-align: center;
      }

      .time-picker-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px;
      }

      .time-picker-row.with-header-name {
        padding: 8px 16px 16px;
      }

      .time-picker-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex: 1 0 auto;
      }

      .time-picker-content.layout-left {
        justify-content: flex-start;
      }

      .time-picker-content.layout-center {
        justify-content: center;
      }

      .time-picker-content.layout-right {
        justify-content: flex-end;
      }

      .entity-name-inside {
        margin-left: 16px;
      }
    `}static getStubConfig(t,e){return{entity:e.find(t=>"input_datetime"===b(t))||"input_datetime.example_entity",hour_mode:24,hour_step:1,minute_step:5}}static getConfigElement(){return document.createElement("time-picker-card-editor")}};t([ft({type:Object})],zt.prototype,"hass",void 0),t([ft()],zt.prototype,"config",void 0),t([ft()],zt.prototype,"time",void 0),t([ft()],zt.prototype,"period",void 0),zt=t([mt("time-picker-card")],zt);export{zt as TimePickerCard};
