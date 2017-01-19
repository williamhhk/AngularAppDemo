describe ('Grid App Test', function () {
	beforeEach(module('myApp'));
	describe('reversestringfiltertest', function () {
	var reverse;
	beforeEach(inject(function ($filter) { //initialize filter
		reverse = $filter('reverse', {});
	}));


	it('Should reverse a string', function () { 
		expect(reverse('india')).toBe('aidni'); //pass test
		expect(reverse('nod')).toBe('don'); //fail test
	});
	});
});

