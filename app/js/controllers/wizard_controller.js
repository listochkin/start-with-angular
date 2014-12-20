angular.module("app").controller('WizardController', function($scope, $state, wizardStepsService, wizardStepsPersistenceService, wizardFormService) {
    var currentId = $state.params.stepId;

    $scope.steps = wizardStepsPersistenceService.getSteps();
    $scope.currentStep = wizardStepsService.getStep(currentId);
    var prevStep = wizardStepsService.getPrev(currentId);
    $scope.prevStepId = prevStep && prevStep.id;
    var nextStep = wizardStepsService.getNext(currentId);
    $scope.nextStepId = nextStep && nextStep.id;

    // forms
    $scope.$watch('forms', function () {
        if (!('forms' in $scope)) {
            $scope.forms = $scope.forms || {};
            $scope.steps.forEach(function (step) {
                $scope.forms[step.id] = {};
            });
        }

        window.localStorage.forms = JSON.stringify($scope.forms);
    }, true);

    $state.current.onEnter = function () {
        $scope.forms = JSON.parse(window.localStorage.forms || '{}');
    };
});
