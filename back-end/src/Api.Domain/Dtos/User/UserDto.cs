using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Dtos.User
{
    class UserDto
    {
        [Required (ErrorMessage = "Campo Email é obrigatorio")]
        public string  Email;

        [Required(ErrorMessage = "Campo Password é obrigatorio")]
        public string Password;
    
    }
}
