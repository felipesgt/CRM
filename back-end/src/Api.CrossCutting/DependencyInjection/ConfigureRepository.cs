using Data.Context;
using Data.Implementations;
using Data.Repository;
using Domain.Interfaces;
using Domain.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace CrossCutting.DependencyInjection
{
    public class ConfigureRepository
    {
        public static void ConfigureDependenciesRepository(IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped(typeof(IRepository<>), typeof(BaseRepository<>));
            serviceCollection.AddScoped<IUserRepository, UserImplementation>();


            serviceCollection.AddDbContext<MyContext>(
                options => options.UseSqlServer("Server=.\\SQLEXPRESS2017;Initial Catalog=dbapi;MultipleActiveResultSets=true;User ID=sa;Password=eleison123")
            );
        }
    }
}
