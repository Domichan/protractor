/* jshint node: true */
'use strict';
var Page = require('astrolabe').Page,
    world = require('../../config/world.js');

var self = Page.create({
    url: {value: ''},

    addBookButton: {
        get: function () {
            return element(self.by.id('addBook'));
        }
    },
    authNameInput: {
        get: function () {
            return element(self.by.model('formData.authName'));
        }
    },
    authSurnameInput: {
        get: function () {
            return element(self.by.model('formData.authSurname'));
        }
    },
    titleInput: {
        get: function () {
            return element(self.by.id('title'));
        }
    },
    typeSelect: {
        get: function () {
            return element(self.by.id('type'));
        }
    },
    isbnTextArea: {
        get: function () {
            return element(self.by.id('isbn'));
        }
    },
    saveButton: {
        get: function () {
            return element(self.by.buttonText('Save'));
        }
    },

    launchAddBook: {
        value: function () {
            return browser.wait(world.EC.elementToBeClickable(self.addBookButton), 3000)
                .then(function () {
                    self.addBookButton.click();
                });
        }
    },
    setAuthName: {
        value: function (name) {
            return browser.wait(world.EC.presenceOf(self.authNameInput), 3000)
                .then(function () {
                    self.authNameInput.sendKeys(name);
                });
        }
    },
    setAuthSurname: {
        value: function (surname) {
            return browser.wait(world.EC.presenceOf(self.authSurnameInput), 3000)
                .then(function () {
                    self.authSurnameInput.sendKeys(surname);
                });
        }
    },
    setTitle: {
        value: function (title) {
            return browser.wait(world.EC.presenceOf(self.titleInput), 3000)
                .then(function () {
                    self.titleInput.sendKeys(title);
                });
        }
    },
    setType: {
        value: function (type) {
            return browser.wait(world.EC.presenceOf(self.typeSelect), 3000)
                .then(function () {
                    self.typeSelect.sendKeys(type);
                });
        }
    },
    setISBN: {
        value: function (isbn) {
            return browser.wait(world.EC.presenceOf(self.isbnTextArea), 3000)
                .then(function () {
                    self.isbnTextArea
                        .clear()
                        .sendKeys(isbn);
                });
        }
    },
    saveBook: {
        value: function () {
            return browser.wait(world.EC.elementToBeClickable(self.saveButton), 3000)
                .then(function () {
                    self.saveButton.click();
                });
        }
    }

});
module.exports = self;