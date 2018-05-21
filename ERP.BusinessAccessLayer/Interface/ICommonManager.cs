using ERP.BusinessObjects.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERP.BusinessAccessLayer.Interface
{
    public interface ICommonManager
    {
        Task<List<CommonEntity>> GetAllCommodity();
        Task<List<CommonEntity>> GetUOM();
    }
}
