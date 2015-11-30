'use strict';

/**
 * @ngdoc overview
 * @name kikisApp
 * @description
 * # kikisApp
 *
 * Main module of the application.
 */
angular
  .module('kikisApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store'
      })
      .when('/product-detail', {
        templateUrl: 'views/product-detail.html',
        controller: 'productDetailCtrl',
        controllerAs: 'detail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
