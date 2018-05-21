using System;
using System.Collections.Generic;
using System.Text;

namespace ERP.Entitys
{
    public  class UserUserGroup
    {
        public int MapId { get; set; }
        public string UserId { get; set; }
        public string GroupId { get; set; }
        public string OrgId { get; set; }
        public string SubOrgId { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedTime { get; set; }
        public string UpdatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedTime { get; set; }
        public string Language { get; set; }
    }
}
