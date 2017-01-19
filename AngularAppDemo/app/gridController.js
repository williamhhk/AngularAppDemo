var Helper = require('./helper.js')

angular.module("myGrid", ['myFactory'])
    .controller("gridController", ['$scope', '$http', 'uiGridConstants', 'azureDBService', function ($scope, $http, uiGridConstants, azureDBService) {
    $scope.mySelected = [];
    $scope.myName = "WilliamHan";
    $scope.gridOptions = {
        multiSelect: true,
        enableSelectAll: true,
        showGridFooter: true,
        showColumnFooter: true,
        enableFiltering: true,
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                $scope.SelectedRow = row; // $scope.gridOptions.data.indexOf(row.entity);
            });
        },
        columnDefs: [
            { field: 'BusinessEntityID', width: '13%', enableFiltering: true },
            { field: 'Title', width: '13%', enableFiltering: true },
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
        //console.log(result.data);
        $scope.gridOptions.data = result.data;
        Helper.showToastMessage(result);
    }, function (error) {
        Helper.showToastMessage(error);
    });

    $scope.getSelectedRows = function () {
        return $scope.gridApi.selection.getSelectedRows();
    }

    $scope.logOutput = function () {
        $log.log($scope.myName);
    }
}]);