'use strict';

/**
 * @ngdoc function
 * @name kikisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kikisApp
 */
angular.module('kikisApp')
  .controller('mainCtrlr', function ($scope, $uibModal) {


    /**
	 * @ngdoc: function to open login modal
	 * @description: Instanciate the login logic in new controller	 
	 */
    $scope.open = function () {
  		var loginModalController = $uibModal.open({
        	templateUrl: 'scripts/login/views/login-view.html',
        	 controller: 'loginController'
    	});
    };

  });
