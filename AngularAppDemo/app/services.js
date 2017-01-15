angular.module("myApp").factory('azureDBService', function ($http, $q, $rootScope) {
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