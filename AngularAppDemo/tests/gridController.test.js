describe('gridController', function () {
    var gridController, scope;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($rootScope, $controller, _$log_) {
        $log = _$log_;
        scope = $rootScope.$new();
        gridController = $controller("gridController", {
            $scope: scope
        });
    }));

    it ("should see williamhan", function () {
        scope.logOutput();
        var output = ["WilliamHan"];
        expect($log.log.logs).toContain(output);
    });
});

