using System;
using Microsoft.Extensions.Options;
using System.Data;
using Dapper;
using System.Data.SqlClient;
using System.Threading.Tasks;
using ERP.BusinessObjects;
using System.Collections.Generic;
using System.Linq;
using ERP.BusinessObjects.Settings;
using ERP.DataAccessLayer.Interface;
using ERP.Entitys;
using ERP.BusinessObjects.UserFeature;

namespace ERP.DataAccessLayer
{
    public class UserFeatureRepository : IUserFeatureRepository
    {
        private readonly DbSettings _settings;

        public UserFeatureRepository(IOptions<DbSettings> options)
        {
            _settings = options.Value;
        }

        //public async Task<int> Add(UserFeature usrfeature)
        //{
        //    try
        //    {
        //        using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
        //        {
        //            // await dbConnection.OpenAsync();
        //            var dynamicParameters = new DynamicParameters();
        //            dynamicParameters.Add("@UserId", usrfeature.UserId);
        //            dynamicParameters.Add("@UserGroupId", usrfeature.UserGroupId);
        //            dynamicParameters.Add("@FeatureId", usrfeature.FeatureId);
        //            dynamicParameters.Add("@FeatureGroupId", usrfeature.FeatureGroupId);
        //            //dynamicParameters.Add("@Add", usrfeature.Add);
        //            dynamicParameters.Add("@Edit", usrfeature.Edit);
        //            dynamicParameters.Add("@View", usrfeature.View);
        //            dynamicParameters.Add("@Delete", usrfeature.Delete);
        //            dynamicParameters.Add("@Print", usrfeature.Print);
        //            dynamicParameters.Add("@Copy", usrfeature.Copy);
        //            dynamicParameters.Add("@Active", usrfeature.Active);
        //            dynamicParameters.Add("@InActive", usrfeature.InActive);
        //            //dynamicParameters.Add("@@LoginUserId", usrfeature.@LoginUserId);


        //            return await dbConnection.ExecuteAsync("UserFeatureInsert", dynamicParameters, commandType: CommandType.StoredProcedure);
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return 0;
        //    }

        //}

        //public async Task<UserFeature> GetUserFeature(int id)
        //{
        //    try
        //    {
        //        using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
        //        {

        //            var dynamicParameters = new DynamicParameters();
        //            dynamicParameters.Add("@id", id);
        //            return await dbConnection.QuerySingleOrDefaultAsync<UserFeature>("UserFeatureSelect", dynamicParameters, commandType: CommandType.StoredProcedure);
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return null;
        //    }

        //}

        //public async Task Delete(int id)
        //{
        //    try
        //    {
        //        using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
        //        {

        //            var dynamicParameters = new DynamicParameters();
        //            dynamicParameters.Add("@Id", id);
        //            await dbConnection.ExecuteAsync("UserFeatureDelete", dynamicParameters, commandType: CommandType.StoredProcedure);
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }

        //}

        //public async Task<int> Update(UserFeature usrfeature)
        //{
        //    try
        //    {
        //        using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
        //        {

        //            var dynamicParameters = new DynamicParameters();
        //            dynamicParameters.Add("@Id", usrfeature.Id);
        //            dynamicParameters.Add("@UserId", usrfeature.UserId);
        //            dynamicParameters.Add("@UserGroupId", usrfeature.UserGroupId);
        //            dynamicParameters.Add("@FeatureId", usrfeature.FeatureId);
        //            dynamicParameters.Add("@FeatureGroupId", usrfeature.FeatureGroupId);
        //            //dynamicParameters.Add("@Add", usrfeature.Add);
        //            dynamicParameters.Add("@Edit", usrfeature.Edit);
        //            dynamicParameters.Add("@View", usrfeature.View);
        //            dynamicParameters.Add("@Delete", usrfeature.Delete);
        //            dynamicParameters.Add("@Print", usrfeature.Print);
        //            dynamicParameters.Add("@Copy", usrfeature.Copy);
        //            dynamicParameters.Add("@Active", usrfeature.Active);
        //            dynamicParameters.Add("@InActive", usrfeature.InActive);
        //            //dynamicParameters.Add("@@LoginUserId", usrfeature.@LoginUserId);
        //            return await dbConnection.ExecuteAsync("UserFeatureUpdate", dynamicParameters, commandType: CommandType.StoredProcedure);
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return 0;
        //    }

        //}
        
        //Task<UserFeature> IUserFeatureRepository.GetUserFeature(int id)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task Approve(UserFeature usrfeature)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task Reject(UserFeature usrfeature)
        //{
        //    throw new NotImplementedException();
        //}

        //Added by aslam

        public async Task<List<UserFeatureAccessModel>> GetUserFeaturesAccess(int id)
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {
                    //dbConnection.Open();
                    var dynamicParameters = new DynamicParameters();
                    dynamicParameters.Add("@UserId", id);
                    var UserFeatureAccessList = (await dbConnection.QueryAsync<UserFeatureAccessModel>("Usp_GetUserFeaturesAccess", dynamicParameters, commandType: CommandType.StoredProcedure)).ToList();
                    return UserFeatureAccessList;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<int> AddUserFeature(List<UserFeature> ufModel)
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {
                    // await dbConnection.OpenAsync();
                    foreach (var item in ufModel)
                    {
                        var dynamicParameters = new DynamicParameters();
                        dynamicParameters.Add("@UserId", item.UserId);
                        dynamicParameters.Add("@FeatureId", item.FeatureId);
                        dynamicParameters.Add("@Deny", item.Deny);
                        dynamicParameters.Add("@Edit", item.Edit);
                        dynamicParameters.Add("@View", item.View);
                        dynamicParameters.Add("@Delete", item.Delete);
                        dynamicParameters.Add("@Print", item.Print);
                        dynamicParameters.Add("@Copy", item.Copy);
                        dynamicParameters.Add("@Dataflow", item.Dataflow);
                        dynamicParameters.Add("@UpdatedId", item.UpdatedId);

                        var user = dbConnection.Query<UserFeature>(@"SELECT * FROM [UserFeatureMapping] where UserId=@UserId and FeatureId=@FeatureId", new { UserId = item.UserId, FeatureId = item.FeatureId });


                        UserFeature userF = user.FirstOrDefault();

                        if (userF == null)
                        {
                            dynamicParameters.Add("@CreatedBy", item.CreatedBy);
                            await dbConnection.ExecuteAsync("UserFeatureMappingInsert", dynamicParameters, commandType: CommandType.StoredProcedure);
                        }
                        else
                        {
                            dynamicParameters.Add("@Id", userF.Id);
                            await dbConnection.ExecuteAsync("UserFeatureMappingUpdate", dynamicParameters, commandType: CommandType.StoredProcedure);
                        }
                    }
                }
                return 1;
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public async Task<MasterAccessModel> GetMasterList()
        {
            try
            {
                MasterAccessModel masterModel = new MasterAccessModel();
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {
                    //dbConnection.Open();

                    masterModel.UserAccessList = (await dbConnection.QueryAsync<UserListFeatureAccessModel>("Usp_GetUserListForFeatureAccess", null, commandType: CommandType.StoredProcedure)).ToList();
                    masterModel.FeatureList = (await dbConnection.QueryAsync<Feature>(@"SELECT * FROM [Feature]")).ToList();

                    return masterModel;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
