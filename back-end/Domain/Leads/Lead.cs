using Api.Domain.Entities;
using Domain.Leads.Dtos;

namespace Domain
{
    [System.ComponentModel.DataAnnotations.Schema.Table("Leads")]
    public class Lead : BaseEntity
    {
        public Lead()
        {
        }

        public Lead(LeadInput input)
        {
            Name = input.Name;
            Email = input.Email;
            Address = input.Address;
        }
        

        public string Name { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }

        public void Update(LeadInput input)
        {
            Name = input.Name;
            Email = input.Email;
            Address = input.Address;
        }
    }
}