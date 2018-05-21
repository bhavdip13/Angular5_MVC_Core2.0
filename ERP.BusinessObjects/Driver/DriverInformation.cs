    using System;
    using System.Collections.Generic;

namespace ERP.BusinessObjects
{

    public class DriverInformation
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
		public DateTime DateOfJoining { get; set; }	
        public string LicenseNo { get; set; }
		public DateTime IssueDate { get; set; }
		public DateTime ValidUpto { get; set; }
        public string CitizenshipNo { get; set; }
		public DateTime CSNIssueDate { get; set; }
		public string UnitNo { get; set; }
		public string Remarks { get; set; }
        public string Status { get; set; }
		public Nullable<int> OrgId { get; set; }
        public string orgname { get; set; }
        public string suborgname { get; set; }
        public Nullable<int> SubOrgId { get; set; }
        public string Lang { get; set; }
        public int currentUserId { get; set; }
    }
}
