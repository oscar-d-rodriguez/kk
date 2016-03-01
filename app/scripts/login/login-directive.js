angular.module('kikisApp.directives.login', [])
	.directive("loginForm", [
    function () {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: 'scripts/login/views/login-form.html',
        replace: 'true',
        controller: ['$scope', '$http', '$window',
          function($scope, $http, $window) {
            $scope.loginError = false;
            $scope.login = function () {
              $scope.loginError = false;
              $http.post('/auth/login', {username: $scope.username, password: $scope.password})
                .success(function (response) {
                  $window.location='/';
                })
                .error(function (err, status) {
                  $scope.username = '';
                  $scope.password = '';
                  $scope.loginError = true;
                })
            }
          }
        ]
      }
    }]);