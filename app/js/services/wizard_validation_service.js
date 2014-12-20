angular.module("app").factory("wizardValidationService", function(wizardStepsPersistenceService) {
    var lastValidationResult = {};

    return {
        getLastValidationResult: function () {
            return lastValidationResult;
        },
        validate: function (forms, steps) {
            var validationResult = steps.reduce(function (validation, step) {
                var form = forms[step.id]; // {}
                var formFields = step.formFields; // []

                var done = formFields.reduce(function (done, field) {
                    if (!done) { return false; }
                    if (!(field.name in form)) { return false; }
                    if (field.type === 'checkbox') { return !!form[field.name]; }
                    return form[field.name].length > 0;
                }, true);

                console.log(done);

                validation[step.id] = done;
                return validation;
            }, {});

            lastValidationResult = validationResult;
            return validationResult;
        }
    };
});
