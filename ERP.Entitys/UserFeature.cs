using System;
using System.Collections.Generic;
using System.Text;

namespace ERP.Entitys
{
    public class UserFeature
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int UserGroupId { get; set; }
        public int FeatureId { get; set; }
        public int FeatureGroupId { get; set; }
        public int Deny { get; set; }
        public int Edit { get; set; }
        public int View { get; set; }
        public int Delete { get; set; }
        public int Print { get; set; }
        public int Copy { get; set; }
        public int Dataflow { get; set; }
        public int Active { get; set; }
        public int InActive { get; set; }
        public int CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedTime { get; set; }
        public int UpdatedId { get; set; }
        public Nullable<System.DateTime> UpdatedTime { get; set; }
        public string Lang { get; set; }
    }
}
