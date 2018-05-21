using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using ERP.BusinessObjects;
using ERP.BusinessAccessLayer.Interface;
using Microsoft.AspNetCore.Authorization;
using ERP.BusinessObjects.Driver;

namespace ERP.Api.Controllers.API
{
  [Produces("application/json")]
  public class DriverInformationController : Controller
  {
    private readonly IDriverInformationManager _driverinformationManager;
    public DriverInformationController(IDriverInformationManager driverinformationManager)
    {
      _driverinformationManager = driverinformationManager;
    }
    
    [Route("api/SaveDriverInformation")]
    [HttpPost]
    public async Task<int> SaveDriverInformation([FromBody]DriverInformation driverinfo)
    {
      return await _driverinformationManager.Add(driverinfo);
    }
    
    [Route("api/GetDriverInformations")]
    [HttpGet]
    public async Task<List<DriverInformation>> GetDriverInformations()
    {
      return await _driverinformationManager.GetAll();
    }
    
    [Route("api/GetDriverInformation")]
    [HttpGet]
    public async Task<DriverInformation> GetDriverInformationById(int Id)
    {
      return await _driverinformationManager.GetDriverInformdriinformnion(Id);
    }
    
    [Route("api/UpdateDriverInformation")]
    [HttpGet]
    public async Task UpdateDriverInformationById([FromBody]DriverInformation driverinfo)
    {
      await _driverinformationManager.Upddriinformne(driverinfo);
    }
    
    [Route("api/Approve")]
    [HttpPost]
    public async Task<bool> ApproveById(int Id, int currentUserId)
    {
      return await _driverinformationManager.Approve(currentUserId, Id);
    }
    
    [Route("api/Reject")]
    [HttpPost]
    public async Task<bool> RejectById(int Id, int currentUserId)
    {
      return await _driverinformationManager.Reject(currentUserId, Id);
    }
    
    [Route("api/Delete")]
    [HttpPost]
    public async Task Delete(int Id, int currentUserId)
    {
       await _driverinformationManager.Delete(Id, currentUserId);
    }
    
  }
}
