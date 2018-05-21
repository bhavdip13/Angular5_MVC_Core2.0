using ERP.BusinessObjects.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERP.DataAccessLayer.Interface
{
    public interface ICommonRepository
    {
        Task<List<CommonEntity>> GetAllCommodity();
        Task<List<CommonEntity>> GetUOM();
    }
}
