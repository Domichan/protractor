var pageCollection = (function () {

    var addBook = require('../tests/page/addBook'),
        confirmBook = require('../tests/page/confirmBook'),
        displayBooks = require('../tests/page/displayBooks');

    return {
        addBook: addBook,
        confirmBook: confirmBook,
        displayBooks: displayBooks
    };

}());
module.exports = pageCollection;

