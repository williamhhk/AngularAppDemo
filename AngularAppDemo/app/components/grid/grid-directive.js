var templateUrl = require('ngtemplate!html!./grid.html');
angular.module("myApp").directive('grid', function () {
    return {
        scope: true,
        templateUrl: templateUrl,
        //template: '<div ui-grid="gridOptions" ui-grid-selection class="grid"></div>'
    };
});


