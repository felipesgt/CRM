using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Domain.Dtos;
using Domain.Leads.Dtos;

namespace Application.Leads.Interfaces
{
    public interface ILeadsService
    {
        public Task<IEnumerable<Lead>> GetAll(PagedInput input);
        public Task<LeadOutput> Get(Guid id);
        public Task<LeadOutput> Update(LeadInput lead);
        public Task<LeadOutput> Create(LeadInput lead);
        public Task<bool> Delete(Guid id);
    }
}