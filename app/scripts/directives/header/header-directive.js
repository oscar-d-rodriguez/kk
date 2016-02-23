angular.module('kikisApp.directives.header', [])
	.directive('headerDirective', function(){
		return {
      	templateUrl: 'scripts/directives/header/views/header-directive-view.html',
      	restrict: 'E',
      	replace:true
    };
});