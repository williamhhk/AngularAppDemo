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
