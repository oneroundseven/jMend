// Copyright 2013 FOCUS Inc.All Rights Reserved.

/**
 * @fileOverview
 * @author sheny@made-in-china.com
 * @version v0.1
 */

;void function() {
    'use strict';

    var toString = Object.prototype.toString;
    var R_NATIVE = /\{\s*\[native\s*code\]\s*\}/i;

    var type = {
        isNative : function(method) {
            if (!type.isFunction(method)) return null;
            return R_NATIVE.test(method.toString());
        },
        isEmpty : function(obj) {
            if (obj === null) return true;
            if (type.isArray(obj) || type.isString(obj)) return obj.length === 0;
            for (var key in obj) if (type.has(obj, key)) return false;
            return true;
        },
        isElement : function(obj) {
            return !!(obj && obj.nodeType === 1);
        },
        isObject : function(obj) {
            return obj === Object(obj);
        },
        isNaN : function(obj) {
            return type.isNumber(obj) && obj !== +obj;
        },
        isBoolean : function(obj) {
            return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
        },
        type : function(item) {
            if (item === null) return 'null';

            if (type.isString(item)) {
                return 'string';
            }

            if (type.isArray(item)) {
                return 'array';
            }

            if (type.isDate(item)) {
                return 'date';
            }

            if (item.nodeName){
                if (item.nodeType === 1) return 'element';
                if (item.nodeType === 3) return (/\S/).test(item.nodeValue) ? 'textnode' : 'whitespace';
            } else if (typeof item.length === 'number'){
                if (item.callee) return 'arguments';
                if ('item' in item) return 'collection';
            }

            return typeof item;
        }
    };

    function each(obj, fn, context) {
        if (obj === null) return;
        if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
            obj.forEach(fn, context);
        } else {
            for (var i = 0, l = obj.length; i < l; i++) {
                if (fn.call(context, obj[i], i, obj) === {}) return;
            }
        }
    }

    each(['Arguments', 'Function', 'String', 'Array', 'Number', 'Date', 'RegExp'], function(name) {
        type['is' + name] = function(obj) {
            return toString.call(obj) === '[object ' + name + ']';
        };
    });

    this.register('Lass.Type', type);
}.call(Lass);