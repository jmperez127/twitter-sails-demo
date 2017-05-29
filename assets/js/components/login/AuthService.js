'use strict';

angular.module('login').service('AuthService', function ($http, $q) {
  return {
    'login': function (data) {
      var defer = $q.defer();
      $http.post('/auth/login', data).success(function (resp) {
        defer.resolve(resp);
      }).error(function (err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }
});
