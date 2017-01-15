
var app = angular.module("myApp", ['ui.grid', 'ui.grid.selection']);

app.controller("gridController", ['$scope', '$http', 'uiGridConstants', 'azureDBService', function ($scope, $http, uiGridConstants, azureDBService) {

    $scope.mySelected = [];
    $scope.gridOptions = {
        multiSelect: true,
        enableSelectAll: true,
        showGridFooter: true,
        showColumnFooter: true,
        enableFiltering: true,
        //columnDefs: [
        //    { field: 'id', width: '13%', footerCellTemplate: '<div class="ui-grid-cell-contents"><button class="btn btn-success" ng-click="printConsole()">Bulk Update</button></div>' },
        //    { field: 'name', width: '13%' },
        //    { field: 'city', width: '13%' },
        //    { field: 'state', width: '13%' },
        //    { field: 'country', width: '13%' },
        //    { name: 'customCellTemplate', field: 'company', width: '14%', footerCellTemplate: '<div class="ui-grid-cell-contents"><select ng-model="templateCompany"><option value="volvo">Volvo</option><option value="saab">Saab</option></select></div>' },
        //    { field: 'favoriteNumber', width: '13%' },
        //    { field: 'sex', width: '13%' },
        //],
        columnDefs: [
            { field: 'BusinessEntityID', width: '13%', enableFiltering: true },
            { field: 'Title', width: '13%', enableFiltering : true },
            { field: 'FirstName', width: '13%', enableFiltering: true },
            { field: 'MiddleName', width: '13%', enableFiltering: true },
            { field: 'LastName', width: '13%', enableFiltering: true },
            { field: 'Suffix', width: '13%', enableFiltering: true },
            { field: 'JobTitle', width: '13%', enableFiltering: true },
            { field: 'PhoneNumber', width: '13%', enableFiltering: true },
            { field: 'PhoneNumberType', width: '13%', enableFiltering: true },
            { field: 'EmailAddress', width: '13%', enableFiltering: true },
            { field: 'EmailPromotion', width: '13%', enableFiltering: true },
            { field: 'AddressLine1', width: '13%', enableFiltering: true },
            { field: 'AddressLine2', width: '13%', enableFiltering: true },
            { field: 'City', width: '13%', enableFiltering: true },
            { field: 'StateProvinceName', width: '13%', enableFiltering: true },
            { field: 'PostalCode', width: '13%', enableFiltering: true },
            { field: 'CountryRegionName', width: '13%', enableFiltering: true },
            { field: 'AdditionalContactInfo', width: '13%', enableFiltering: true },
        ],
    };


    azureDBService.getAllEmployees()
    .then(function (result) {
        console.log(result.data);
        $scope.gridOptions.data = result.data;
        showToastMessage(result);
    }, function (error) {
        showToastMessage(error);
    });

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


////// Angular Factories , provide service to access database.
//app.factory('dbService', function ($http, $q, $rootScope) {
//    return {
//        saveEmployeeData: function (metaData) {
//            console.log(metaData);
//            var deferred = $q.defer();
//            $http.post('Home/SaveEmployee', { 'metaData': metaData }).success(deferred.resolve).error(deferred.reject);
//            return deferred.promise;
//        },
//        getEmployees: function () {
//            var deferred = $q.defer();
//            $http.get('api/employees').success(deferred.resolve).error(deferred.reject);
//            return deferred.promise;
//        },
//        getStaticData: function ()
//        {
//            return fakeData;
//        },
//    };
//});

app.factory('azureDBService', function ($http, $q, $rootScope) {
    return {
        getAllEmployees: function () {
            return $http({
                method: 'GET',
                url: 'http://web-api-group01.azurewebsites.net//api/aw/v1/employees',
            });
        },

        deleteEmployee: function (index) {
            return $http({
                method: 'DELETE',
                url: 'http://web-api-group01.azurewebsites.net//api/aw/v1/employees',
                data: { 'index': index }
            });
        }
    };
});

function showToastMessage(error) {
    console.log(error);
    var x = document.getElementById("snackbar")
    x.className = "show";
    x.innerHTML = "Status Code : " + error.status + " Status Text : " + error.statusText;
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}