1)  Adventureworks DB has different schemaName
    Use modebuilder second parameters.
        modelBuilder.Entity<vEmployee>().ToTable("vEmployee", schemaName: "HumanResources");
