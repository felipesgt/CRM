using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces.Services
{
    public interface ICostumerService
    {
        Task<CustomerEntity> Get(Guid id);
        Task<IEnumerable<CustomerEntity>> GetAll();
        Task<CustomerEntity> Post(CustomerEntity customer);
        Task<CustomerEntity> Put(CustomerEntity customer);
        Task<bool> Delete(Guid id);
    }
}
