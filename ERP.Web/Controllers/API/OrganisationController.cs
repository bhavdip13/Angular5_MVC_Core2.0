using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;
using ERP.BusinessAccessLayer.Interface;
using ERP.BusinessObjects.Organisation;

namespace ERP.Web.Controllers.API
{
  [Produces("application/json")]
  //[Authorize]
  [EnableCors("CorsPolicy")]
  public class OrganisationController : Controller
  {
    private readonly IOrganisationManager _organisationManager;
    public OrganisationController(IOrganisationManager organisationManager)
    {
      _organisationManager = organisationManager;
    }
    [Route("api/Organisation/GetOrganisations")]
    [HttpGet]
    public async Task<List<Company>> GetOrganisations()
    {
      return await _organisationManager.GetOrganisations();
    }
    [Route("api/Organisation/GetSubOrganisations")]
    [HttpGet]
    public async Task<List<Company>> GetSubOrganisations()
    {
      return await _organisationManager.GetSubOrganisations();
    }
  }
}
