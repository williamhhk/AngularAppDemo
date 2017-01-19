angular.module("myFactory", [])
    .factory('azureDBService', function ($http) {
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
});

//angular.module("myApp").factory('queryService', function () {
//    var fakeData = [
//          {
//              "id": 0,
//              "name": "Mayer Leonard",
//              "city": "Kapowsin",
//              "state": "Hawaii",
//              "country": "United Kingdom",
//              "company": "Ovolo",
//              "favoriteNumber": 7
//          },
//          {
//              "id": 1,
//              "name": "Koch Becker",
//              "city": "Johnsonburg",
//              "state": "New Jersey",
//              "country": "Madagascar",
//              "company": "Eventage",
//              "favoriteNumber": 2
//          },
//          {
//              "id": 2,
//              "name": "Lowery Hopkins",
//              "city": "Blanco",
//              "state": "Arizona",
//              "country": "Ukraine",
//              "company": "Comtext",
//              "favoriteNumber": 3
//          }
//    ];

//    var queryService = {};
//    queryService.getEmployees = function () {
//        return fakeData;
//    }
//    return queryService;
//});

//angular.module("myApp").factory('PlayerLocalApi', function () {
//    var data = [{ "Id": "1", "Name": "Dhananjay Kumar", "Age": 33.0 }, { "Id": "2", "Name": "Sachin Tendulkar", "Age": 22.0 }, { "Id": "6", "Name": "rahul dravid", "Age": 60.0 }];
//    var PlayerLocalApi = {};
//    PlayerLocalApi.getPlayers = function () {
//        return data;
//    }
//    return PlayerLocalApi;
//});