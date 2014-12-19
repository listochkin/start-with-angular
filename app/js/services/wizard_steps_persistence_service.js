angular.module("app").factory("wizardStepsPersistenceService", function() {
    var steps = [{
        id: 'start',
        title: 'Start a long process',
        formFields: [{ label: 'enter your name', name: 'name', type: 'text' }]
    }, {
        id: 'regular',
        title: 'In the middle of a long process',
        formFields: [{ label: 'enter email', name: 'email', type: 'email' }]
    }, {
        id: 'finish', title: 'Finish a long process',
        formFields: [{ label: 'Agree to our TOS', name: 'agreeToTos', type: 'checkbox' }]
    }];

    return {
        getSteps: function () {
            return steps;
        }
    };
});