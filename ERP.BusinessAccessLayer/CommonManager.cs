using ERP.BusinessAccessLayer.Interface;
using ERP.BusinessObjects.Common;
using ERP.DataAccessLayer.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERP.BusinessAccessLayer
{
  public  class CommonManager: ICommonManager
    {
        private readonly ICommonRepository _commonRepository;
        public CommonManager(ICommonRepository  commonRepository)
        {
            _commonRepository = commonRepository;
        }
        public async Task<List<CommonEntity>> GetAllCommodity()
        {
            return await _commonRepository.GetAllCommodity();
        }
        public async Task<List<CommonEntity>> GetUOM()
        {
            return await _commonRepository.GetUOM();
        }
    }
}
