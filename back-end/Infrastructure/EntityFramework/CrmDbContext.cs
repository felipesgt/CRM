using Domain;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure
{
    public class CrmDbContext : DbContext
    {

        public DbSet<Lead> Leads { get; set; }
        public CrmDbContext(DbContextOptions options) : base(options)
        {
        }

        public CrmDbContext()
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
    
        }
    }
}