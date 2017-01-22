// storage.js
(function (gridApp) {

    //  Replace it with IIFE
    //(function () {
        //angular
    //.module("myApp")

    gridApp
        .controller("rootController", rootController);
    
    rootController.$inject = ['$scope', 'CRUDService'];

    function rootController($scope, CRUDService) {
        var gridVm = this;
        gridVm.gridApi = {};
        gridVm.Reload = Reload;
        gridVm.DisplayGrid = DisplayGrid;
        //gridVm.gridOptions = {};

        // CRUD functions
        gridVm.Delete = Delete;

        DisplayGrid();
        Reload();
        
        function DisplayGrid() {
            gridVm.gridOptions = {
                multiSelect: true,
                enableSelectAll: true,
                showGridFooter: true,
                showColumnFooter: true,
                enableFiltering: true,
                onRegisterApi: function (gridApi) {
                    gridVm.gridApi = gridApi;
                    console.log(gridVm.gridApi);
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
                ]
            };
        }

        function Delete() {
            gridVm.gridApi.selection.getSelectedRows().forEach(function (item) {
                CRUDService.Delete(item.BusinessEntityID).then(function success(result) {
                    gridVm.gridOptions.data.splice(gridVm.gridOptions.data.indexOf(item), 1);
                    gridVm.gridApi.selection.clearSelectedRows();
                }, function error(result) {
                    console.log("Error >>" + result);
                });
            })
        }

        function Reload() {
            CRUDService.getAllEmployees()
                .then(function (result) {
                    gridVm.gridOptions.data = result.data;
                }, function (error) {
                    //Helper.showToastMessage(error);
                });
        }
    }

//})();
})(angular.module('gridApp'));
