/* jshint node: true */
'use strict';
var Page = require('astrolabe').Page,
    world = require('../../config/world.js');

var self = Page.create({
    url: {value: ''},

    searchField: {
        get: function () {
            return element(self.by.model('search.bookIsbn'));
        }
    },
    allBooksData: {
        get: function () {
            return element.all(self.by.repeater('book in books'));
        }
    },
    firstTrashIcon: {
        get: function () {
            return element.all(self.by.css('.glyphicon-trash')).get(0);
        }
    },
    searchOnList: {
        value: function (isbn) {
            return self.searchField.sendKeys(isbn);
        }
    },
    allBooksDataCount: {
        value: function () {
            return self.allBooksData.count();
        }
    },
    deleteFirstBook: {
        value: function () {
            return self.firstTrashIcon.click();
        }
    }


});
module.exports = self;