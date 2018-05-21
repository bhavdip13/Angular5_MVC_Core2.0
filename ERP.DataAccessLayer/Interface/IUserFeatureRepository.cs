using ERP.BusinessObjects;
using ERP.BusinessObjects.UserFeature;
using ERP.Entitys;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERP.DataAccessLayer.Interface
{
    public interface IUserFeatureRepository
    {
        
        //Task<UserFeature> GetUserFeature(int id);
        //Task Delete(int id);
        //Task Update(UserFeature usrfeature);
        //Task Approve(UserFeature usrfeature);
        //Task Reject(UserFeature usrfeature);

        Task<List<UserFeatureAccessModel>> GetUserFeaturesAccess(int id);

        Task<MasterAccessModel> GetMasterList();

        Task<int> AddUserFeature(List<UserFeature> ufModel);
    }
}
