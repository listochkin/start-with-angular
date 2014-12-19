angular.module("app").controller('WizardController', function($scope, $state, wizardStepsService, wizardStepsPersistenceService, wizardFormService) {
    var currentId = $state.params.stepId;

    $scope.steps = wizardStepsPersistenceService.getSteps();
    $scope.currentStep = wizardStepsService.getStep(currentId);
    var prevStep = wizardStepsService.getPrev(currentId);
    $scope.prevStepId = prevStep && prevStep.id;
    var nextStep = wizardStepsService.getNext(currentId);
    $scope.nextStepId = nextStep && nextStep.id;

    // forms
    $scope.getFieldNameInScope = function getFieldNameInScope(step, field) {
        return step.id + "." + field.name;
    };

    $scope.$watch('forms', function () {
        $scope.forms = $scope.forms || {};
        window.localStorage.forms = JSON.stringify($scope.forms);
    }, true);

    $state.current.onEnter = function () {
        $scope.forms = JSON.parse(window.localStorage.forms || '{}');
    };
});
