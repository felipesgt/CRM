using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Data.Context
{
  public class ContextFactory : IDesignTimeDbContextFactory<MyContext>
  {
    public MyContext CreateDbContext(string[] args)
    {
      //Usado para Criar as Migrações
      var connectionString = "Server=localhost;Port=3306;DataBase=dbAPI;Uid=root;Pwd=admin";
      //var connectionString = "Server=.\\SQLEXPRESS2017;Initial Catalog=dbapi;MultipleActiveResultSets=true;User ID=sa;Password=mudar@123";
      var optionsBuilder = new DbContextOptionsBuilder<MyContext>();
      optionsBuilder.UseMySql(connectionString);
      //optionsBuilder.UseSqlServer(connectionString);
      return new MyContext(optionsBuilder.Options);
    }
  }
}
