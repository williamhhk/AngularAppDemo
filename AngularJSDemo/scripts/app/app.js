//  No global left behind
(function () {
    'use strict';

    // Setter angular.module("app", []);  getter angular.module("app") without []
    angular.module("myApp",
        [
            'ui.grid',
            'ui.grid.selection',
            'ui.grid.exporter',
            'ui.grid.edit',
            'ui.grid.rowEdit',
        ]);
})();
