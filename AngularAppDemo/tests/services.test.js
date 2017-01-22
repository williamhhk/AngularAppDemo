describe('azureDBService', function () {
    var azureDBService, $httpBackend;

    beforeEach(module('gridApp'));

    beforeEach(inject(function (_CRUDService_, _$httpBackend_) {
        CRUDService = _CRUDService_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("Should make GET request", function () {
        $httpBackend.whenGET("http://web-api-group01.azurewebsites.net/api/aw/v1/employees/10000").respond(200);
        $httpBackend.expectGET("http://web-api-group01.azurewebsites.net/api/aw/v1/employees/10000");
        CRUDService.getEmployeeById({ id: 10000 });
        $httpBackend.flush();
    });

});
