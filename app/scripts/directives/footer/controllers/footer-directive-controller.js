'use strict';

/**
 * @ngdoc function
 * @name kikisApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kikisApp
 */
angular.module('kikisApp')
  .controller('loginDirectiveCtrl', function () {
    
    
  	/**
  	*
  	* Create the login object
  	*
  	*/
    $scope.email = "";
    $scope.pwd = "";
    $scope.loggedIn = false;
    $scope.loggingIn = false;

    $scope.showLogin = function () {
        $scope.loggingIn = true;
    };

    $scope.logout = function () {
        // do your logout logic
        $scope.user = null;
        $scope.loggedIn = false;
    };

    $scope.login = function () {
        // do your login logic
        $scope.loggingIn = false;
        $scope.loggedIn = true;
    };



  });
