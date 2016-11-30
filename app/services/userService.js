'use strict';
main.service('userService', ['$http', 'basicUrl', function ($http, basicUrl) {
    this.list = function (callback) {
        $http.get(basicUrl + '/users')
            .then(function (responseText) {
                callback(responseText.data);
            }, function (error) {
                console.log('error')
            });
    };
    this.get = function (id, callback) {
        $http.get(basicUrl + '/users/' + id)
            .then(function (responseText) {
                callback(responseText.data);
            }, function (error) {
                console.log('error');
            });
    };

    this.add = function (formData, callback) {
        $http({
            method: 'POST',
            url: basicUrl + '/users',
            data: JSON.stringify(formData),
            headers: {"Content-Type": "application/json"}
        }).then(function (responseId) {
            callback(responseId.data);
        }, function (error) {
            console.log(error);
        });
    };

    this.delete = function (id, callback) {
        $http.delete(basicUrl + '/users/' + id)
            .then(function (responseText) {
                callback(responseText.data);
            }, function (error) {
                console.log(error);
            });
    };

}]);