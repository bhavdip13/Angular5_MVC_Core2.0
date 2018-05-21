using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ERP.BusinessObjects.Common;
using Microsoft.AspNetCore.Authorization;
using ERP.BusinessAccessLayer.Interface;

namespace ERP.Web.Controllers.API
{
  [Produces("application/json")]
  //[Authorize]
  public class CommonController : Controller
  {
    private readonly ICommonManager _commonManager;
    public CommonController(ICommonManager commonManager)
    {
      _commonManager = commonManager;
    }
    [Route("api/Common/GetAllCommodity")]
    [HttpGet]
    public async Task<List<CommonEntity>> GetAllCommodity()
    {
      return await _commonManager.GetAllCommodity();
    }
    
      [Route("api/Common/GetUOM")]
    [HttpGet]
    public async Task<List<CommonEntity>> GetUOM()
    {
      return await _commonManager.GetUOM();
    }
  }
}
