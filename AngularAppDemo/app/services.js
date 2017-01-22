(function (gridApp) {
    'use strict';
    //angular
    //    .module("myApp")
    gridApp
        .factory('CRUDService', CRUDService);

    CRUDService.$inject = ['$http'];
    function CRUDService($http) {
            return {
                getAllEmployees: function () {
                    return $http({
                        method: 'GET',
                        url: 'http://web-api-group01.azurewebsites.net/api/aw/v1/employees',
                    });
                },
                getEmployeeById: function (param) {
                    return $http({
                        method: 'GET',
                        url: 'http://web-api-group01.azurewebsites.net/api/aw/v1/employees/' + param.id,
                    });
                },

                deleteEmployee: function (index) {
                    return $http({
                        method: 'DELETE',
                        url: 'http://web-api-group01.azurewebsites.net/api/aw/v1/employees',
                        data: { 'index': index }
                    });
                }
            };
    }
})(angular.module('gridApp'));

