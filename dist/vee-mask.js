(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["VeeMask"]=e():t["VeeMask"]=e()})("undefined"!==typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="a221")}({"0d18":function(t,e,n){var r=n("a74e"),o=n("5989"),u=n("114d"),i=Object.defineProperty;e.f=n("e263")?Object.defineProperty:function(t,e,n){if(r(t),e=u(e,!0),r(n),o)try{return i(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},1142:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"114d":function(t,e,n){var r=n("9c0e");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1fef":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},2638:function(t,e,n){var r=n("ae50");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},2920:function(t,e){(function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})})(document)},"2b80":function(t,e,n){var r=n("1fef"),o=n("9a6a"),u=n("aaf0"),i=n("7167")("src"),c=n("5fd5"),a="toString",f=(""+c).split(a);n("5718").inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){var a="function"==typeof n;a&&(u(n,"name")||o(n,"name",e)),t[e]!==n&&(a&&(u(n,i)||o(n,i,t[e]?""+t[e]:f.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,a,function(){return"function"==typeof this&&this[i]||c.call(this)})},"2f83":function(t,e){t.exports=!1},"3d49":function(t,e,n){"use strict";var r=n("1142");t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},"4f5f":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},5718:function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},5989:function(t,e,n){t.exports=!n("e263")&&!n("1142")(function(){return 7!=Object.defineProperty(n("86b8")("div"),"a",{get:function(){return 7}}).a})},"5fd5":function(t,e,n){t.exports=n("a988")("native-function-to-string",Function.toString)},"638f":function(t,e,n){var r=n("644e");r(r.S,"Array",{isArray:n("e235")})},"644e":function(t,e,n){var r=n("1fef"),o=n("5718"),u=n("9a6a"),i=n("2b80"),c=n("2638"),a="prototype",f=function(t,e,n){var l,s,p,d,v=t&f.F,y=t&f.G,m=t&f.S,h=t&f.P,g=t&f.B,b=y?r:m?r[e]||(r[e]={}):(r[e]||{})[a],w=y?o:o[e]||(o[e]={}),x=w[a]||(w[a]={});for(l in y&&(n=e),n)s=!v&&b&&void 0!==b[l],p=(s?b:n)[l],d=g&&s?c(p,r):h&&"function"==typeof p?c(Function.call,p):p,b&&i(b,l,p,t&f.U),w[l]!=p&&u(w,l,d),h&&x[l]!=p&&(x[l]=p)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},"6bc8":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7167:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"7ac9":function(t,e,n){"use strict";var r=n("644e"),o=n("ae50"),u=n("e04f"),i=n("1142"),c=[].sort,a=[1,2,3];r(r.P+r.F*(i(function(){a.sort(void 0)})||!i(function(){a.sort(null)})||!n("3d49")(c)),"Array",{sort:function(t){return void 0===t?c.call(u(this)):c.call(u(this),o(t))}})},"86b8":function(t,e,n){var r=n("9c0e"),o=n("1fef").document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},"9a6a":function(t,e,n){var r=n("0d18"),o=n("6bc8");t.exports=n("e263")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"9c0e":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},a221:function(t,e,n){"use strict";var r;(n.r(e),"undefined"!==typeof window)&&(n("2920"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/))&&(n.p=r[1]));n("638f"),n("7ac9");var o=function(t,e,n){return e=e.slice().sort(function(t,e){return t.length-e.length}),function(r,o){var u=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;while(i<e.length){var c=e[i];i++;var a=e[i];if(!(a&&t(r,a,!0,n).length>c.length))return t(r,c,u,n)}return""}},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=0,u=0,i="",c="",a="";while(o<e.length&&u<t.length){a=e[o];var f=r[a],l=t[u];f&&!f.escape?(f.rule.test(l)&&(i+=f.mutate?f.mutate(l):l,o++),u++):(f&&f.escape&&(o++,a=e[o]),n&&(i+=a),l===a&&u++,o++)}while(o<e.length&&n){if(a=e[o],r[a]){c="";break}c+=a,o++}return i+c},i=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Array.isArray(e)?o(u,e,r)(t,e,n,r):u(t,e,n,r)},c={"*":{rule:/./},"#":{rule:/\d/},S:{rule:/[a-zA-Z]/},X:{rule:/[a-zA-Z0-9]/},A:{rule:/[a-zA-Z]/,mutate:function(t){return t.toLocaleUpperCase()}},a:{rule:/[a-zA-Z]/,mutate:function(t){return t.toLocaleLowerCase()}},N:{rule:/[a-zA-Z0-9]/,mutate:function(t){return t.toLocaleUpperCase()}},n:{rule:/[a-zA-Z0-9]/,mutate:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}};function a(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}function f(t){return!(void 0===t||null==t||t.length<=0)}function l(t){var e={mask:t,masked:!0,tokens:c};return"string"===typeof t||Array.isArray(t)?e:{mask:t.mask||null,masked:!f(t.masked)||t.masked,tokens:t.tokens||c}}var s=function(t,e){if("INPUT"!==t.tagName.toUpperCase())throw new Error("v-mask directive requires an input element, found: '".concat(t.tagName,"'"));var n=l(e.value);if(f(n.mask)&&n.masked){var r=i(t.value,n.mask,n.masked,n.tokens);r!==t.value&&(t.value=r,t.dispatchEvent(a("input"))),t.oninput=function(e){if(e.isTrusted){var r=t.selectionEnd,o=t.value[r-1];t.value=i(t.value,n.mask,n.masked,n.tokens);while(r<t.value.length&&t.value.charAt(r-1)!==o)r++;t===document.activeElement&&(t.setSelectionRange(r,r),setTimeout(function(){t.setSelectionRange(r,r)},0)),t.dispatchEvent(a("input"))}}}};function p(t){t.directive("mask",s)}var d=p;"undefined"!==typeof window&&window.Vue&&window.Vue.use(p),n.d(e,"mask",function(){return s}),n.d(e,"tokens",function(){return c});e["default"]=d},a74e:function(t,e,n){var r=n("9c0e");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},a988:function(t,e,n){var r=n("5718"),o=n("1fef"),u="__core-js_shared__",i=o[u]||(o[u]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("2f83")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},aaf0:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},ae50:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},dc88:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},e04f:function(t,e,n){var r=n("dc88");t.exports=function(t){return Object(r(t))}},e235:function(t,e,n){var r=n("4f5f");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e263:function(t,e,n){t.exports=!n("1142")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})}})});
//# sourceMappingURL=VeeMask.umd.min.js.map