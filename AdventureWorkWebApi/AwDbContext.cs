
namespace AdventureWorkWebApi
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;

    public partial class AdventureWorkEntities : DbContext
    {
        public AdventureWorkEntities()
            : base("name=DemoDB")
        {
            //  Do not update Database
            Database.SetInitializer<AdventureWorkEntities>(null);
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //  use second parameters for the schemaName
            //modelBuilder.Entity<vEmployee>().ToTable("vEmployees", schemaName: "HumanResources");
            modelBuilder.Entity<vEmployee>().ToTable("vEmployees", schemaName: "dbo");
        }

        public virtual DbSet<vEmployee> vEmployees { get; set; }
    }
}