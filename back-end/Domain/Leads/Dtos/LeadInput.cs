using System;

namespace Domain.Leads.Dtos
{
    public class LeadInput
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
    }
}