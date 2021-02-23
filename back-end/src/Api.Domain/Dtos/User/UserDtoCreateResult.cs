using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Dtos.User
{
    class UserDtoCreateResult
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public DateTime createAt { get; set; }
        public DateTime updateAt { get; set; }

    }
}
