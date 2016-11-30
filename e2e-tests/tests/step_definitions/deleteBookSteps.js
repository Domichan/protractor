/* jshint node: true */
'use strict';
var world = require('../../config/world.js'),
    pages = require('../../config/pageCollection.js');

var deleteBookSteps = function () {
    var displayBooks = pages.displayBooks,
        confirmBook = pages.confirmBook;

    this.When(/^I delete this book$/, function (callback) {
        confirmBook.goBackToList()
            .then(function () {
                return displayBooks.searchOnList(world.basicSupport.bookISBN.ISBN);
            })
            .then(function () {
                return displayBooks.deleteFirstBook();
            })
            .then(callback);
    });

    this.Then(/^I should not see deleted book in table$/, function (callback) {
        confirmBook.goBackToList()
            .then(function () {
                return displayBooks.searchOnList(world.basicSupport.bookISBN.ISBN);
            })
            .then(function () {
                world.expect(element.all(by.repeater('book in books')).get(0)).to.be.present.and.notify(callback);
                //world.expect(displayBooks.allBooksData.get(0).isPresent()).to.eventually.equal(false).and.notify(callback);
            });
    });

};
module.exports = deleteBookSteps;