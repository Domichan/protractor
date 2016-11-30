'use strict';
main.controller("displayBooksCtrl", ['bookService', '$scope', function (bookService, $scope) {
    $scope.books = [];

    bookService.list(function (response) {
        $scope.books = response;
    });

    $scope.removeRow = function (bookId) {
        bookService.delete(bookId, function (response) {
            bookService.list (function (responseList) {
                $scope.books = responseList;
            });
        });
    }
}]);