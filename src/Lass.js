// Copyright 2013 FOCUS Inc.All Rights Reserved.

/**
 * @fileOverview
 * @author sheny@made-in-china.com
 * @version v0.1
 */

;void function() {
    "use strict";

    var root = this;
    var lass = {};

    if (root.Lass) {
        return;
    }

    lass.version = "0.1";

    /**
     * debugInfo
     * @param message
     */
    lass.debug = function(message) {
        window.console && console.info(message);
    };

    /**
     * 注册命名空间
     * @param {String} namespace
     * @param {Function} [implement]
     * @param {Boolean} [override]
     * @returns {Object}
     */
    lass.register = function(namespace, implement, override) {
        if (!namespace) return;

        var nObjects, i,
            parent = lass;

        if (namespace.indexOf('.') !== -1) {
            nObjects = namespace.split('.');
            if (nObjects[0] === 'Lass') {
                nObjects = nObjects.slice(1);
            }

            for (i = 0; i < nObjects.length; ++i) {
                if (!parent[nObjects[i]]) {
                    parent[nObjects[i]] = implement || {};
                } else {
                    lass.debug('Exist "'+ namespace +'", you can override it by the arguments override!');
                }

                if (parent[nObjects[i]] && implement && override) {
                    parent[nObjects[i]] = implement;
                }

                parent = parent[nObjects[i]];
            }
        }

        return parent;
    };

    root.Lass = lass;
}.call(this);



