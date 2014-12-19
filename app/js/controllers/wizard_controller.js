angular.module("app").controller('WizardController', function($scope) {
    $scope.steps = [{
        id: 'start', title: 'Start a long process'
    }, {
        id: 'finish', title: 'Finish a long process'
    }];
});
