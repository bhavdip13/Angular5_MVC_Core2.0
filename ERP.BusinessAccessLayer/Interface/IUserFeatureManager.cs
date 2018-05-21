using ERP.BusinessObjects;
using ERP.BusinessObjects.UserFeature;
using ERP.Entitys;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERP.BusinessAccessLayer.Interface
{
    public interface IUserFeatureManager
    {
        

        //Task<List<Feature>> GetAllFeature();

        //Task<UserUserGroup> GetUserUserGroup(int id);

        //Task Delete(int id);

        //Task Update(UserUserGroup usrusrgrp);

        Task<List<UserFeatureAccessModel>> GetUserFeaturesAccess(int id);

        Task<MasterAccessModel> GetMasterList();

        Task<int> AddUserFeature(List<UserFeatureMappingModel> ufModel);
    }
}
