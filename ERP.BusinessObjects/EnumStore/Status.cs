using System;
using System.Collections.Generic;
using System.Text;

namespace ERP.BusinessObjects.EnumStore
{
   public  enum Status
    {
        Active = 1,
        InActive = 2,
        Closed = 3,
        InProgress = 4,
        Pending = 5,
        Open = 6,
        Cancelled = 7,
        Confirmed = 8,
        Approved = 9,
        Rejected = 10,
        PartiallyScheduled = 11,
        Scheduled = 12,
        PartiallyPicked = 13,
        Picked = 14,
        Packed = 15,
        PartiallyDelivered = 16,
        Delivered = 17,
        Shipped = 18,
        SubmitToQAC = 19,
        QACPass = 20,
        SubmitToMFG = 21,
        Invoiced = 22,
        Execution = 23,
        Renewed = 24,
        Revised = 25,
        Planned = 26,
        Completed = 27,
        Acknowledged = 28,
        Foreclosure = 29,
        Inprogress = 30,
        ProvisanallyClosed = 31,
        ForciblyClosed = 32,
    }
}
