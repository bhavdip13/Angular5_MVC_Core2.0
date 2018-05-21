using ERP.Entitys;
using System;
using System.Collections.Generic;
using System.Text;

namespace ERP.BusinessObjects.UserFeature
{
    public class MasterAccessModel
    {
        public MasterAccessModel()
        {
            FeatureList = new List<Feature>();
            UserAccessList = new List<UserListFeatureAccessModel>();
        }
        public List<Feature> FeatureList { get; set; }
        public List<UserListFeatureAccessModel> UserAccessList { get; set; }
    }
    public class UserListFeatureAccessModel
    {
        public string Name { get; set; }
        public int Id { get; set; }
    }
}
