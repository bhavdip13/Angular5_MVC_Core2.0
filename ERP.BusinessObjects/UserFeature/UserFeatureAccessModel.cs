using System;
using System.Collections.Generic;
using System.Text;

namespace ERP.BusinessObjects.UserFeature
{
    public class UserFeatureAccessModel
    {
        public int FeatureID { get; set; }
        public int FeatureGroupId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string ModuleName { get; set; }
        public string MenuName { get; set; }
        public string URL { get; set; }
        public string HelpId { get; set; }
        public string CssClassName { get; set; }
        public int UserId { get; set; }
        public int UserGroupId { get; set; }
        public int Deny { get; set; }
        public int Edit { get; set; }
        public int View { get; set; }
        public int Delete { get; set; }
        public int Print { get; set; }
        public int Copy { get; set; }
        public int Dataflow { get; set; }
        public int Active { get; set; }
    }
}
