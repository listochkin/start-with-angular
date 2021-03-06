angular.module('app').config(function ($locationProvider, $routeProvider, $stateProvider) {
  // $routeProvider.otherwise({ redirectTo: '/login' });
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/welcome',
      templateUrl: 'welcome.html',
      controller: 'WizardController'
    })
    .state('steps', {
      url: '/steps',
      templateUrl: 'steps.html',
      controller: 'WizardController'
    })
    .state('steps.step', {
      url: '/:stepId',
      templateUrl: 'step.html',
      controller: 'WizardController'
    })
    .state('success', {
      url: '/success',
      templateUrl: 'success.html',
      controller: 'WizardController'
    });
});
