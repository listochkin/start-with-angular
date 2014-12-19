angular.module("app").controller('WizardController', function($scope, wizardStepService, $state) {
    var currentId = $state.params.stepId;

    $scope.steps = wizardStepService.getSteps();
    $scope.currentStep = wizardStepService.getStep(currentId);
    var prevStep = wizardStepService.getPrev(currentId);
    $scope.prevStepId = prevStep && prevStep.id;
    var nextStep = wizardStepService.getNext(currentId);
    $scope.nextStepId = nextStep && nextStep.id;
});
