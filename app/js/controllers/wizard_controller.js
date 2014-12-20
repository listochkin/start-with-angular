angular.module("app").controller('WizardController', function($scope, $state, wizardStepsService, wizardStepsPersistenceService, wizardValidationService) {
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
            $scope.forms = JSON.parse(window.localStorage.forms || '{}');
            if (Object.keys($scope.forms).length === 0) {
                $scope.steps.forEach(function (step) {
                    $scope.forms[step.id] = {};
                });
            }
        }

        wizardValidationService.validate($scope.forms, $scope.steps);

        window.localStorage.forms = JSON.stringify($scope.forms);
    }, true);

    $state.current.onEnter = function () {
        $scope.forms = JSON.parse(window.localStorage.forms || '{}');
    };
});
