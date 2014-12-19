angular.module("app").factory("wizardStepService", function() {
    var steps = [{
        id: 'start', title: 'Start a long process'
    }, {
        id: 'regular', title: 'In the middle of a long process'
    }, {
        id: 'finish', title: 'Finish a long process'
    }];

    return {
        getSteps: function () {
            return steps;
        },

        getStep: function (stepId) {
            var current = this.getSteps().filter(function (step) {
                return step.id === stepId;
            });
            return current[0];
        },

        getNext: function (stepId) {
            var next = null;
            this.getSteps().forEach(function (step, index, steps) {
                if (step.id === stepId) {
                    next = steps[index + 1];
                }
            });
            return next;
        },

        getPrev: function (stepId) {
            var prev = null;
            this.getSteps().forEach(function (step, index, steps) {
                if (step.id === stepId) {
                    prev = steps[index - 1];
                }
            });
            return prev;
        }
    };
});
