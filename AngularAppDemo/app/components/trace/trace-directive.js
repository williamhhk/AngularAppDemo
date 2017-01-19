var templateUrl = require('ngtemplate!html!./trace.html');
angular.module("myApp").directive('trace', function () {

    return {
        restrict  : 'E',
        scope: true,
        templateUrl: templateUrl
    };
});


