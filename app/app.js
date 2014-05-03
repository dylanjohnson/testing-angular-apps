/**
 * @file Base module for the PizzaShop application
 * @author Dylan Johnson <therealdylanjohnson@gmail.com>
 * @copyright Dylan Johnson, 2014
 */
(function () {
    'use strict';

    var app = angular.module('pizzaShop', [
        'ui.router'
    ]);

    app.config(function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            controller: 'homeController',
            template: '<h1>Hello there</h1>'
        });
    });

    app.controller('homeController', function ($scope) {

    });
}());