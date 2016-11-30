'use strict';
main.controller("addUserCtrl", ['userService', '$scope', function (userService, $scope) {
    $scope.userData = {};
    $scope.confirmData = {};
    $scope.id = null;

    $scope.submit = function () {
        userService.add($scope.userData, function (insertedId) {
            $scope.id = insertedId;
            userService.get($scope.id, function (response) {
                $scope.confirmData = response;
            });
        });
    }
}]);