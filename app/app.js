/**
 * @file Base module for the PizzaShop application
 * @author Dylan Johnson <therealdylanjohnson@gmail.com>
 * @copyright Dylan Johnson, 2014
 */
// (function (angular) {
    // 'use strict';

    var app = angular.module('pizzaShop', [
        'ui.router',
        'templates-app'
    ]);

    app.config(function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'homeController',
                templateUrl: 'home/home.html'
            })
            .state('ingredients', {
                url: '/ingredients',
                controller: function ($scope) {

                },
                template: '<h2>Yo!</h2>'
            })
        ;
    });
//}(angular));