var templateUrl = require('ngtemplate!html!./grid.html');
app.directive('myform', function () {
    return {
        scope: true,
        templateUrl: templateUrl
    };
});


