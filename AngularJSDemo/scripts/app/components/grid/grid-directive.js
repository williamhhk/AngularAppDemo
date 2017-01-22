(function (gridApp) {
    'use strict';
    gridApp
    .directive('grid', function () {
        return {
            scope: true,
            template: '<div ui-grid="root.gridOptions" ui-grid-selection class="grid"></div>'
        };
    });

})(angular.module('myApp'));
