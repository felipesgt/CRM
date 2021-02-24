using Domain.Entities;
using Domain.Interfaces;
using Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services
{
    public class CustomerService : ICostumerService
    {
        private readonly IRepository<CustomerEntity> _repository;
        public CustomerService(IRepository<CustomerEntity> repository)
        {
            _repository = repository;
        }

        public async Task<bool> Delete(Guid id)
        {
            return await _repository.DeleteAsync(id);
        }

        public async Task<CustomerEntity> Get(Guid id)
        {
            return await _repository.SelectAsync(id);
        }

        public async Task<IEnumerable<CustomerEntity>> GetAll()
        {
            return await _repository.SelectAsync();
        }

        public async Task<CustomerEntity> Post(CustomerEntity customer)
        {
            return await _repository.InsertAsync(customer);
        }

        public async Task<CustomerEntity> Put(CustomerEntity customer, Guid id)
        {
            return await _repository.UpdateAsync(customer, id);
        }
    }
}
