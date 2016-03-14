
/**
 * @name String
 * @class
 * @description
 * @requires Lass
 */
// javascript 1.0 link, anchor, lastIndexOf, slice
// javascript 1.1 valueOf
// javascript 1.2 fromCharCode, charAt, charCodeAt, concat, search
// test, contains, trim, toInt, toFloat, substitute
// String.prototype.trim  javascript 1.8.1
// ecma6 startsWith, endsWith, contains, codePointAt, repeat, fromCodePoint
;void function() {

    var LString = {
        /**
         * 去字符串两边的空格 version(1.8.1)
         * @param {String} string
         * @returns {String}
         */
        trim : function(string) {},
        /**
         * 去字符串左边空格 version(1.8.1)
         * @param {String} string
         * @return {String}
         */
        trimLeft : function(string) {},
        /**
         * 去字符串右边空格 version(1.8.1)
         * @param {String} string
         * @returns {String}
         */
        trimRight : function(string) {},
        /**
         * check string start with some word version(ecma6)
         * @param {String} string
         * @param {String} pattern
         * @param {Number} position
         * @return {Boolean}
         */
        startsWith : function(string, searchString, position) {},
        /**
         * check string end with some word version(ecma6)
         * @param {String} string
         * @param {String} pattern
         * @param {Number} position
         * @return {Boolean}
         */
        endsWith : function(string, searchString, position) {},
        /**
         * 重复字符串
         * @param {String} string
         * @param {Number} count 重复次数
         * @return {String}
         */
        repeat : function(string, count) {}
    };

    var slice = Array.prototype.slice;

    LString.trimLeft = (String.prototype.trimLeft) ? function(string) {
        return string.trimLeft();
    } :
    function(string) {
        return string.replace(/^\s\s*/, '');
    };

    LString.trimRight = (String.prototype.trimRight) ? function(string) {
        return string.trimRight();
    } :
    function(string) {
        var ws = /\s/,
            i = string.length;
        while(ws.test(string.charAt(--i)));
        return string.slice(0, i+1);
    };

    LString.trim = (String.prototype.trim) ? function(string) {
        return string.trim();
    } :
    function(string) {
        return LString.trimRight(LString.trimLeft(string));
    };

    LString.startsWith = (String.prototype.startsWith) ? function(string) {
        return String.prototype.startsWith.apply(string, slice.call(arguments, 1));
    } :
    function(string, searchString, position) {
        return string.slice((position || 0), string.length) === searchString;
    };

    LString.endsWith = (String.prototype.endsWith) ? function(string) {
        return String.prototype.endsWith.apply(string, slice.call(arguments, 1));
    } :
    function(string, searchString, position) {
        return string.slice(string.length - pattern.length, position) === pattern;
    };

    LString.repeat = (String.prototype.repeat) ? function(string) {
        return String.prototype.repeat.apply(string, slice.call(arguments, 1));
    } :
    function(string, count) {
        if (string === void 0 || string === null)
            throw new TypeError('array must not be null or undefined');

        count = count || 0;
        var str = '';

        if (count === 0) return '';
        count = parseInt(count, 10);

        while(count > 0) {
            str += string;
            --count;
        }

        return str;
    };

    this.register('L.String', LString);
}.call(L);
