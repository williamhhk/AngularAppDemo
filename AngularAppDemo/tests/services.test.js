describe('azureDBService', function () {
    var azureDBService, $httpBackend;

    beforeEach(module('myApp'));

    beforeEach(inject(function (_azureDBService_, _$httpBackend_) {
        azureDBService = _azureDBService_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("Should make GET request", function () {
        $httpBackend.whenGET("http://web-api-group01.azurewebsites.net/api/aw/v1/employees/10000").respond(200);
        $httpBackend.expectGET("http://web-api-group01.azurewebsites.net/api/aw/v1/employees/10000");
        azureDBService.getEmployeeById({ id: 10000 });
        $httpBackend.flush();
    });

});
