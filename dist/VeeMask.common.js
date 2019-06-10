module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "a221");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0d18":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("a74e");
var IE8_DOM_DEFINE = __webpack_require__("5989");
var toPrimitive = __webpack_require__("114d");
var dP = Object.defineProperty;

exports.f = __webpack_require__("e263") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "1142":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "114d":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("9c0e");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1fef":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "2638":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("ae50");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "2920":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "2b80":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("1fef");
var hide = __webpack_require__("9a6a");
var has = __webpack_require__("aaf0");
var SRC = __webpack_require__("7167")('src');
var $toString = __webpack_require__("5fd5");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("5718").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2f83":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "3d49":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("1142");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "4f5f":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "5718":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5989":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("e263") && !__webpack_require__("1142")(function () {
  return Object.defineProperty(__webpack_require__("86b8")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "5fd5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("a988")('native-function-to-string', Function.toString);


/***/ }),

/***/ "638f":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("644e");

$export($export.S, 'Array', { isArray: __webpack_require__("e235") });


/***/ }),

/***/ "644e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("1fef");
var core = __webpack_require__("5718");
var hide = __webpack_require__("9a6a");
var redefine = __webpack_require__("2b80");
var ctx = __webpack_require__("2638");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "6bc8":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "7167":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "7ac9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("644e");
var aFunction = __webpack_require__("ae50");
var toObject = __webpack_require__("e04f");
var fails = __webpack_require__("1142");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("3d49")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "86b8":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("9c0e");
var document = __webpack_require__("1fef").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "9a6a":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("0d18");
var createDesc = __webpack_require__("6bc8");
module.exports = __webpack_require__("e263") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9c0e":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "a221":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/vitor.caneco/.npm-global/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("2920")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: /Users/vitor.caneco/.npm-global/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__("638f");

// EXTERNAL MODULE: /Users/vitor.caneco/.npm-global/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("7ac9");

// CONCATENATED MODULE: ./src/masker/masker-dynamic.js

/* harmony default export */ var masker_dynamic = (function (maskit, masks, tokens) {
  masks = masks.slice().sort(function (a, b) {
    return a.length - b.length;
  });
  return function (value, mask) {
    var masked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var i = 0;

    while (i < masks.length) {
      var currMask = masks[i];
      i++;
      var nextMask = masks[i];

      if (!(nextMask && maskit(value, nextMask, true, tokens).length > currMask.length)) {
        return maskit(value, currMask, masked, tokens);
      }
    }

    return '';
  };
});
// CONCATENATED MODULE: ./src/masker/masker-regular.js
/* harmony default export */ var masker_regular = (function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var mask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var masked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var tokens = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var i = 0,
      j = 0;
  var output = '',
      restOutput = '';
  var cMask = '';

  while (i < mask.length && j < value.length) {
    cMask = mask[i];
    var masker = tokens[cMask];
    var cValue = value[j];

    if (masker && !masker.escape) {
      if (masker.rule.test(cValue)) {
        output += masker.mutate ? masker.mutate(cValue) : cValue;
        i++;
      }

      j++;
    } else {
      if (masker && masker.escape) {
        i++;
        cMask = mask[i];
      }

      if (masked) output += cMask;
      if (cValue === cMask) j++;
      i++;
    }
  }

  while (i < mask.length && masked) {
    cMask = mask[i];

    if (tokens[cMask]) {
      restOutput = '';
      break;
    }

    restOutput += cMask;
    i++;
  }

  return output + restOutput;
});
// CONCATENATED MODULE: ./src/masker/index.js



/* harmony default export */ var masker = (function (value, mask) {
  var masked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var tokens = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return Array.isArray(mask) ? masker_dynamic(masker_regular, mask, tokens)(value, mask, masked, tokens) : masker_regular(value, mask, masked, tokens);
});
// CONCATENATED MODULE: ./src/tokens.js
/* harmony default export */ var src_tokens = ({
  '*': {
    rule: /./
  },
  '#': {
    rule: /\d/
  },
  'S': {
    rule: /[a-zA-Z]/
  },
  'X': {
    rule: /[a-zA-Z0-9]/
  },
  'A': {
    rule: /[a-zA-Z]/,
    mutate: function mutate(v) {
      return v.toLocaleUpperCase();
    }
  },
  'a': {
    rule: /[a-zA-Z]/,
    mutate: function mutate(v) {
      return v.toLocaleLowerCase();
    }
  },
  'N': {
    rule: /[a-zA-Z0-9]/,
    mutate: function mutate(v) {
      return v.toLocaleUpperCase();
    }
  },
  'n': {
    rule: /[a-zA-Z0-9]/,
    mutate: function mutate(v) {
      return v.toLocaleLowerCase();
    }
  },
  '!': {
    escape: true
  }
});
// CONCATENATED MODULE: ./src/directive.js




function directive_event(name) {
  var event = document.createEvent('Event');
  event.initEvent(name, true, true);
  return event;
}

function isset(value) {
  return !(value === undefined || value == null || value.length <= 0);
}

function solver(value) {
  var config = {
    mask: value,
    masked: true,
    tokens: src_tokens
  };

  if (typeof value === 'string' || Array.isArray(value)) {
    return config;
  }

  return {
    mask: value.mask || null,
    masked: isset(value.masked) ? value.masked : true,
    tokens: value.tokens || src_tokens
  };
}

var directive_bind = function bind(el, binding) {
  if (el.tagName.toUpperCase() !== 'INPUT') {
    throw new Error("v-mask directive requires an input element, found: '".concat(el.tagName, "'"));
  }

  var config = solver(binding.value);

  if (!isset(config.mask) || !config.masked) {
    return; // no mask given, no nothing
  }

  var display = masker(el.value, config.mask, config.masked, config.tokens);

  if (display !== el.value) {
    el.value = display;
    el.dispatchEvent(directive_event('input'));
  }

  el.addEventListener('input', function (ev) {
    if (!ev.isTrusted) return; // avoid infinite loop (?)

    var posit = el.selectionEnd;
    var digit = el.value[posit - 1];
    el.value = masker(el.value, config.mask, config.masked, config.tokens);

    while (posit < el.value.length && el.value.charAt(posit - 1) !== digit) {
      posit++;
    }

    if (el === document.activeElement) {
      el.setSelectionRange(posit, posit);
      setTimeout(function () {
        el.setSelectionRange(posit, posit);
      }, 0);
    }

    el.dispatchEvent(directive_event('input'));
  });
};

var unbind = function unbind(el) {
  el.removeEventListener('input');
};

var dir = {
  bind: directive_bind,
  unbind: unbind
};
/* harmony default export */ var directive = (dir);
// CONCATENATED MODULE: ./src/index.js



function VeeMask(Vue) {
  Vue.directive('mask', directive);
}

/* harmony default export */ var src = (VeeMask);


if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VeeMask);
}
// CONCATENATED MODULE: /Users/vitor.caneco/.npm-global/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport mask */__webpack_require__.d(__webpack_exports__, "mask", function() { return directive; });
/* concated harmony reexport tokens */__webpack_require__.d(__webpack_exports__, "tokens", function() { return src_tokens; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "a74e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("9c0e");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "a988":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("5718");
var global = __webpack_require__("1fef");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2f83") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "aaf0":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "ae50":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "dc88":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "e04f":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("dc88");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "e235":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("4f5f");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "e263":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("1142")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ })

/******/ });
//# sourceMappingURL=VeeMask.common.js.map