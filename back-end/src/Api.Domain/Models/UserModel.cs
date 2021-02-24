using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class UserModel
    {
        private Guid _id;
            
        public Guid Id
        {
            get { return _id; }
            set { _id = value; }
        }

        private string _email;

        public string Email
        {
            get { return _email; }
            set { _email = value; }
        }

        private string _password;

        public string Password
        {
            get { return _password; }
            set { _password = value; }
        }

        private DateTime _createAt;

        public DateTime CreateAt
        {
            get { return _createAt; }
            set {
                _createAt = value == null ? DateTime.UtcNow : value;
                
            }
        }
        private DateTime _updateAt;

        public DateTime UpdateAt
        {
            get { return _updateAt; }
            set { _updateAt = value; }
        }



    }
}
