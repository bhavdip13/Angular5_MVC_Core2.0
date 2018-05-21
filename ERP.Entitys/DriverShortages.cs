using System;
using System.Collections.Generic;
using System.Text;

namespace ERP.Entitys
{
    public class DriverShortages
    {
        public int Id { get; set; }
        public Nullable<int> DriverId { get; set; }
        public Nullable<int> Commodity { get; set; }
        public Nullable<int> ShortageUOM { get; set; }
        public Nullable<decimal> ShortageQuantity { get; set; }
        public Nullable<decimal> ShortageValue { get; set; }
        public Nullable<System.DateTime> DateOfShortage { get; set; }
        public Nullable<decimal> ShortageValuePaidbyDriver { get; set; }
        public Nullable<int> Status { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedTime { get; set; }
        public Nullable<int> UpdatedId { get; set; }
        public Nullable<System.DateTime> UpdatedTime { get; set; }
        public string Lang { get; set; }

    }
}
