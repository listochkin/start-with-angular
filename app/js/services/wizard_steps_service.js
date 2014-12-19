angular.module("app").factory("wizardStepsService", function(wizardStepsPersistenceService) {
    var steps = wizardStepsPersistenceService.getSteps();

    return {
        getStep: function (stepId) {
            var current = steps.filter(function (step) {
                return step.id === stepId;
            });
            return current[0];
        },

        getNext: function (stepId) {
            var next = null;
            steps.forEach(function (step, index, steps) {
                if (step.id === stepId) {
                    next = steps[index + 1];
                }
            });
            return next;
        },

        getPrev: function (stepId) {
            var prev = null;
            steps.forEach(function (step, index, steps) {
                if (step.id === stepId) {
                    prev = steps[index - 1];
                }
            });
            return prev;
        }
    };
});
