parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
function n(n,e){var o="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!o){if(Array.isArray(n)||(o=t(n))||e&&n&&"number"==typeof n.length){o&&(n=o);var r=0,c=function(){};return{s:c,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,a=!1;return{s:function(){o=o.call(n)},n:function(){var n=o.next();return i=n.done,n},e:function(n){a=!0,u=n},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw u}}}}function t(n,t){if(n){if("string"==typeof n)return e(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(n,t):void 0}}function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}var o=[],r=function(n){o.push({content:n}),a()},c=function(n){o.splice(n,1),a()},u=function(n){o[n].done=!o[n].done,a()},i=function(){document.querySelectorAll(".js-remove").forEach(function(n,t){n.addEventListener("click",function(){c(t)})}),document.querySelectorAll(".js-done").forEach(function(n,t){n.addEventListener("click",function(){u(t)})})},a=function(){var t,e="",r=n(o);try{for(r.s();!(t=r.n()).done;){var c=t.value;e+='\n                    <li class="list__item">\n                      <button class="list__button list__button--done js-done">'.concat(c.done?"✓":"",'</button>\n                      <span class="list__task').concat(c.done?" list__task--done":"",'">\n                      ').concat(c.content,'\n                      </span>\n                      <button class="list__button js-remove">🗑</button>\n                    </li>          \n                    ')}}catch(u){r.e(u)}finally{r.f()}document.querySelector(".js-tasks").innerHTML=e,i()},l=function(n){n.value="",n.focus()},s=function(n){n.preventDefault();var t=document.querySelector(".js-newTask"),e=t.value.trim();l(t),e&&r(e)},f=function(){a(),document.querySelector(".js-form").addEventListener("submit",s)};f();
},{}]},{},["d6sW"], null)
//# sourceMappingURL=main.51704d9e.js.map