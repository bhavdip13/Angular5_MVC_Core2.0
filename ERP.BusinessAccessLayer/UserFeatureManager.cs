

using ERP.BusinessAccessLayer.Interface;
using ERP.BusinessObjects;
using ERP.BusinessObjects.UserFeature;
using ERP.DataAccessLayer.Interface;
using ERP.Entitys;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ERP.BusinessAccessLayer
{
    public class UserFeatureManager: IUserFeatureManager
    {
        private readonly IUserFeatureRepository _usrfeatureRepo;
        public UserFeatureManager(IUserFeatureRepository usrfeatureRepo)
        {
            _usrfeatureRepo = usrfeatureRepo;
        }

        //public async Task<int> Add(UserFeature usrfeature)
        //{
        //    return await _usrfeatureRepo.Add(usrfeature);
        //    //if (usrfeature.Id == 0)
        //    //{
        //    //    return await _usrfeatureRepo.Add(usrfeature);
        //    //}
        //    //else {
        //    //    return await _usrfeatureRepo.Update(usrfeature);
        //    //}

        //}
        //public async Task<List<Feature>> GetAllFeature()
        //{
        //    return await _usrfeatureRepo.GetAllFeature();
        //}
        //public async Task<UserFeature> GetUserFeature(int id)
        //{
        //    return await _usrfeatureRepo.GetUserFeature(id);
        //}
        //public async Task Delete(int id)
        //{
        //     await _usrfeatureRepo.Delete(id);
        //}
        ////public async Task Updusrfeature(UserFeature usrfeature)
        ////{
        ////    await _usrfeatureRepo.Update(usrfeature);
        ////}

        //public Task<int> Add(UserUserGroup usrusrgrp)
        //{
        //    throw new NotImplementedException();
        //}

        ////Task<List<UserUserGroup>> IUserFeatureManager.GetAll()
        ////{
        ////    throw new NotImplementedException();
        ////}

        //public Task<UserUserGroup> GetUserUserGroup(int id)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task Update(UserUserGroup usrusrgrp)
        //{
        //    throw new NotImplementedException();
        //}

        //Added by Aslam
        public async Task<List<UserFeatureAccessModel>> GetUserFeaturesAccess(int id)
        {
            return await _usrfeatureRepo.GetUserFeaturesAccess(id);
        }

        public async Task<int> AddUserFeature(List<UserFeatureMappingModel> ufModel)
        {
            try
            {
                List<UserFeature> Model = new List<UserFeature>();
                foreach (var item in ufModel)
                {
                    UserFeature uModel = new UserFeature();
                    uModel.UserId = item.UserId;
                    uModel.FeatureId = item.FeatureId;
                    uModel.Deny = item.Deny;
                    uModel.Edit = item.Edit;
                    uModel.View = item.View;
                    uModel.Delete = item.Delete;
                    uModel.Print = item.Print;
                    uModel.Copy = item.Copy;
                    uModel.Dataflow = item.Dataflow;
                    uModel.CreatedBy = item.UserId;
                    uModel.UpdatedId = item.UserId;

                    Model.Add(uModel);
                }
                return await _usrfeatureRepo.AddUserFeature(Model);
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public Task<MasterAccessModel> GetMasterList()
        {
            return _usrfeatureRepo.GetMasterList();
        }
    }
}
