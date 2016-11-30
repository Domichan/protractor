'use strict';
main.controller("addBookCtrl", ['bookService', '$scope', '$http', 'basicUrl', function (bookService, $scope, $http, basicUrl) {
    $scope.types = [];
    $scope.formData = {};
    $scope.backData = {};
    $scope.id = null;
    $scope.responseMessage = null;

    bookService.listTypes(function (response) {
        $scope.types = response;
    });

    $scope.submit = function () {
        bookService.add($scope.formData, function (response) {
            if(response.status === 412) {
                $scope.responseMessage = response.data;
                $scope.id = null;
            } else {
                $scope.id = response.data;
                $scope.responseMessage = null;
                bookService.get($scope.id, function (response) {
                    $scope.backData = response;
                });
            }
        });
    }
}]);