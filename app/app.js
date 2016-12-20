'use strict';
var main = angular.module('app', ['ui.router']);
main.constant('basicUrl','http://localhost:3000');
main.config(function($stateProvider, $urlRouterProvider){

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise('/displayBooks');

    $stateProvider
        .state('displayBooks', {
            url: '/displayBooks',
            templateUrl: './displayBooks/displayBooks.html',
            controller: 'displayBooksCtrl'
        })
        .state('addBook', {
            url: '/addBook',
            templateUrl: './addBook/addBook.html',
            controller: 'addBookCtrl'
        })
        .state('displayUsers', {
            url: '/displayUsers',
            templateUrl: './displayUsers/displayUsers.html',
            controller: 'displayUsersCtrl'
        })
        .state('addUser', {
            url: '/addUser',
            templateUrl: './addUser/addUser.html',
            controller: 'addUserCtrl'
        })
        .state('confirmBook', {
            url: '/confirmBook',
            templateUrl: './confirmBook/confirmBook.html',
            controller: 'addBookCtrl'
        });
});


