1)  Create a demoaccount in azure sql

		CREATE LOGIN  demoaccount WITH PASSWORD = '';

		CREATE USER demoaccount FOR LOGIN demoaccount WITH DEFAULT_SCHEMA=[dbo]
		GO

		New query from the desire Schema
		CREATE USER demoaccount FOR LOGIN demoaccount WITH DEFAULT_SCHEMA=[dbo]
		GO
 
		EXEC sp_addrolemember 'db_owner', 'demoaccount';
		GO
	
2)  Adventureworks DB has different schemaName
    Use modebuilder second parameters.
        modelBuilder.Entity<vEmployee>().ToTable("vEmployee", schemaName: "HumanResources");


3)  Html loader , ngtemplate loader

npm install html-loader --save-dev
npm install ngtemplate-loader --save-dev

e.g.

var templateUrl = require('ngtemplate!html!./grid.html');
angular.module("myApp").directive('grid', function () {
    return {
        scope: true,
        templateUrl: templateUrl,
        //template: '<div ui-grid="gridOptions" ui-grid-selection class="grid"></div>'
    };
});

4) Added 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "clean" : "rimraf dist/*"
  },
  to delete old bundle files.


5) Unit Test
npm install -g karma --save-dev

npm install -g phantomjs --save-dev

npm install karma-jasmine jasmine-core --save-dev

npm install angular-mocks --save-dev

npm install karma-chrome-launcher --save-dev