"use strict";function t(t,e){return o(t)||r(t,e)||s(t,e)||n()}function n(){throw new TypeError(
"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
function r(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=t[Symbol.iterator]();!(r=(
i=l.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}
return n}}function o(t){if(Array.isArray(t))return t}function e(t){return l(t)||i(t)||s(t)||a()}function a(){throw new TypeError(
"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t){
if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function l(t){if(Array.isArray(t))return c(t)}function g(t,e){var n
;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=s(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,e=function(
){};return{s:e,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:e}}throw new TypeError(
"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,
i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){i=!0,o=t},f:function(){try{
a||null==n.return||n.return()}finally{if(i)throw o}}}}function s(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t
).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t
):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,
r=new Array(e);n<e;n++)r[n]=t[n];return r}function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
var x=document.querySelector("home-assistant"),E=x.shadowRoot.querySelector("home-assistant-main").shadowRoot,u=E.querySelector(
"partial-panel-resolver"),M=["APP-HEADER","HA-SLIDER","SWIPE-CARD","HUI-MAP-CARD","ROUND-SLIDER","XIAOMI-VACUUM-MAP-CARD","HA-SIDEBAR"];function y(){
var r,o,e,n,a,i,l,s,t=E.querySelector("ha-panel-lovelace"),c=t.shadowRoot.querySelector("hui-root").shadowRoot.querySelector("ha-app-layout"),
u=c.querySelector('[id="view"]'),y=c.querySelector("paper-tabs")||c.querySelector("ha-tabs"),f=y?Array.from(y.querySelectorAll("paper-tab")):[],
d="rtl"==x.style.direction,t=t.lovelace.config.swipe_nav||{},p=null!=t.animate?t.animate:"none",h=null==t.wrap||t.wrap,
v=null!=t.prevent_default&&t.prevent_default,b=null!=t.swipe_amount?t.swipe_amount/Math.pow(10,2):.15,m=null==t.skip_hidden||t.skip_hidden,
w=null!=t.skip_tabs?String(t.skip_tabs).replace(/\s+/g,"").split(",").map(function(t){return parseInt(t,10)}):[];function S(t){var e,n
;0==a&&!h&&s||a==f.length-1&&!h&&!s||("swipe"==p?(e=(s?"":"-").concat(screen.width/1.5,"px"),n=(s?"-":"").concat(screen.width/1.5,"px"),
u.style.transitionDuration="200ms",u.style.opacity=0,u.style.transform="translate(".concat(e,", 0)"),
u.style.transition="transform 0.20s, opacity 0.18s",setTimeout(function(){f[t].dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!0})),
u.style.transitionDuration="0ms",u.style.transform="translate(".concat(n,", 0)"),u.style.transition="transform 0s"},210),setTimeout(function(){
u.style.transitionDuration="200ms",u.style.opacity=1,u.style.transform="translate(0px, 0)",u.style.transition="transform 0.20s, opacity 0.18s"},250)
):"fade"==p?(u.style.transitionDuration="200ms",u.style.transition="opacity 0.20s",u.style.opacity=0,setTimeout(function(){f[t].dispatchEvent(
new MouseEvent("click",{bubbles:!1,cancelable:!0})),u.style.transitionDuration="0ms",u.style.opacity=0,u.style.transition="opacity 0s"},210),
setTimeout(function(){u.style.transitionDuration="200ms",u.style.transition="opacity 0.20s",u.style.opacity=1},250)):"flip"==p?(
u.style.transitionDuration="200ms",u.style.transform="rotatey(90deg)",u.style.transition="transform 0.20s, opacity 0.20s",u.style.opacity=.25,
setTimeout(function(){f[t].dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!0}))},210),setTimeout(function(){
u.style.transitionDuration="200ms",u.style.transform="rotatey(0deg)",u.style.transition="transform 0.20s, opacity 0.20s",u.style.opacity=1},250)
):f[t].dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!0})))}y&&(c.addEventListener("touchstart",function(t){if("object"==A(t.path)){
var e=g(t.path);try{for(e.s();!(n=e.n()).done;){var n=n.value;if("HUI-VIEW"==n.nodeName)break;if(-1<M.indexOf(n.nodeName))return}}catch(t){e.e(t)
}finally{e.f()}}r=t.touches[0].clientX,o=t.touches[0].clientY,l||function(){f=m?f.filter(function(t){return!w.includes(f.indexOf(t)
)&&"none"!=getComputedStyle(t,null).display}):f.filter(function(t){return!w.includes(f.indexOf(t))});i=h?0:null,l=h?f.length-1:null}();a=f.indexOf(
y.querySelector(".iron-selected"))},{passive:!0}),c.addEventListener("touchmove",function(t){r&&o&&(e=r-t.touches[0].clientX,n=o-t.touches[0].clientY,
Math.abs(e)>Math.abs(n)&&v&&t.preventDefault())},{passive:!1}),c.addEventListener("touchend",function(){if(a<0||Math.abs(e)<Math.abs(n))return void(
r=o=e=n=null);d&&(e=-e);e>Math.abs(screen.width*b)?(s=!1,a==f.length-1?S(i):S(a+1)):e<-Math.abs(screen.width*b)&&(s=!0,S(0==a?l:a-1));d&&(s=!s)
;r=o=e=n=null},{passive:!0}),"swipe"==p&&(c.style.overflow="hidden"))}function f(t){var e,n=g(t);try{for(n.s();!(e=n.n()).done;){var r=g(
e.value.addedNodes);try{for(r.s();!(o=r.n()).done;){var o=o.value;if("ha-panel-lovelace"==o.localName)return void new MutationObserver(d).observe(
o.shadowRoot,{childList:!0})}}catch(t){r.e(t)}finally{r.f()}}}catch(t){n.e(t)}finally{n.f()}}function d(t){var e,n=g(t);try{for(n.s();!(e=n.n()).done;
){var r=g(e.value.addedNodes);try{for(r.s();!(o=r.n()).done;){var o=o.value;if("hui-root"==o.localName)return void new MutationObserver(p).observe(
o.shadowRoot,{childList:!0})}}catch(t){r.e(t)}finally{r.f()}}}catch(t){n.e(t)}finally{n.f()}}function p(t){var e,n=g(t);try{for(n.s();!(e=n.n()).done;
){var r,o=g(e.value.addedNodes);try{for(o.s();!(r=o.n()).done;)if("ha-app-layout"==r.value.localName)return void y()}catch(t){o.e(t)}finally{o.f()}}
}catch(t){n.e(t)}finally{n.f()}}y(),new MutationObserver(f).observe(u,{childList:!0});for(var h={header:"%c≡ swipe-navigation".padEnd(27),
ver:"%cversion 1.3.0 "},v="%c\n",b=Math.max.apply(Math,e(Object.values(h).map(function(t){return t.length}))),m=0,w=Object.entries(h);m<w.length;m++){
var S=t(w[m],1),D=S[0];h[D].length<=b&&(h[D]=h[D].padEnd(b)),"header"==D&&(h[D]="".concat(h[D].slice(0,-1),"⋮ "))}
var I="display:inline-block;border-width:1px 1px 0 1px;border-style:solid;border-color:#424242;color:white;background:#03a9f4;font-size:12px;padding:4px 4.5px 5px 6px;"
,O="border-width:0px 1px 1px 1px;padding:7px;background:white;color:#424242;line-height:0.7;";console.info(h.header+v+h.ver,I,"","".concat(I," "
).concat(O));