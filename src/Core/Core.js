// Copyright 2013 FOCUS Inc.All Rights Reserved.
/**
 * @name Util
 * @description Util 常用方法集合
 * @class Util
 * @type {Object}
 * @requires Lass
 */
void function() {
    "use strict";

    var util = {
        /**
         * 获取地址栏参数
         * @param {String} name
         * @returns {Object|Undefined}
         */
        queryString: function() {},
        /**
         * 对象覆盖整合
         * @param {Boolean} [override] 是否覆盖同名属性 默认true
         * @param {Object} destination 目标对象
         * @param [source,..]
         */
        extend: function(override, destination, source) {},
        /**
         * 返回当前时间戳的16进制数
         * @returns {string}
         */
        time: function() {},
        /**
         * debugInfo
         * @param message
         */
        debug: function(message) {},
        /**
         * 注册命名空间
         * @param {String} namespace
         * @param {Function} [implement]
         * @param {Boolean} [override]
         * @returns {Object}
         */
        register: function() {}
    };

    util.queryString = function(name) {
        var  args, tmpArg,
            query = {},
            url = window.location.href;

        if (url.indexOf('?') !== -1) {
            args = url.slice(url.indexOf('?') + 1);
            if (args.indexOf('&') !== -1) {
                args = args.split('&');
                for (var i = 0, l = args.length; i < l; i++) {
                    tmpArg = args[i].split('=');
                    if (tmpArg.length) {
                        query[tmpArg[0]] = tmpArg[1];
                    }
                }
            } else {
                tmpArg = args.split('=');
                if (tmpArg.length) {
                    query[tmpArg[0]] = tmpArg[1];
                }
            }
        }

        return query[name];
    };

    util.extend = function(override) {
        var start, args, arg, item, dest;

        if (arguments[0] instanceof Boolean) {
            start = 1;
            override = !!arguments[0];
        } else {
            start = 0;
            override = true;
        }

        dest = arguments[start];
        args = [].slice.call(arguments, start + 1);

        while(args.length) {
            arg = args.shift();
            if (!(arg instanceof Object)) {
                continue;
            }

            for (item in arg) {
                if ((typeof arg[item] === 'object')) {
                    dest[item] = util.extend(override, (dest[item] || {}), arg[item]);
                } else if (override || !(item in dest)) {
                    dest[item] = arg[item];
                }
            }
        }

        return dest;
    };

    util.time = function() {
        return new Date().getTime().toString(16);
    };

    util.debug = function(message) {
        window.console && console.info(message);
    };

    util.register = function(namespace, implement, override) {
        if (!namespace) return;

        var nObjects, i,
            parent = L;

        if (namespace.indexOf('.') !== -1) {
            nObjects = namespace.split('.');
            if (nObjects[0] === 'Lass' || nObjects[0] === 'L') {
                nObjects = nObjects.slice(1);
            }

            for (i = 0; i < nObjects.length; ++i) {
                if (!parent[nObjects[i]]) {
                    parent[nObjects[i]] = implement || {};
                } else {
                    util.debug('Exist "'+ namespace +'", you can override it by the arguments override!');
                }

                if (parent[nObjects[i]] && implement && override) {
                    parent[nObjects[i]] = implement;
                }

                parent = parent[nObjects[i]];
            }
        }

        return parent;
    };

    util.extend(L, util);
}.call(L);
