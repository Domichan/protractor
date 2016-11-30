'use strict';
main.service('bookService', ['$http', 'basicUrl', function ($http, basicUrl) {
    this.list = function (callback) {
        $http.get(basicUrl + '/books')
            .then(function (responseText) {
                callback(responseText.data);
            }, function (error) {
                console.log('error')
            });
    };
    this.get = function (id, callback) {
        $http.get(basicUrl + '/books/' + id)
            .then(function (responseText) {
                callback(responseText.data);
            }, function (error) {
                console.log('error');
            });
    };

    this.add = function (formData, callback) {
        $http({
            method: 'POST',
            url: basicUrl + '/books',
            data: JSON.stringify(formData),
            headers: {"Content-Type": "application/json"}
        }).then(function (responseId) {
            callback(responseId);
        }, function (error) {
            if (error.status === 412) return callback(error);
            console.log(error);
        });
    };

    this.delete = function (id, callback) {
        $http.delete(basicUrl + '/books/' + id)
            .then(function (responseText) {
                callback(responseText.data);
            }, function (error) {
                console.log(error);
            });
    };

    this.listTypes = function (callback) {
        $http.get(basicUrl + '/types')
            .then(function (responseText) {
                callback(responseText.data);
            }, function (error) {
                console.log(error);
            });
    };

}]);