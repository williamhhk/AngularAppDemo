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




USE [AdventureWorks2012]
GO

DECLARE @counter int
SET @counter = 1
WHILE @counter < 1000 BEGIN
	INSERT INTO [dbo].[vEmployees]
			   ([Title]
			   ,[FirstName]
			   ,[MiddleName]
			   ,[LastName]
			   ,[Suffix]
			   ,[JobTitle]
			   ,[PhoneNumber]
			   ,[PhoneNumberType]
			   ,[EmailAddress]
			   ,[EmailPromotion]
			   ,[AddressLine1]
			   ,[AddressLine2]
			   ,[City]
			   ,[StateProvinceName]
			   ,[PostalCode]
			   ,[CountryRegionName]
			   ,[AdditionalContactInfo])
		 VALUES
			   ('Mr'
			   ,'Test' + CAST(@counter AS varchar(2))
			   ,''
			   ,'Test'
			   ,''
			   ,'Engineer'
			   ,'480-12345'
			   ,'Mobile'
			   ,'helloworld@helloworld.com'
			   ,''
			   ,''
			   ,''
			   ,'Phoenix'
			   ,'Az'
			   ,'85076'
			   ,'USA'
			   ,'None')

     SET @counter = @counter + 1
END
GO

