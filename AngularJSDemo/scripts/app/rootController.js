(function (gridApp) {

    gridApp.controller("rootController", rootController);
    rootController.$inject = ['$scope', 'CRUDService', 'Helper'];
    function rootController($scope, CRUDService, Helper) {
        var gridVm = this;
        this.EmployeeData = {};

        gridVm.gridApi = {};
        gridVm.DisplayGrid = DisplayGrid;

        //  CRUD
        gridVm.Reload = Reload;
        gridVm.Delete = Delete;
        gridVm.Update = Update;
        gridVm.Create = Create;
        //gridVm.Merge = Merge;
        gridVm.GenerateRows = GenerateRows;

        //  Others
        gridVm.Export = Export;

        // Error Handling
        gridVm.message = "";
        gridVm.SelectedRow = {};
        DisplayGrid();

        function GenerateRows() {
            for (i = 0; i < 100; i++) {
                var phone = "480-111111" + i;
                var data = {
                    "Title": "Mr",
                    "FirstName": i,
                    "MiddleName": "",
                    "LastName": "Test",
                    "Suffix": "",
                    "JobTitle": "Engineer 3",
                    "PhoneNumber": phone,
                    "PhoneNumberType": "Mobile",
                    "EmailAddress": "helloworld@helloworld.com",
                    "EmailPromotion": 0,
                    "AddressLine1": "",
                    "AddressLine2": "",
                    "City": "Phoenix",
                    "StateProvinceName": "Az",
                    "PostalCode": "85076",
                    "CountryRegionName": "USA",
                }
                CRUDService
                .Create(data)
                .then(function (result) {
                    gridVm.message = "";
                }, function (error) {
                    console.log("Error >> " + error);
                })
            }

        }
        //  Inline Edit 
        // http://embed.plnkr.co/VO6F3vlOOwaudfi3RSVA/
        function DisplayGrid() {
            gridVm.gridOptions = {
                enableFiltering: true,
                enableColumnResizing: true,
                showGridFooter: true,
                columnDefs : [
                      { name: 'Edit', width: 90, cellTemplate: '<button ng-click="">Edit</button>' , enableFiltering : false},
                      { field: 'FirstName', displayName: 'First Name', width: 90 },
                      { field: 'Last', displayName: 'Last Name', width: 90 },
                      { field: 'JobTitle', displayName: 'Job Title', width: 90 },
                      { field: 'EmailAddress', displayName: 'Email', width: 90 },
                      { field: 'City', displayName: 'City', width: 90 },
                      { field: 'CountryRegionName', displayName: 'Country', width: 90 },
                ],
            };
            Reload();
        }

        gridVm.gridOptions.onRegisterApi = function (gridApi) {
            gridVm.gridApi = gridApi;
            gridVm.gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                gridVm.SelectedRow = angular.copy(row.entity);
                delete gridVm.SelectedRow.BusinessEntityID;
            });
        };

        function Reload() {
            CRUDService
                .getAllEmployees()
                .then(function (result) {
                    gridVm.gridOptions.data = result.data;
                    if (gridVm.gridApi.selection !== undefined)
                        gridVm.gridApi.selection.clearSelectedRows();

                }, function (error) {
                });
        }

        function Export() {
            var dataElement = angular.element(document.querySelectorAll(".custom-csv-link-location"));
            var type = "all";
            if (gridVm.gridApi.selection.getSelectedRows().length > 0) type = "selected";
            gridVm.gridApi.exporter.csvExport(type, "all", dataElement);
        }

        function Delete() {
            gridVm.gridApi.selection.getSelectedRows().forEach(function (item) {
                CRUDService
                    .Delete(item.BusinessEntityID)
                    .then(function success(result) {
                        gridVm.gridOptions.data.splice(gridVm.gridOptions.data.indexOf(item), 1);
                        gridVm.gridApi.selection.clearSelectedRows();
                        gridVm.message = "";

                    }, function error(result) {
                        console.log("Error >>" + result);
                        gridVm.message = result.data;
                    });
            })
        }

        function Create(data) {
            console.log(data);
            CRUDService
                .Create(data)
                .then(function (result) {
                    Reload();
                    gridVm.message = "";
                }, function (error) {
                    console.log("Error >> " + error);
                })
        }

        function Update(input) {
            var data = angular.copy(input);           
            gridVm.gridApi.selection.getSelectedRows().forEach(function (item) {
                var index = gridVm.gridOptions.data.indexOf(item);
                var mergedData = Helper.Merge(angular.copy(item), data);              
                CRUDService
                    .Update(mergedData)
                    .then(function (result) {
                        gridVm.gridOptions.data[index] = mergedData;
                        console.log("sucessful >>" + result.data);
                    }, function (error) {
                        console.log("Error >> " + error);
                })
            })
        }
    }
})(angular.module('myApp'));

