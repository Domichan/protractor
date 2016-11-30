/* jshint node: true */
'use strict';
var Page = require('astrolabe').Page,
    world = require('../../config/world.js');

var self = Page.create({
    url: {value: ''},

    authNameOutput: {
        get: function () {
            return element(self.by.binding('backData.authName'));
        }
    },
    authSurnameOutput: {
        get: function () {
            return element(self.by.binding('backData.authSurname'));
        }
    },
    titleOutput: {
        get: function () {
            return element(self.by.binding('backData.bookTitle'));
        }
    },
    typeOutput: {
        get: function () {
            return element(self.by.binding('backData.bookTypeName'));
        }
    },
    isbnOutput: {
        get: function () {
            return element(self.by.binding('backData.bookIsbn'));
        }
    },
    backButton: {
        get: function () {
            return element(self.by.linkText('Back to books list'));
        }
    },

    getAuthName: {
        value: function () {
            return browser.wait(world.EC.presenceOf(self.authNameOutput), 3000)
                .then(function () {
                    return self.authNameOutput.getText();
                });
        }
    },
    getAuthSurname: {
        value: function () {
            return browser.wait(world.EC.presenceOf(self.authSurnameOutput), 3000)
                .then(function () {
                    return self.authSurnameOutput.getText();
                });
        }
    },
    getTitle: {
        value: function () {
            return browser.wait(world.EC.presenceOf(self.titleOutput), 3000)
                .then(function () {
                    return self.titleOutput.getText();
                });
        }
    },
    getType: {
        value: function () {
            return browser.wait(world.EC.presenceOf(self.typeOutput), 3000)
                .then(function () {
                    return self.typeOutput.getText();
                });
        }
    },
    getISBN: {
        value: function () {
            return browser.wait(world.EC.presenceOf(self.isbnOutput), 3000)
                .then(function () {
                    return self.isbnOutput.getText();
                });
        }
    },
    goBackToList: {
        value: function () {
            return browser.wait(world.EC.elementToBeClickable(self.backButton), 3000)
                .then(function () {
                    self.backButton.click();
                });
        }
    }

});
module.exports = self;