using Domain.Interfaces.Services.User;
using Service.Services;
using Microsoft.Extensions.DependencyInjection;
using Domain.Interfaces.Services;

namespace CrossCutting.DependencyInjection
{
    public class ConfigureService
    {
        public static void ConfigureDependenciesService(IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<IUserService, UserService>();
            serviceCollection.AddTransient<ILoginService, LoginService>();
            serviceCollection.AddTransient<ICostumerService, CustomerService>();
            serviceCollection.AddTransient<IProductService, ProductService>();

        }
    }
}
