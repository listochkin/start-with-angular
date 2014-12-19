angular.module("app").controller('WizardController', function($scope, wizardStepService, $state) {
    var currentId = $state.params.stepId;

    $scope.steps = wizardStepService.getSteps();
    $scope.currentStep = wizardStepService.getStep(currentId);
    $scope.prevStep = wizardStepService.getPrev(currentId);
    $scope.nextStep = wizardStepService.getNext(currentId);
});
