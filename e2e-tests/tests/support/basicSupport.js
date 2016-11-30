/* jshint node: true */
'use strict';
var uuid = require('node-uuid'),
    basicSupport = (function () {
        return {
            bookISBN: {
                ISBN: null,
                setISBN: function () {
                    this.ISBN = uuid.v4().split('-')[0];
                }
            }
        };
    }());

module.exports = basicSupport;