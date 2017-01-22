var templateUrl = require('ngtemplate!html!./grid.html');
(function (gridApp) {
    'use strict';
    gridApp
    .directive('grid', function () {
        return {
            scope: true,
            controller :'rootController',
            controllerAs :'ctrl',
            templateUrl: templateUrl,
        };
    });

})(angular.module('gridApp'));
