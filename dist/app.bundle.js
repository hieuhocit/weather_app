(()=>{"use strict";var n={919:(n,e,t)=>{t.d(e,{A:()=>p});var a=t(354),r=t.n(a),i=t(314),o=t.n(i),A=t(417),c=t.n(A),s=new URL(t(81),t.b),l=new URL(t(697),t.b),d=o()(r()),u=c()(s),m=c()(l);d.push([n.id,`*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --app-padding-inline: 1.5rem;\n  --app-padding-block: 3rem;\n  --font-size-s: 1rem;\n  --font-size-m: 2rem;\n  --font-size-l: 3rem;\n  --icon-width-s: 16px;\n  --icon-width-normal: 32px;\n  --icon-width-m: 48px;\n  --icon-width-l: 64px;\n}\n\nbody {\n  width: 100%;\n  min-height: 100vh;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n#app {\n  width: 100%;\n  min-height: 100vh;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${u});\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position-y: center;\n  color: white;\n  padding: var(--app-padding-inline) var(--app-padding-block);\n}\n\n.main {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n}\n\n/* Weather Info */\n.weather-info {\n}\n\n.weather-info__description {\n  font-size: var(--font-size-m);\n  margin-bottom: 0.2rem;\n}\n\n.weather-info__city {\n  font-size: var(--font-size-s);\n  margin-bottom: 0.4rem;\n}\n\n.weather-info__date,\n.weather-info__time {\n  font-size: calc(var(--font-size-s) - 0.15rem);\n}\n\n.weather-info__time {\n  margin-bottom: 1rem;\n}\n\n.weather-info__temperature {\n  font-size: var(--font-size-l);\n  margin-block: 1rem;\n}\n\n.weather-info__icon {\n  margin-block: 1rem;\n}\n\n.search-box {\n  display: inline-block;\n  margin-bottom: 3rem;\n  position: relative;\n}\n\n.search-box > input {\n  font-size: var(--font-size-s);\n  border: none;\n  border-bottom: 2px solid white;\n  outline: none;\n  background-color: transparent;\n  padding: 0.3em 0.8em;\n  color: white;\n}\n.search-box > input::-webkit-input-placeholder {\n  color: white;\n}\n\n.search-box > button {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  position: absolute;\n  font-size: calc(var(--font-size-s) + 0.5rem);\n  cursor: pointer;\n  top: -4px;\n  right: 0;\n}\n\n.error-message {\n  position: absolute;\n  font-family: Arial, Helvetica, sans-serif;\n  left: 0;\n  bottom: 0;\n  transform: translateY(calc(100% + 0.5rem));\n  font-size: calc(var(--font-size-s) - 0.15rem);\n  font-style: italic;\n}\n\n/* Weather details container  */\n.weather-details-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.weather-details {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n}\n\n.weather-details__icon {\n  align-self: flex-start;\n}\n\n.weather-details__icon > img {\n  width: var(--icon-width-normal);\n  height: var(--icon-width-normal);\n}\n\n.weather-details__label {\n  font-size: var(--font-size-s);\n  margin-bottom: 0.2em;\n}\n\n.weather-details__data {\n  font-size: var(--font-size-m);\n}\n\n/* Buttons change forecast */\n.change-forecast {\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n/*  Hourly and Daily*/\n.forecast-hourly-container,\n.forecast-daily-container {\n  display: none;\n}\n\n.forecast-hourly-container.active,\n.forecast-daily-container.active {\n  display: flex;\n  overflow: hidden;\n}\n\n/* Hourly */\n.forecast-hourly {\n  min-width: calc(100% / 8);\n  max-width: calc(100% / 8);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-inline: auto;\n}\n\n/* Daily */\n.forecast-daily {\n  min-width: calc(100% / 7);\n  max-width: calc(100% / 7);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.forecast-daily__day {\n  font-size: calc(var(--font-size-s) + 0.3rem);\n}\n\n.forecast-daily__temperature-hight {\n  font-size: var(--font-size-m);\n  margin-bottom: 2px;\n}\n\n.forecast-daily__temperature-low {\n  font-size: var(--font-size-s);\n}\n\n.forecast-daily__icon {\n  display: inline-block;\n}\n\n/* Navigation */\n.nav {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  display: none;\n}\n\n.nav.active {\n  display: flex;\n}\n\n.nav > button {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.nav > button > img {\n  width: var(--icon-width-normal);\n  height: var(--icon-width-normal);\n}\n.dots-container {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.dots-container > div {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  border: 1px solid white;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.dots-container > div.active {\n  background-color: white;\n}\n\n/* Buttons */\n.btn {\n  border: 2px solid white;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.4em 1em;\n  border-radius: 0.2em;\n  background-color: transparent;\n  color: white;\n  cursor: pointer;\n  transition: background 500ms ease-in-out;\n}\n\n.btn.active,\n.btn:active,\n.btn:hover {\n  background-image: url(${m});\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n/*  */\n.loading {\n  position: fixed;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n\n@media only screen and (max-width: 1200px) {\n  :root {\n    --app-padding-inline: 1rem;\n    --app-padding-block: 2rem;\n    --font-size-s: 1rem;\n    --font-size-m: 1.5rem;\n    --font-size-l: 2.5rem;\n  }\n}\n\n@media only screen and (max-width: 1000px) {\n  .nav.active {\n    display: none;\n  }\n\n  .forecast-daily-container,\n  .forecast-hourly-container {\n    flex-wrap: wrap;\n    gap: 1rem;\n  }\n\n  .forecast-daily,\n  .forecast-hourly {\n    min-width: calc(33.33% - 1rem);\n    max-width: calc(33.33% - 1rem);\n    padding: 1rem;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    border-radius: 0.2rem;\n    justify-content: center;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  #app {\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n  }\n\n  :root {\n    --app-padding-inline: 1rem;\n    --app-padding-block: 2rem;\n    --font-size-s: 0.85rem;\n  }\n\n  .main {\n    flex-direction: column;\n  }\n\n  .change-forecast {\n    justify-content: center;\n  }\n\n  .forecast-daily,\n  .forecast-hourly {\n    min-width: calc(50% - 1rem);\n    max-width: calc(50% - 1rem);\n    padding: 1rem;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    border-radius: 0.2rem;\n    justify-content: center;\n  }\n}\n\n`,"",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"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",sourcesContent:["*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --app-padding-inline: 1.5rem;\n  --app-padding-block: 3rem;\n  --font-size-s: 1rem;\n  --font-size-m: 2rem;\n  --font-size-l: 3rem;\n  --icon-width-s: 16px;\n  --icon-width-normal: 32px;\n  --icon-width-m: 48px;\n  --icon-width-l: 64px;\n}\n\nbody {\n  width: 100%;\n  min-height: 100vh;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n#app {\n  width: 100%;\n  min-height: 100vh;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/images/bg.jpg');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position-y: center;\n  color: white;\n  padding: var(--app-padding-inline) var(--app-padding-block);\n}\n\n.main {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n}\n\n/* Weather Info */\n.weather-info {\n}\n\n.weather-info__description {\n  font-size: var(--font-size-m);\n  margin-bottom: 0.2rem;\n}\n\n.weather-info__city {\n  font-size: var(--font-size-s);\n  margin-bottom: 0.4rem;\n}\n\n.weather-info__date,\n.weather-info__time {\n  font-size: calc(var(--font-size-s) - 0.15rem);\n}\n\n.weather-info__time {\n  margin-bottom: 1rem;\n}\n\n.weather-info__temperature {\n  font-size: var(--font-size-l);\n  margin-block: 1rem;\n}\n\n.weather-info__icon {\n  margin-block: 1rem;\n}\n\n.search-box {\n  display: inline-block;\n  margin-bottom: 3rem;\n  position: relative;\n}\n\n.search-box > input {\n  font-size: var(--font-size-s);\n  border: none;\n  border-bottom: 2px solid white;\n  outline: none;\n  background-color: transparent;\n  padding: 0.3em 0.8em;\n  color: white;\n}\n.search-box > input::-webkit-input-placeholder {\n  color: white;\n}\n\n.search-box > button {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  position: absolute;\n  font-size: calc(var(--font-size-s) + 0.5rem);\n  cursor: pointer;\n  top: -4px;\n  right: 0;\n}\n\n.error-message {\n  position: absolute;\n  font-family: Arial, Helvetica, sans-serif;\n  left: 0;\n  bottom: 0;\n  transform: translateY(calc(100% + 0.5rem));\n  font-size: calc(var(--font-size-s) - 0.15rem);\n  font-style: italic;\n}\n\n/* Weather details container  */\n.weather-details-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.weather-details {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n}\n\n.weather-details__icon {\n  align-self: flex-start;\n}\n\n.weather-details__icon > img {\n  width: var(--icon-width-normal);\n  height: var(--icon-width-normal);\n}\n\n.weather-details__label {\n  font-size: var(--font-size-s);\n  margin-bottom: 0.2em;\n}\n\n.weather-details__data {\n  font-size: var(--font-size-m);\n}\n\n/* Buttons change forecast */\n.change-forecast {\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n/*  Hourly and Daily*/\n.forecast-hourly-container,\n.forecast-daily-container {\n  display: none;\n}\n\n.forecast-hourly-container.active,\n.forecast-daily-container.active {\n  display: flex;\n  overflow: hidden;\n}\n\n/* Hourly */\n.forecast-hourly {\n  min-width: calc(100% / 8);\n  max-width: calc(100% / 8);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-inline: auto;\n}\n\n/* Daily */\n.forecast-daily {\n  min-width: calc(100% / 7);\n  max-width: calc(100% / 7);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.forecast-daily__day {\n  font-size: calc(var(--font-size-s) + 0.3rem);\n}\n\n.forecast-daily__temperature-hight {\n  font-size: var(--font-size-m);\n  margin-bottom: 2px;\n}\n\n.forecast-daily__temperature-low {\n  font-size: var(--font-size-s);\n}\n\n.forecast-daily__icon {\n  display: inline-block;\n}\n\n/* Navigation */\n.nav {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  display: none;\n}\n\n.nav.active {\n  display: flex;\n}\n\n.nav > button {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.nav > button > img {\n  width: var(--icon-width-normal);\n  height: var(--icon-width-normal);\n}\n.dots-container {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.dots-container > div {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  border: 1px solid white;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.dots-container > div.active {\n  background-color: white;\n}\n\n/* Buttons */\n.btn {\n  border: 2px solid white;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.4em 1em;\n  border-radius: 0.2em;\n  background-color: transparent;\n  color: white;\n  cursor: pointer;\n  transition: background 500ms ease-in-out;\n}\n\n.btn.active,\n.btn:active,\n.btn:hover {\n  background-image: url('../assets/images/cloud.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n/*  */\n.loading {\n  position: fixed;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n\n@media only screen and (max-width: 1200px) {\n  :root {\n    --app-padding-inline: 1rem;\n    --app-padding-block: 2rem;\n    --font-size-s: 1rem;\n    --font-size-m: 1.5rem;\n    --font-size-l: 2.5rem;\n  }\n}\n\n@media only screen and (max-width: 1000px) {\n  .nav.active {\n    display: none;\n  }\n\n  .forecast-daily-container,\n  .forecast-hourly-container {\n    flex-wrap: wrap;\n    gap: 1rem;\n  }\n\n  .forecast-daily,\n  .forecast-hourly {\n    min-width: calc(33.33% - 1rem);\n    max-width: calc(33.33% - 1rem);\n    padding: 1rem;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    border-radius: 0.2rem;\n    justify-content: center;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  #app {\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n  }\n\n  :root {\n    --app-padding-inline: 1rem;\n    --app-padding-block: 2rem;\n    --font-size-s: 0.85rem;\n  }\n\n  .main {\n    flex-direction: column;\n  }\n\n  .change-forecast {\n    justify-content: center;\n  }\n\n  .forecast-daily,\n  .forecast-hourly {\n    min-width: calc(50% - 1rem);\n    max-width: calc(50% - 1rem);\n    padding: 1rem;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    border-radius: 0.2rem;\n    justify-content: center;\n  }\n}\n\n"],sourceRoot:""}]);const p=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(a)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(o[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);a&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),i="/*# ".concat(r," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},o=[],A=0;A<n.length;A++){var c=n[A],s=a.base?c[0]+a.base:c[0],l=i[s]||0,d="".concat(s," ").concat(l);i[s]=l+1;var u=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var p=r(m,a);a.byIndex=A,e.splice(A,0,{identifier:d,updater:p,references:1})}o.push(d)}return o}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=a(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var A=t(i[o]);e[A].references--}for(var c=a(n,r),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},81:(n,e,t)=>{n.exports=t.p+"045edac4468e3ab87a83.jpg"},697:(n,e,t)=>{n.exports=t.p+"be76a4b1eaa74c6c8cb8.jpg"}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=a[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),a=t(825),r=t.n(a),i=t(659),o=t.n(i),A=t(56),c=t.n(A),s=t(540),l=t.n(s),d=t(113),u=t.n(d),m=t(919),p={};function f({iconUrl:n,label:e,data:t,unit:a}){return`\n    <div class="weather-details">\n      <div class="weather-details__icon">\n        <img src="${n}" alt="${e} icon"/>\n      </div>\n      <div class="weather-details__info">\n        <p class="weather-details__label">${e}</p>\n        <p class="weather-details__data">${t} ${a}</p>\n      </div>\n    </div>\n  `}p.styleTagTransform=u(),p.setAttributes=c(),p.insert=o().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=l(),e()(m.A,p),m.A&&m.A.locals&&m.A.locals;const B=t.p+"cbc8b172ed49247db355.svg",h=t.p+"d80d9325f2a6a118da5f.svg",C=t.p+"f1d6a408086ccf1129b6.svg",E=t.p+"27b084f7dd0eb29b2c27.svg",g=t.p+"b8e41c5a6cc13723dfff.svg",y=t.p+"d264902983c70fcf3991.svg";let b,v,w,x,_,k,z=!0,$=!1;const S=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];async function q({query:n,unit:e,isDailyForecast:t}){const a=document.querySelector(".loading");a.style.display="flex",null!==t&&(z=t),e?k=e:e=k,console.log(n);try{if(n){const e=await async function({currentDate:n,query:e}){try{const n=`https://api.weatherapi.com/v1/forecast.json?key=3eed0a761b22414b8a860430243006&q=${e}&days=8`,t=await async function(n){try{const e=await fetch(n,{method:"GET",mode:"cors",credentials:"omit"});if(!e.ok)throw new Error(e.statusText);return await e.json()}catch(n){console.log(n)}return null}(n);if(!t)throw new Error("Failed to get weather data");return t}catch(n){console.error(n)}}({query:n});e?(b=e.location,v={...e.current,...e.forecast.forecastday[0]},w=e.forecast.forecastday,x=function(n,e){const t=new Date(n).getHours();let a=[],r=0;if(t+1<=23&&(a=[...a,...e[r].hour.slice(t+1)]),a.length<24){r++;const n=e[r];a=[...a,...n.hour.slice(0,n.hour.length-a.length)]}return a}(new Date,w),_=e.forecast.forecastday.slice(1),$=!1):$=!0}const t=new Array(Math.trunc(x.length/8)+x.length%8);return t.fill(1),a.style.display="none",`\n      <main class="main">\n        ${function({description:n,city:e,date:t,time:a,temperature:r,unit:i,imgUrl:o,isRequestFailed:A}){return`\n    <div class="weather-info">\n      <p class="weather-info__description">${n}</p>\n      <p class="weather-info__city">${e}</p>\n      <p class="weather-info__date">${t}</p>\n      <p class="weather-info__time">${a} pm</p>\n      <p class="weather-info__temperature">${r} °${i}</p>\n      <button id="change-unit" class="weather-info__units btn" data-unit="${i}">${"C"===i?"Display °F":"Display °C"}</button>\n      <div class="weather-info__icon">\n        <img src="${o}" alt="${n}"/>\n      </div>\n      <form class="search-box">\n        <input type="text" name="location" placeholder="Enter your city or country" autocomplete="off"/>\n        <button type="submit">🔍</button>\n        ${A?'<div class="error-message">❌ No matching location found</div>':""}\n      </form>\n      \n    </div>\n  `}({description:v.condition.text,city:b.name+", "+b.country,date:new Date(b.localtime).toDateString(),time:new Date(b.localtime).getHours()+":"+new Date(b.localtime).getMinutes(),temperature:"C"===e?v.temp_c:v.temp_f,unit:e,imgUrl:v.condition.icon,isRequestFailed:$})}\n        <div class="weather-details-container">\n          ${f({unit:`°${e}`,iconUrl:h,label:"Feels like",data:"C"===e?v.feelslike_c:v.feelslike_f})}\n          ${f({unit:"%",iconUrl:C,label:"Humidity",data:v.humidity})}\n          ${f({unit:"%",iconUrl:B,label:"Chance of Rain",data:v.day.daily_chance_of_rain})}\n          ${f({unit:"C"===e?"km/h":"mph",iconUrl:E,label:"Wind Speed",data:"C"===e?v.wind_kph:v.wind_mph})}\n        </div>\n      </main>\n\n      <div class="forecast">\n        <div class="change-forecast">\n          <button id="daily" type="button" class="btn ${z&&"active"}">Daily</button>\n          <button id="hourly" type="button" class="btn ${!z&&"active"}">Hourly</button>\n          <div class="nav ${!z&&"active"}">\n            <button id="back" type="button">\n              <img src="${g}"/>\n            </button>\n            <div class="dots-container">\n              ${t.map(((n,e)=>`<div data-index=${e} class="dot"></div>`)).join("")}\n            </div>\n            <button id="forward" type="button">\n              <img src="${y}"/>\n            </button>\n          </div>\n        </div>\n\n        <div class="forecast-hourly-container ${!z&&"active"}">\n          ${x.map((n=>function({time:n,temperature:e,imgUrl:t,imgDesc:a,unit:r}){const i=new Date(n);return`\n    <div class="forecast-hourly">\n      <p class="forecast-daily__day">${i.getHours()>=12?i.getHours()-12:i.getHours()} ${i.getHours()<=12?"am":"pm"}</p>\n      <div class="forecast-daily__temperature">\n        <p class="forecast-daily__temperature-hight">${e} ${r}</p>\n      </div>\n      <div class="forecast-daily__icon">\n        <img src="${t}" alt="${a}"/>\n      </div>\n    </div>\n  `}({unit:`°${e}`,time:n.time,temperature:"C"===e?n.temp_c:n.temp_f,imgUrl:n.condition.icon,imgDesc:n.condition.text}))).join("")}\n        </div>\n\n        <div class="forecast-daily-container ${z&&"active"}">\n          ${_.map((n=>{const t=new Date(n.date);return function({day:n,temperatureHight:e,temperatureLow:t,imgUrl:a,imgDesc:r,unit:i}){return`\n    <div class="forecast-daily">\n      <p class="forecast-daily__day">${n}</p>\n      <div class="forecast-daily__temperature">\n        <p class="forecast-daily__temperature-hight">${e} ${i}</p>\n        <p class="forecast-daily__temperature-low">${t} ${i}</p>\n      </div>\n      <div class="forecast-daily__icon">\n        <img src="${a}" alt="${r}"/>\n      </div>\n    </div>\n  `}({unit:`°${e}`,day:S[t.getDay()],temperatureHight:"C"===e?n.day.maxtemp_c:n.day.maxtemp_f,temperatureLow:"C"===e?n.day.mintemp_c:n.day.mintemp_f,imgUrl:n.day.condition.icon,imgDesc:n.day.condition.text})})).join("")}\n        </div>\n      </div>\n      `}catch(n){console.error(n)}}const I=t.p+"924316621fc996c06c71.svg",j=document.querySelector(".loading"),D=document.createElement("img");D.src=I,j.appendChild(D);const U=document.querySelector("#app");let H=0;function W(n,e,t){q({query:n,unit:e,isDailyForecast:t}).then((n=>{U.innerHTML=n,function(){const n=document.querySelector("form.search-box"),e=document.querySelector("#change-unit"),t=document.querySelectorAll(".change-forecast > button"),a=document.querySelector("#back"),r=document.querySelector("#forward"),i=document.querySelector(".dots-container");i.children[H].classList.add("active"),n.addEventListener("submit",M),e.addEventListener("click",R),t.forEach((n=>n.addEventListener("click",F))),r.addEventListener("click",Y),a.addEventListener("click",T),i.addEventListener("click",(n=>{if(!n.target.dataset.index)return;const e=n.target.dataset.index;e>H?Y(0,e-H):T(0,H-e)}))}()}))}function L(){[...document.querySelector(".dots-container").children].forEach((n=>n.classList.remove("active")))}function T(n,e=1){const t=document.querySelector(".dots-container"),a=document.querySelector(".forecast-hourly-container");a.scrollBy({left:-a.offsetWidth*e,behavior:"smooth"}),0!==H&&(L(),H-=e,t.children[H].classList.add("active"))}function Y(n,e=1){const t=document.querySelector(".dots-container"),a=document.querySelector(".forecast-hourly-container");a.scrollBy({left:a.offsetWidth*e,behavior:"smooth"}),H+1!==t.children.length&&(L(),H+=e,t.children[H].classList.add("active"))}function F(n){W(null,null,"daily"===n.target.id),H=0}function M(n){n.preventDefault(),""!==n.target.location.value.trim()&&(W(n.target.location.value,null,!0),H=0)}function R(n){"C"===n.target.dataset.unit?W(null,"F",null):W(null,"C",null)}navigator.geolocation.getCurrentPosition((function(n){const e=n.coords;W(`${e.latitude},${e.longitude}`,"C",null)}),(function(n){W("vietnam","C",null),console.warn(`ERROR(${n.code}): ${n.message}`)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})})()})();
//# sourceMappingURL=app.bundle.js.map
