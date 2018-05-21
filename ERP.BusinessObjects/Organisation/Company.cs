using System;
using System.Collections.Generic;
using System.Text;

namespace ERP.BusinessObjects.Organisation
{
  public  class Company
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string OrgType { get; set; }
    }
}
