'use strict';
'use strict';
main.controller("displayUsersCtrl", ['userService', '$scope', function (userService, $scope) {
    $scope.users = [];

    userService.list(function (response) {
        $scope.users = response;
    });

    $scope.removeRow = function (bookId) {
        userService.delete(bookId, function (response) {
            userService.list (function (responseList) {
                $scope.users = responseList;
            });
        });
    }
}]);