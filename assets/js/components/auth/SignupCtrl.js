'use strict';

angular.module('auth').controller('SignupCtrl',
  ['$scope', '$rootScope', 'AuthService',
    function ($scope, $rootScope, AuthService) {
      $scope.formData = {};

      $scope.signup = function () {
        AuthService.signup($scope.formData).then(function (response) {
          console.log(response);
          $scope.formData = {};
        });
      };

    }]);
