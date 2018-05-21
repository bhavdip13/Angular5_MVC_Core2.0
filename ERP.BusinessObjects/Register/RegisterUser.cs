using System;
using System.Collections.Generic;
using System.Text;

namespace ERP.BusinessObjects.Register
{
   public class RegisterUser
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
       
    }
}
