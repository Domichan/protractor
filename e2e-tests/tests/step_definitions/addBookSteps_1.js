/* jshint node: true */
'use strict';
const world = require('../../config/world.js'),
    pages = require('../../config/pageCollection.js'),
    uuid = require('node-uuid');

var addBookSteps = function () {
    var addBook = pages.addBook,
        confirmBook = pages.confirmBook,
        displayBooks = pages.displayBooks;

    this.Given(/^I go to book page$/, function (callback) {
        browser.get(world.config.config.baseUrl)
            .then(function () {
                browser.driver.manage().window().maximize();
            })
            .then(callback);
    });

    this.When(/^(?:I add new book|There is the following book on list:)?$/, function (data, callback) {
        var table = data.hashes(),
            row = table[0];
        addBook.launchAddBook()
            .then(function () {
                addBook.setAuthName(row.authName)
                    .then(function () {
                        addBook.setAuthSurname(row.authSurname)
                            .then(function () {
                                addBook.setAuthSurname(row.authSurname)
                                    .then(function () {
                                        addBook.setTitle(row.title)
                                            .then(function () {
                                                addBook.setType(row.type)
                                                    .then(function () {
                                                        addBook.setISBN(world.basicSupport.bookISBN.ISBN)
                                                            .then(function () {
                                                                return addBook.saveBook()
                                                                    .then(callback);
                                                            })
                                                    })
                                            })
                                    })
                            })
                    })
            })
    });

    this.When(/^I should see new book data$/, function (data, callback) {
        var table = data.hashes(),
            row = table[0];
        world.expect(confirmBook.getAuthName()).to.eventually.equal(row.authName, 'Author name is not proper.');
        world.expect(confirmBook.getAuthSurname()).to.eventually.equal(row.authSurname, 'Author surname is not proper.');
        world.expect(confirmBook.getTitle()).to.eventually.equal(row.title, 'Book title is not proper.');
        world.expect(confirmBook.getType()).to.eventually.equal(row.type, 'Book type is not proper.');
        world.expect(confirmBook.getISBN()).to.eventually.equal(world.basicSupport.bookISBN.ISBN, 'Book ISBN is not proper.').and.notify(callback);
    });

    this.When(/^I should see new book in table$/, function (data, callback) {
        var table = data.hashes(),
            row = table[0];
        confirmBook.goBackToList()
            .then(function () {
                return displayBooks.searchOnList(world.basicSupport.bookISBN.ISBN);
            })
            .then(function () {
                world.expect(displayBooks.allBooksDataCount()).to.eventually.equal(1, 'Number of books on list is not proper').and.notify(callback);
            });
    });
};
module.exports = addBookSteps;