'use strict';

/**
 * @ngdoc: function
 * @name: kikisApp.controller:loginModalController
 * @description: Controller to handle the login modal instance
 * Controller of the kikisApp
 */
angular.module('kikisApp')
  .controller('loginController', function ($scope, $uibModalInstance) {
    
  	$scope.close = function () {
		$uibModalInstance.close();
	};

});
