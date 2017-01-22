describe('gridController', function () {
    var gridController, scope;

    beforeEach(module('gridApp'));

    beforeEach(inject(function ($rootScope, $controller, _$log_) {
        $log = _$log_;
        scope = $rootScope.$new();

        createController = function () {
            return $controller('gridController', {
                '$scope': scope
            });
        };

    }));

    it("should see williamhan", function () {
        var ctrl = createController();

    });
});

