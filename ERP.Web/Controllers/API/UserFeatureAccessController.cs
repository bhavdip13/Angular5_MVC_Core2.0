using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ERP.BusinessAccessLayer.Interface;
using ERP.BusinessObjects.UserFeature;
using ERP.Entitys;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ERP.Web.Controllers.API
{
    [Produces("application/json")]
    [Route("api/UserFeatureAccess")]
    public class UserFeatureAccessController : Controller
    {
        private readonly IUserFeatureManager _userFeatureManager;
        public UserFeatureAccessController(IUserFeatureManager userFeatureManager)
        {
            _userFeatureManager = userFeatureManager;
        }

        // Get Feature and User list
        [Route("GetMasterList")]
        [HttpGet]
        public async Task<MasterAccessModel> GetMasterList()
        {
            var data = await _userFeatureManager.GetMasterList();
            return data;
        }

        // Get User Feature Access List
        [Route("GetUserFeaturesAccessList")]
        [HttpGet]
        public async Task<List<UserFeatureAccessModel>> GetUserFeaturesAccessList(int id)
        {
            var data = await _userFeatureManager.GetUserFeaturesAccess(id);
            return data;
        }

        // Save and Update UserFeatureMapping
        [Route("SaveUserFeature")]
        [HttpPost]
        public async Task<int> SaveUserFeature([FromBody]List<UserFeatureMappingModel> ufModel)
        {
            try
            {
                return await _userFeatureManager.AddUserFeature(ufModel);
            }
            catch (Exception ex)
            {

                throw;
            }

        }
    }
}
