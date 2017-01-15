webpackJsonp([0],[
/* 0 */
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./gridController */ 1)
	__webpack_require__(/*! ./components/grid/grid_directive */ 2)
	
	var app = angular.module('employeeApp', ['ui.grid', 'ui.grid.selection']);
	


/***/ },
/* 1 */
/*!***************************!*\
  !*** ./gridController.js ***!
  \***************************/
/***/ function(module, exports) {

	app.controller('gridController', ['uiGridConstants', '$log' , function (uiGridConstants, $log) {
	    this.gridOptions = {
	        multiSelect: true,
	        enableSelectAll: true,
	        showGridFooter: true,
	        showColumnFooter: true,
	        enableFiltering: true,
	        columnDefs: [
	            { field: 'id', width: '13%', footerCellTemplate: '<div class="ui-grid-cell-contents"><button class="btn btn-success" ng-click="printConsole()">Bulk Update</button></div>' },
	            { field: 'name', width: '13%' },
	            { field: 'city', width: '13%' },
	            { field: 'state', width: '13%' },
	            { field: 'country', width: '13%' },
	            { name: 'customCellTemplate', field: 'company', width: '14%', footerCellTemplate: '<div class="ui-grid-cell-contents"><select ng-model="templateCompany"><option value="volvo">Volvo</option><option value="saab">Saab</option></select></div>' },
	            { field: 'favoriteNumber', width: '13%' },
	            { field: 'sex', width: '13%' },
	        ],
	        data: fakeData,
	    };
	}]);
	
	
	var fakeData = [
	      {
	          "id": 0,
	          "name": "Mayer Leonard",
	          "city": "Kapowsin",
	          "state": "Hawaii",
	          "country": "United Kingdom",
	          "company": "Ovolo",
	          "favoriteNumber": 7,
	          "sex": true
	      },
	      {
	          "id": 1,
	          "name": "Koch Becker",
	          "city": "Johnsonburg",
	          "state": "New Jersey",
	          "country": "Madagascar",
	          "company": "Eventage",
	          "favoriteNumber": 2,
	          "sex": false
	      },
	      {
	          "id": 2,
	          "name": "Lowery Hopkins",
	          "city": "Blanco",
	          "state": "Arizona",
	          "country": "Ukraine",
	          "company": "Comtext",
	          "favoriteNumber": 3,
	          "sex": true
	      },
	      {
	          "id": 3,
	          "name": "Walters Mays",
	          "city": "Glendale",
	          "state": "Illinois",
	          "country": "New Zealand",
	          "company": "Corporana",
	          "favoriteNumber": 6,
	          "sex": false
	      },
	      {
	          "id": 4,
	          "name": "Shaw Lowe II",
	          "city": "Coultervillle",
	          "state": "Wyoming",
	          "country": "Ecuador",
	          "company": "Isologica",
	          "favoriteNumber": 2,
	          "sex": true
	      }
	];

/***/ },
/* 2 */
/*!*******************************************!*\
  !*** ./components/grid/grid_directive.js ***!
  \*******************************************/
/***/ function(module, exports) {

	app.directive('grid', function () {
	    return {
	        scope: true,
	        templateUrl: 'components/grid/grid.html'
	    };
	});
	
	


/***/ }
]);
//# sourceMappingURL=app.bundle.js.map