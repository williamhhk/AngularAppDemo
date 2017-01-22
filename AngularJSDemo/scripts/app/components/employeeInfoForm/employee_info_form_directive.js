var templateUrl = require('ngtemplate!html!./employee_info_form.html');

(function (gridApp) {
    'use strict';

    gridApp.directive('employeeInfoForm', employeeInfoForm);
    function employeeInfoForm() {
        return {
            scope : true,
            templateUrl: templateUrl,
            replace: true,
            controller: 'employeeInfoFormCtrl',
            controllerAs: 'ctrl',
            bindToController: {
                employee: '=',  // Case matter here
                reloadfunction: '&',
                gridapi: '=',
            }
        };
    }

    gridApp.controller("employeeInfoFormCtrl", employeeInfoFormCtrl);
    employeeInfoFormCtrl.$inject = ['$scope','CRUDService' ];
    function employeeInfoFormCtrl($scope, CRUDService) {
        var employeeVM = this;
        employeeVM.CurrentAction = "";
        employeeVM.FormAction = FormAction;
        employeeVM.SaveForm = SaveForm;
        employeeVM.employee = {
            "Country" : 'USA'
        };

        employeeVM.PhoneType = [
            { 'id': 1, 'name': 'Home' },
            { 'id': 2, 'name': 'Work' },
            { 'id': 3, 'name': 'Mobile' }
        ];

        function SaveForm() {
            console.log(employeeVM.employee);
            //dbService.saveEmployeeData($scope.metaData);
            CRUDService
                .Create(employeeVM.employee)
                .then(function (result) {
                    //employeeVM.employeedata = employeeVM.employee;  // data back to Root.
                    employeeVM.reloadfunction();
                    console.log("sucessful >>" + result.data);
                }, function (error) {
                    console.log("Error >> " + error);
                })
        }

        function Update() {
            //employeeVM.gridapi.selection.getSelectedRows().forEach(function (item) {
            //    console.log(" >>>>>>>>>>>>>>> ");
            //    console.log(item);
            //    employeeVM.employee = item;
            //})


            //dbService.saveEmployeeData($scope.metaData);
            CRUDService
                .Update(employeeVM.employee)
                .then(function (result) {
                    //employeeVM.employeedata = employeeVM.employee;  // data back to Root.
                    employeeVM.reloadfunction();
                    console.log("sucessful >>" + result.data);
                }, function (error) {
                    console.log("Error >> " + error);
                })
        }

        function FormAction() {
            employeeVM.CurrentAction = employeeVM.selectedAction;
            switch (employeeVM.selectedAction)
            {
                case "new":
                    break;
                case "update":
                    employeeVM.gridapi.selection.setMultiSelect(false);
                    employeeVM.gridapi.selection.clearSelectedRows();                 
                    break;
                case "bulk":
                    employeeVM.gridapi.selection.setMultiSelect(true);
                    break;

            }
            }
    }

})(angular.module('myApp'));





