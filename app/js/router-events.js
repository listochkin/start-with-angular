angular.module('app').run(function ($rootScope, $state, wizardValidationService, wizardStepsPersistenceService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if (toState.name === 'steps.step' || toState.name === 'success') {
            var steps = wizardStepsPersistenceService.getSteps();
            var validationFlags = wizardValidationService.getLastValidationResult();

            var firstInvalidState = null,
                firstInvalidStateIndex = -1;
            for (var i = 0; i < steps.length; i++) {
                if (!validationFlags[steps[i].id]) {
                    firstInvalidState = steps[i];
                    firstInvalidStateIndex = i;
                    break;
                }
            }

            // all steps are valid
            if (firstInvalidState === null) {
                return;
            }

            var targetState = null, targetStateIndex = -1;
            for (var j = 0; j < steps.length; j++) {
                if (steps[j].id === toParams.stepId) {
                    targetState = steps[j];
                    targetStateIndex = j;
                    break;
                }
            }

            if (targetStateIndex > firstInvalidStateIndex) {
                event.preventDefault();
                $state.go('steps.step', {
                    stepId: firstInvalidState.id
                });
            }
        }
    });
});
