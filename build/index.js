!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t(require("react"));else if("function"===typeof define&&define.amd)define(["react"],t);else{var n=t("object"===typeof exports?require("react"):e.react);for(var r in n)("object"===typeof exports?exports:e)[r]=n[r]}}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(t,n){t.exports=e},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"===typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"===typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"===typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"===typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=m[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(f(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(f(r.parts[a],t));m[r.id]={id:r.id,refs:1,parts:i}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],c=a[1],s=a[2],u=a[3],f={css:c,media:s,sourceMap:u};r[i]?r[i].parts.push(f):n.push(r[i]={id:i,parts:[f]})}return n}function a(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function c(e){var t=document.createElement("style");return e.attrs.type="text/css",u(t,e.attrs),a(e,t),t}function s(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",u(t,e.attrs),a(e,t),t}function u(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function f(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var u=x++;n=b||(b=c(t)),r=l.bind(null,n,u,!1),o=l.bind(null,n,u,!0)}else e.sourceMap&&"function"===typeof URL&&"function"===typeof URL.createObjectURL&&"function"===typeof URL.revokeObjectURL&&"function"===typeof Blob&&"function"===typeof btoa?(n=s(t),r=d.bind(null,n,t),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=c(t),r=p.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=E(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=g(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(i),c&&URL.revokeObjectURL(c)}var m={},h=function(e){var t;return function(){return"undefined"===typeof t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(n){return"undefined"===typeof t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),b=null,x=0,y=[],g=n(8);e.exports=function(e,t){if("undefined"!==typeof DEBUG&&DEBUG&&"object"!==typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"===typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var c=n[i],s=m[c.id];s.refs--,a.push(s)}if(e){r(o(e,t),t)}for(var i=0;i<a.length;i++){var s=a[i];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete m[s.id]}}}};var E=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n(9);n.d(t,"Example",function(){return r.a}),n.d(t,"SecondExample",function(){return o.a})},function(e,t,n){"use strict";var r=n(5);t.a=r.a},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(6),i=(n.n(a),function(e){function t(e){e.preventDefault(),a(r)}var n=e.title,r=e.count,a=e.onSubmit;return o.a.createElement("div",{className:"Example"},o.a.createElement("h1",{className:"Example-text"},n),o.a.createElement("h2",null,"Count: ",r),o.a.createElement("button",{onClick:t},"Display current count"))});t.a=i},function(e,t,n){var r=n(7);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(1)(void 0),t.push([e.i,".Example {\n  margin-top: 60px;\n  text-align: center;\n  width: 100%; }\n\n.Example-text {\n  color: #c25975;\n  font-size: 36px; }\n",""])},function(e,t){e.exports=function(e){var t="undefined"!==typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!==typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var a;return a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},function(e,t,n){"use strict";var r=n(10);t.a=r.a},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(11),i=(n.n(a),function(){return o.a.createElement("div",{className:"SecondExample"},o.a.createElement("p",{className:"SecondExample-text"},"Based on Facebook's ","\xa0",o.a.createElement("a",{className:"SecondExample-link",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/facebookincubator/create-react-app"},"Create react app")),o.a.createElement("a",{className:"SecondExample-github-link",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Rubbby/create-react-library"},"Documentation"))});t.a=i},function(e,t,n){var r=n(12);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(1)(void 0),t.push([e.i,".SecondExample {\n  text-align: center;\n  width: 100%; }\n\n.SecondExample-text {\n  color: #4b5658;\n  font-size: 20px; }\n\n.SecondExample-link {\n  color: #4b5658;\n  text-decoration: none; }\n  .SecondExample-link:hover {\n    border-bottom: 1px solid #4b5658; }\n\n.SecondExample-github-link {\n  color: #3079ab;\n  font-size: 22px;\n  text-decoration: none; }\n  .SecondExample-github-link:hover {\n    border-bottom: 1px solid #3079ab; }\n",""])}])});