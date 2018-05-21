using System;
using System.Collections.Generic;
using System.Text;

namespace ERP.BusinessObjects.Driver
{
    public class DriverShortage
    {
        public int Id { get; set; }
        public string DriverName { get; set; }
        public string CommodityName { get; set; }
        public string ShortageUOMName { get; set; }
        public Nullable<decimal> ShortageQuantity { get; set; }
        public Nullable<decimal> ShortageValue { get; set; }
        public Nullable<System.DateTime> DateOfShortage { get; set; }
        public Nullable<decimal> ShortageValuePaidbyDriver { get; set; }
        public string Status { get; set; }
    }
    public class DriverShortageDto
    {
        public int Id { get; set; }
        public int DriverId { get; set; }
        public string drivername { get; set; }
        public int Commodity { get; set; }
        public string CommodityName { get; set; }
        public int ShortageUOM { get; set; }
        public string ShortageUOMName { get; set; }
        public decimal shortagequantity { get; set; }
        public decimal shortagevalue { get; set; }
        public DateTime dateOfshortage { get; set; }
        public decimal shortagevaluepaidbydriver { get; set; }
        public int currentUserId { get; set; }
    }
}
