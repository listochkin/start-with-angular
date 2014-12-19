angular.module('app').config(function ($locationProvider, $routeProvider, $stateProvider) {
  // $routeProvider.otherwise({ redirectTo: '/login' });
  $locationProvider.html5Mode(true);

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
      url: '/:stepId',
      templateUrl: 'step.html'
    })
    .state('success', {
      url: '/success',
      templateUrl: 'success.html'
    });
});
