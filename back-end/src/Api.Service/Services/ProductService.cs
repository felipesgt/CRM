using Data.Context;
using Domain.Interfaces;
using Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class ProductService : IProductService
    {
        private readonly IRepository<ProductEntity> _repository;
        public ProductService(IRepository<ProductEntity> repository)
        {
            _repository = repository;
        }

        public async Task<bool> Delete(Guid id)
        {
            return await _repository.DeleteAsync(id);

        }

        public async Task<ProductEntity> Get(Guid id)
        {
            return await _repository.SelectAsync(id);

        }

        public async Task<IEnumerable<ProductEntity>> GetAll()
        {
            return await _repository.SelectAsync();

        }

        public async Task<ProductEntity> Post(ProductEntity product)
        {
            return await _repository.InsertAsync(product);

        }

        public async Task<ProductEntity> Put(ProductEntity product, Guid id)
        {
            return await _repository.UpdateAsync(product, id);

        }
    }
}
