using System;
using Domain;

namespace Domain.Leads.Dtos
{
    public class LeadOutput
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public LeadOutput(Lead output)
        {
        }
    }
}