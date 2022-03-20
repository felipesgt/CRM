using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Domain.Interfaces;
using Application.Leads.Interfaces;
using Domain;
using Domain.Dtos;
using Domain.Leads.Dtos;

namespace application.Leads.Services
{
    public  class LeadsService : ILeadsService
    {
        private readonly IRepository<Lead> _repository;

        public  LeadsService(IRepository<Lead> repository)
        {
            _repository = repository;
        }


        public async Task<IEnumerable<Lead>> GetAll(PagedInput input)
        {
            var query = await _repository.GetListAsync();
            var pagedLeads = query.Take(100).Skip(0).ToList();
            return pagedLeads;
        }
        public async Task<LeadOutput> Get(Guid id)
        {
            var output = await _repository.SelectAsync(id);
            return new LeadOutput(output);
        }

        public async Task<LeadOutput> Update(LeadInput input)
        {
            var lead = await _repository.SelectAsync(input.Id);
            lead.Update(input);
            var output = await _repository.UpdateAsync(lead);
            return new LeadOutput(output);
        }

        public async Task<LeadOutput> Create(LeadInput input)
        {
            var leadToInsert = new Lead(input);
            var lead = await _repository.InsertAsync(leadToInsert);
            return new LeadOutput(lead);
        }

        public async Task<bool> Delete(Guid id)
        {
            return await _repository.DeleteAsync(id);
        }
    }
}