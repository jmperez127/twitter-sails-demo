'use strict';

angular.module('auth').controller('LoginCtrl',
  ['$scope', '$rootScope', 'AuthService',
  function ($scope, $rootScope, AuthService) {

  $scope.formData = {};

  $scope.login = function () {
    AuthService.login($scope.formData).then(function (response) {
      console.log(response);
      $scope.formData = {};
    });
  };

}]);
