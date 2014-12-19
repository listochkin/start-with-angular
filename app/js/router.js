angular.module('app').config(function ($stateProvider) {
  $routeProvider.otherwise({ redirectTo: '/login' });
  $stateProvider
    .state('home', {
      url: '/welcome',
      templateUrl: 'welcome.html'
    })
    .state('steps', {
      url: '/steps',
      templateUrl: 'steps.html'
    })
    .state('steps.step', {
      url: '/steps/:stepId',
      templateUrl: 'step.html'
    })
    .state('success', {
      url: '/success',
      templateUrl: 'success.html'
    });
});
