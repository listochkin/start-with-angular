angular.module("app").controller('WizardController', function($scope, wizardStepService, $state) {
    $scope.steps = wizardStepService.getSteps();
    var currentStep = $scope.steps.filter(function (step) {
        return step.id === $state.params.stepId;
    });
    $scope.currentStep = currentStep[0];
});
