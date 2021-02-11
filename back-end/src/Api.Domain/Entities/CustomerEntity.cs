using Api.Domain.Entities;

namespace Domain
{
    public class CustomerEntity : BaseEntity { 
            public string Name { get; set; }
            public string Email { get; set; }
            public string CPF { get; set; }
            public string Date { get; set; }
            public string Phone { get; set; }
            public string ZipCode { get; set; }
            public string Number { get; set; }
            public string Neighborhood { get; set; }
            public string City { get; set; }
            public string State { get; set; }
        }
  

}
