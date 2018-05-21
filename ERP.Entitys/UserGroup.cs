using System;
using System.Collections.Generic;
using System.Text;

namespace ERP.Entitys
{
  public  class UserGroup
    {
        public int Id { get; set; }
        public string UserGroupName { get; set; }
        public string Description { get; set; }
        public string ParentGroupId { get; set; }
        public string OrgId { get; set; }
        public string SubOrgId { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedTime { get; set; }
        public string UpdatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedTime { get; set; }
        public string Language { get; set; }

    }
}
