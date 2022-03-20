using Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Api.Data.Context
{
    public class ContextFactory : IDesignTimeDbContextFactory<CrmDbContext>
    {
        public CrmDbContext CreateDbContext(string[] args)
        {
            var connectionString = "Server=127.0.0.1;Port=5432;Database=crm;User Id=postgres;Password=123qwe;";
            var optionsBuilder = new DbContextOptionsBuilder<CrmDbContext>();
            optionsBuilder.UseNpgsql(connectionString);
            return new CrmDbContext(optionsBuilder.Options);
        }
    }
}