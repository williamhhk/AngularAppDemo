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
                employeedata: '=',  // Case matter here
                reloadfunction : '&'
            }
        };
    }

    gridApp.controller("employeeInfoFormCtrl", employeeInfoFormCtrl);
    employeeInfoFormCtrl.$inject = ['$scope','CRUDService'];
    function employeeInfoFormCtrl($scope, CRUDService) {
        var employeeVM = this;
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
                    employeeVM.employeedata = employeeVM.employee;  // data back to Root.
                    employeeVM.reloadfunction();
                    console.log("sucessful >>" + result.data);
                }, function (error) {
                    console.log("Error >> " + error);
                })
        }
    }

})(angular.module('myApp'));





