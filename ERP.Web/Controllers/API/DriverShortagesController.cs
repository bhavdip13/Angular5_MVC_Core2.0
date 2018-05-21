using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ERP.BusinessObjects.Driver;
using ERP.BusinessAccessLayer.Interface;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace ERP.Web.Controllers.API
{
  [Produces("application/json")]
 // [Authorize]
  public class DriverShortagesController : Controller
  {
    private readonly string userId;
    private readonly IDriverShortagesManager _driverShortagesManager;
    private readonly ICommonManager _commonManager;
    public DriverShortagesController(IDriverShortagesManager driverShortagesManager, ICommonManager commonManager,IHttpContextAccessor httpContextAccessor)
    {
      _driverShortagesManager = driverShortagesManager;
      userId = httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
      _commonManager = commonManager;
    }
    [Route("api/GetDriverShortagess")]
    [HttpGet]
    public async Task<List<DriverShortage>> GetDriverShortagess()
    {
      return await _driverShortagesManager.GetAll();
    }
    [Route("api/SaveDriverShortages")]
    [HttpPost]
    public async Task<int> SaveDriverInformation([FromBody]DriverShortageDto driverinfo)
    {
      return await _driverShortagesManager.Add(driverinfo);
    }
    [Route("api/GetDriverShortages")]
    [HttpGet]
    public async Task<DriverShortageDto> GetDriverShortagesById(int Id)
    {
      return await _driverShortagesManager.GetDriverInformation(Id);
    }
    [Route("api/DriverShortages/Approve")]
    [HttpPost]
    public async Task<bool> ApproveById(int Id, int currentUserId)
    {
      return await _driverShortagesManager.Approve(currentUserId, Id);
    }
    [Route("api/DriverShortages/Reject")]
    [HttpPost]
    public async Task<bool> RejectById(int Id, int currentUserId)
    {
      return await _driverShortagesManager.Reject(currentUserId, Id);
    }
    [Route("api/DriverShortages/Delete")]
    [HttpPost]
    public async Task Delete(int Id, int currentUserId)
    {
      await _driverShortagesManager.Delete(Id, currentUserId);
    }
  }
}
