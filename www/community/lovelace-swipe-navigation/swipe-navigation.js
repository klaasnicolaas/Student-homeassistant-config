"use strict";function t(t,e){return o(t)||r(t,e)||s(t,e)||n()}function n(){throw new TypeError(
"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
function r(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(
n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){l=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(l
)throw o}}return a}}function o(t){if(Array.isArray(t))return t}function e(t){return l(t)||i(t)||s(t)||a()}function a(){throw new TypeError(
"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t){
if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function l(t){if(Array.isArray(t))return c(t)}
function v(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=s(t)
)||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,e=function(){};return{s:e,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},
e:function(t){throw t},f:e}}throw new TypeError(
"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,
i=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){i=!0,o=t},f:function(){try{
a||null==n.return||n.return()}finally{if(i)throw o}}}}function s(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t
).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t
):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,
r=new Array(e);n<e;n++)r[n]=t[n];return r}function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u,S,g,
A=document.querySelector("home-assistant"),y=A.shadowRoot.querySelector("home-assistant-main").shadowRoot,f=y.querySelector("partial-panel-resolver"),
E=0,x={},M=["APP-HEADER","HA-SLIDER","SWIPE-CARD","SLIDER-BUTTON-CARD","HUI-MAP-CARD","ROUND-SLIDER","XIAOMI-VACUUM-MAP-CARD","HA-SIDEBAR"]
;function p(){var t=y.querySelector("ha-panel-lovelace");t&&(x={},d(t))}function d(e){E++;try{var t=e.lovelace.config;x=t.swipe_nav||{},
u=e.shadowRoot.querySelector("hui-root"),S=u.shadowRoot.querySelector("ha-app-layout"),g=S.querySelector('[id="view"]'),h()}catch(t){E<40&&setTimeout(
function(){return d(e)},50)}}function h(){E=0;var o,a,e,n,i,l,s,r,c=S.querySelector("paper-tabs")||S.querySelector("ha-tabs"),u=c?Array.from(
c.querySelectorAll("paper-tab")):[],t="rtl"==A.style.direction,y=null!=x.animate?x.animate:"none",f=null==x.wrap||x.wrap,
p=null!=x.prevent_default&&x.prevent_default,d=null!=x.swipe_amount?x.swipe_amount/Math.pow(10,2):.15,h=null==x.skip_hidden||x.skip_hidden,
b=null!=x.skip_tabs?String(x.skip_tabs).replace(/\s+/g,"").split(",").map(function(t){return parseInt(t,10)}):[];function m(t){var e,n
;0==i&&!f&&r||i==u.length-1&&!f&&!r||("swipe"==y?(e=(r?"":"-").concat(screen.width/1.5,"px"),n=(r?"-":"").concat(screen.width/1.5,"px"),
g.style.transitionDuration="200ms",g.style.opacity=0,g.style.transform="translate(".concat(e,", 0)"),
g.style.transition="transform 0.20s, opacity 0.18s",setTimeout(function(){u[t].dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!0})),
g.style.transitionDuration="0ms",g.style.transform="translate(".concat(n,", 0)"),g.style.transition="transform 0s"},210),setTimeout(function(){
g.style.transitionDuration="200ms",g.style.opacity=1,g.style.transform="translate(0px, 0)",g.style.transition="transform 0.20s, opacity 0.18s"},250)
):"fade"==y?(g.style.transitionDuration="200ms",g.style.transition="opacity 0.20s",g.style.opacity=0,setTimeout(function(){u[t].dispatchEvent(
new MouseEvent("click",{bubbles:!1,cancelable:!0})),g.style.transitionDuration="0ms",g.style.opacity=0,g.style.transition="opacity 0s"},210),
setTimeout(function(){g.style.transitionDuration="200ms",g.style.transition="opacity 0.20s",g.style.opacity=1},250)):"flip"==y?(
g.style.transitionDuration="200ms",g.style.transform="rotatey(90deg)",g.style.transition="transform 0.20s, opacity 0.20s",g.style.opacity=.25,
setTimeout(function(){u[t].dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!0}))},210),setTimeout(function(){
g.style.transitionDuration="200ms",g.style.transform="rotatey(0deg)",g.style.transition="transform 0.20s, opacity 0.20s",g.style.opacity=1},250)
):u[t].dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!0})))}c&&(S.addEventListener("touchstart",function(t){if("object"==w(t.path)){
var e,n=v(t.path);try{for(n.s();!(e=n.n()).done;){var r=e.value;if("HUI-VIEW"==r.nodeName)break;if(-1<M.indexOf(r.nodeName))return}}catch(t){n.e(t)
}finally{n.f()}}o=t.touches[0].clientX,a=t.touches[0].clientY,s||function(){u=h?u.filter(function(t){return!b.includes(u.indexOf(t)
)&&"none"!=getComputedStyle(t,null).display}):u.filter(function(t){return!b.includes(u.indexOf(t))});l=f?0:null,s=f?u.length-1:null}();i=u.indexOf(
c.querySelector(".iron-selected"))},{passive:!0}),S.addEventListener("touchmove",function(t){o&&a&&(e=o-t.touches[0].clientX,n=a-t.touches[0].clientY,
Math.abs(e)>Math.abs(n)&&p&&t.preventDefault())},{passive:!1}),S.addEventListener("touchend",function(){o=a=e=n=(i<0||Math.abs(e)<Math.abs(n)||((
e=t?-e:e)>Math.abs(screen.width*d)?(r=!1,i==u.length-1?m(l):m(i+1)):e<-Math.abs(screen.width*d)&&(r=!0,m(0==i?s:i-1)),t&&(r=!r)),null)},{passive:!0}),
"swipe"==y&&(S.style.overflow="hidden"))}function b(t){I(t,"ha-panel-lovelace",m)}function m(t){I(t,"hui-root",D)}function D(t){I(t,"ha-app-layout",
null)}function I(t,e,n){var r,o=v(t);try{for(o.s();!(r=o.n()).done;){var a,i=v(r.value.addedNodes);try{for(i.s();!(a=i.n()).done;){var l=a.value;if(
l.localName==e)return void(n?new MutationObserver(n).observe(l.shadowRoot,{childList:!0}):p())}}catch(t){i.e(t)}finally{i.f()}}}catch(t){o.e(t)
}finally{o.f()}}p(),new MutationObserver(b).observe(f,{childList:!0});for(var R={header:"%c≡ swipe-navigation".padEnd(27),ver:"%cversion 1.3.6 "},
O="%c\n",k=Math.max.apply(Math,e(Object.values(R).map(function(t){return t.length}))),T=0,q=Object.entries(R);T<q.length;T++){var _=t(q[T],1),j=_[0]
;R[j].length<=k&&(R[j]=R[j].padEnd(k)),"header"==j&&(R[j]="".concat(R[j].slice(0,-1),"⋮ "))}
var L="display:inline-block;border-width:1px 1px 0 1px;border-style:solid;border-color:#424242;color:white;background:#03a9f4;font-size:12px;padding:4px 4.5px 5px 6px;"
,C="border-width:0px 1px 1px 1px;padding:7px;background:white;color:#424242;line-height:0.7;";console.info(R.header+O+R.ver,L,"","".concat(L," "
).concat(C));