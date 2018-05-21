using System;

namespace ERP.Entitys
{
    public class User
    {
        public int Id { get; set; }
        public int UserId { get; set; }
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
    }
    public class UserCreate
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedTime { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime? UpdatedTime { get; set; }
        public byte[] PasswordSalt { get; set; }
        public bool IsActive { get; set; }
    }

}
