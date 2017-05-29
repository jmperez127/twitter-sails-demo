angular.module('login').config(['$stateProvider',
  function ($stateProvider) {

    $stateProvider.state({
        name: 'login',
        url: '',
        controller: 'LoginCtrl',
        templateUrl: 'js/components/login/login.tpl.html'
      }
    );

  }]);
