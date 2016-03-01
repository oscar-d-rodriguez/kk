'use strict';

/**
 * @ngdoc Controller
 * @name kikisApp.controller:MainCtrl
 * @description Controller of the kikisApp
 */
angular.module('kikisApp')
  .controller('mainCtrlr', function ($scope, $uibModal) {
    /**
	   * @ngdoc: function to open login modal
	   * @description: Instanciate the login logic in new controller	 
	   */
    $scope.openLoginModal = function () {
  		var loginModalController = $uibModal.open({
        	templateUrl: 'scripts/login/views/login-modal.html',
        	controller: 'loginController',
          windowTopClass:'loginModal'
    	});
      console.log(loginModalController);
    };
  });
