
/**
 * @name Array
 * @description 基础Array兼容，扩展一些常用方法
 * @class LArray
 * @type {Object}
 * @requires Lass
 */

// javascript 1.6 indexOf lastIndexOf | every filter forEach map some

// javascript 1.8 reduce reduceRight

// javascript 1.8.5 isArray

// other clean, contains, getLast, empty, distinct

// ECMA6 of, entries, find, findIndex, keys, toSource
;void function() {
    'use strict';

    var LArray = /** @lends LArray.prototype */{
        /**
         * 判断一个对象是否为数组,如果是,则返回true,否则返回false. version(1.8.5)
         * @type {Function}
         * @param {Object} array
         * @return {Boolean}
         */
        isArray : function(array) {},
        /**
         * 查找元素在数组中出现的位置 找到返回对应的索引，找不到返回-1. version(1.6)
         * @type {Function}
         * @param {Array} array
         * @param {Object} searchElement
         * @param {Number} [formIndex] 开始查找的初始位置
         * @return {Number}
         */
        indexOf : function(array, searchElement, fromIndex) {},
        /**
         * 返回指定项最后一次出现的索引，找不到返回-1. version(1.6)
         * @type {Function}
         * @param {Array} array
         * @param {Object} searchElement
         * @param {Number} [fromIndex] 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的最后一个字符处开始检索。
         */
        lastIndexOf : function(array, searchElement, fromIndex) {},
        /**
         * 遍历array 中所有元素，并执行callback函数. version(1.6)
         * @type {Function}
         * @param {Array} array
         * @param {Function} callback (item, index, array)
         * @param {Object} [thisArg]  在执行callback函数时指定的this值.
         * @return {Boolean}
         */
        every : function(array, callback, thisArg) {},
        /**
         * 过滤数组中的元素，根据callback计算返回boolean类型. version(1.6)
         * @type {Function}
         * @param {Array} array
         * @param {Function} callback (item, index, array)
         * @param {Object} [thisArg]  在执行callback函数时指定的this值.
         * @return {Array}
         */
        filter : function(array, callback, thisArg) {},
        /**
         * forEach 不解释. version(1.6)
         * @type {Function}
         * @param {Array} arr 遍历的数组对象
         * @param {Function} callback 为每个数组元素执行的函数.
         * @param {Object} [thisArg]  在执行callback函数时指定的this值.
         * 如果 thisArg参数被提供，它将作为callback函数的执行上下文，类似执行如下函数callback.call(thisArg, element, index, array)。
         * 如果thisArg是 undefined 或 null，函数的 this 值取决于函数是否在严格模式（严格模式下为空，非严格模式下为全局对象）。
         */
        forEach : function(array, callback, thisArg) {},
        /**
         * 对数组中的所有数据执行callback函数并返回新的数组. version(1.6)
         * @type {Function}
         * @param {Array} array
         * @param {Function} callback(item, index, array)
         * @param {Object} [thisArg]  在执行callback函数时指定的this值.
         * @return {Array}
         */
        map : function(array, callback, thisArg) {},
        /**
         * 判断数组中是否有部分是成立的 即 callback返回是否存在为true的值,存在返回true 否则false. version(1.6)
         * @type {Function}
         * @param {Array} array
         * @param {Function} callback(item, index, array)
         * @param {Object} [thisArg]  在执行callback函数时指定的this值.
         * @return {Boolean}
         */
        some : function(array, callback, thisArg) {},
        /**
         * 递归遍历数组中的元素，并执行callback. version(1.8)
         * @type {Function}
         * @param {Function} callback (previousValue(累加值), currentValue(当前数组的值), index(索引), array)
         * @param {String} [initialValue] 递归初始值
         */
        reduce : function(array, callback, initialValue) {},
        /**
         * 递归遍历数组中的元素，并执行callback. 与reduce相反，reduce 从 0 ~ length-1, reduceRight 从 length-1 ~ 0. version(1.8)
         * @type {Function}
         * @param {Function} callback (previousValue(累加值), currentValue(当前数组的值), index(索引), array)
         * @param {String} [initialValue] 递归初始值
         */
        reduceRight : function(array, callback, initialValue) {},
        /**
         * 根据传入参数创建新数组. version(ECMA6)
         * @param [item,..] 多个元素
         * @type {Function}
         */
        of : function() {},
        // other
        /**
         * 返回一个由原数组中计算值为true(即不是以下情况的值: null, undefined, zero, false, 或 "")的项
         * @type {Function}
         * @param {Array} array
         * @return {Array}
         */
        clean : function(array) {},
        /**
         * 测试指定项是否在数组中存在
         * @param {Array} array
         * @param {Object} item 要进行测试的项
         * @param {Number} [fromIndex] 可选: 默认值为0 在数组中开始搜索的起始位索引
         * @return {Boolean}
         */
        contains : function(array, item, fromIndex) {},
        /**
         * 获取数组最后一项的值，如果数组为空，则返回null
         * @param {Array} array
         * @return {Object}
         */
        getLast : function(array) {},
        /**
         * 清空数组
         * @param array
         * @returns {Array}
         */
        empty : function() {},
        /**
         * 去数组中的重复项，返回无重复数据的数组
         * @param {Array} array
         * @return {Array}
         */
        distinct : function(array) {}
    };

    var slice = Array.prototype.slice;

    LArray.isArray = (Array.prototype.isArray) ? function(array) {
        return Array.isArray(array);
    } :
    function(array) {
        return array instanceof Array;
    };

    LArray.indexOf = (Array.prototype.indexOf) ? function(array) {
        return Array.prototype.indexOf.apply(array, slice.call(arguments, 1));
    } :
    function(array, searchElement, fromIndex) {
        var i, l,
            f = (fromIndex) ? fromIndex : 0;

        l = array.length;

        if (l === 0 || fromIndex >= l) {
            return -1;
        }

        if (f < 0) {
            f = l - Math.abs(f);
        }

        for (i = f; i < l; i++) {
            if (array[i] === searchElement) {
                return i;
            }
        }

        return -1;
    };

    LArray.lastIndexOf = (Array.prototype.lastIndexOf) ? function(array) {
        return Array.prototype.lastIndexOf.apply(array, slice.call(arguments, 1));
    } :
    function(array, searchElement, fromIndex) {
        if (array === void 0 || array === null)
            throw new TypeError('array must not be null or undefined');

        var i, l,
            t = array,
            f = (fromIndex) ? fromIndex : 0,
            len = array.length >>> 0;

        if (len === 0 || f > len) {
            return -1;
        }

        l = len;
        if (fromIndex && f !== 0) {
            l = Number(f);
            if (l !== l) {
                l = 0;
            } else if (l !== 0 && l !== (1 / 0) && l !== -(1 / 0)) {
                l = (l > 0 || -1) * Math.floor(Math.abs(l));
            }
        }

        for (i = l >= 0 ?
            Math.min(l, len - 1)
            : len - Math.abs(l); i >= 0; i--) {
            if (i in t && t[i] === searchElement) {
                return i;
            }
        }
        return -1;
    };

    LArray.forEach = (Array.prototype.forEach) ? function(array) {
        return Array.prototype.forEach.apply(array, slice.call(arguments, 1));
    } :
    function(array, callback, thisArg) {
        if (!LArray.isArray(array))
            throw new TypeError('array must not be null or undefined');

        if (typeof callback !== 'function')
            throw new TypeError(callback +' is not a function');

        var i, l;
        for (i = 0, l = array.length; i < l; i++) {
            if (i in array) {
                callback.call(thisArg, array[i], i, array);
            }
        }
    };

    LArray.ervery = (Array.prototype.every) ? function(array) {
        return Array.prototype.ervery.apply(array, slice.call(arguments, 1));
    } :
    function(array, callback, thisArg) {
        if (array === void 0 || array === null)
            throw new TypeError('array must not be null or undefined');

        var len = array.length >>> 0;
        if (typeof callback !== 'function')
            throw new TypeError(callback +' is not a function');

        for (var i = 0; i < len; i++) {
            if (i in array && !callback.call(thisArg, array[i], i, array))
                return false;
        }

        return true;
    };

    LArray.filter = (Array.prototype.filter) ? function(array) {
        return Array.prototype.filter.apply(array, slice.call(arguments, 1));
    } :
    function(array, callback, thisArg) {
        if (array === void 0 || array === null)
            throw new TypeError('array must not be null or undefined');

        var res = [];
        var len = array.length >>> 0;
        if (typeof callback !== 'function')
            throw new TypeError(callback +' is not a function');

        for (var i = 0; i < len; i++) {
            if (i in array && callback.call(thisArg, array[i], i, array))
                res.push(array[i]);
        }

        return res;
    };

    LArray.map = (Array.prototype.map) ? function(array) {
        return Array.prototype.map.apply(array, slice.call(arguments, 1));
    } :
    function(array, callback, thisArg) {
        if (array === void 0 || array === null)
            throw new TypeError('array must not be null or undefined');

        var len = array.length >>> 0;
        var res = new Array(len);
        if (typeof callback !== 'function')
            throw new TypeError(callback+ ' is not a function');

        for (var i = 0; i < len; i++) {
            if (i in array)
                res[i] = callback.call(thisArg, array[i], i, array);
        }

        return res;
    };

    LArray.some = (Array.prototype.some) ? function(array) {
        return Array.prototype.some.apply(array, slice.call(arguments, 1));
    } :
    function(array, callback, thisArg) {
        if (array === void 0 || array === null)
            throw new TypeError('array must not be null or undefined');

        var len = array.length >>> 0;
        if (typeof callback !== 'function')
            throw new TypeError(callback +' is not a function');

        for (var i = 0; i < len; i++) {
            if (i in array && callback.call(thisArg, array[i], i, array))
                return true;
        }

        return false;
    };

    LArray.reduce = (Array.prototype.reduce) ? function(array) {
        return Array.prototype.reduce.apply(array, slice.call(arguments, 1));
    } :
    function(array, callback, initialValue) {
        if (array === null || array === void 0) 
            throw new TypeError('array must not be null or undefined');
        if (typeof callback !== 'function') 
            throw new TypeError(callback + ' is not a function');

        var i, l, val,
            isValueSet = false,
            t = array;

        l = t.length >>> 0;
        if (initialValue) {
            val = initialValue;
            isValueSet = true;
        }

        for (i = 0; i < l; i++) {
            if (i in t && isValueSet) {
                val = callback(val, t[i], i, t);
            } else {
                val = t[i];
                isValueSet = true;
            }
        }

        if (!isValueSet)
            throw new TypeError('Reduce of empty array with no initial value');

        return val;
    };

    LArray.reduceRight = (Array.prototype.reduceRight) ? function(array) {
        return Array.prototype.reduceRight.apply(array, slice.call(arguments, 1));
    } :
    function(array, callback, initialValue) {
        if (array === null || array === void 0)
            throw new TypeError('array must not be null or undefined');
        if (typeof callback !== 'function')
            throw new TypeError(callback + ' is not a function');

        var i, l, val,
            isValueSet = false,
            t = array;

        l = t.length >>> 0;
        if (initialValue) {
            val = initialValue;
            isValueSet = true;
        }

        for (i = l - 1; i > -1; i--) {
            if (i in t && isValueSet) {
                val = callback(val, t[i], i, t);
            } else {
                val = t[i];
                isValueSet = true;
            }
        }

        if (!isValueSet)
            throw new TypeError('Reduce of empty array with no initial value');

        return val;
    };

    LArray.of = (Array.prototype.of) ? function(item) {
        return Array.of(item);
    } :
    function() {
        return Array.prototype.slice.call(arguments);
    };

    LArray.clean = function(array) {
        return LArray.filter(array, function(item) {
            if (item === void 0 || item === null || item === "" || item === 0 || item === false) {
                return false;
            }
            return true;
        });
    };

    LArray.contains = function(array, item, fromIndex) {
        return LArray.indexOf(array, item, fromIndex) !== -1;
    };

    LArray.getLast = function(array) {
        if (array === null || array === void 0)
            return null;

        var l = array.length >>> 0;

        if (l === 0) return null;
        return array[l - 1];
    };

    LArray.empty = function(array) {
        if (LArray.isArray(array)) {
            array.length = 0;
        }

        return array;
    };

    LArray.distinct = function(array) {
        if (array === null || array === void 0)
            throw new TypeError('array must not be null or undefined');

        var ret = [];

        for (var i = 0, l = array.length; i < l; i++) {
            if (!LArray.contains(array, array[i])) {
                ret.push(array[i]);
            }
        }

        return ret;
    }

    this.register('L.Array', LArray);
}.call(L);

