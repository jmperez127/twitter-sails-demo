angular.module('auth').config(['$stateProvider',
  function ($stateProvider) {

    $stateProvider
      .state({
          name: 'login',
          url: '',
          controller: 'LoginCtrl',
          templateUrl: 'js/components/auth/login.tpl.html'
        })
      .state({
        name: 'signup',
        url: '/signup',
        controller: 'SignupCtrl',
        templateUrl: 'js/components/auth/signup.tpl.html'
      }
    );

  }]);
