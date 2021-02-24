using Data.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces.Services
{
    public interface IProductService 
    {
        Task<ProductEntity> Get(Guid id);
        Task<IEnumerable<ProductEntity>> GetAll();
        Task<ProductEntity> Post(ProductEntity product);
        Task<ProductEntity> Put(ProductEntity product, Guid id);
        Task<bool> Delete(Guid id);
    }
}
