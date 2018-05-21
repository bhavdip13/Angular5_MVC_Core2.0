using ERP.BusinessObjects.UserFeature;
using System;
using System.Collections.Generic;
using System.Text;

namespace ERP.BusinessObjects.User
{
    public class UserDataModel
    {
        public UserDataModel()
        {
            _menuAccessList = new List<UserFeatureAccessModel>();
            //_moduleList = new List<ObjModule>();
        }
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public string EmployeeId { get; set; }
        public string Email { get; set; }
        public string OrgId { get; set; }
        public string SubOrgId { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedTime { get; set; }
        public string UpdatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedTime { get; set; }
        public string Language { get; set; }
        public byte[] PasswordSalt { get; set; }
        public List<UserFeatureAccessModel> _menuAccessList { get; set; }
       // public List<ObjModule> _moduleList { get; set; }
    }
    public class ObjModule
    {
        public ObjModule()
        {
            _menuAccessList = new List<UserFeatureAccessModel>();
        }
        public string ModuleName { get; set; }
        public List<UserFeatureAccessModel> _menuAccessList { get; set; }
    }
}
