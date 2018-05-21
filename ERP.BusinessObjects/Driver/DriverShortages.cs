    using System;
    using System.Collections.Generic;

namespace ERP.BusinessObjects
{

    public class DriverShortages
    {
        public int Id { get; set; }
        public int driverid { get; set; }
        public string drivername { get; set; }
        public int Commodity { get; set; }
        public int CommodityName { get; set; }
        public decimal shortageuom { get; set; }
        public decimal shortageuomname { get; set; }
        public decimal shortagequantity { get; set; }	
        public decimal shortagevalue { get; set; }
		public DateTime dateOfshortage { get; set; }
		public decimal shortagevaluepaidbydriver { get; set; }
        public string Status { get; set; }
        public Nullable<int> OrgId { get; set; }
        public string orgname { get; set; }
        public string suborgname { get; set; }
        public Nullable<int> SubOrgId { get; set; }
        public string Lang { get; set; }
        public int currentUserId { get; set; }
    }
}
