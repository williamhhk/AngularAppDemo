var templateUrl = require('ngtemplate!html!./trace.html');
(function (gridApp) {
    gridApp
        .directive('trace', function () {
        return {
            scope: true,
            controller: 'rootController',
            controllerAs: 'ctrl',
            bindToController: {
                selectedRows: '='
            },
            templateUrl: templateUrl
        };
    });

})(angular.module('gridApp'));