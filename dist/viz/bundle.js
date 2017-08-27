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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(106),
    baseMatchesProperty = __webpack_require__(149),
    identity = __webpack_require__(13),
    isArray = __webpack_require__(0),
    property = __webpack_require__(159);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(46);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(95),
    createBaseEach = __webpack_require__(54);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(45),
    isLength = __webpack_require__(30);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(87),
    getValue = __webpack_require__(92);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    getRawTag = __webpack_require__(88),
    objectToString = __webpack_require__(89);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(97),
    baseKeys = __webpack_require__(53),
    isArrayLike = __webpack_require__(4);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(11);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(173);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'countBy': __webpack_require__(86),
  'each': __webpack_require__(161),
  'eachRight': __webpack_require__(163),
  'every': __webpack_require__(167),
  'filter': __webpack_require__(170),
  'find': __webpack_require__(171),
  'findLast': __webpack_require__(175),
  'flatMap': __webpack_require__(177),
  'flatMapDeep': __webpack_require__(179),
  'flatMapDepth': __webpack_require__(180),
  'forEach': __webpack_require__(64),
  'forEachRight': __webpack_require__(66),
  'groupBy': __webpack_require__(181),
  'includes': __webpack_require__(182),
  'invokeMap': __webpack_require__(187),
  'keyBy': __webpack_require__(197),
  'map': __webpack_require__(24),
  'orderBy': __webpack_require__(198),
  'partition': __webpack_require__(202),
  'reduce': __webpack_require__(203),
  'reduceRight': __webpack_require__(205),
  'reject': __webpack_require__(207),
  'sample': __webpack_require__(209),
  'sampleSize': __webpack_require__(211),
  'shuffle': __webpack_require__(214),
  'size': __webpack_require__(217),
  'some': __webpack_require__(222),
  'sortBy': __webpack_require__(224)
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var arrayAggregator = __webpack_require__(93),
    baseAggregator = __webpack_require__(94),
    baseIteratee = __webpack_require__(1),
    isArray = __webpack_require__(0);

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(108),
    listCacheDelete = __webpack_require__(109),
    listCacheGet = __webpack_require__(110),
    listCacheHas = __webpack_require__(111),
    listCacheSet = __webpack_require__(112);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(31);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(126);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(31),
    isArrayLike = __webpack_require__(4),
    isIndex = __webpack_require__(29),
    isObject = __webpack_require__(10);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(59),
    isFlattenable = __webpack_require__(178);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(21),
    baseIteratee = __webpack_require__(1),
    baseMap = __webpack_require__(70),
    isArray = __webpack_require__(0);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(186),
    keys = __webpack_require__(7);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var baseRandom = __webpack_require__(76);

/**
 * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @param {number} [size=array.length] The size of `array`.
 * @returns {Array} Returns `array`.
 */
function shuffleSelf(array, size) {
  var index = -1,
      length = array.length,
      lastIndex = length - 1;

  size = size === undefined ? length : size;
  while (++index < size) {
    var rand = baseRandom(index, lastIndex),
        value = array[rand];

    array[rand] = array[index];
    array[index] = value;
  }
  array.length = size;
  return array;
}

module.exports = shuffleSelf;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(44);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(99),
    isObjectLike = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(118),
    mapCacheDelete = __webpack_require__(125),
    mapCacheGet = __webpack_require__(127),
    mapCacheHas = __webpack_require__(128),
    mapCacheSet = __webpack_require__(129);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(36),
    toKey = __webpack_require__(12);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isKey = __webpack_require__(37),
    stringToPath = __webpack_require__(151),
    toString = __webpack_require__(154);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(11);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collection = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base class for distributing nodes algorithms
 */
var Layout = function () {
  function Layout(graph) {
    _classCallCheck(this, Layout);

    this.graph = graph;
  }

  _createClass(Layout, [{
    key: 'layout',
    value: function layout() {
      this.initCoords();
      this.layoutPrepare();
      this.layoutCalcBounds();
    }
  }, {
    key: 'initCoords',
    value: function initCoords() {
      (0, _collection.each)(this.graph.nodes, function (node) {
        node.layoutPosX = 0;
        node.layoutPosY = 0;
      });
    }
  }, {
    key: 'layoutPrepare',
    value: function layoutPrepare() {
      // eslint-disable-line
      throw new Error('not implemented');
    }
  }, {
    key: 'layoutCalcBounds',
    value: function layoutCalcBounds() {
      var minx = Infinity;
      var maxx = -Infinity;
      var miny = Infinity;
      var maxy = -Infinity;

      (0, _collection.each)(this.graph.nodes, function (node) {
        var x = node.layoutPosX;
        var y = node.layoutPosY;

        if (x > maxx) maxx = x;
        if (x < minx) minx = x;
        if (y > maxy) maxy = y;
        if (y < miny) miny = y;
      });

      this.graph.layoutMinX = minx;
      this.graph.layoutMaxX = maxx;
      this.graph.layoutMinY = miny;
      this.graph.layoutMaxY = maxy;
    }
  }]);

  return Layout;
}();

exports.default = Layout;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObject = __webpack_require__(10);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ }),
/* 47 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(2),
    stubFalse = __webpack_require__(100);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)(module)))

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(101),
    baseUnary = __webpack_require__(52),
    nodeUtil = __webpack_require__(102);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(103),
    nativeKeys = __webpack_require__(104);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(4);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(17),
    stackClear = __webpack_require__(113),
    stackDelete = __webpack_require__(114),
    stackGet = __webpack_require__(115),
    stackHas = __webpack_require__(116),
    stackSet = __webpack_require__(117);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(130),
    isObjectLike = __webpack_require__(8);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(131),
    arraySome = __webpack_require__(58),
    cacheHas = __webpack_require__(134);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(144),
    Map = __webpack_require__(32),
    Promise = __webpack_require__(145),
    Set = __webpack_require__(146),
    WeakMap = __webpack_require__(147),
    baseGetTag = __webpack_require__(6),
    toSource = __webpack_require__(47);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(162),
    baseEach = __webpack_require__(3),
    castFunction = __webpack_require__(65),
    isArray = __webpack_require__(0);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(13);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEachRight = __webpack_require__(164),
    baseEachRight = __webpack_require__(67),
    castFunction = __webpack_require__(65),
    isArray = __webpack_require__(0);

/**
 * This method is like `_.forEach` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @alias eachRight
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEach
 * @example
 *
 * _.forEachRight([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `2` then `1`.
 */
function forEachRight(collection, iteratee) {
  var func = isArray(collection) ? arrayEachRight : baseEachRight;
  return func(collection, castFunction(iteratee));
}

module.exports = forEachRight;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwnRight = __webpack_require__(165),
    createBaseEach = __webpack_require__(54);

/**
 * The base implementation of `_.forEachRight` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEachRight = createBaseEach(baseForOwnRight, true);

module.exports = baseEachRight;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(3);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(1),
    isArrayLike = __webpack_require__(4),
    keys = __webpack_require__(7);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(3),
    isArrayLike = __webpack_require__(4);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isArray = __webpack_require__(0),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(13),
    overRest = __webpack_require__(192),
    setToString = __webpack_require__(193);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(21),
    baseIteratee = __webpack_require__(1),
    baseMap = __webpack_require__(70),
    baseSortBy = __webpack_require__(199),
    baseUnary = __webpack_require__(52),
    compareMultiple = __webpack_require__(200),
    identity = __webpack_require__(13);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var baseRandom = __webpack_require__(76);

/**
 * A specialized version of `_.sample` for arrays.
 *
 * @private
 * @param {Array} array The array to sample.
 * @returns {*} Returns the random element.
 */
function arraySample(array) {
  var length = array.length;
  return length ? array[baseRandom(0, length - 1)] : undefined;
}

module.exports = arraySample;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeRandom = Math.random;

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

module.exports = baseRandom;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Dracula = __webpack_require__(80);
const _generated_deps_1 = __webpack_require__(230);
var graph = new Dracula.Graph();
console.log(_generated_deps_1.DEPS);
for (let path of Object.keys(_generated_deps_1.DEPS)) {
    for (let depPath of _generated_deps_1.DEPS[path]) {
        graph.addEdge(path, depPath, { directed: true });
    }
}
var layouter = new Dracula.Layout.Spring(graph);
layouter.layout();
let element = document.getElementById("graph");
var renderer = new Dracula.Renderer.Raphael("#graph", graph, element.offsetWidth, element.offsetHeight);
renderer.draw();
console.log(renderer);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// Core
var dracula = __webpack_require__(81).default

// Layouts
var spring = __webpack_require__(85).default
var orderedTree = __webpack_require__(225).default
var tournamentTree = __webpack_require__(226).default

// Renderers
var raphael = __webpack_require__(227).default

module.exports.Graph = dracula

module.exports.Layout = {
  OrderedTree: orderedTree,
  Spring: spring,
  TournamentTree: tournamentTree
}

module.exports.Renderer = {
  Raphael: raphael,
}


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _uuid = __webpack_require__(82);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Testing for string or number data type
var isId = function isId(x) {
  return !!~['string', 'number'].indexOf(typeof x === 'undefined' ? 'undefined' : _typeof(x));
};

/**
 * Graph Data Structure
 */

var Dracula = function () {
  function Dracula() {
    _classCallCheck(this, Dracula);

    this.nodes = {};
    this.edges = [];
  }

  /**
   * Creator for the new haters :)
   *
   * @returns {Dracula} a new graph instance
   */


  _createClass(Dracula, [{
    key: 'addNode',


    /**
     * Add node if it doesn't exist yet.
     *
     * This method does not update an existing node.
     * If you want to update a node, just update the node object.
     *
     * @param {string|number|object} id or node data
     * @param {object|} nodeData (optional)
     * @returns {Node} the new or existing node
     */
    value: function addNode(id, nodeData) {
      // Node initialisation shorthands
      if (!nodeData) {
        nodeData = isId(id) ? { id: id } : id;
      } else {
        nodeData.id = id;
      }
      if (!nodeData.id) {
        nodeData.id = (0, _uuid2.default)();
        // Don't create a new node if it already exists
      } else if (this.nodes[nodeData.id]) {
        return this.nodes[nodeData.id];
      }
      nodeData.edges = [];
      this.nodes[nodeData.id] = nodeData;
      return nodeData;
    }

    /**
     * @param {string|number|object} source node or ID
     * @param {string|number|object} target node or ID
     * @param {object|} (optional) edge data, e.g. styles
     * @returns {Edge}
     */

  }, {
    key: 'addEdge',
    value: function addEdge(source, target) {
      var edgeData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var sourceNode = this.addNode(source);
      var targetNode = this.addNode(target);
      edgeData.source = sourceNode;
      edgeData.target = targetNode;
      this.edges.push(edgeData);
      sourceNode.edges.push(edgeData);
      targetNode.edges.push(edgeData);
      return edgeData;
    }

    /**
     * @param {string|number|Node} node node or ID
     * @return {Node}
     */

  }, {
    key: 'removeNode',
    value: function removeNode(node) {
      var _this = this;

      var id = isId(node) ? node : node.id;
      node = this.nodes[id];
      // Delete node from index
      delete this.nodes[id];
      // Delete node from all the edges
      this.edges.forEach(function (edge) {
        if (edge.source === node || edge.target === node) {
          _this.removeEdge(edge);
        }
      });
      return node;
    }

    /**
     * Remove an edge by providing either two nodes (or ids) or the edge instance
     * @param {string|number|Node|Edge} node edge, node or ID
     * @param {string|number|Node} node node or ID
     * @return {Edge}
     */

  }, {
    key: 'removeEdge',
    value: function removeEdge(source, target) {
      var found = void 0;
      // Fallback to only one parameter
      if (!target) {
        target = source.target;
        source = source.source;
      }
      // Normalise node IDs
      if (isId(source)) source = { id: source };
      if (isId(target)) target = { id: target };
      // Find and remove edge
      this.edges = this.edges.filter(function (edge) {
        if (edge.source.id === source.id && edge.target.id === target.id) {
          found = edge;
          return false;
        }
        return true;
      });
      if (found) {
        found.source.edges = found.source.edges.filter(function (edge) {
          return edge !== found;
        });
        found.target.edges = found.target.edges.filter(function (edge) {
          return edge !== found;
        });
      }
      // Return removed edge
      return found;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return { nodes: this.nodes, edges: this.edges };
    }
  }], [{
    key: 'create',
    value: function create() {
      return new Dracula();
    }
  }]);

  return Dracula;
}();

exports.default = Dracula;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(83);
var v4 = __webpack_require__(84);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(41);
var bytesToUuid = __webpack_require__(43);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(41);
var bytesToUuid = __webpack_require__(43);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collection = __webpack_require__(15);

var _layout = __webpack_require__(40);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TODO take ratio into account
 * TODO use integers for speed
 */
var Spring = function (_Layout) {
  _inherits(Spring, _Layout);

  function Spring(graph) {
    _classCallCheck(this, Spring);

    var _this = _possibleConstructorReturn(this, (Spring.__proto__ || Object.getPrototypeOf(Spring)).call(this, graph));

    _this.iterations = 500;
    _this.maxRepulsiveForceDistance = 6;
    _this.k = 2;
    _this.c = 0.01;
    _this.maxVertexMovement = 0.5;
    _this.layout();
    return _this;
  }

  _createClass(Spring, [{
    key: 'layout',
    value: function layout() {
      this.layoutPrepare();
      for (var i = 0; i < this.iterations; i++) {
        this.layoutIteration();
      }
      this.layoutCalcBounds();
    }
  }, {
    key: 'layoutPrepare',
    value: function layoutPrepare() {
      (0, _collection.each)(this.graph.nodes, function (node) {
        node.layoutPosX = 0;
        node.layoutPosY = 0;
        node.layoutForceX = 0;
        node.layoutForceY = 0;
      });
    }
  }, {
    key: 'layoutIteration',
    value: function layoutIteration() {
      var _this2 = this;

      // Forces on nodes due to node-node repulsions
      var prev = [];
      (0, _collection.each)(this.graph.nodes, function (node1) {
        prev.forEach(function (node2) {
          _this2.layoutRepulsive(node1, node2);
        });
        prev.push(node1);
      });

      // Forces on nodes due to edge attractions
      this.graph.edges.forEach(function (edge) {
        _this2.layoutAttractive(edge);
      });

      // Move by the given force
      (0, _collection.each)(this.graph.nodes, function (node) {
        var xmove = _this2.c * node.layoutForceX;
        var ymove = _this2.c * node.layoutForceY;

        var max = _this2.maxVertexMovement;

        if (xmove > max) xmove = max;
        if (xmove < -max) xmove = -max;
        if (ymove > max) ymove = max;
        if (ymove < -max) ymove = -max;

        node.layoutPosX += xmove;
        node.layoutPosY += ymove;
        node.layoutForceX = 0;
        node.layoutForceY = 0;
      });
    }
  }, {
    key: 'layoutRepulsive',
    value: function layoutRepulsive(node1, node2) {
      if (!node1 || !node2) {
        return;
      }
      var dx = node2.layoutPosX - node1.layoutPosX;
      var dy = node2.layoutPosY - node1.layoutPosY;
      var d2 = dx * dx + dy * dy;
      if (d2 < 0.01) {
        dx = 0.1 * Math.random() + 0.1;
        dy = 0.1 * Math.random() + 0.1;
        d2 = dx * dx + dy * dy;
      }
      var d = Math.sqrt(d2);
      if (d < this.maxRepulsiveForceDistance) {
        var repulsiveForce = this.k * this.k / d;
        node2.layoutForceX += repulsiveForce * dx / d;
        node2.layoutForceY += repulsiveForce * dy / d;
        node1.layoutForceX -= repulsiveForce * dx / d;
        node1.layoutForceY -= repulsiveForce * dy / d;
      }
    }
  }, {
    key: 'layoutAttractive',
    value: function layoutAttractive(edge) {
      var node1 = edge.source;
      var node2 = edge.target;

      var dx = node2.layoutPosX - node1.layoutPosX;
      var dy = node2.layoutPosY - node1.layoutPosY;
      var d2 = dx * dx + dy * dy;
      if (d2 < 0.01) {
        dx = 0.1 * Math.random() + 0.1;
        dy = 0.1 * Math.random() + 0.1;
        d2 = dx * dx + dy * dy;
      }
      var d = Math.sqrt(d2);
      if (d > this.maxRepulsiveForceDistance) {
        d = this.maxRepulsiveForceDistance;
        d2 = d * d;
      }
      var attractiveForce = (d2 - this.k * this.k) / this.k;
      if (!edge.attraction) edge.attraction = 1;
      attractiveForce *= Math.log(edge.attraction) * 0.5 + 1;

      node2.layoutForceX -= attractiveForce * dx / d;
      node2.layoutForceY -= attractiveForce * dy / d;
      node1.layoutForceX += attractiveForce * dx / d;
      node1.layoutForceY += attractiveForce * dy / d;
    }
  }], [{
    key: 'create',
    value: function create() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(this, [null].concat(args)))();
    }
  }]);

  return Spring;
}(_layout2.default);

exports.default = Spring;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(27),
    createAggregator = __webpack_require__(16);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the number of times the key was returned by `iteratee`. The
 * iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.countBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': 1, '6': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.countBy(['one', 'two', 'three'], 'length');
 * // => { '3': 2, '5': 1 }
 */
var countBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    ++result[key];
  } else {
    baseAssignValue(result, key, 1);
  }
});

module.exports = countBy;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(45),
    isMasked = __webpack_require__(90),
    isObject = __webpack_require__(10),
    toSource = __webpack_require__(47);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(91);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(3);

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

module.exports = baseAggregator;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(96),
    keys = __webpack_require__(7);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(48);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(98),
    isArguments = __webpack_require__(28),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(49),
    isIndex = __webpack_require__(29),
    isTypedArray = __webpack_require__(51);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isLength = __webpack_require__(30),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(46);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)(module)))

/***/ }),
/* 103 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(105);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(107),
    getMatchData = __webpack_require__(148),
    matchesStrictComparable = __webpack_require__(62);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(55),
    baseIsEqual = __webpack_require__(56);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(17);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(17),
    Map = __webpack_require__(32),
    MapCache = __webpack_require__(33);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(119),
    ListCache = __webpack_require__(17),
    Map = __webpack_require__(32);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(120),
    hashDelete = __webpack_require__(121),
    hashGet = __webpack_require__(122),
    hashHas = __webpack_require__(123),
    hashSet = __webpack_require__(124);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(55),
    equalArrays = __webpack_require__(57),
    equalByTag = __webpack_require__(135),
    equalObjects = __webpack_require__(139),
    getTag = __webpack_require__(60),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(49),
    isTypedArray = __webpack_require__(51);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(33),
    setCacheAdd = __webpack_require__(132),
    setCacheHas = __webpack_require__(133);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    Uint8Array = __webpack_require__(136),
    eq = __webpack_require__(31),
    equalArrays = __webpack_require__(57),
    mapToArray = __webpack_require__(137),
    setToArray = __webpack_require__(138);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(140);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(141),
    getSymbols = __webpack_require__(142),
    keys = __webpack_require__(7);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(59),
    isArray = __webpack_require__(0);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(34),
    stubArray = __webpack_require__(143);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(61),
    keys = __webpack_require__(7);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(56),
    get = __webpack_require__(150),
    hasIn = __webpack_require__(156),
    isKey = __webpack_require__(37),
    isStrictComparable = __webpack_require__(61),
    matchesStrictComparable = __webpack_require__(62),
    toKey = __webpack_require__(12);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(35);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(152);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(153);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(33);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(155);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    arrayMap = __webpack_require__(21),
    isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(11);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(157),
    hasPath = __webpack_require__(158);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 157 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(36),
    isArguments = __webpack_require__(28),
    isArray = __webpack_require__(0),
    isIndex = __webpack_require__(29),
    isLength = __webpack_require__(30),
    toKey = __webpack_require__(12);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(63),
    basePropertyDeep = __webpack_require__(160),
    isKey = __webpack_require__(37),
    toKey = __webpack_require__(12);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(35);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(64);


/***/ }),
/* 162 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(66);


/***/ }),
/* 164 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEachRight` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEachRight(array, iteratee) {
  var length = array == null ? 0 : array.length;

  while (length--) {
    if (iteratee(array[length], length, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEachRight;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var baseForRight = __webpack_require__(166),
    keys = __webpack_require__(7);

/**
 * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwnRight(object, iteratee) {
  return object && baseForRight(object, iteratee, keys);
}

module.exports = baseForOwnRight;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(48);

/**
 * This function is like `baseFor` except that it iterates over properties
 * in the opposite order.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseForRight = createBaseFor(true);

module.exports = baseForRight;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEvery = __webpack_require__(168),
    baseEvery = __webpack_require__(169),
    baseIteratee = __webpack_require__(1),
    isArray = __webpack_require__(0),
    isIterateeCall = __webpack_require__(22);

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = isArray(collection) ? arrayEvery : baseEvery;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = every;


/***/ }),
/* 168 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */
function arrayEvery(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

module.exports = arrayEvery;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(3);

/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */
function baseEvery(collection, predicate) {
  var result = true;
  baseEach(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

module.exports = baseEvery;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(34),
    baseFilter = __webpack_require__(68),
    baseIteratee = __webpack_require__(1),
    isArray = __webpack_require__(0);

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(69),
    findIndex = __webpack_require__(172);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(38),
    baseIteratee = __webpack_require__(1),
    toInteger = __webpack_require__(14);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(174);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10),
    isSymbol = __webpack_require__(11);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(69),
    findLastIndex = __webpack_require__(176);

/**
 * This method is like `_.find` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=collection.length-1] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * _.findLast([1, 2, 3, 4], function(n) {
 *   return n % 2 == 1;
 * });
 * // => 3
 */
var findLast = createFind(findLastIndex);

module.exports = findLast;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(38),
    baseIteratee = __webpack_require__(1),
    toInteger = __webpack_require__(14);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * This method is like `_.findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastIndex(users, { 'user': 'barney', 'active': true });
 * // => 0
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastIndex(users, ['active', false]);
 * // => 2
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastIndex(users, 'active');
 * // => 0
 */
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = fromIndex < 0
      ? nativeMax(length + index, 0)
      : nativeMin(index, length - 1);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
}

module.exports = findLastIndex;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(23),
    map = __webpack_require__(24);

/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), 1);
}

module.exports = flatMap;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    isArguments = __webpack_require__(28),
    isArray = __webpack_require__(0);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(23),
    map = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * This method is like `_.flatMap` except that it recursively flattens the
 * mapped results.
 *
 * @static
 * @memberOf _
 * @since 4.7.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]];
 * }
 *
 * _.flatMapDeep([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMapDeep(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), INFINITY);
}

module.exports = flatMapDeep;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(23),
    map = __webpack_require__(24),
    toInteger = __webpack_require__(14);

/**
 * This method is like `_.flatMap` except that it recursively flattens the
 * mapped results up to `depth` times.
 *
 * @static
 * @memberOf _
 * @since 4.7.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]];
 * }
 *
 * _.flatMapDepth([1, 2], duplicate, 2);
 * // => [[1, 1], [2, 2]]
 */
function flatMapDepth(collection, iteratee, depth) {
  depth = depth === undefined ? 1 : toInteger(depth);
  return baseFlatten(map(collection, iteratee), depth);
}

module.exports = flatMapDepth;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(27),
    createAggregator = __webpack_require__(16);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

module.exports = groupBy;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(183),
    isArrayLike = __webpack_require__(4),
    isString = __webpack_require__(71),
    toInteger = __webpack_require__(14),
    values = __webpack_require__(25);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(38),
    baseIsNaN = __webpack_require__(184),
    strictIndexOf = __webpack_require__(185);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 184 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(21);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(39),
    baseEach = __webpack_require__(3),
    baseInvoke = __webpack_require__(188),
    baseRest = __webpack_require__(72),
    isArrayLike = __webpack_require__(4);

/**
 * Invokes the method at `path` of each element in `collection`, returning
 * an array of the results of each invoked method. Any additional arguments
 * are provided to each invoked method. If `path` is a function, it's invoked
 * for, and `this` bound to, each element in `collection`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array|Function|string} path The path of the method to invoke or
 *  the function invoked per iteration.
 * @param {...*} [args] The arguments to invoke each method with.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
 * // => [[1, 5, 7], [1, 2, 3]]
 *
 * _.invokeMap([123, 456], String.prototype.split, '');
 * // => [['1', '2', '3'], ['4', '5', '6']]
 */
var invokeMap = baseRest(function(collection, path, args) {
  var index = -1,
      isFunc = typeof path == 'function',
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value) {
    result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
  });
  return result;
});

module.exports = invokeMap;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(39),
    castPath = __webpack_require__(36),
    last = __webpack_require__(189),
    parent = __webpack_require__(190),
    toKey = __webpack_require__(12);

/**
 * The base implementation of `_.invoke` without support for individual
 * method arguments.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} args The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 */
function baseInvoke(object, path, args) {
  path = castPath(path, object);
  object = parent(object, path);
  var func = object == null ? object : object[toKey(last(path))];
  return func == null ? undefined : apply(func, object, args);
}

module.exports = baseInvoke;


/***/ }),
/* 189 */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(35),
    baseSlice = __webpack_require__(191);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),
/* 191 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(39);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(194),
    shortOut = __webpack_require__(196);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(195),
    defineProperty = __webpack_require__(44),
    identity = __webpack_require__(13);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 195 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 196 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(27),
    createAggregator = __webpack_require__(16);

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the last element responsible for generating the key. The
 * iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * var array = [
 *   { 'dir': 'left', 'code': 97 },
 *   { 'dir': 'right', 'code': 100 }
 * ];
 *
 * _.keyBy(array, function(o) {
 *   return String.fromCharCode(o.code);
 * });
 * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 *
 * _.keyBy(array, 'dir');
 * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
 */
var keyBy = createAggregator(function(result, value, key) {
  baseAssignValue(result, key, value);
});

module.exports = keyBy;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var baseOrderBy = __webpack_require__(73),
    isArray = __webpack_require__(0);

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

module.exports = orderBy;


/***/ }),
/* 199 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(201);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(11);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var createAggregator = __webpack_require__(16);

/**
 * Creates an array of elements split into two groups, the first of which
 * contains elements `predicate` returns truthy for, the second of which
 * contains elements `predicate` returns falsey for. The predicate is
 * invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the array of grouped elements.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 * _.partition(users, function(o) { return o.active; });
 * // => objects for [['fred'], ['barney', 'pebbles']]
 *
 * // The `_.matches` iteratee shorthand.
 * _.partition(users, { 'age': 1, 'active': false });
 * // => objects for [['pebbles'], ['barney', 'fred']]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.partition(users, ['active', false]);
 * // => objects for [['barney', 'pebbles'], ['fred']]
 *
 * // The `_.property` iteratee shorthand.
 * _.partition(users, 'active');
 * // => objects for [['fred'], ['barney', 'pebbles']]
 */
var partition = createAggregator(function(result, value, key) {
  result[key ? 0 : 1].push(value);
}, function() { return [[], []]; });

module.exports = partition;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(204),
    baseEach = __webpack_require__(3),
    baseIteratee = __webpack_require__(1),
    baseReduce = __webpack_require__(74),
    isArray = __webpack_require__(0);

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),
/* 204 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduceRight = __webpack_require__(206),
    baseEachRight = __webpack_require__(67),
    baseIteratee = __webpack_require__(1),
    baseReduce = __webpack_require__(74),
    isArray = __webpack_require__(0);

/**
 * This method is like `_.reduce` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduce
 * @example
 *
 * var array = [[0, 1], [2, 3], [4, 5]];
 *
 * _.reduceRight(array, function(flattened, other) {
 *   return flattened.concat(other);
 * }, []);
 * // => [4, 5, 2, 3, 0, 1]
 */
function reduceRight(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduceRight : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
}

module.exports = reduceRight;


/***/ }),
/* 206 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduceRight` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the last element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduceRight(array, iteratee, accumulator, initAccum) {
  var length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[--length];
  }
  while (length--) {
    accumulator = iteratee(accumulator, array[length], length, array);
  }
  return accumulator;
}

module.exports = arrayReduceRight;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(34),
    baseFilter = __webpack_require__(68),
    baseIteratee = __webpack_require__(1),
    isArray = __webpack_require__(0),
    negate = __webpack_require__(208);

/**
 * The opposite of `_.filter`; this method returns the elements of `collection`
 * that `predicate` does **not** return truthy for.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.filter
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': true }
 * ];
 *
 * _.reject(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.reject(users, { 'age': 40, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.reject(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.reject(users, 'active');
 * // => objects for ['barney']
 */
function reject(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, negate(baseIteratee(predicate, 3)));
}

module.exports = reject;


/***/ }),
/* 208 */
/***/ (function(module, exports) {

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

module.exports = negate;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var arraySample = __webpack_require__(75),
    baseSample = __webpack_require__(210),
    isArray = __webpack_require__(0);

/**
 * Gets a random element from `collection`.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @returns {*} Returns the random element.
 * @example
 *
 * _.sample([1, 2, 3, 4]);
 * // => 2
 */
function sample(collection) {
  var func = isArray(collection) ? arraySample : baseSample;
  return func(collection);
}

module.exports = sample;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var arraySample = __webpack_require__(75),
    values = __webpack_require__(25);

/**
 * The base implementation of `_.sample`.
 *
 * @private
 * @param {Array|Object} collection The collection to sample.
 * @returns {*} Returns the random element.
 */
function baseSample(collection) {
  return arraySample(values(collection));
}

module.exports = baseSample;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var arraySampleSize = __webpack_require__(212),
    baseSampleSize = __webpack_require__(213),
    isArray = __webpack_require__(0),
    isIterateeCall = __webpack_require__(22),
    toInteger = __webpack_require__(14);

/**
 * Gets `n` random elements at unique keys from `collection` up to the
 * size of `collection`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @param {number} [n=1] The number of elements to sample.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the random elements.
 * @example
 *
 * _.sampleSize([1, 2, 3], 2);
 * // => [3, 1]
 *
 * _.sampleSize([1, 2, 3], 4);
 * // => [2, 3, 1]
 */
function sampleSize(collection, n, guard) {
  if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
    n = 1;
  } else {
    n = toInteger(n);
  }
  var func = isArray(collection) ? arraySampleSize : baseSampleSize;
  return func(collection, n);
}

module.exports = sampleSize;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var baseClamp = __webpack_require__(77),
    copyArray = __webpack_require__(78),
    shuffleSelf = __webpack_require__(26);

/**
 * A specialized version of `_.sampleSize` for arrays.
 *
 * @private
 * @param {Array} array The array to sample.
 * @param {number} n The number of elements to sample.
 * @returns {Array} Returns the random elements.
 */
function arraySampleSize(array, n) {
  return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
}

module.exports = arraySampleSize;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var baseClamp = __webpack_require__(77),
    shuffleSelf = __webpack_require__(26),
    values = __webpack_require__(25);

/**
 * The base implementation of `_.sampleSize` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to sample.
 * @param {number} n The number of elements to sample.
 * @returns {Array} Returns the random elements.
 */
function baseSampleSize(collection, n) {
  var array = values(collection);
  return shuffleSelf(array, baseClamp(n, 0, array.length));
}

module.exports = baseSampleSize;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var arrayShuffle = __webpack_require__(215),
    baseShuffle = __webpack_require__(216),
    isArray = __webpack_require__(0);

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * _.shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */
function shuffle(collection) {
  var func = isArray(collection) ? arrayShuffle : baseShuffle;
  return func(collection);
}

module.exports = shuffle;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__(78),
    shuffleSelf = __webpack_require__(26);

/**
 * A specialized version of `_.shuffle` for arrays.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function arrayShuffle(array) {
  return shuffleSelf(copyArray(array));
}

module.exports = arrayShuffle;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var shuffleSelf = __webpack_require__(26),
    values = __webpack_require__(25);

/**
 * The base implementation of `_.shuffle`.
 *
 * @private
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function baseShuffle(collection) {
  return shuffleSelf(values(collection));
}

module.exports = baseShuffle;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(53),
    getTag = __webpack_require__(60),
    isArrayLike = __webpack_require__(4),
    isString = __webpack_require__(71),
    stringSize = __webpack_require__(218);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}

module.exports = size;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var asciiSize = __webpack_require__(219),
    hasUnicode = __webpack_require__(220),
    unicodeSize = __webpack_require__(221);

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

module.exports = stringSize;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(63);

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;


/***/ }),
/* 220 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 221 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

module.exports = unicodeSize;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var arraySome = __webpack_require__(58),
    baseIteratee = __webpack_require__(1),
    baseSome = __webpack_require__(223),
    isArray = __webpack_require__(0),
    isIterateeCall = __webpack_require__(22);

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = some;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(3);

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

module.exports = baseSome;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(23),
    baseOrderBy = __webpack_require__(73),
    baseRest = __webpack_require__(72),
    isIterateeCall = __webpack_require__(22);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _layout = __webpack_require__(40);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * OrderedTree is like Ordered but assumes there is one root
 * This way we can give non random positions to nodes on the Y-axis
 * It assumes the ordered nodes are of a perfect binary tree
 */
var OrderedTree = function (_Layout) {
  _inherits(OrderedTree, _Layout);

  function OrderedTree(graph, order) {
    _classCallCheck(this, OrderedTree);

    var _this = _possibleConstructorReturn(this, (OrderedTree.__proto__ || Object.getPrototypeOf(OrderedTree)).call(this, graph));

    _this.order = order;
    _this.layout();
    return _this;
  }

  _createClass(OrderedTree, [{
    key: 'layoutPrepare',
    value: function layoutPrepare() {
      // To reverse the order of rendering, we need to find out the
      // absolute number of levels we have. simple log math applies.
      var numNodes = this.order.length;
      var totalLevels = Math.floor(Math.log(numNodes) / Math.log(2));

      var counter = 1;
      this.order.forEach(function (node) {
        // Rank aka x coordinate
        var rank = Math.floor(Math.log(counter) / Math.log(2));
        // File relative to top
        var file = counter - Math.pow(rank, 2);

        node.layoutPosX = totalLevels - rank;
        node.layoutPosY = file;
        counter++;
      });
    }
  }]);

  return OrderedTree;
}(_layout2.default);

exports.default = OrderedTree;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collection = __webpack_require__(15);

var _layout = __webpack_require__(40);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TournamentTree = function (_Layout) {
  _inherits(TournamentTree, _Layout);

  /**
   * @param {Graph} graph
   * @param {Array[Node]} order
   */
  function TournamentTree(graph, order) {
    _classCallCheck(this, TournamentTree);

    var _this = _possibleConstructorReturn(this, (TournamentTree.__proto__ || Object.getPrototypeOf(TournamentTree)).call(this));

    _this.graph = graph;
    _this.order = order;
    _this.layout();
    return _this;
  }

  _createClass(TournamentTree, [{
    key: 'layout',
    value: function layout() {
      this.layoutPrepare();
      this.layoutCalcBounds();
    }
  }, {
    key: 'layoutPrepare',
    value: function layoutPrepare() {
      (0, _collection.each)(this.graph.nodes, function (node) {
        node.layoutPosX = 0;
        node.layoutPosY = 0;
      });

      // To reverse the order of rendering, we need to find out the
      // absolute number of levels we have. simple log math applies.
      var numNodes = this.order.length;
      var totalLevels = Math.floor(Math.log(numNodes) / Math.log(2));

      var counter = 1;
      this.order.forEach(function (node) {
        var depth = Math.floor(Math.log(counter) / Math.log(2));
        var offset = Math.pow(2, totalLevels - depth);
        var finalX = offset + (counter - Math.pow(2, depth)) * Math.pow(2, totalLevels - depth + 1);
        node.layoutPosX = finalX;
        node.layoutPosY = depth;
        counter++;
      });
    }
  }]);

  return TournamentTree;
}(_layout2.default);

exports.default = TournamentTree;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _raphael = __webpack_require__(228);

var _raphael2 = _interopRequireDefault(_raphael);

var _renderer = __webpack_require__(229);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Is not bundled for the standalone browser version (e.g. for CDN)
var Raphael = typeof window !== 'undefined' && window.Raphael || _raphael2.default;

var dragify = function dragify(shape) {
  var r = shape.paper;
  shape.items.forEach(function (item) {
    item.set = shape;
    if (item.type === 'text') {
      return;
    }
    item.node.style.cursor = 'move';
    item.drag(function dragMove(dx, dy, x, y) {
      dx = this.set.ox;
      dy = this.set.oy;
      var bBox = this.set.getBBox();
      var newX = x - dx + (bBox.x + bBox.width / 2);
      var newY = y - dy + (bBox.y + bBox.height / 2);
      var clientX = x - (newX < 20 ? newX - 20 : newX > r.width - 20 ? newX - r.width + 20 : 0);
      var clientY = y - (newY < 20 ? newY - 20 : newY > r.height - 20 ? newY - r.height + 20 : 0);
      this.set.translate(clientX - Math.round(dx), clientY - Math.round(dy));
      shape.connections.forEach(function (connection) {
        connection.draw();
      });

      this.set.ox = clientX;
      this.set.oy = clientY;
    }, function dragEnter(x, y) {
      this.set.ox = x;
      this.set.oy = y;
      this.animate({ 'fill-opacity': 0.2 }, 500);
    }, function dragOut() {
      this.animate({ 'fill-opacity': 0.0 }, 500);
    });
  });
};

var RaphaelRenderer = function (_Renderer) {
  _inherits(RaphaelRenderer, _Renderer);

  function RaphaelRenderer(element, graph, width, height) {
    _classCallCheck(this, RaphaelRenderer);

    var _this = _possibleConstructorReturn(this, (RaphaelRenderer.__proto__ || Object.getPrototypeOf(RaphaelRenderer)).call(this, element, graph, width, height));

    _this.canvas = Raphael(_this.element, _this.width, _this.height);
    _this.lineStyle = {
      stroke: '#443399',
      'stroke-width': '2px'
    };
    return _this;
  }

  _createClass(RaphaelRenderer, [{
    key: 'drawNode',
    value: function drawNode(node) {
      var color = Raphael.getColor();
      // TODO update / cache shape
      // if (node.shape) {
      //   node.shape.translate(node.point[0], node.point[1])
      //   return
      // }
      if (node.render) {
        node.shape = node.render(this.canvas, node);
      } else {
        node.shape = this.canvas.set();
        node.shape.push(this.canvas.ellipse(0, 0, 30, 20).attr({ stroke: color, 'stroke-width': 2, fill: color, 'fill-opacity': 0 })).push(this.canvas.text(0, 30, node.label || node.id)).translate(node.point[0], node.point[1]);
      }
      node.shape.connections = [];
      dragify(node.shape);
    }
  }, {
    key: 'drawEdge',
    value: function drawEdge(edge) {
      if (!edge.shape) {
        edge.shape = this.canvas.connection(edge.source.shape, edge.target.shape, edge.style);
        // edge.shape.line.attr(this.lineStyle)
        edge.source.shape.connections.push(edge.shape);
        edge.target.shape.connections.push(edge.shape);
      }
    }
  }]);

  return RaphaelRenderer;
}(_renderer2.default);

// <Raphael.fn.connection>

/* coordinates for potential connection coordinates from/to the objects */


exports.default = RaphaelRenderer;
var getConnectionPoints = function getConnectionPoints(obj1, obj2) {
  /* get bounding boxes of target and source */
  var bb1 = obj1.getBBox();
  var bb2 = obj2.getBBox();

  var off1 = 0;
  var off2 = 0;

  return [

  /* NORTH 1 */
  { x: bb1.x + bb1.width / 2, y: bb1.y - off1 },

  /* SOUTH 1 */
  { x: bb1.x + bb1.width / 2, y: bb1.y + bb1.height + off1 },

  /* WEST  1 */
  { x: bb1.x - off1, y: bb1.y + bb1.height / 2 },

  /* EAST  1 */
  { x: bb1.x + bb1.width + off1, y: bb1.y + bb1.height / 2 },

  /* NORTH 2 */
  { x: bb2.x + bb2.width / 2, y: bb2.y - off2 },

  /* SOUTH 2 */
  { x: bb2.x + bb2.width / 2, y: bb2.y + bb2.height + off2 },

  /* WEST  2 */
  { x: bb2.x - off2, y: bb2.y + bb2.height / 2 },

  /* EAST  2 */
  { x: bb2.x + bb2.width + off2, y: bb2.y + bb2.height / 2 }];
};

Raphael.fn.connection = function Connection(obj1, obj2, style) {
  var self = this;

  /* create and return new connection */
  var edge = {

    /* eslint-disable complexity */
    draw: function draw() {
      var p = getConnectionPoints(obj1, obj2);

      /* distances between objects and according coordinates connection */
      var d = {};
      var dis = [];
      var dx = void 0;
      var dy = void 0;

      /*
       * find out the best connection coordinates by trying all possible ways
       */
      /* loop the first object's connection coordinates */
      for (var i = 0; i < 4; i++) {
        /* loop the second object's connection coordinates */
        for (var j = 4; j < 8; j++) {
          dx = Math.abs(p[i].x - p[j].x);
          dy = Math.abs(p[i].y - p[j].y);
          if (i === j - 4 || (i !== 3 && j !== 6 || p[i].x < p[j].x) && (i !== 2 && j !== 7 || p[i].x > p[j].x) && (i !== 0 && j !== 5 || p[i].y > p[j].y) && (i !== 1 && j !== 4 || p[i].y < p[j].y)) {
            dis.push(dx + dy);
            d[dis[dis.length - 1].toFixed(3)] = [i, j];
          }
        }
      }
      var res = dis.length === 0 ? [0, 4] : d[Math.min.apply(Math, dis).toFixed(3)];

      /* bezier path */
      var x1 = p[res[0]].x;
      var y1 = p[res[0]].y;
      var x4 = p[res[1]].x;
      var y4 = p[res[1]].y;
      dx = Math.max(Math.abs(x1 - x4) / 2, 10);
      dy = Math.max(Math.abs(y1 - y4) / 2, 10);
      var x2 = [x1, x1, x1 - dx, x1 + dx][res[0]].toFixed(3);
      var y2 = [y1 - dy, y1 + dy, y1, y1][res[0]].toFixed(3);
      var x3 = [0, 0, 0, 0, x4, x4, x4 - dx, x4 + dx][res[1]].toFixed(3);
      var y3 = [0, 0, 0, 0, y1 + dy, y1 - dy, y4, y4][res[1]].toFixed(3);

      /* assemble path and arrow */
      var path = ['M' + x1.toFixed(3), y1.toFixed(3), 'C' + x2, y2, x3, y3, x4.toFixed(3), y4.toFixed(3)].join(',');

      /* arrow */
      if (style && style.directed) {
        (function () {
          // magnitude, length of the last path vector
          var mag = Math.sqrt((y4 - y3) * (y4 - y3) + (x4 - x3) * (x4 - x3));
          // vector normalisation to specified length
          var norm = function norm(x, l) {
            return -x * (l || 5) / mag;
          };
          // calculate array coordinates (two lines orthogonal to the path vector)
          var arr = [{
            x: (norm(x4 - x3) + norm(y4 - y3) + x4).toFixed(3),
            y: (norm(y4 - y3) + norm(x4 - x3) + y4).toFixed(3)
          }, {
            x: (norm(x4 - x3) - norm(y4 - y3) + x4).toFixed(3),
            y: (norm(y4 - y3) - norm(x4 - x3) + y4).toFixed(3)
          }];
          path = path + ',M' + arr[0].x + ',' + arr[0].y + ',L' + x4 + ',' + y4 + ',L' + arr[1].x + ',' + arr[1].y;
        })();
      }

      /* function to be used for moving existent path(s), e.g. animate() or attr() */
      var move = 'attr';

      /* applying path(s) */
      if (edge.fg) {
        edge.fg[move]({ path: path });
      } else {
        edge.fg = self.path(path).attr({ stroke: style && style.stroke || '#000', fill: 'none' }).toBack();
      }
      if (edge.bg) {
        edge.bg[move]({ path: path });
      } else if (style && style.fill && style.fill.split) {
        edge.bg = self.path(path).attr({
          stroke: style.fill.split('|')[0],
          fill: 'none',
          'stroke-width': style.fill.split('|')[1] || 3
        }).toBack();
      }

      /* setting label */
      if (style && style.label) {
        if (edge.label) {
          edge.label.attr({ x: (x1 + x4) / 2, y: (y1 + y4) / 2 });
        } else {
          edge.label = self.text((x1 + x4) / 2, (y1 + y4) / 2, style.label).attr({
            fill: '#000',
            'font-size': style['font-size'] || '10px',
            'fill-opacity': '0.6'
          });
        }
      }

      if (style && style.label && style['label-style'] && edge.label) {
        edge.label.attr(style['label-style']);
      }

      if (style && style.callback) {
        style.callback(edge);
      }
    }
  };
  edge.draw();
  return edge;
};

// </Raphael.fn.connection>

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

!function t(e,r){ true?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.Raphael=r():e.Raphael=r()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){var i,n;i=[r(1),r(3),r(4)],n=function(t){return t}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;i=[r(2)],n=function(t){function e(r){if(e.is(r,"function"))return w?r():t.on("raphael.DOMload",r);if(e.is(r,Q))return e._engine.create[z](e,r.splice(0,3+e.is(r[0],$))).add(r);var i=Array.prototype.slice.call(arguments,0);if(e.is(i[i.length-1],"function")){var n=i.pop();return w?n.call(e._engine.create[z](e,i)):t.on("raphael.DOMload",function(){n.call(e._engine.create[z](e,i))})}return e._engine.create[z](e,arguments)}function r(t){if("function"==typeof t||Object(t)!==t)return t;var e=new t.constructor;for(var i in t)t[A](i)&&(e[i]=r(t[i]));return e}function i(t,e){for(var r=0,i=t.length;r<i;r++)if(t[r]===e)return t.push(t.splice(r,1)[0])}function n(t,e,r){function n(){var a=Array.prototype.slice.call(arguments,0),s=a.join("␀"),o=n.cache=n.cache||{},l=n.count=n.count||[];return o[A](s)?(i(l,s),r?r(o[s]):o[s]):(l.length>=1e3&&delete o[l.shift()],l.push(s),o[s]=t[z](e,a),r?r(o[s]):o[s])}return n}function a(){return this.hex}function s(t,e){for(var r=[],i=0,n=t.length;n-2*!e>i;i+=2){var a=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}];e?i?n-4==i?a[3]={x:+t[0],y:+t[1]}:n-2==i&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[n-2],y:+t[n-1]}:n-4==i?a[3]=a[2]:i||(a[0]={x:+t[i],y:+t[i+1]}),r.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return r}function o(t,e,r,i,n){var a=-3*e+9*r-9*i+3*n,s=t*a+6*e-12*r+6*i;return t*s-3*e+3*r}function l(t,e,r,i,n,a,s,l,h){null==h&&(h=1),h=h>1?1:h<0?0:h;for(var u=h/2,c=12,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;g<c;g++){var v=u*f[g]+u,x=o(v,t,r,n,s),y=o(v,e,i,a,l),m=x*x+y*y;d+=p[g]*Y.sqrt(m)}return u*d}function h(t,e,r,i,n,a,s,o,h){if(!(h<0||l(t,e,r,i,n,a,s,o)<h)){var u=1,c=u/2,f=u-c,p,d=.01;for(p=l(t,e,r,i,n,a,s,o,f);H(p-h)>d;)c/=2,f+=(p<h?1:-1)*c,p=l(t,e,r,i,n,a,s,o,f);return f}}function u(t,e,r,i,n,a,s,o){if(!(W(t,r)<G(n,s)||G(t,r)>W(n,s)||W(e,i)<G(a,o)||G(e,i)>W(a,o))){var l=(t*i-e*r)*(n-s)-(t-r)*(n*o-a*s),h=(t*i-e*r)*(a-o)-(e-i)*(n*o-a*s),u=(t-r)*(a-o)-(e-i)*(n-s);if(u){var c=l/u,f=h/u,p=+c.toFixed(2),d=+f.toFixed(2);if(!(p<+G(t,r).toFixed(2)||p>+W(t,r).toFixed(2)||p<+G(n,s).toFixed(2)||p>+W(n,s).toFixed(2)||d<+G(e,i).toFixed(2)||d>+W(e,i).toFixed(2)||d<+G(a,o).toFixed(2)||d>+W(a,o).toFixed(2)))return{x:c,y:f}}}}function c(t,e){return p(t,e)}function f(t,e){return p(t,e,1)}function p(t,r,i){var n=e.bezierBBox(t),a=e.bezierBBox(r);if(!e.isBBoxIntersect(n,a))return i?0:[];for(var s=l.apply(0,t),o=l.apply(0,r),h=W(~~(s/5),1),c=W(~~(o/5),1),f=[],p=[],d={},g=i?0:[],v=0;v<h+1;v++){var x=e.findDotsAtSegment.apply(e,t.concat(v/h));f.push({x:x.x,y:x.y,t:v/h})}for(v=0;v<c+1;v++)x=e.findDotsAtSegment.apply(e,r.concat(v/c)),p.push({x:x.x,y:x.y,t:v/c});for(v=0;v<h;v++)for(var y=0;y<c;y++){var m=f[v],b=f[v+1],_=p[y],w=p[y+1],k=H(b.x-m.x)<.001?"y":"x",B=H(w.x-_.x)<.001?"y":"x",C=u(m.x,m.y,b.x,b.y,_.x,_.y,w.x,w.y);if(C){if(d[C.x.toFixed(4)]==C.y.toFixed(4))continue;d[C.x.toFixed(4)]=C.y.toFixed(4);var S=m.t+H((C[k]-m[k])/(b[k]-m[k]))*(b.t-m.t),A=_.t+H((C[B]-_[B])/(w[B]-_[B]))*(w.t-_.t);S>=0&&S<=1.001&&A>=0&&A<=1.001&&(i?g++:g.push({x:C.x,y:C.y,t1:G(S,1),t2:G(A,1)}))}}return g}function d(t,r,i){t=e._path2curve(t),r=e._path2curve(r);for(var n,a,s,o,l,h,u,c,f,d,g=i?0:[],v=0,x=t.length;v<x;v++){var y=t[v];if("M"==y[0])n=l=y[1],a=h=y[2];else{"C"==y[0]?(f=[n,a].concat(y.slice(1)),n=f[6],a=f[7]):(f=[n,a,n,a,l,h,l,h],n=l,a=h);for(var m=0,b=r.length;m<b;m++){var _=r[m];if("M"==_[0])s=u=_[1],o=c=_[2];else{"C"==_[0]?(d=[s,o].concat(_.slice(1)),s=d[6],o=d[7]):(d=[s,o,s,o,u,c,u,c],s=u,o=c);var w=p(f,d,i);if(i)g+=w;else{for(var k=0,B=w.length;k<B;k++)w[k].segment1=v,w[k].segment2=m,w[k].bez1=f,w[k].bez2=d;g=g.concat(w)}}}}}return g}function g(t,e,r,i,n,a){null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+i,this.e=+n,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function v(){return this.x+j+this.y}function x(){return this.x+j+this.y+j+this.width+" × "+this.height}function y(t,e,r,i,n,a){function s(t){return((c*t+u)*t+h)*t}function o(t,e){var r=l(t,e);return((d*r+p)*r+f)*r}function l(t,e){var r,i,n,a,o,l;for(n=t,l=0;l<8;l++){if(a=s(n)-t,H(a)<e)return n;if(o=(3*c*n+2*u)*n+h,H(o)<1e-6)break;n-=a/o}if(r=0,i=1,n=t,n<r)return r;if(n>i)return i;for(;r<i;){if(a=s(n),H(a-t)<e)return n;t>a?r=n:i=n,n=(i-r)/2+r}return n}var h=3*e,u=3*(i-e)-h,c=1-h-u,f=3*r,p=3*(n-r)-f,d=1-f-p;return o(t,1/(200*a))}function m(t,e){var r=[],i={};if(this.ms=e,this.times=1,t){for(var n in t)t[A](n)&&(i[ht(n)]=t[n],r.push(ht(n)));r.sort(Bt)}this.anim=i,this.top=r[r.length-1],this.percents=r}function b(r,i,n,a,s,o){n=ht(n);var l,h,u,c=[],f,p,d,v=r.ms,x={},m={},b={};if(a)for(w=0,B=Ee.length;w<B;w++){var _=Ee[w];if(_.el.id==i.id&&_.anim==r){_.percent!=n?(Ee.splice(w,1),u=1):h=_,i.attr(_.totalOrigin);break}}else a=+m;for(var w=0,B=r.percents.length;w<B;w++){if(r.percents[w]==n||r.percents[w]>a*r.top){n=r.percents[w],p=r.percents[w-1]||0,v=v/r.top*(n-p),f=r.percents[w+1],l=r.anim[n];break}a&&i.attr(r.anim[r.percents[w]])}if(l){if(h)h.initstatus=a,h.start=new Date-h.ms*a;else{for(var C in l)if(l[A](C)&&(pt[A](C)||i.paper.customAttributes[A](C)))switch(x[C]=i.attr(C),null==x[C]&&(x[C]=ft[C]),m[C]=l[C],pt[C]){case $:b[C]=(m[C]-x[C])/v;break;case"colour":x[C]=e.getRGB(x[C]);var S=e.getRGB(m[C]);b[C]={r:(S.r-x[C].r)/v,g:(S.g-x[C].g)/v,b:(S.b-x[C].b)/v};break;case"path":var T=Qt(x[C],m[C]),E=T[1];for(x[C]=T[0],b[C]=[],w=0,B=x[C].length;w<B;w++){b[C][w]=[0];for(var M=1,N=x[C][w].length;M<N;M++)b[C][w][M]=(E[w][M]-x[C][w][M])/v}break;case"transform":var L=i._,z=le(L[C],m[C]);if(z)for(x[C]=z.from,m[C]=z.to,b[C]=[],b[C].real=!0,w=0,B=x[C].length;w<B;w++)for(b[C][w]=[x[C][w][0]],M=1,N=x[C][w].length;M<N;M++)b[C][w][M]=(m[C][w][M]-x[C][w][M])/v;else{var F=i.matrix||new g,R={_:{transform:L.transform},getBBox:function(){return i.getBBox(1)}};x[C]=[F.a,F.b,F.c,F.d,F.e,F.f],se(R,m[C]),m[C]=R._.transform,b[C]=[(R.matrix.a-F.a)/v,(R.matrix.b-F.b)/v,(R.matrix.c-F.c)/v,(R.matrix.d-F.d)/v,(R.matrix.e-F.e)/v,(R.matrix.f-F.f)/v]}break;case"csv":var j=I(l[C])[q](k),D=I(x[C])[q](k);if("clip-rect"==C)for(x[C]=D,b[C]=[],w=D.length;w--;)b[C][w]=(j[w]-x[C][w])/v;m[C]=j;break;default:for(j=[][P](l[C]),D=[][P](x[C]),b[C]=[],w=i.paper.customAttributes[C].length;w--;)b[C][w]=((j[w]||0)-(D[w]||0))/v}var V=l.easing,O=e.easing_formulas[V];if(!O)if(O=I(V).match(st),O&&5==O.length){var Y=O;O=function(t){return y(t,+Y[1],+Y[2],+Y[3],+Y[4],v)}}else O=St;if(d=l.start||r.start||+new Date,_={anim:r,percent:n,timestamp:d,start:d+(r.del||0),status:0,initstatus:a||0,stop:!1,ms:v,easing:O,from:x,diff:b,to:m,el:i,callback:l.callback,prev:p,next:f,repeat:o||r.times,origin:i.attr(),totalOrigin:s},Ee.push(_),a&&!h&&!u&&(_.stop=!0,_.start=new Date-v*a,1==Ee.length))return Ne();u&&(_.start=new Date-_.ms*a),1==Ee.length&&Me(Ne)}t("raphael.anim.start."+i.id,i,r)}}function _(t){for(var e=0;e<Ee.length;e++)Ee[e].el.paper==t&&Ee.splice(e--,1)}e.version="2.2.0",e.eve=t;var w,k=/[, ]+/,B={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},C=/\{(\d+)\}/g,S="prototype",A="hasOwnProperty",T={doc:document,win:window},E={was:Object.prototype[A].call(T.win,"Raphael"),is:T.win.Raphael},M=function(){this.ca=this.customAttributes={}},N,L="appendChild",z="apply",P="concat",F="ontouchstart"in T.win||T.win.DocumentTouch&&T.doc instanceof DocumentTouch,R="",j=" ",I=String,q="split",D="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[q](j),V={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},O=I.prototype.toLowerCase,Y=Math,W=Y.max,G=Y.min,H=Y.abs,X=Y.pow,U=Y.PI,$="number",Z="string",Q="array",J="toString",K="fill",tt=Object.prototype.toString,et={},rt="push",it=e._ISURL=/^url\(['"]?(.+?)['"]?\)$/i,nt=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,at={NaN:1,Infinity:1,"-Infinity":1},st=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,ot=Y.round,lt="setAttribute",ht=parseFloat,ut=parseInt,ct=I.prototype.toUpperCase,ft=e._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0,"class":""},pt=e._availableAnimAttrs={blur:$,"clip-rect":"csv",cx:$,cy:$,fill:"colour","fill-opacity":$,"font-size":$,height:$,opacity:$,path:"path",r:$,rx:$,ry:$,stroke:"colour","stroke-opacity":$,"stroke-width":$,transform:"transform",width:$,x:$,y:$},dt=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,gt=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,vt={hs:1,rg:1},xt=/,?([achlmqrstvxz]),?/gi,yt=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,mt=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,bt=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,_t=e._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,wt={},kt=function(t,e){return t.key-e.key},Bt=function(t,e){return ht(t)-ht(e)},Ct=function(){},St=function(t){return t},At=e._rectPath=function(t,e,r,i,n){return n?[["M",t+n,e],["l",r-2*n,0],["a",n,n,0,0,1,n,n],["l",0,i-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-r,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-i],["a",n,n,0,0,1,n,-n],["z"]]:[["M",t,e],["l",r,0],["l",0,i],["l",-r,0],["z"]]},Tt=function(t,e,r,i){return null==i&&(i=r),[["M",t,e],["m",0,-i],["a",r,i,0,1,1,0,2*i],["a",r,i,0,1,1,0,-2*i],["z"]]},Et=e._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;return Tt(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return Tt(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return At(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return At(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return At(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return At(e.x,e.y,e.width,e.height)}},Mt=e.mapPath=function(t,e){if(!e)return t;var r,i,n,a,s,o,l;for(t=Qt(t),n=0,s=t.length;n<s;n++)for(l=t[n],a=1,o=l.length;a<o;a+=2)r=e.x(l[a],l[a+1]),i=e.y(l[a],l[a+1]),l[a]=r,l[a+1]=i;return t};if(e._g=T,e.type=T.win.SVGAngle||T.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==e.type){var Nt=T.doc.createElement("div"),Lt;if(Nt.innerHTML='<v:shape adj="1"/>',Lt=Nt.firstChild,Lt.style.behavior="url(#default#VML)",!Lt||"object"!=typeof Lt.adj)return e.type=R;Nt=null}e.svg=!(e.vml="VML"==e.type),e._Paper=M,e.fn=N=M.prototype=e.prototype,e._id=0,e.is=function(t,e){return e=O.call(e),"finite"==e?!at[A](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||tt.call(t).slice(8,-1).toLowerCase()==e},e.angle=function(t,r,i,n,a,s){if(null==a){var o=t-i,l=r-n;return o||l?(180+180*Y.atan2(-l,-o)/U+360)%360:0}return e.angle(t,r,a,s)-e.angle(i,n,a,s)},e.rad=function(t){return t%360*U/180},e.deg=function(t){return Math.round(180*t/U%360*1e3)/1e3},e.snapTo=function(t,r,i){if(i=e.is(i,"finite")?i:10,e.is(t,Q)){for(var n=t.length;n--;)if(H(t[n]-r)<=i)return t[n]}else{t=+t;var a=r%t;if(a<i)return r-a;if(a>t-i)return r-a+t}return r};var zt=e.createUUID=function(t,e){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase()}}(/[xy]/g,function(t){var e=16*Y.random()|0,r="x"==t?e:3&e|8;return r.toString(16)});e.setWindow=function(r){t("raphael.setWindow",e,T.win,r),T.win=r,T.doc=T.win.document,e._engine.initWin&&e._engine.initWin(T.win)};var Pt=function(t){if(e.vml){var r=/^\s+|\s+$/g,i;try{var a=new ActiveXObject("htmlfile");a.write("<body>"),a.close(),i=a.body}catch(s){i=createPopup().document.body}var o=i.createTextRange();Pt=n(function(t){try{i.style.color=I(t).replace(r,R);var e=o.queryCommandValue("ForeColor");return e=(255&e)<<16|65280&e|(16711680&e)>>>16,"#"+("000000"+e.toString(16)).slice(-6)}catch(n){return"none"}})}else{var l=T.doc.createElement("i");l.title="Raphaël Colour Picker",l.style.display="none",T.doc.body.appendChild(l),Pt=n(function(t){return l.style.color=t,T.doc.defaultView.getComputedStyle(l,R).getPropertyValue("color")})}return Pt(t)},Ft=function(){return"hsb("+[this.h,this.s,this.b]+")"},Rt=function(){return"hsl("+[this.h,this.s,this.l]+")"},jt=function(){return this.hex},It=function(t,r,i){if(null==r&&e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(i=t.b,r=t.g,t=t.r),null==r&&e.is(t,Z)){var n=e.getRGB(t);t=n.r,r=n.g,i=n.b}return(t>1||r>1||i>1)&&(t/=255,r/=255,i/=255),[t,r,i]},qt=function(t,r,i,n){t*=255,r*=255,i*=255;var a={r:t,g:r,b:i,hex:e.rgb(t,r,i),toString:jt};return e.is(n,"finite")&&(a.opacity=n),a};e.color=function(t){var r;return e.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(r=e.hsb2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):e.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(r=e.hsl2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):(e.is(t,"string")&&(t=e.getRGB(t)),e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(r=e.rgb2hsl(t),t.h=r.h,t.s=r.s,t.l=r.l,r=e.rgb2hsb(t),t.v=r.b):(t={hex:"none"},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1)),t.toString=jt,t},e.hsb2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,i=t.o,t=t.h),t*=360;var n,a,s,o,l;return t=t%360/60,l=r*e,o=l*(1-H(t%2-1)),n=a=s=r-l,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],qt(n,a,s,i)},e.hsl2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),t*=360;var n,a,s,o,l;return t=t%360/60,l=2*e*(r<.5?r:1-r),o=l*(1-H(t%2-1)),n=a=s=r-l/2,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],qt(n,a,s,i)},e.rgb2hsb=function(t,e,r){r=It(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s;return a=W(t,e,r),s=a-G(t,e,r),i=0==s?null:a==t?(e-r)/s:a==e?(r-t)/s+2:(t-e)/s+4,i=(i+360)%6*60/360,n=0==s?0:s/a,{h:i,s:n,b:a,toString:Ft}},e.rgb2hsl=function(t,e,r){r=It(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s,o,l;return s=W(t,e,r),o=G(t,e,r),l=s-o,i=0==l?null:s==t?(e-r)/l:s==e?(r-t)/l+2:(t-e)/l+4,i=(i+360)%6*60/360,a=(s+o)/2,n=0==l?0:a<.5?l/(2*a):l/(2-2*a),{h:i,s:n,l:a,toString:Rt}},e._path2string=function(){return this.join(",").replace(xt,"$1")};var Dt=e._preload=function(t,e){var r=T.doc.createElement("img");r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){e.call(this),this.onload=null,T.doc.body.removeChild(this)},r.onerror=function(){T.doc.body.removeChild(this)},T.doc.body.appendChild(r),r.src=t};e.getRGB=n(function(t){if(!t||(t=I(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:a};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:a};!(vt[A](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=Pt(t));var r,i,n,s,o,l,h,u=t.match(nt);return u?(u[2]&&(s=ut(u[2].substring(5),16),n=ut(u[2].substring(3,5),16),i=ut(u[2].substring(1,3),16)),u[3]&&(s=ut((l=u[3].charAt(3))+l,16),n=ut((l=u[3].charAt(2))+l,16),i=ut((l=u[3].charAt(1))+l,16)),u[4]&&(h=u[4][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),"rgba"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100)),u[5]?(h=u[5][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),("deg"==h[0].slice(-3)||"°"==h[0].slice(-1))&&(i/=360),"hsba"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100),e.hsb2rgb(i,n,s,o)):u[6]?(h=u[6][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),("deg"==h[0].slice(-3)||"°"==h[0].slice(-1))&&(i/=360),"hsla"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100),e.hsl2rgb(i,n,s,o)):(u={r:i,g:n,b:s,toString:a},u.hex="#"+(16777216|s|n<<8|i<<16).toString(16).slice(1),e.is(o,"finite")&&(u.opacity=o),u)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:a}},e),e.hsb=n(function(t,r,i){return e.hsb2rgb(t,r,i).hex}),e.hsl=n(function(t,r,i){return e.hsl2rgb(t,r,i).hex}),e.rgb=n(function(t,e,r){function i(t){return t+.5|0}return"#"+(16777216|i(r)|i(e)<<8|i(t)<<16).toString(16).slice(1)}),e.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,e.s<=0&&(this.getColor.start={h:0,s:1,b:e.b})),r.hex},e.getColor.reset=function(){delete this.start},e.parsePathString=function(t){if(!t)return null;var r=Vt(t);if(r.arr)return Yt(r.arr);var i={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},n=[];return e.is(t,Q)&&e.is(t[0],Q)&&(n=Yt(t)),n.length||I(t).replace(yt,function(t,e,r){var a=[],s=e.toLowerCase();if(r.replace(bt,function(t,e){e&&a.push(+e)}),"m"==s&&a.length>2&&(n.push([e][P](a.splice(0,2))),s="l",e="m"==e?"l":"L"),"r"==s)n.push([e][P](a));else for(;a.length>=i[s]&&(n.push([e][P](a.splice(0,i[s]))),i[s]););}),n.toString=e._path2string,r.arr=Yt(n),n},e.parseTransformString=n(function(t){if(!t)return null;var r={r:3,s:4,t:2,m:6},i=[];return e.is(t,Q)&&e.is(t[0],Q)&&(i=Yt(t)),i.length||I(t).replace(mt,function(t,e,r){var n=[],a=O.call(e);r.replace(bt,function(t,e){e&&n.push(+e)}),i.push([e][P](n))}),i.toString=e._path2string,i});var Vt=function(t){var e=Vt.ps=Vt.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var r in e)e[A](r)&&r!=t&&(e[r].sleep--,!e[r].sleep&&delete e[r])}),e[t]};e.findDotsAtSegment=function(t,e,r,i,n,a,s,o,l){var h=1-l,u=X(h,3),c=X(h,2),f=l*l,p=f*l,d=u*t+3*c*l*r+3*h*l*l*n+p*s,g=u*e+3*c*l*i+3*h*l*l*a+p*o,v=t+2*l*(r-t)+f*(n-2*r+t),x=e+2*l*(i-e)+f*(a-2*i+e),y=r+2*l*(n-r)+f*(s-2*n+r),m=i+2*l*(a-i)+f*(o-2*a+i),b=h*t+l*r,_=h*e+l*i,w=h*n+l*s,k=h*a+l*o,B=90-180*Y.atan2(v-y,x-m)/U;return(v>y||x<m)&&(B+=180),{x:d,y:g,m:{x:v,y:x},n:{x:y,y:m},start:{x:b,y:_},end:{x:w,y:k},alpha:B}},e.bezierBBox=function(t,r,i,n,a,s,o,l){e.is(t,"array")||(t=[t,r,i,n,a,s,o,l]);var h=Zt.apply(null,t);return{x:h.min.x,y:h.min.y,x2:h.max.x,y2:h.max.y,width:h.max.x-h.min.x,height:h.max.y-h.min.y}},e.isPointInsideBBox=function(t,e,r){return e>=t.x&&e<=t.x2&&r>=t.y&&r<=t.y2},e.isBBoxIntersect=function(t,r){var i=e.isPointInsideBBox;return i(r,t.x,t.y)||i(r,t.x2,t.y)||i(r,t.x,t.y2)||i(r,t.x2,t.y2)||i(t,r.x,r.y)||i(t,r.x2,r.y)||i(t,r.x,r.y2)||i(t,r.x2,r.y2)||(t.x<r.x2&&t.x>r.x||r.x<t.x2&&r.x>t.x)&&(t.y<r.y2&&t.y>r.y||r.y<t.y2&&r.y>t.y)},e.pathIntersection=function(t,e){return d(t,e)},e.pathIntersectionNumber=function(t,e){return d(t,e,1)},e.isPointInsidePath=function(t,r,i){var n=e.pathBBox(t);return e.isPointInsideBBox(n,r,i)&&d(t,[["M",r,i],["H",n.x2+10]],1)%2==1},e._removedFactory=function(e){return function(){t("raphael.log",null,"Raphaël: you are calling to method “"+e+"” of removed object",e)}};var Ot=e.pathBBox=function(t){var e=Vt(t);if(e.bbox)return r(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};t=Qt(t);for(var i=0,n=0,a=[],s=[],o,l=0,h=t.length;l<h;l++)if(o=t[l],"M"==o[0])i=o[1],n=o[2],a.push(i),s.push(n);else{var u=Zt(i,n,o[1],o[2],o[3],o[4],o[5],o[6]);a=a[P](u.min.x,u.max.x),s=s[P](u.min.y,u.max.y),i=o[5],n=o[6]}var c=G[z](0,a),f=G[z](0,s),p=W[z](0,a),d=W[z](0,s),g=p-c,v=d-f,x={x:c,y:f,x2:p,y2:d,width:g,height:v,cx:c+g/2,cy:f+v/2};return e.bbox=r(x),x},Yt=function(t){var i=r(t);return i.toString=e._path2string,i},Wt=e._pathToRelative=function(t){var r=Vt(t);if(r.rel)return Yt(r.rel);e.is(t,Q)&&e.is(t&&t[0],Q)||(t=e.parsePathString(t));var i=[],n=0,a=0,s=0,o=0,l=0;"M"==t[0][0]&&(n=t[0][1],a=t[0][2],s=n,o=a,l++,i.push(["M",n,a]));for(var h=l,u=t.length;h<u;h++){var c=i[h]=[],f=t[h];if(f[0]!=O.call(f[0]))switch(c[0]=O.call(f[0]),c[0]){case"a":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-n).toFixed(3),c[7]=+(f[7]-a).toFixed(3);break;case"v":c[1]=+(f[1]-a).toFixed(3);break;case"m":s=f[1],o=f[2];default:for(var p=1,d=f.length;p<d;p++)c[p]=+(f[p]-(p%2?n:a)).toFixed(3)}else{c=i[h]=[],"m"==f[0]&&(s=f[1]+n,o=f[2]+a);for(var g=0,v=f.length;g<v;g++)i[h][g]=f[g]}var x=i[h].length;switch(i[h][0]){case"z":n=s,a=o;break;case"h":n+=+i[h][x-1];break;case"v":a+=+i[h][x-1];break;default:n+=+i[h][x-2],a+=+i[h][x-1]}}return i.toString=e._path2string,r.rel=Yt(i),i},Gt=e._pathToAbsolute=function(t){var r=Vt(t);if(r.abs)return Yt(r.abs);if(e.is(t,Q)&&e.is(t&&t[0],Q)||(t=e.parsePathString(t)),!t||!t.length)return[["M",0,0]];var i=[],n=0,a=0,o=0,l=0,h=0;"M"==t[0][0]&&(n=+t[0][1],a=+t[0][2],o=n,l=a,h++,i[0]=["M",n,a]);for(var u=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),c,f,p=h,d=t.length;p<d;p++){if(i.push(c=[]),f=t[p],f[0]!=ct.call(f[0]))switch(c[0]=ct.call(f[0]),c[0]){case"A":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]+n),c[7]=+(f[7]+a);break;case"V":c[1]=+f[1]+a;break;case"H":c[1]=+f[1]+n;break;case"R":for(var g=[n,a][P](f.slice(1)),v=2,x=g.length;v<x;v++)g[v]=+g[v]+n,g[++v]=+g[v]+a;i.pop(),i=i[P](s(g,u));break;case"M":o=+f[1]+n,l=+f[2]+a;default:for(v=1,x=f.length;v<x;v++)c[v]=+f[v]+(v%2?n:a)}else if("R"==f[0])g=[n,a][P](f.slice(1)),i.pop(),i=i[P](s(g,u)),c=["R"][P](f.slice(-2));else for(var y=0,m=f.length;y<m;y++)c[y]=f[y];switch(c[0]){case"Z":n=o,a=l;break;case"H":n=c[1];break;case"V":a=c[1];break;case"M":o=c[c.length-2],l=c[c.length-1];default:n=c[c.length-2],a=c[c.length-1]}}return i.toString=e._path2string,r.abs=Yt(i),i},Ht=function(t,e,r,i){return[t,e,r,i,r,i]},Xt=function(t,e,r,i,n,a){var s=1/3,o=2/3;return[s*t+o*r,s*e+o*i,s*n+o*r,s*a+o*i,n,a]},Ut=function(t,e,r,i,a,s,o,l,h,u){var c=120*U/180,f=U/180*(+a||0),p=[],d,g=n(function(t,e,r){var i=t*Y.cos(r)-e*Y.sin(r),n=t*Y.sin(r)+e*Y.cos(r);return{x:i,y:n}});if(u)S=u[0],A=u[1],B=u[2],C=u[3];else{d=g(t,e,-f),t=d.x,e=d.y,d=g(l,h,-f),l=d.x,h=d.y;var v=Y.cos(U/180*a),x=Y.sin(U/180*a),y=(t-l)/2,m=(e-h)/2,b=y*y/(r*r)+m*m/(i*i);b>1&&(b=Y.sqrt(b),r=b*r,i=b*i);var _=r*r,w=i*i,k=(s==o?-1:1)*Y.sqrt(H((_*w-_*m*m-w*y*y)/(_*m*m+w*y*y))),B=k*r*m/i+(t+l)/2,C=k*-i*y/r+(e+h)/2,S=Y.asin(((e-C)/i).toFixed(9)),A=Y.asin(((h-C)/i).toFixed(9));S=t<B?U-S:S,A=l<B?U-A:A,S<0&&(S=2*U+S),A<0&&(A=2*U+A),o&&S>A&&(S-=2*U),!o&&A>S&&(A-=2*U)}var T=A-S;if(H(T)>c){var E=A,M=l,N=h;A=S+c*(o&&A>S?1:-1),l=B+r*Y.cos(A),h=C+i*Y.sin(A),p=Ut(l,h,r,i,a,0,o,M,N,[A,E,B,C])}T=A-S;var L=Y.cos(S),z=Y.sin(S),F=Y.cos(A),R=Y.sin(A),j=Y.tan(T/4),I=4/3*r*j,D=4/3*i*j,V=[t,e],O=[t+I*z,e-D*L],W=[l+I*R,h-D*F],G=[l,h];if(O[0]=2*V[0]-O[0],O[1]=2*V[1]-O[1],u)return[O,W,G][P](p);p=[O,W,G][P](p).join()[q](",");for(var X=[],$=0,Z=p.length;$<Z;$++)X[$]=$%2?g(p[$-1],p[$],f).y:g(p[$],p[$+1],f).x;return X},$t=function(t,e,r,i,n,a,s,o,l){var h=1-l;return{x:X(h,3)*t+3*X(h,2)*l*r+3*h*l*l*n+X(l,3)*s,y:X(h,3)*e+3*X(h,2)*l*i+3*h*l*l*a+X(l,3)*o}},Zt=n(function(t,e,r,i,n,a,s,o){var l=n-2*r+t-(s-2*n+r),h=2*(r-t)-2*(n-r),u=t-r,c=(-h+Y.sqrt(h*h-4*l*u))/2/l,f=(-h-Y.sqrt(h*h-4*l*u))/2/l,p=[e,o],d=[t,s],g;return H(c)>"1e12"&&(c=.5),H(f)>"1e12"&&(f=.5),c>0&&c<1&&(g=$t(t,e,r,i,n,a,s,o,c),d.push(g.x),p.push(g.y)),f>0&&f<1&&(g=$t(t,e,r,i,n,a,s,o,f),d.push(g.x),p.push(g.y)),l=a-2*i+e-(o-2*a+i),h=2*(i-e)-2*(a-i),u=e-i,c=(-h+Y.sqrt(h*h-4*l*u))/2/l,f=(-h-Y.sqrt(h*h-4*l*u))/2/l,H(c)>"1e12"&&(c=.5),H(f)>"1e12"&&(f=.5),c>0&&c<1&&(g=$t(t,e,r,i,n,a,s,o,c),d.push(g.x),p.push(g.y)),f>0&&f<1&&(g=$t(t,e,r,i,n,a,s,o,f),d.push(g.x),p.push(g.y)),{min:{x:G[z](0,d),y:G[z](0,p)},max:{x:W[z](0,d),y:W[z](0,p)}}}),Qt=e._path2curve=n(function(t,e){var r=!e&&Vt(t);if(!e&&r.curve)return Yt(r.curve);for(var i=Gt(t),n=e&&Gt(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=(function(t,e,r){var i,n,a={T:1,Q:1};if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in a)&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"][P](Ut[z](0,[e.x,e.y][P](t.slice(1))));break;case"S":"C"==r||"S"==r?(i=2*e.x-e.bx,n=2*e.y-e.by):(i=e.x,n=e.y),t=["C",i,n][P](t.slice(1));break;case"T":"Q"==r||"T"==r?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"][P](Xt(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][P](Xt(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"][P](Ht(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][P](Ht(e.x,e.y,t[1],e.y));break;case"V":t=["C"][P](Ht(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][P](Ht(e.x,e.y,e.X,e.Y))}return t}),l=function(t,e){if(t[e].length>7){t[e].shift();for(var r=t[e];r.length;)u[e]="A",n&&(c[e]="A"),t.splice(e++,0,["C"][P](r.splice(0,6)));t.splice(e,1),g=W(i.length,n&&n.length||0)}},h=function(t,e,r,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),r.bx=0,r.by=0,r.x=t[s][1],r.y=t[s][2],g=W(i.length,n&&n.length||0))},u=[],c=[],f="",p="",d=0,g=W(i.length,n&&n.length||0);d<g;d++){i[d]&&(f=i[d][0]),"C"!=f&&(u[d]=f,d&&(p=u[d-1])),i[d]=o(i[d],a,p),"A"!=u[d]&&"C"==f&&(u[d]="C"),l(i,d),n&&(n[d]&&(f=n[d][0]),"C"!=f&&(c[d]=f,d&&(p=c[d-1])),n[d]=o(n[d],s,p),"A"!=c[d]&&"C"==f&&(c[d]="C"),l(n,d)),h(i,n,a,s,d),h(n,i,s,a,d);var v=i[d],x=n&&n[d],y=v.length,m=n&&x.length;a.x=v[y-2],a.y=v[y-1],a.bx=ht(v[y-4])||a.x,a.by=ht(v[y-3])||a.y,s.bx=n&&(ht(x[m-4])||s.x),s.by=n&&(ht(x[m-3])||s.y),s.x=n&&x[m-2],s.y=n&&x[m-1]}return n||(r.curve=Yt(i)),n?[i,n]:i},null,Yt),Jt=e._parseDots=n(function(t){for(var r=[],i=0,n=t.length;i<n;i++){var a={},s=t[i].match(/^([^:]*):?([\d\.]*)/);if(a.color=e.getRGB(s[1]),a.color.error)return null;a.opacity=a.color.opacity,a.color=a.color.hex,s[2]&&(a.offset=s[2]+"%"),r.push(a)}for(i=1,n=r.length-1;i<n;i++)if(!r[i].offset){for(var o=ht(r[i-1].offset||0),l=0,h=i+1;h<n;h++)if(r[h].offset){l=r[h].offset;break}l||(l=100,h=n),l=ht(l);for(var u=(l-o)/(h-i+1);i<h;i++)o+=u,r[i].offset=o+"%"}return r}),Kt=e._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)},te=e._tofront=function(t,e){e.top!==t&&(Kt(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},ee=e._toback=function(t,e){e.bottom!==t&&(Kt(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},re=e._insertafter=function(t,e,r){Kt(t,r),e==r.top&&(r.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},ie=e._insertbefore=function(t,e,r){Kt(t,r),e==r.bottom&&(r.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},ne=e.toMatrix=function(t,e){var r=Ot(t),i={_:{transform:R},getBBox:function(){return r}};return se(i,e),i.matrix},ae=e.transformPath=function(t,e){return Mt(t,ne(t,e))},se=e._extractTransform=function(t,r){if(null==r)return t._.transform;r=I(r).replace(/\.{3}|\u2026/g,t._.transform||R);var i=e.parseTransformString(r),n=0,a=0,s=0,o=1,l=1,h=t._,u=new g;if(h.transform=i||[],i)for(var c=0,f=i.length;c<f;c++){var p=i[c],d=p.length,v=I(p[0]).toLowerCase(),x=p[0]!=v,y=x?u.invert():0,m,b,_,w,k;"t"==v&&3==d?x?(m=y.x(0,0),b=y.y(0,0),_=y.x(p[1],p[2]),w=y.y(p[1],p[2]),u.translate(_-m,w-b)):u.translate(p[1],p[2]):"r"==v?2==d?(k=k||t.getBBox(1),u.rotate(p[1],k.x+k.width/2,k.y+k.height/2),n+=p[1]):4==d&&(x?(_=y.x(p[2],p[3]),w=y.y(p[2],p[3]),u.rotate(p[1],_,w)):u.rotate(p[1],p[2],p[3]),n+=p[1]):"s"==v?2==d||3==d?(k=k||t.getBBox(1),u.scale(p[1],p[d-1],k.x+k.width/2,k.y+k.height/2),o*=p[1],l*=p[d-1]):5==d&&(x?(_=y.x(p[3],p[4]),w=y.y(p[3],p[4]),u.scale(p[1],p[2],_,w)):u.scale(p[1],p[2],p[3],p[4]),o*=p[1],l*=p[2]):"m"==v&&7==d&&u.add(p[1],p[2],p[3],p[4],p[5],p[6]),h.dirtyT=1,t.matrix=u}t.matrix=u,h.sx=o,h.sy=l,h.deg=n,h.dx=a=u.e,h.dy=s=u.f,1==o&&1==l&&!n&&h.bbox?(h.bbox.x+=+a,h.bbox.y+=+s):h.dirtyT=1},oe=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},le=e._equaliseTransform=function(t,r){r=I(r).replace(/\.{3}|\u2026/g,t),t=e.parseTransformString(t)||[],r=e.parseTransformString(r)||[];for(var i=W(t.length,r.length),n=[],a=[],s=0,o,l,h,u;s<i;s++){if(h=t[s]||oe(r[s]),u=r[s]||oe(h),h[0]!=u[0]||"r"==h[0].toLowerCase()&&(h[2]!=u[2]||h[3]!=u[3])||"s"==h[0].toLowerCase()&&(h[3]!=u[3]||h[4]!=u[4]))return;for(n[s]=[],a[s]=[],o=0,l=W(h.length,u.length);o<l;o++)o in h&&(n[s][o]=h[o]),o in u&&(a[s][o]=u[o])}return{from:n,to:a}};e._getContainer=function(t,r,i,n){var a;if(a=null!=n||e.is(t,"object")?t:T.doc.getElementById(t),null!=a)return a.tagName?null==r?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:r,height:i}:{container:1,x:t,y:r,width:i,height:n}},e.pathToRelative=Wt,e._engine={},e.path2curve=Qt,e.matrix=function(t,e,r,i,n,a){return new g(t,e,r,i,n,a)},function(t){function r(t){return t[0]*t[0]+t[1]*t[1]}function i(t){var e=Y.sqrt(r(t));t[0]&&(t[0]/=e),t[1]&&(t[1]/=e)}t.add=function(t,e,r,i,n,a){var s=[[],[],[]],o=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],l=[[t,r,n],[e,i,a],[0,0,1]],h,u,c,f;for(t&&t instanceof g&&(l=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),h=0;h<3;h++)for(u=0;u<3;u++){for(f=0,c=0;c<3;c++)f+=o[h][c]*l[c][u];s[h][u]=f}this.a=s[0][0],this.b=s[1][0],this.c=s[0][1],this.d=s[1][1],this.e=s[0][2],this.f=s[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new g(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new g(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){
this.add(1,0,0,1,t,e)},t.scale=function(t,e,r,i){null==e&&(e=t),(r||i)&&this.add(1,0,0,1,r,i),this.add(t,0,0,e,0,0),(r||i)&&this.add(1,0,0,1,-r,-i)},t.rotate=function(t,r,i){t=e.rad(t),r=r||0,i=i||0;var n=+Y.cos(t).toFixed(9),a=+Y.sin(t).toFixed(9);this.add(n,a,-a,n,r,i),this.add(1,0,0,1,-r,-i)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[I.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return e.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var n=[[this.a,this.c],[this.b,this.d]];t.scalex=Y.sqrt(r(n[0])),i(n[0]),t.shear=n[0][0]*n[1][0]+n[0][1]*n[1][1],n[1]=[n[1][0]-n[0][0]*t.shear,n[1][1]-n[0][1]*t.shear],t.scaley=Y.sqrt(r(n[1])),i(n[1]),t.shear/=t.scaley;var a=-n[0][1],s=n[1][1];return s<0?(t.rotate=e.deg(Y.acos(s)),a<0&&(t.rotate=360-t.rotate)):t.rotate=e.deg(Y.asin(a)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this[q]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:R)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:R)+(e.rotate?"r"+[e.rotate,0,0]:R)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(g.prototype);for(var he=function(){this.returnValue=!1},ue=function(){return this.originalEvent.preventDefault()},ce=function(){this.cancelBubble=!0},fe=function(){return this.originalEvent.stopPropagation()},pe=function(t){var e=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,r=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft;return{x:t.clientX+r,y:t.clientY+e}},de=function(){return T.doc.addEventListener?function(t,e,r,i){var n=function(t){var e=pe(t);return r.call(i,t,e.x,e.y)};if(t.addEventListener(e,n,!1),F&&V[e]){var a=function(e){for(var n=pe(e),a=e,s=0,o=e.targetTouches&&e.targetTouches.length;s<o;s++)if(e.targetTouches[s].target==t){e=e.targetTouches[s],e.originalEvent=a,e.preventDefault=ue,e.stopPropagation=fe;break}return r.call(i,e,n.x,n.y)};t.addEventListener(V[e],a,!1)}return function(){return t.removeEventListener(e,n,!1),F&&V[e]&&t.removeEventListener(V[e],a,!1),!0}}:T.doc.attachEvent?function(t,e,r,i){var n=function(t){t=t||T.win.event;var e=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,n=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft,a=t.clientX+n,s=t.clientY+e;return t.preventDefault=t.preventDefault||he,t.stopPropagation=t.stopPropagation||ce,r.call(i,t,a,s)};t.attachEvent("on"+e,n);var a=function(){return t.detachEvent("on"+e,n),!0};return a}:void 0}(),ge=[],ve=function(e){for(var r=e.clientX,i=e.clientY,n=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,a=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft,s,o=ge.length;o--;){if(s=ge[o],F&&e.touches){for(var l=e.touches.length,h;l--;)if(h=e.touches[l],h.identifier==s.el._drag.id){r=h.clientX,i=h.clientY,(e.originalEvent?e.originalEvent:e).preventDefault();break}}else e.preventDefault();var u=s.el.node,c,f=u.nextSibling,p=u.parentNode,d=u.style.display;T.win.opera&&p.removeChild(u),u.style.display="none",c=s.el.paper.getElementByPoint(r,i),u.style.display=d,T.win.opera&&(f?p.insertBefore(u,f):p.appendChild(u)),c&&t("raphael.drag.over."+s.el.id,s.el,c),r+=a,i+=n,t("raphael.drag.move."+s.el.id,s.move_scope||s.el,r-s.el._drag.x,i-s.el._drag.y,r,i,e)}},xe=function(r){e.unmousemove(ve).unmouseup(xe);for(var i=ge.length,n;i--;)n=ge[i],n.el._drag={},t("raphael.drag.end."+n.el.id,n.end_scope||n.start_scope||n.move_scope||n.el,r);ge=[]},ye=e.el={},me=D.length;me--;)!function(t){e[t]=ye[t]=function(r,i){return e.is(r,"function")&&(this.events=this.events||[],this.events.push({name:t,f:r,unbind:de(this.shape||this.node||T.doc,t,r,i||this)})),this},e["un"+t]=ye["un"+t]=function(r){for(var i=this.events||[],n=i.length;n--;)i[n].name!=t||!e.is(r,"undefined")&&i[n].f!=r||(i[n].unbind(),i.splice(n,1),!i.length&&delete this.events);return this}}(D[me]);ye.data=function(r,i){var n=wt[this.id]=wt[this.id]||{};if(0==arguments.length)return n;if(1==arguments.length){if(e.is(r,"object")){for(var a in r)r[A](a)&&this.data(a,r[a]);return this}return t("raphael.data.get."+this.id,this,n[r],r),n[r]}return n[r]=i,t("raphael.data.set."+this.id,this,i,r),this},ye.removeData=function(t){return null==t?wt[this.id]={}:wt[this.id]&&delete wt[this.id][t],this},ye.getData=function(){return r(wt[this.id]||{})},ye.hover=function(t,e,r,i){return this.mouseover(t,r).mouseout(e,i||r)},ye.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var be=[];ye.drag=function(r,i,n,a,s,o){function l(l){(l.originalEvent||l).preventDefault();var h=l.clientX,u=l.clientY,c=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,f=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft;if(this._drag.id=l.identifier,F&&l.touches)for(var p=l.touches.length,d;p--;)if(d=l.touches[p],this._drag.id=d.identifier,d.identifier==this._drag.id){h=d.clientX,u=d.clientY;break}this._drag.x=h+f,this._drag.y=u+c,!ge.length&&e.mousemove(ve).mouseup(xe),ge.push({el:this,move_scope:a,start_scope:s,end_scope:o}),i&&t.on("raphael.drag.start."+this.id,i),r&&t.on("raphael.drag.move."+this.id,r),n&&t.on("raphael.drag.end."+this.id,n),t("raphael.drag.start."+this.id,s||a||this,l.clientX+f,l.clientY+c,l)}return this._drag={},be.push({el:this,start:l}),this.mousedown(l),this},ye.onDragOver=function(e){e?t.on("raphael.drag.over."+this.id,e):t.unbind("raphael.drag.over."+this.id)},ye.undrag=function(){for(var r=be.length;r--;)be[r].el==this&&(this.unmousedown(be[r].start),be.splice(r,1),t.unbind("raphael.drag.*."+this.id));!be.length&&e.unmousemove(ve).unmouseup(xe),ge=[]},N.circle=function(t,r,i){var n=e._engine.circle(this,t||0,r||0,i||0);return this.__set__&&this.__set__.push(n),n},N.rect=function(t,r,i,n,a){var s=e._engine.rect(this,t||0,r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},N.ellipse=function(t,r,i,n){var a=e._engine.ellipse(this,t||0,r||0,i||0,n||0);return this.__set__&&this.__set__.push(a),a},N.path=function(t){t&&!e.is(t,Z)&&!e.is(t[0],Q)&&(t+=R);var r=e._engine.path(e.format[z](e,arguments),this);return this.__set__&&this.__set__.push(r),r},N.image=function(t,r,i,n,a){var s=e._engine.image(this,t||"about:blank",r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},N.text=function(t,r,i){var n=e._engine.text(this,t||0,r||0,I(i));return this.__set__&&this.__set__.push(n),n},N.set=function(t){!e.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));var r=new ze(t);return this.__set__&&this.__set__.push(r),r.paper=this,r.type="set",r},N.setStart=function(t){this.__set__=t||this.set()},N.setFinish=function(t){var e=this.__set__;return delete this.__set__,e},N.getSize=function(){var t=this.canvas.parentNode;return{width:t.offsetWidth,height:t.offsetHeight}},N.setSize=function(t,r){return e._engine.setSize.call(this,t,r)},N.setViewBox=function(t,r,i,n,a){return e._engine.setViewBox.call(this,t,r,i,n,a)},N.top=N.bottom=null,N.raphael=e;var _e=function(t){var e=t.getBoundingClientRect(),r=t.ownerDocument,i=r.body,n=r.documentElement,a=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,o=e.top+(T.win.pageYOffset||n.scrollTop||i.scrollTop)-a,l=e.left+(T.win.pageXOffset||n.scrollLeft||i.scrollLeft)-s;return{y:o,x:l}};N.getElementByPoint=function(t,e){var r=this,i=r.canvas,n=T.doc.elementFromPoint(t,e);if(T.win.opera&&"svg"==n.tagName){var a=_e(i),s=i.createSVGRect();s.x=t-a.x,s.y=e-a.y,s.width=s.height=1;var o=i.getIntersectionList(s,null);o.length&&(n=o[o.length-1])}if(!n)return null;for(;n.parentNode&&n!=i.parentNode&&!n.raphael;)n=n.parentNode;return n==r.canvas.parentNode&&(n=i),n=n&&n.raphael?r.getById(n.raphaelid):null},N.getElementsByBBox=function(t){var r=this.set();return this.forEach(function(i){e.isBBoxIntersect(i.getBBox(),t)&&r.push(i)}),r},N.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},N.forEach=function(t,e){for(var r=this.bottom;r;){if(t.call(e,r)===!1)return this;r=r.next}return this},N.getElementsByPoint=function(t,e){var r=this.set();return this.forEach(function(i){i.isPointInside(t,e)&&r.push(i)}),r},ye.isPointInside=function(t,r){var i=this.realPath=Et[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(i=e.transformPath(i,this.attr("transform"))),e.isPointInsidePath(i,t,r)},ye.getBBox=function(t){if(this.removed)return{};var e=this._;return t?(!e.dirty&&e.bboxwt||(this.realPath=Et[this.type](this),e.bboxwt=Ot(this.realPath),e.bboxwt.toString=x,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&(!e.dirty&&this.realPath||(e.bboxwt=0,this.realPath=Et[this.type](this)),e.bbox=Ot(Mt(this.realPath,this.matrix)),e.bbox.toString=x,e.dirty=e.dirtyT=0),e.bbox)},ye.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(t),t},ye.glow=function(t){if("text"==this.type)return null;t=t||{};var e={width:(t.width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:null==t.opacity?.5:t.opacity,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},r=e.width/2,i=this.paper,n=i.set(),a=this.realPath||Et[this.type](this);a=this.matrix?Mt(a,this.matrix):a;for(var s=1;s<r+1;s++)n.push(i.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/r*s).toFixed(3),opacity:+(e.opacity/r).toFixed(3)}));return n.insertBefore(this).translate(e.offsetx,e.offsety)};var we={},ke=function(t,r,i,n,a,s,o,u,c){return null==c?l(t,r,i,n,a,s,o,u):e.findDotsAtSegment(t,r,i,n,a,s,o,u,h(t,r,i,n,a,s,o,u,c))},Be=function(t,r){return function(i,n,a){i=Qt(i);for(var s,o,l,h,u="",c={},f,p=0,d=0,g=i.length;d<g;d++){if(l=i[d],"M"==l[0])s=+l[1],o=+l[2];else{if(h=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6]),p+h>n){if(r&&!c.start){if(f=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),u+=["C"+f.start.x,f.start.y,f.m.x,f.m.y,f.x,f.y],a)return u;c.start=u,u=["M"+f.x,f.y+"C"+f.n.x,f.n.y,f.end.x,f.end.y,l[5],l[6]].join(),p+=h,s=+l[5],o=+l[6];continue}if(!t&&!r)return f=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),{x:f.x,y:f.y,alpha:f.alpha}}p+=h,s=+l[5],o=+l[6]}u+=l.shift()+l}return c.end=u,f=t?p:r?c:e.findDotsAtSegment(s,o,l[0],l[1],l[2],l[3],l[4],l[5],1),f.alpha&&(f={x:f.x,y:f.y,alpha:f.alpha}),f}},Ce=Be(1),Se=Be(),Ae=Be(0,1);e.getTotalLength=Ce,e.getPointAtLength=Se,e.getSubpath=function(t,e,r){if(this.getTotalLength(t)-r<1e-6)return Ae(t,e).end;var i=Ae(t,r,1);return e?Ae(i,e).end:i},ye.getTotalLength=function(){var t=this.getPath();if(t)return this.node.getTotalLength?this.node.getTotalLength():Ce(t)},ye.getPointAtLength=function(t){var e=this.getPath();if(e)return Se(e,t)},ye.getPath=function(){var t,r=e._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return r&&(t=r(this)),t},ye.getSubpath=function(t,r){var i=this.getPath();if(i)return e.getSubpath(i,t,r)};var Te=e.easing_formulas={linear:function(t){return t},"<":function(t){return X(t,1.7)},">":function(t){return X(t,.48)},"<>":function(t){var e=.48-t/1.04,r=Y.sqrt(.1734+e*e),i=r-e,n=X(H(i),1/3)*(i<0?-1:1),a=-r-e,s=X(H(a),1/3)*(a<0?-1:1),o=n+s+.5;return 3*(1-o)*o*o+o*o*o},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:X(2,-10*t)*Y.sin((t-.075)*(2*U)/.3)+1},bounce:function(t){var e=7.5625,r=2.75,i;return t<1/r?i=e*t*t:t<2/r?(t-=1.5/r,i=e*t*t+.75):t<2.5/r?(t-=2.25/r,i=e*t*t+.9375):(t-=2.625/r,i=e*t*t+.984375),i}};Te.easeIn=Te["ease-in"]=Te["<"],Te.easeOut=Te["ease-out"]=Te[">"],Te.easeInOut=Te["ease-in-out"]=Te["<>"],Te["back-in"]=Te.backIn,Te["back-out"]=Te.backOut;var Ee=[],Me=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,16)},Ne=function(){for(var r=+new Date,i=0;i<Ee.length;i++){var n=Ee[i];if(!n.el.removed&&!n.paused){var a=r-n.start,s=n.ms,o=n.easing,l=n.from,h=n.diff,u=n.to,c=n.t,f=n.el,p={},d,g={},v;if(n.initstatus?(a=(n.initstatus*n.anim.top-n.prev)/(n.percent-n.prev)*s,n.status=n.initstatus,delete n.initstatus,n.stop&&Ee.splice(i--,1)):n.status=(n.prev+(n.percent-n.prev)*(a/s))/n.anim.top,!(a<0))if(a<s){var x=o(a/s);for(var y in l)if(l[A](y)){switch(pt[y]){case $:d=+l[y]+x*s*h[y];break;case"colour":d="rgb("+[Le(ot(l[y].r+x*s*h[y].r)),Le(ot(l[y].g+x*s*h[y].g)),Le(ot(l[y].b+x*s*h[y].b))].join(",")+")";break;case"path":d=[];for(var m=0,_=l[y].length;m<_;m++){d[m]=[l[y][m][0]];for(var w=1,k=l[y][m].length;w<k;w++)d[m][w]=+l[y][m][w]+x*s*h[y][m][w];d[m]=d[m].join(j)}d=d.join(j);break;case"transform":if(h[y].real)for(d=[],m=0,_=l[y].length;m<_;m++)for(d[m]=[l[y][m][0]],w=1,k=l[y][m].length;w<k;w++)d[m][w]=l[y][m][w]+x*s*h[y][m][w];else{var B=function(t){return+l[y][t]+x*s*h[y][t]};d=[["m",B(0),B(1),B(2),B(3),B(4),B(5)]]}break;case"csv":if("clip-rect"==y)for(d=[],m=4;m--;)d[m]=+l[y][m]+x*s*h[y][m];break;default:var C=[][P](l[y]);for(d=[],m=f.paper.customAttributes[y].length;m--;)d[m]=+C[m]+x*s*h[y][m]}p[y]=d}f.attr(p),function(e,r,i){setTimeout(function(){t("raphael.anim.frame."+e,r,i)})}(f.id,f,n.anim)}else{if(function(r,i,n){setTimeout(function(){t("raphael.anim.frame."+i.id,i,n),t("raphael.anim.finish."+i.id,i,n),e.is(r,"function")&&r.call(i)})}(n.callback,f,n.anim),f.attr(u),Ee.splice(i--,1),n.repeat>1&&!n.next){for(v in u)u[A](v)&&(g[v]=n.totalOrigin[v]);n.el.attr(g),b(n.anim,n.el,n.anim.percents[0],null,n.totalOrigin,n.repeat-1)}n.next&&!n.stop&&b(n.anim,n.el,n.next,null,n.totalOrigin,n.repeat)}}}Ee.length&&Me(Ne)},Le=function(t){return t>255?255:t<0?0:t};ye.animateWith=function(t,r,i,n,a,s){var o=this;if(o.removed)return s&&s.call(o),o;var l=i instanceof m?i:e.animation(i,n,a,s),h,u;b(l,o,l.percents[0],null,o.attr());for(var c=0,f=Ee.length;c<f;c++)if(Ee[c].anim==r&&Ee[c].el==t){Ee[f-1].start=Ee[c].start;break}return o},ye.onAnimation=function(e){return e?t.on("raphael.anim.frame."+this.id,e):t.unbind("raphael.anim.frame."+this.id),this},m.prototype.delay=function(t){var e=new m(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},m.prototype.repeat=function(t){var e=new m(this.anim,this.ms);return e.del=this.del,e.times=Y.floor(W(t,0))||1,e},e.animation=function(t,r,i,n){if(t instanceof m)return t;!e.is(i,"function")&&i||(n=n||i||null,i=null),t=Object(t),r=+r||0;var a={},s,o;for(o in t)t[A](o)&&ht(o)!=o&&ht(o)+"%"!=o&&(s=!0,a[o]=t[o]);if(s)return i&&(a.easing=i),n&&(a.callback=n),new m({100:a},r);if(n){var l=0;for(var h in t){var u=ut(h);t[A](h)&&u>l&&(l=u)}l+="%",!t[l].callback&&(t[l].callback=n)}return new m(t,r)},ye.animate=function(t,r,i,n){var a=this;if(a.removed)return n&&n.call(a),a;var s=t instanceof m?t:e.animation(t,r,i,n);return b(s,a,s.percents[0],null,a.attr()),a},ye.setTime=function(t,e){return t&&null!=e&&this.status(t,G(e,t.ms)/t.ms),this},ye.status=function(t,e){var r=[],i=0,n,a;if(null!=e)return b(t,this,-1,G(e,1)),this;for(n=Ee.length;i<n;i++)if(a=Ee[i],a.el.id==this.id&&(!t||a.anim==t)){if(t)return a.status;r.push({anim:a.anim,status:a.status})}return t?0:r},ye.pause=function(e){for(var r=0;r<Ee.length;r++)Ee[r].el.id!=this.id||e&&Ee[r].anim!=e||t("raphael.anim.pause."+this.id,this,Ee[r].anim)!==!1&&(Ee[r].paused=!0);return this},ye.resume=function(e){for(var r=0;r<Ee.length;r++)if(Ee[r].el.id==this.id&&(!e||Ee[r].anim==e)){var i=Ee[r];t("raphael.anim.resume."+this.id,this,i.anim)!==!1&&(delete i.paused,this.status(i.anim,i.status))}return this},ye.stop=function(e){for(var r=0;r<Ee.length;r++)Ee[r].el.id!=this.id||e&&Ee[r].anim!=e||t("raphael.anim.stop."+this.id,this,Ee[r].anim)!==!1&&Ee.splice(r--,1);return this},t.on("raphael.remove",_),t.on("raphael.clear",_),ye.toString=function(){return"Raphaël’s object"};var ze=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,r=t.length;e<r;e++)!t[e]||t[e].constructor!=ye.constructor&&t[e].constructor!=ze||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},Pe=ze.prototype;Pe.push=function(){for(var t,e,r=0,i=arguments.length;r<i;r++)t=arguments[r],!t||t.constructor!=ye.constructor&&t.constructor!=ze||(e=this.items.length,this[e]=this.items[e]=t,this.length++);return this},Pe.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},Pe.forEach=function(t,e){for(var r=0,i=this.items.length;r<i;r++)if(t.call(e,this.items[r],r)===!1)return this;return this};for(var Fe in ye)ye[A](Fe)&&(Pe[Fe]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t][z](r,e)})}}(Fe));return Pe.attr=function(t,r){if(t&&e.is(t,Q)&&e.is(t[0],"object"))for(var i=0,n=t.length;i<n;i++)this.items[i].attr(t[i]);else for(var a=0,s=this.items.length;a<s;a++)this.items[a].attr(t,r);return this},Pe.clear=function(){for(;this.length;)this.pop()},Pe.splice=function(t,e,r){t=t<0?W(this.length+t,0):t,e=W(0,G(this.length-t,e));var i=[],n=[],a=[],s;for(s=2;s<arguments.length;s++)a.push(arguments[s]);for(s=0;s<e;s++)n.push(this[t+s]);for(;s<this.length-t;s++)i.push(this[t+s]);var o=a.length;for(s=0;s<o+i.length;s++)this.items[t+s]=this[t+s]=s<o?a[s]:i[s-o];for(s=this.items.length=this.length-=e-o;this[s];)delete this[s++];return new ze(n)},Pe.exclude=function(t){for(var e=0,r=this.length;e<r;e++)if(this[e]==t)return this.splice(e,1),!0},Pe.animate=function(t,r,i,n){(e.is(i,"function")||!i)&&(n=i||null);var a=this.items.length,s=a,o,l=this,h;if(!a)return this;n&&(h=function(){!--a&&n.call(l)}),i=e.is(i,Z)?i:h;var u=e.animation(t,r,i,h);for(o=this.items[--s].animate(u);s--;)this.items[s]&&!this.items[s].removed&&this.items[s].animateWith(o,u,u),this.items[s]&&!this.items[s].removed||a--;return this},Pe.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},Pe.getBBox=function(){for(var t=[],e=[],r=[],i=[],n=this.items.length;n--;)if(!this.items[n].removed){var a=this.items[n].getBBox();t.push(a.x),e.push(a.y),r.push(a.x+a.width),i.push(a.y+a.height)}return t=G[z](0,t),e=G[z](0,e),r=W[z](0,r),i=W[z](0,i),{x:t,y:e,x2:r,y2:i,width:r-t,height:i-e}},Pe.clone=function(t){t=this.paper.set();for(var e=0,r=this.items.length;e<r;e++)t.push(this.items[e].clone());return t},Pe.toString=function(){return"Raphaël‘s set"},Pe.glow=function(t){var e=this.paper.set();return this.forEach(function(r,i){var n=r.glow(t);null!=n&&n.forEach(function(t,r){e.push(t)})}),e},Pe.isPointInside=function(t,e){var r=!1;return this.forEach(function(i){if(i.isPointInside(t,e))return r=!0,!1}),r},e.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},r=t.face["font-family"];for(var i in t.face)t.face[A](i)&&(e.face[i]=t.face[i]);if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg){e.face["units-per-em"]=ut(t.face["units-per-em"],10);for(var n in t.glyphs)if(t.glyphs[A](n)){var a=t.glyphs[n];if(e.glyphs[n]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},a.k)for(var s in a.k)a[A](s)&&(e.glyphs[n].k[s]=a.k[s])}}return t},N.getFont=function(t,r,i,n){if(n=n||"normal",i=i||"normal",r=+r||{normal:400,bold:700,lighter:300,bolder:800}[r]||400,e.fonts){var a=e.fonts[t];if(!a){var s=new RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,R)+"(\\s|$)","i");for(var o in e.fonts)if(e.fonts[A](o)&&s.test(o)){a=e.fonts[o];break}}var l;if(a)for(var h=0,u=a.length;h<u&&(l=a[h],l.face["font-weight"]!=r||l.face["font-style"]!=i&&l.face["font-style"]||l.face["font-stretch"]!=n);h++);return l}},N.print=function(t,r,i,n,a,s,o,l){s=s||"middle",o=W(G(o||0,1),-1),l=W(G(l||1,3),1);var h=I(i)[q](R),u=0,c=0,f=R,p;if(e.is(n,"string")&&(n=this.getFont(n)),n){p=(a||16)/n.face["units-per-em"];for(var d=n.face.bbox[q](k),g=+d[0],v=d[3]-d[1],x=0,y=+d[1]+("baseline"==s?v+ +n.face.descent:v/2),m=0,b=h.length;m<b;m++){if("\n"==h[m])u=0,w=0,c=0,x+=v*l;else{var _=c&&n.glyphs[h[m-1]]||{},w=n.glyphs[h[m]];u+=c?(_.w||n.w)+(_.k&&_.k[h[m]]||0)+n.w*o:0,c=1}w&&w.d&&(f+=e.transformPath(w.d,["t",u*p,x*p,"s",p,p,g,y,"t",(t-g)/p,(r-y)/p]))}}return this.path(f).attr({fill:"#000",stroke:"none"})},N.add=function(t){if(e.is(t,"array"))for(var r=this.set(),i=0,n=t.length,a;i<n;i++)a=t[i]||{},B[A](a.type)&&r.push(this[a.type]().attr(a));return r},e.format=function(t,r){var i=e.is(r,Q)?[0][P](r):arguments;return t&&e.is(t,Z)&&i.length-1&&(t=t.replace(C,function(t,e){return null==i[++e]?R:i[e]})),t||R},e.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,r=function(t,r,i){var n=i;return r.replace(e,function(t,e,r,i,a){e=e||i,n&&(e in n&&(n=n[e]),"function"==typeof n&&a&&(n=n()))}),n=(null==n||n==i?t:n)+""};return function(e,i){return String(e).replace(t,function(t,e){return r(t,e,i)})}}(),e.ninja=function(){if(E.was)T.win.Raphael=E.is;else{window.Raphael=void 0;try{delete window.Raphael}catch(t){}}return e},e.st=Pe,t.on("raphael.DOMload",function(){w=!0}),function(t,r,i){function n(){/in/.test(t.readyState)?setTimeout(n,9):e.eve("raphael.DOMload")}null==t.readyState&&t.addEventListener&&(t.addEventListener(r,i=function(){t.removeEventListener(r,i,!1),t.readyState="complete"},!1),t.readyState="loading"),n()}(document,"DOMContentLoaded"),e}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;!function(r){var a="0.5.0",s="hasOwnProperty",o=/[\.\/]/,l=/\s*,\s*/,h="*",u=function(){},c=function(t,e){return t-e},f,p,d={n:{}},g=function(){for(var t=0,e=this.length;t<e;t++)if("undefined"!=typeof this[t])return this[t]},v=function(){for(var t=this.length;--t;)if("undefined"!=typeof this[t])return this[t]},x=Object.prototype.toString,y=String,m=Array.isArray||function(t){return t instanceof Array||"[object Array]"==x.call(t)};eve=function(t,e){var r=d,i=p,n=Array.prototype.slice.call(arguments,2),a=eve.listeners(t),s=0,o=!1,l,h=[],u={},x=[],y=f,m=[];x.firstDefined=g,x.lastDefined=v,f=t,p=0;for(var b=0,_=a.length;b<_;b++)"zIndex"in a[b]&&(h.push(a[b].zIndex),a[b].zIndex<0&&(u[a[b].zIndex]=a[b]));for(h.sort(c);h[s]<0;)if(l=u[h[s++]],x.push(l.apply(e,n)),p)return p=i,x;for(b=0;b<_;b++)if(l=a[b],"zIndex"in l)if(l.zIndex==h[s]){if(x.push(l.apply(e,n)),p)break;do if(s++,l=u[h[s]],l&&x.push(l.apply(e,n)),p)break;while(l)}else u[l.zIndex]=l;else if(x.push(l.apply(e,n)),p)break;return p=i,f=y,x},eve._events=d,eve.listeners=function(t){var e=m(t)?t:t.split(o),r=d,i,n,a,s,l,u,c,f,p=[r],g=[];for(s=0,l=e.length;s<l;s++){for(f=[],u=0,c=p.length;u<c;u++)for(r=p[u].n,n=[r[e[s]],r[h]],a=2;a--;)i=n[a],i&&(f.push(i),g=g.concat(i.f||[]));p=f}return g},eve.separator=function(t){t?(t=y(t).replace(/(?=[\.\^\]\[\-])/g,"\\"),t="["+t+"]",o=new RegExp(t)):o=/[\.\/]/},eve.on=function(t,e){if("function"!=typeof e)return function(){};for(var r=m(t)?m(t[0])?t:[t]:y(t).split(l),i=0,n=r.length;i<n;i++)!function(t){for(var r=m(t)?t:y(t).split(o),i=d,n,a=0,s=r.length;a<s;a++)i=i.n,i=i.hasOwnProperty(r[a])&&i[r[a]]||(i[r[a]]={n:{}});for(i.f=i.f||[],a=0,s=i.f.length;a<s;a++)if(i.f[a]==e){n=!0;break}!n&&i.f.push(e)}(r[i]);return function(t){+t==+t&&(e.zIndex=+t)}},eve.f=function(t){var e=[].slice.call(arguments,1);return function(){eve.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},eve.stop=function(){p=1},eve.nt=function(t){var e=m(f)?f.join("."):f;return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e},eve.nts=function(){return m(f)?f:f.split(o)},eve.off=eve.unbind=function(t,e){if(!t)return void(eve._events=d={n:{}});var r=m(t)?m(t[0])?t:[t]:y(t).split(l);if(r.length>1)for(var i=0,n=r.length;i<n;i++)eve.off(r[i],e);else{r=m(t)?t:y(t).split(o);var a,u,c,i,n,f,p,g=[d];for(i=0,n=r.length;i<n;i++)for(f=0;f<g.length;f+=c.length-2){if(c=[f,1],a=g[f].n,r[i]!=h)a[r[i]]&&c.push(a[r[i]]);else for(u in a)a[s](u)&&c.push(a[u]);g.splice.apply(g,c)}for(i=0,n=g.length;i<n;i++)for(a=g[i];a.n;){if(e){if(a.f){for(f=0,p=a.f.length;f<p;f++)if(a.f[f]==e){a.f.splice(f,1);break}!a.f.length&&delete a.f}for(u in a.n)if(a.n[s](u)&&a.n[u].f){var v=a.n[u].f;for(f=0,p=v.length;f<p;f++)if(v[f]==e){v.splice(f,1);break}!v.length&&delete a.n[u].f}}else{delete a.f;for(u in a.n)a.n[s](u)&&a.n[u].f&&delete a.n[u].f}a=a.n}}},eve.once=function(t,e){var r=function(){return eve.off(t,r),e.apply(this,arguments)};return eve.on(t,r)},eve.version=a,eve.toString=function(){return"You are running Eve "+a},"undefined"!=typeof t&&t.exports?t.exports=eve:(i=[],n=function(){return eve}.apply(e,i),!(void 0!==n&&(t.exports=n)))}(this)},function(t,e,r){var i,n;i=[r(1)],n=function(t){if(!t||t.svg){var e="hasOwnProperty",r=String,i=parseFloat,n=parseInt,a=Math,s=a.max,o=a.abs,l=a.pow,h=/[, ]+/,u=t.eve,c="",f=" ",p="http://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};t.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var v=function(i,n){if(n){"string"==typeof i&&(i=v(i));for(var a in n)n[e](a)&&("xlink:"==a.substring(0,6)?i.setAttributeNS(p,a.substring(6),r(n[a])):i.setAttribute(a,r(n[a])))}else i=t._g.doc.createElementNS("http://www.w3.org/2000/svg",i),i.style&&(i.style.webkitTapHighlightColor="rgba(0,0,0,0)");return i},x=function(e,n){var h="linear",u=e.id+n,f=.5,p=.5,d=e.node,g=e.paper,x=d.style,y=t._g.doc.getElementById(u);if(!y){if(n=r(n).replace(t._radial_gradient,function(t,e,r){if(h="radial",e&&r){f=i(e),p=i(r);var n=2*(p>.5)-1;l(f-.5,2)+l(p-.5,2)>.25&&(p=a.sqrt(.25-l(f-.5,2))*n+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*n)}return c}),n=n.split(/\s*\-\s*/),"linear"==h){var b=n.shift();if(b=-i(b),isNaN(b))return null;var _=[0,0,a.cos(t.rad(b)),a.sin(t.rad(b))],w=1/(s(o(_[2]),o(_[3]))||1);_[2]*=w,_[3]*=w,_[2]<0&&(_[0]=-_[2],_[2]=0),_[3]<0&&(_[1]=-_[3],_[3]=0)}var k=t._parseDots(n);if(!k)return null;if(u=u.replace(/[\(\)\s,\xb0#]/g,"_"),e.gradient&&u!=e.gradient.id&&(g.defs.removeChild(e.gradient),delete e.gradient),!e.gradient){y=v(h+"Gradient",{id:u}),e.gradient=y,v(y,"radial"==h?{fx:f,fy:p}:{x1:_[0],y1:_[1],x2:_[2],y2:_[3],gradientTransform:e.matrix.invert()}),g.defs.appendChild(y);for(var B=0,C=k.length;B<C;B++)y.appendChild(v("stop",{offset:k[B].offset?k[B].offset:B?"100%":"0%","stop-color":k[B].color||"#fff","stop-opacity":isFinite(k[B].opacity)?k[B].opacity:1}))}}return v(d,{fill:m(u),opacity:1,"fill-opacity":1}),x.fill=c,x.opacity=1,x.fillOpacity=1,1},y=function(){var t=document.documentMode;return t&&(9===t||10===t)},m=function(t){if(y())return"url('#"+t+"')";var e=document.location,r=e.protocol+"//"+e.host+e.pathname+e.search;return"url('"+r+"#"+t+"')"},b=function(t){var e=t.getBBox(1);v(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},_=function(i,n,a){if("path"==i.type){for(var s=r(n).toLowerCase().split("-"),o=i.paper,l=a?"end":"start",h=i.node,u=i.attrs,f=u["stroke-width"],p=s.length,x="classic",y,m,b,_,w,k=3,B=3,C=5;p--;)switch(s[p]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":x=s[p];break;case"wide":B=5;break;case"narrow":B=2;break;case"long":k=5;break;case"short":k=2}if("open"==x?(k+=2,B+=2,C+=2,b=1,_=a?4:1,w={fill:"none",stroke:u.stroke}):(_=b=k/2,w={fill:u.stroke,stroke:"none"}),i._.arrows?a?(i._.arrows.endPath&&g[i._.arrows.endPath]--,i._.arrows.endMarker&&g[i._.arrows.endMarker]--):(i._.arrows.startPath&&g[i._.arrows.startPath]--,i._.arrows.startMarker&&g[i._.arrows.startMarker]--):i._.arrows={},"none"!=x){var S="raphael-marker-"+x,A="raphael-marker-"+l+x+k+B+"-obj"+i.id;t._g.doc.getElementById(S)?g[S]++:(o.defs.appendChild(v(v("path"),{"stroke-linecap":"round",d:d[x],id:S})),g[S]=1);var T=t._g.doc.getElementById(A),E;T?(g[A]++,E=T.getElementsByTagName("use")[0]):(T=v(v("marker"),{id:A,markerHeight:B,markerWidth:k,orient:"auto",refX:_,refY:B/2}),E=v(v("use"),{"xlink:href":"#"+S,transform:(a?"rotate(180 "+k/2+" "+B/2+") ":c)+"scale("+k/C+","+B/C+")","stroke-width":(1/((k/C+B/C)/2)).toFixed(4)}),T.appendChild(E),o.defs.appendChild(T),g[A]=1),v(E,w);var M=b*("diamond"!=x&&"oval"!=x);a?(y=i._.arrows.startdx*f||0,m=t.getTotalLength(u.path)-M*f):(y=M*f,m=t.getTotalLength(u.path)-(i._.arrows.enddx*f||0)),w={},w["marker-"+l]="url(#"+A+")",(m||y)&&(w.d=t.getSubpath(u.path,y,m)),v(h,w),i._.arrows[l+"Path"]=S,i._.arrows[l+"Marker"]=A,i._.arrows[l+"dx"]=M,i._.arrows[l+"Type"]=x,i._.arrows[l+"String"]=n}else a?(y=i._.arrows.startdx*f||0,m=t.getTotalLength(u.path)-y):(y=0,m=t.getTotalLength(u.path)-(i._.arrows.enddx*f||0)),i._.arrows[l+"Path"]&&v(h,{d:t.getSubpath(u.path,y,m)}),delete i._.arrows[l+"Path"],delete i._.arrows[l+"Marker"],delete i._.arrows[l+"dx"],delete i._.arrows[l+"Type"],delete i._.arrows[l+"String"];for(w in g)if(g[e](w)&&!g[w]){var N=t._g.doc.getElementById(w);N&&N.parentNode.removeChild(N)}}},w={"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},k=function(t,e,i){if(e=w[r(e).toLowerCase()]){for(var n=t.attrs["stroke-width"]||"1",a={round:n,square:n,butt:0}[t.attrs["stroke-linecap"]||i["stroke-linecap"]]||0,s=[],o=e.length;o--;)s[o]=e[o]*n+(o%2?1:-1)*a;v(t.node,{"stroke-dasharray":s.join(",")})}else v(t.node,{"stroke-dasharray":"none"})},B=function(i,a){var l=i.node,u=i.attrs,f=l.style.visibility;l.style.visibility="hidden";for(var d in a)if(a[e](d)){if(!t._availableAttrs[e](d))continue;var g=a[d];switch(u[d]=g,d){case"blur":i.blur(g);break;case"title":var y=l.getElementsByTagName("title");if(y.length&&(y=y[0]))y.firstChild.nodeValue=g;else{y=v("title");var m=t._g.doc.createTextNode(g);y.appendChild(m),l.appendChild(y)}break;case"href":case"target":var w=l.parentNode;if("a"!=w.tagName.toLowerCase()){var B=v("a");w.insertBefore(B,l),B.appendChild(l),w=B}"target"==d?w.setAttributeNS(p,"show","blank"==g?"new":g):w.setAttributeNS(p,d,g);break;case"cursor":l.style.cursor=g;break;case"transform":i.transform(g);break;case"arrow-start":_(i,g);break;case"arrow-end":_(i,g,1);break;case"clip-rect":var C=r(g).split(h);if(4==C.length){i.clip&&i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);var A=v("clipPath"),T=v("rect");A.id=t.createUUID(),v(T,{x:C[0],y:C[1],width:C[2],height:C[3]}),A.appendChild(T),i.paper.defs.appendChild(A),v(l,{"clip-path":"url(#"+A.id+")"}),i.clip=T}if(!g){var E=l.getAttribute("clip-path");if(E){var M=t._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g,c));M&&M.parentNode.removeChild(M),v(l,{"clip-path":c}),delete i.clip}}break;case"path":"path"==i.type&&(v(l,{d:g?u.path=t._pathToAbsolute(g):"M0,0"}),i._.dirty=1,i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1)));break;case"width":if(l.setAttribute(d,g),i._.dirty=1,!u.fx)break;d="x",g=u.x;case"x":u.fx&&(g=-u.x-(u.width||0));case"rx":if("rx"==d&&"rect"==i.type)break;case"cx":l.setAttribute(d,g),i.pattern&&b(i),i._.dirty=1;break;case"height":if(l.setAttribute(d,g),i._.dirty=1,!u.fy)break;d="y",g=u.y;case"y":u.fy&&(g=-u.y-(u.height||0));case"ry":if("ry"==d&&"rect"==i.type)break;case"cy":l.setAttribute(d,g),i.pattern&&b(i),i._.dirty=1;break;case"r":"rect"==i.type?v(l,{rx:g,ry:g}):l.setAttribute(d,g),i._.dirty=1;break;case"src":"image"==i.type&&l.setAttributeNS(p,"href",g);break;case"stroke-width":1==i._.sx&&1==i._.sy||(g/=s(o(i._.sx),o(i._.sy))||1),l.setAttribute(d,g),u["stroke-dasharray"]&&k(i,u["stroke-dasharray"],a),
i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1));break;case"stroke-dasharray":k(i,g,a);break;case"fill":var N=r(g).match(t._ISURL);if(N){A=v("pattern");var L=v("image");A.id=t.createUUID(),v(A,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),v(L,{x:0,y:0,"xlink:href":N[1]}),A.appendChild(L),function(e){t._preload(N[1],function(){var t=this.offsetWidth,r=this.offsetHeight;v(e,{width:t,height:r}),v(L,{width:t,height:r})})}(A),i.paper.defs.appendChild(A),v(l,{fill:"url(#"+A.id+")"}),i.pattern=A,i.pattern&&b(i);break}var z=t.getRGB(g);if(z.error){if(("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&x(i,g)){if("opacity"in u||"fill-opacity"in u){var P=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c));if(P){var F=P.getElementsByTagName("stop");v(F[F.length-1],{"stop-opacity":("opacity"in u?u.opacity:1)*("fill-opacity"in u?u["fill-opacity"]:1)})}}u.gradient=g,u.fill="none";break}}else delete a.gradient,delete u.gradient,!t.is(u.opacity,"undefined")&&t.is(a.opacity,"undefined")&&v(l,{opacity:u.opacity}),!t.is(u["fill-opacity"],"undefined")&&t.is(a["fill-opacity"],"undefined")&&v(l,{"fill-opacity":u["fill-opacity"]});z[e]("opacity")&&v(l,{"fill-opacity":z.opacity>1?z.opacity/100:z.opacity});case"stroke":z=t.getRGB(g),l.setAttribute(d,z.hex),"stroke"==d&&z[e]("opacity")&&v(l,{"stroke-opacity":z.opacity>1?z.opacity/100:z.opacity}),"stroke"==d&&i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1));break;case"gradient":("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&x(i,g);break;case"opacity":u.gradient&&!u[e]("stroke-opacity")&&v(l,{"stroke-opacity":g>1?g/100:g});case"fill-opacity":if(u.gradient){P=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c)),P&&(F=P.getElementsByTagName("stop"),v(F[F.length-1],{"stop-opacity":g}));break}default:"font-size"==d&&(g=n(g,10)+"px");var R=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});l.style[R]=g,i._.dirty=1,l.setAttribute(d,g)}}S(i,a),l.style.visibility=f},C=1.2,S=function(i,a){if("text"==i.type&&(a[e]("text")||a[e]("font")||a[e]("font-size")||a[e]("x")||a[e]("y"))){var s=i.attrs,o=i.node,l=o.firstChild?n(t._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue("font-size"),10):10;if(a[e]("text")){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild);for(var h=r(a.text).split("\n"),u=[],f,p=0,d=h.length;p<d;p++)f=v("tspan"),p&&v(f,{dy:l*C,x:s.x}),f.appendChild(t._g.doc.createTextNode(h[p])),o.appendChild(f),u[p]=f}else for(u=o.getElementsByTagName("tspan"),p=0,d=u.length;p<d;p++)p?v(u[p],{dy:l*C,x:s.x}):v(u[0],{dy:0});v(o,{x:s.x,y:s.y}),i._.dirty=1;var g=i._getBBox(),x=s.y-(g.y+g.height/2);x&&t.is(x,"finite")&&v(u[0],{dy:x})}},A=function(t){return t.parentNode&&"a"===t.parentNode.tagName.toLowerCase()?t.parentNode:t},T=function(e,r){function i(){return("0000"+(Math.random()*Math.pow(36,5)<<0).toString(36)).slice(-5)}var n=0,a=0;this[0]=this.node=e,e.raphael=!0,this.id=i(),e.raphaelid=this.id,this.matrix=t.matrix(),this.realPath=null,this.paper=r,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},E=t.el;T.prototype=E,E.constructor=T,t._engine.path=function(t,e){var r=v("path");e.canvas&&e.canvas.appendChild(r);var i=new T(r,e);return i.type="path",B(i,{fill:"none",stroke:"#000",path:t}),i},E.rotate=function(t,e,n){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,e,n]])),this},E.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3])),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this},E.translate=function(t,e){return this.removed?this:(t=r(t).split(h),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this.transform(this._.transform.concat([["t",t,e]])),this)},E.transform=function(r){var i=this._;if(null==r)return i.transform;if(t._extractTransform(this,r),this.clip&&v(this.clip,{transform:this.matrix.invert()}),this.pattern&&b(this),this.node&&v(this.node,{transform:this.matrix}),1!=i.sx||1!=i.sy){var n=this.attrs[e]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":n})}return this},E.hide=function(){return this.removed||(this.node.style.display="none"),this},E.show=function(){return this.removed||(this.node.style.display=""),this},E.remove=function(){var e=A(this.node);if(!this.removed&&e.parentNode){var r=this.paper;r.__set__&&r.__set__.exclude(this),u.unbind("raphael.*.*."+this.id),this.gradient&&r.defs.removeChild(this.gradient),t._tear(this,r),e.parentNode.removeChild(e),this.removeData();for(var i in this)this[i]="function"==typeof this[i]?t._removedFactory(i):null;this.removed=!0}},E._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0}var e=!1,r;this.paper.canvas.parentElement?r=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(r=this.paper.canvas.parentNode.style),r&&"none"==r.display&&(e=!0,r.display="");var i={};try{i=this.node.getBBox()}catch(n){i={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{i=i||{},e&&(r.display="none")}return t&&this.hide(),i},E.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if("fill"==r&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==r)return this._.transform;for(var s=r.split(h),o={},l=0,c=s.length;l<c;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return c-1?o:o[s[0]]}if(null==i&&t.is(r,"array")){for(o={},l=0,c=r.length;l<c;l++)o[r[l]]=this.attr(r[l]);return o}if(null!=i){var f={};f[r]=i}else null!=r&&t.is(r,"object")&&(f=r);for(var p in f)u("raphael.attr."+p+"."+this.id,this,f[p]);for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&&f[e](p)&&t.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));this.attrs[p]=f[p];for(var g in d)d[e](g)&&(f[g]=d[g])}return B(this,f),this},E.toFront=function(){if(this.removed)return this;var e=A(this.node);e.parentNode.appendChild(e);var r=this.paper;return r.top!=this&&t._tofront(this,r),this},E.toBack=function(){if(this.removed)return this;var e=A(this.node),r=e.parentNode;r.insertBefore(e,r.firstChild),t._toback(this,this.paper);var i=this.paper;return this},E.insertAfter=function(e){if(this.removed||!e)return this;var r=A(this.node),i=A(e.node||e[e.length-1].node);return i.nextSibling?i.parentNode.insertBefore(r,i.nextSibling):i.parentNode.appendChild(r),t._insertafter(this,e,this.paper),this},E.insertBefore=function(e){if(this.removed||!e)return this;var r=A(this.node),i=A(e.node||e[0].node);return i.parentNode.insertBefore(r,i),t._insertbefore(this,e,this.paper),this},E.blur=function(e){var r=this;if(0!==+e){var i=v("filter"),n=v("feGaussianBlur");r.attrs.blur=e,i.id=t.createUUID(),v(n,{stdDeviation:+e||1.5}),i.appendChild(n),r.paper.defs.appendChild(i),r._blur=i,v(r.node,{filter:"url(#"+i.id+")"})}else r._blur&&(r._blur.parentNode.removeChild(r._blur),delete r._blur,delete r.attrs.blur),r.node.removeAttribute("filter");return r},t._engine.circle=function(t,e,r,i){var n=v("circle");t.canvas&&t.canvas.appendChild(n);var a=new T(n,t);return a.attrs={cx:e,cy:r,r:i,fill:"none",stroke:"#000"},a.type="circle",v(n,a.attrs),a},t._engine.rect=function(t,e,r,i,n,a){var s=v("rect");t.canvas&&t.canvas.appendChild(s);var o=new T(s,t);return o.attrs={x:e,y:r,width:i,height:n,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},o.type="rect",v(s,o.attrs),o},t._engine.ellipse=function(t,e,r,i,n){var a=v("ellipse");t.canvas&&t.canvas.appendChild(a);var s=new T(a,t);return s.attrs={cx:e,cy:r,rx:i,ry:n,fill:"none",stroke:"#000"},s.type="ellipse",v(a,s.attrs),s},t._engine.image=function(t,e,r,i,n,a){var s=v("image");v(s,{x:r,y:i,width:n,height:a,preserveAspectRatio:"none"}),s.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(s);var o=new T(s,t);return o.attrs={x:r,y:i,width:n,height:a,src:e},o.type="image",o},t._engine.text=function(e,r,i,n){var a=v("text");e.canvas&&e.canvas.appendChild(a);var s=new T(a,e);return s.attrs={x:r,y:i,"text-anchor":"middle",text:n,"font-family":t._availableAttrs["font-family"],"font-size":t._availableAttrs["font-size"],stroke:"none",fill:"#000"},s.type="text",B(s,s.attrs),s},t._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e&&e.container,i=e.x,n=e.y,a=e.width,s=e.height;if(!r)throw new Error("SVG container not found.");var o=v("svg"),l="overflow:hidden;",h;return i=i||0,n=n||0,a=a||512,s=s||342,v(o,{height:s,version:1.1,width:a,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),1==r?(o.style.cssText=l+"position:absolute;left:"+i+"px;top:"+n+"px",t._g.doc.body.appendChild(o),h=1):(o.style.cssText=l+"position:relative",r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o)),r=new t._Paper,r.width=a,r.height=s,r.canvas=o,r.clear(),r._left=r._top=0,h&&(r.renderfix=function(){}),r.renderfix(),r},t._engine.setViewBox=function(t,e,r,i,n){u("raphael.setViewBox",this,this._viewBox,[t,e,r,i,n]);var a=this.getSize(),o=s(r/a.width,i/a.height),l=this.top,h=n?"xMidYMid meet":"xMinYMin",c,p;for(null==t?(this._vbSize&&(o=1),delete this._vbSize,c="0 0 "+this.width+f+this.height):(this._vbSize=o,c=t+f+e+f+r+f+i),v(this.canvas,{viewBox:c,preserveAspectRatio:h});o&&l;)p="stroke-width"in l.attrs?l.attrs["stroke-width"]:1,l.attr({"stroke-width":p}),l._.dirty=1,l._.dirtyT=1,l=l.prev;return this._viewBox=[t,e,r,i,!!n],this},t.prototype.renderfix=function(){var t=this.canvas,e=t.style,r;try{r=t.getScreenCTM()||t.createSVGMatrix()}catch(i){r=t.createSVGMatrix()}var n=-r.e%1,a=-r.f%1;(n||a)&&(n&&(this._left=(this._left+n)%1,e.left=this._left+"px"),a&&(this._top=(this._top+a)%1,e.top=this._top+"px"))},t.prototype.clear=function(){t.eve("raphael.clear",this);for(var e=this.canvas;e.firstChild;)e.removeChild(e.firstChild);this.bottom=this.top=null,(this.desc=v("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël "+t.version)),e.appendChild(this.desc),e.appendChild(this.defs=v("defs"))},t.prototype.remove=function(){u("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null};var M=t.st;for(var N in E)E[e](N)&&!M[e](N)&&(M[N]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(N))}}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;i=[r(1)],n=function(t){if(!t||t.vml){var e="hasOwnProperty",r=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h="fill",u=/[, ]+/,c=t.eve,f=" progid:DXImageTransform.Microsoft",p=" ",d="",g={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},v=/([clmz]),?([^clmz]*)/gi,x=/ progid:\S+Blur\([^\)]+\)/g,y=/-?[^,\s-]+/g,m="position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",b=21600,_={path:1,rect:1,image:1},w={circle:1,ellipse:1},k=function(e){var i=/[ahqstv]/gi,n=t._pathToAbsolute;if(r(e).match(i)&&(n=t._path2curve),i=/[clmz]/g,n==t._pathToAbsolute&&!r(e).match(i)){var s=r(e).replace(v,function(t,e,r){var i=[],n="m"==e.toLowerCase(),s=g[e];return r.replace(y,function(t){n&&2==i.length&&(s+=i+g["m"==e?"l":"L"],i=[]),i.push(a(t*b))}),s+i});return s}var o=n(e),l,h;s=[];for(var u=0,c=o.length;u<c;u++){l=o[u],h=o[u][0].toLowerCase(),"z"==h&&(h="x");for(var f=1,x=l.length;f<x;f++)h+=a(l[f]*b)+(f!=x-1?",":d);s.push(h)}return s.join(p)},B=function(e,r,i){var n=t.matrix();return n.rotate(-e,.5,.5),{dx:n.x(r,i),dy:n.y(r,i)}},C=function(t,e,r,i,n,a){var s=t._,o=t.matrix,u=s.fillpos,c=t.node,f=c.style,d=1,g="",v,x=b/e,y=b/r;if(f.visibility="hidden",e&&r){if(c.coordsize=l(x)+p+l(y),f.rotation=a*(e*r<0?-1:1),a){var m=B(a,i,n);i=m.dx,n=m.dy}if(e<0&&(g+="x"),r<0&&(g+=" y")&&(d=-1),f.flip=g,c.coordorigin=i*-x+p+n*-y,u||s.fillsize){var _=c.getElementsByTagName(h);_=_&&_[0],c.removeChild(_),u&&(m=B(a,o.x(u[0],u[1]),o.y(u[0],u[1])),_.position=m.dx*d+p+m.dy*d),s.fillsize&&(_.size=s.fillsize[0]*l(e)+p+s.fillsize[1]*l(r)),c.appendChild(_)}f.visibility="visible"}};t.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var S=function(t,e,i){for(var n=r(e).toLowerCase().split("-"),a=i?"end":"start",s=n.length,o="classic",l="medium",h="medium";s--;)switch(n[s]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[s];break;case"wide":case"narrow":h=n[s];break;case"long":case"short":l=n[s]}var u=t.node.getElementsByTagName("stroke")[0];u[a+"arrow"]=o,u[a+"arrowlength"]=l,u[a+"arrowwidth"]=h},A=function(n,l){n.attrs=n.attrs||{};var c=n.node,f=n.attrs,g=c.style,v,x=_[n.type]&&(l.x!=f.x||l.y!=f.y||l.width!=f.width||l.height!=f.height||l.cx!=f.cx||l.cy!=f.cy||l.rx!=f.rx||l.ry!=f.ry||l.r!=f.r),y=w[n.type]&&(f.cx!=l.cx||f.cy!=l.cy||f.r!=l.r||f.rx!=l.rx||f.ry!=l.ry),m=n;for(var B in l)l[e](B)&&(f[B]=l[B]);if(x&&(f.path=t._getPath[n.type](n),n._.dirty=1),l.href&&(c.href=l.href),l.title&&(c.title=l.title),l.target&&(c.target=l.target),l.cursor&&(g.cursor=l.cursor),"blur"in l&&n.blur(l.blur),(l.path&&"path"==n.type||x)&&(c.path=k(~r(f.path).toLowerCase().indexOf("r")?t._pathToAbsolute(f.path):f.path),n._.dirty=1,"image"==n.type&&(n._.fillpos=[f.x,f.y],n._.fillsize=[f.width,f.height],C(n,1,1,0,0,0))),"transform"in l&&n.transform(l.transform),y){var A=+f.cx,E=+f.cy,M=+f.rx||+f.r||0,L=+f.ry||+f.r||0;c.path=t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((A-M)*b),a((E-L)*b),a((A+M)*b),a((E+L)*b),a(A*b)),n._.dirty=1}if("clip-rect"in l){var z=r(l["clip-rect"]).split(u);if(4==z.length){z[2]=+z[2]+ +z[0],z[3]=+z[3]+ +z[1];var P=c.clipRect||t._g.doc.createElement("div"),F=P.style;F.clip=t.format("rect({1}px {2}px {3}px {0}px)",z),c.clipRect||(F.position="absolute",F.top=0,F.left=0,F.width=n.paper.width+"px",F.height=n.paper.height+"px",c.parentNode.insertBefore(P,c),P.appendChild(c),c.clipRect=P)}l["clip-rect"]||c.clipRect&&(c.clipRect.style.clip="auto")}if(n.textpath){var R=n.textpath.style;l.font&&(R.font=l.font),l["font-family"]&&(R.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,d)+'"'),l["font-size"]&&(R.fontSize=l["font-size"]),l["font-weight"]&&(R.fontWeight=l["font-weight"]),l["font-style"]&&(R.fontStyle=l["font-style"])}if("arrow-start"in l&&S(m,l["arrow-start"]),"arrow-end"in l&&S(m,l["arrow-end"],1),null!=l.opacity||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var j=c.getElementsByTagName(h),I=!1;if(j=j&&j[0],!j&&(I=j=N(h)),"image"==n.type&&l.src&&(j.src=l.src),l.fill&&(j.on=!0),null!=j.on&&"none"!=l.fill&&null!==l.fill||(j.on=!1),j.on&&l.fill){var q=r(l.fill).match(t._ISURL);if(q){j.parentNode==c&&c.removeChild(j),j.rotate=!0,j.src=q[1],j.type="tile";var D=n.getBBox(1);j.position=D.x+p+D.y,n._.fillpos=[D.x,D.y],t._preload(q[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else j.color=t.getRGB(l.fill).hex,j.src=d,j.type="solid",t.getRGB(l.fill).error&&(m.type in{circle:1,ellipse:1}||"r"!=r(l.fill).charAt())&&T(m,l.fill,j)&&(f.fill="none",f.gradient=l.fill,j.rotate=!1)}if("fill-opacity"in l||"opacity"in l){var V=((+f["fill-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+t.getRGB(l.fill).o+1||2)-1);V=o(s(V,0),1),j.opacity=V,j.src&&(j.color="none")}c.appendChild(j);var O=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0],Y=!1;!O&&(Y=O=N("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(O.on=!0),("none"==l.stroke||null===l.stroke||null==O.on||0==l.stroke||0==l["stroke-width"])&&(O.on=!1);var W=t.getRGB(l.stroke);O.on&&l.stroke&&(O.color=W.hex),V=((+f["stroke-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+W.o+1||2)-1);var G=.75*(i(l["stroke-width"])||1);if(V=o(s(V,0),1),null==l["stroke-width"]&&(G=f["stroke-width"]),l["stroke-width"]&&(O.weight=G),G&&G<1&&(V*=G)&&(O.weight=1),O.opacity=V,l["stroke-linejoin"]&&(O.joinstyle=l["stroke-linejoin"]||"miter"),O.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(O.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),"stroke-dasharray"in l){var H={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};O.dashstyle=H[e](l["stroke-dasharray"])?H[l["stroke-dasharray"]]:d}Y&&c.appendChild(O)}if("text"==m.type){m.paper.canvas.style.display=d;var X=m.paper.span,U=100,$=f.font&&f.font.match(/\d+(?:\.\d*)?(?=px)/);g=X.style,f.font&&(g.font=f.font),f["font-family"]&&(g.fontFamily=f["font-family"]),f["font-weight"]&&(g.fontWeight=f["font-weight"]),f["font-style"]&&(g.fontStyle=f["font-style"]),$=i(f["font-size"]||$&&$[0])||10,g.fontSize=$*U+"px",m.textpath.string&&(X.innerHTML=r(m.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var Z=X.getBoundingClientRect();m.W=f.w=(Z.right-Z.left)/U,m.H=f.h=(Z.bottom-Z.top)/U,m.X=f.x,m.Y=f.y+m.H/2,("x"in l||"y"in l)&&(m.path.v=t.format("m{0},{1}l{2},{1}",a(f.x*b),a(f.y*b),a(f.x*b)+1));for(var Q=["x","y","text","font","font-family","font-weight","font-style","font-size"],J=0,K=Q.length;J<K;J++)if(Q[J]in l){m._.dirty=1;break}switch(f["text-anchor"]){case"start":m.textpath.style["v-text-align"]="left",m.bbx=m.W/2;break;case"end":m.textpath.style["v-text-align"]="right",m.bbx=-m.W/2;break;default:m.textpath.style["v-text-align"]="center",m.bbx=0}m.textpath.style["v-text-kern"]=!0}},T=function(e,a,s){e.attrs=e.attrs||{};var o=e.attrs,l=Math.pow,h,u,c="linear",f=".5 .5";if(e.attrs.gradient=a,a=r(a).replace(t._radial_gradient,function(t,e,r){return c="radial",e&&r&&(e=i(e),r=i(r),l(e-.5,2)+l(r-.5,2)>.25&&(r=n.sqrt(.25-l(e-.5,2))*(2*(r>.5)-1)+.5),f=e+p+r),d}),a=a.split(/\s*\-\s*/),"linear"==c){var g=a.shift();if(g=-i(g),isNaN(g))return null}var v=t._parseDots(a);if(!v)return null;if(e=e.shape||e.node,v.length){e.removeChild(s),s.on=!0,s.method="none",s.color=v[0].color,s.color2=v[v.length-1].color;for(var x=[],y=0,m=v.length;y<m;y++)v[y].offset&&x.push(v[y].offset+p+v[y].color);s.colors=x.length?x.join():"0% "+s.color,"radial"==c?(s.type="gradientTitle",s.focus="100%",s.focussize="0 0",s.focusposition=f,s.angle=0):(s.type="gradient",s.angle=(270-g)%360),e.appendChild(s)}return 1},E=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=r,this.matrix=t.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},M=t.el;E.prototype=M,M.constructor=E,M.transform=function(e){if(null==e)return this._.transform;var i=this.paper._viewBoxShift,n=i?"s"+[i.scale,i.scale]+"-1-1t"+[i.dx,i.dy]:d,a;i&&(a=e=r(e).replace(/\.{3}|\u2026/g,this._.transform||d)),t._extractTransform(this,n+e);var s=this.matrix.clone(),o=this.skew,l=this.node,h,u=~r(this.attrs.fill).indexOf("-"),c=!r(this.attrs.fill).indexOf("url(");if(s.translate(1,1),c||u||"image"==this.type)if(o.matrix="1 0 0 1",o.offset="0 0",h=s.split(),u&&h.noRotation||!h.isSimple){l.style.filter=s.toFilter();var f=this.getBBox(),g=this.getBBox(1),v=f.x-g.x,x=f.y-g.y;l.coordorigin=v*-b+p+x*-b,C(this,1,1,v,x,0)}else l.style.filter=d,C(this,h.scalex,h.scaley,h.dx,h.dy,h.rotate);else l.style.filter=d,o.matrix=r(s),o.offset=s.offset();return null!==a&&(this._.transform=a,t._extractTransform(this,a)),this},M.rotate=function(t,e,n){if(this.removed)return this;if(null!=t){if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,e,n]])),this}},M.translate=function(t,e){return this.removed?this:(t=r(t).split(u),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=e),this.transform(this._.transform.concat([["t",t,e]])),this)},M.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&&(n=null),isNaN(a)&&(a=null)),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this._.dirtyT=1,this},M.hide=function(){return!this.removed&&(this.node.style.display="none"),this},M.show=function(){return!this.removed&&(this.node.style.display=d),this},M.auxGetBBox=t.el.getBBox,M.getBBox=function(){var t=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var e={},r=1/this.paper._viewBoxShift.scale;return e.x=t.x-this.paper._viewBoxShift.dx,e.x*=r,e.y=t.y-this.paper._viewBoxShift.dy,e.y*=r,e.width=t.width*r,e.height=t.height*r,e.x2=e.x+e.width,e.y2=e.y+e.height,e}return t},M._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},M.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),t.eve.unbind("raphael.*.*."+this.id),t._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;this.removed=!0}},M.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if(r==h&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var s=r.split(u),o={},l=0,f=s.length;l<f;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return f-1?o:o[s[0]]}if(this.attrs&&null==i&&t.is(r,"array")){for(o={},l=0,f=r.length;l<f;l++)o[r[l]]=this.attr(r[l]);return o}var p;null!=i&&(p={},p[r]=i),null==i&&t.is(r,"object")&&(p=r);for(var d in p)c("raphael.attr."+d+"."+this.id,this,p[d]);if(p){for(d in this.paper.customAttributes)if(this.paper.customAttributes[e](d)&&p[e](d)&&t.is(this.paper.customAttributes[d],"function")){var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]));this.attrs[d]=p[d];for(var v in g)g[e](v)&&(p[v]=g[v])}p.text&&"text"==this.type&&(this.textpath.string=p.text),A(this,p)}return this},M.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&t._tofront(this,this.paper),this},M.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper)),this)},M.insertAfter=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[e.length-1]),e.node.nextSibling?e.node.parentNode.insertBefore(this.node,e.node.nextSibling):e.node.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this)},M.insertBefore=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[0]),e.node.parentNode.insertBefore(this.node,e.node),t._insertbefore(this,e,this.paper),this)},M.blur=function(e){var r=this.node.runtimeStyle,i=r.filter;return i=i.replace(x,d),0!==+e?(this.attrs.blur=e,r.filter=i+p+f+".Blur(pixelradius="+(+e||1.5)+")",r.margin=t.format("-{0}px 0 0 -{0}px",a(+e||1.5))):(r.filter=i,r.margin=0,delete this.attrs.blur),this},t._engine.path=function(t,e){var r=N("shape");r.style.cssText=m,r.coordsize=b+p+b,r.coordorigin=e.coordorigin;var i=new E(r,e),n={fill:"none",stroke:"#000"};t&&(n.path=t),i.type="path",i.path=[],i.Path=d,A(i,n),e.canvas&&e.canvas.appendChild(r);var a=N("skew");return a.on=!0,r.appendChild(a),i.skew=a,i.transform(d),i},t._engine.rect=function(e,r,i,n,a,s){var o=t._rectPath(r,i,n,a,s),l=e.path(o),h=l.attrs;return l.X=h.x=r,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type="rect",l},t._engine.ellipse=function(t,e,r,i,n){var a=t.path(),s=a.attrs;return a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type="ellipse",A(a,{cx:e,cy:r,rx:i,ry:n}),a},t._engine.circle=function(t,e,r,i){var n=t.path(),a=n.attrs;return n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",A(n,{cx:e,cy:r,r:i}),n},t._engine.image=function(e,r,i,n,a,s){var o=t._rectPath(i,n,a,s),l=e.path(o).attr({stroke:"none"}),u=l.attrs,c=l.node,f=c.getElementsByTagName(h)[0];return u.src=r,l.X=u.x=i,l.Y=u.y=n,l.W=u.width=a,l.H=u.height=s,u.path=o,l.type="image",f.parentNode==c&&c.removeChild(f),f.rotate=!0,f.src=r,f.type="tile",l._.fillpos=[i,n],l._.fillsize=[a,s],c.appendChild(f),C(l,1,1,0,0,0),l},t._engine.text=function(e,i,n,s){var o=N("shape"),l=N("path"),h=N("textpath");i=i||0,n=n||0,s=s||"",l.v=t.format("m{0},{1}l{2},{1}",a(i*b),a(n*b),a(i*b)+1),l.textpathok=!0,h.string=r(s),h.on=!0,o.style.cssText=m,o.coordsize=b+p+b,o.coordorigin="0 0";var u=new E(o,e),c={fill:"#000",stroke:"none",font:t._availableAttrs.font,text:s};u.shape=o,u.path=l,u.textpath=h,u.type="text",u.attrs.text=r(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,A(u,c),o.appendChild(h),o.appendChild(l),e.canvas.appendChild(o);var f=N("skew");return f.on=!0,o.appendChild(f),u.skew=f,u.transform(d),u},t._engine.setSize=function(e,r){var i=this.canvas.style;return this.width=e,this.height=r,e==+e&&(e+="px"),r==+r&&(r+="px"),i.width=e,i.height=r,i.clip="rect(0 "+e+" "+r+" 0)",this._viewBox&&t._engine.setViewBox.apply(this,this._viewBox),this},t._engine.setViewBox=function(e,r,i,n,a){t.eve("raphael.setViewBox",this,this._viewBox,[e,r,i,n,a]);var s=this.getSize(),o=s.width,l=s.height,h,u;return a&&(h=l/n,u=o/i,i*h<o&&(e-=(o-i*h)/2/h),n*u<l&&(r-=(l-n*u)/2/u)),this._viewBox=[e,r,i,n,!!a],this._viewBoxShift={dx:-e,dy:-r,scale:s},this.forEach(function(t){t.transform("...")}),this};var N;t._engine.initWin=function(t){var e=t.document;e.styleSheets.length<31?e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"):e.styleSheets[0].addRule(".rvml","behavior:url(#default#VML)");try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),N=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(r){N=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},t._engine.initWin(t._g.win),t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e.container,i=e.height,n,a=e.width,s=e.x,o=e.y;if(!r)throw new Error("VML container not found.");var l=new t._Paper,h=l.canvas=t._g.doc.createElement("div"),u=h.style;return s=s||0,o=o||0,a=a||512,i=i||342,l.width=a,l.height=i,a==+a&&(a+="px"),i==+i&&(i+="px"),l.coordsize=1e3*b+p+1e3*b,l.coordorigin="0 0",l.span=t._g.doc.createElement("span"),l.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",h.appendChild(l.span),u.cssText=t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",a,i),1==r?(t._g.doc.body.appendChild(h),u.left=s+"px",u.top=o+"px",u.position="absolute"):r.firstChild?r.insertBefore(h,r.firstChild):r.appendChild(h),l.renderfix=function(){},l},t.prototype.clear=function(){t.eve("raphael.clear",this),this.canvas.innerHTML=d,this.span=t._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},t.prototype.remove=function(){t.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;return!0};var L=t.st;for(var z in M)M[e](z)&&!L[e](z)&&(L[z]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(z))}}.apply(e,i),!(void 0!==n&&(t.exports=n))}])});

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collection = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base class for rendering nodes
 *
 * Can transform coordinates to fit onto the canvas
 */
var Renderer = function () {

  /**
   * @param {DomElement|String} element target dom element or querySelector
   * @param {Graph} graph Dracula Graph instance
   * @param {number} width (optional) width of the canvas, default 400
   * @param {number} height (optional) height of the canvas, default 300
   */
  function Renderer(element, graph, width, height) {
    _classCallCheck(this, Renderer);

    this.graph = graph;
    // Convert a query into a dom element
    if (typeof element === 'string') {
      element = typeof $ !== 'undefined' ? $(element)[0] : document.querySelector(element);
    }
    this.element = element;
    this.width = width || 400;
    this.height = height || 300;
    this.radius = 40;
  }

  /**
   * Scale the nodes within the canvas dimensions
   * Keep a distance to the canvas edges of half a node radius
   */


  _createClass(Renderer, [{
    key: 'draw',
    value: function draw() {
      var _this = this;

      this.factorX = (this.width - 2 * this.radius) / (this.graph.layoutMaxX - this.graph.layoutMinX);

      this.factorY = (this.height - 2 * this.radius) / (this.graph.layoutMaxY - this.graph.layoutMinY);

      (0, _collection.each)(this.graph.nodes, function (node) {
        node.point = _this.translate([node.layoutPosX, node.layoutPosY]);
        _this.drawNode(node);
      });
      (0, _collection.each)(this.graph.edges, function (edge) {
        _this.drawEdge(edge);
      });
    }
  }, {
    key: 'translate',
    value: function translate(point) {
      return [Math.round((point[0] - this.graph.layoutMinX) * this.factorX + this.radius), Math.round((point[1] - this.graph.layoutMinY) * this.factorY + this.radius)];
    }
  }, {
    key: 'drawNode',
    value: function drawNode(node) {
      // eslint-disable-line no-unused-vars, class-methods-use-this
      throw new Error('not implemented');
    }
  }, {
    key: 'drawEdge',
    value: function drawEdge(edge) {
      // eslint-disable-line no-unused-vars, class-methods-use-this
      throw new Error('not implemented');
    }
  }], [{
    key: 'render',
    value: function render() {
      for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
        a[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(Renderer, [null].concat(a)))();
    }
  }]);

  return Renderer;
}();

exports.default = Renderer;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEPS = {
    "example/file1": [
        "example/file2"
    ],
    "example/file2": [
        "example/file3"
    ],
    "example/file3": [
        "example/file1",
        "example/file2"
    ],
    "viz/index": [
        "viz/_generated_deps"
    ]
};


/***/ })
/******/ ]);