﻿//  No global left behind
(function () {
    'use strict';

    // Setter angular.module("app", []);  getter angular.module("app") without []
    angular.module("gridApp", ['ui.grid', 'ui.grid.selection']); 
})();

