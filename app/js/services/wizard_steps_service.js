angular.module("app").factory("wizardStepService", function() {
    var steps = [{
        id: 'start', title: 'Start a long process'
    }, {
        id: 'finish', title: 'Finish a long process'
    }];

    return {
        getSteps: function () {
            return steps;
        }
    };
});
