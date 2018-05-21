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
using ERP.BusinessObjects.Driver;

namespace ERP.DataAccessLayer.Interface
{
    public class DriverInformationRepository : IDriverInformationRepository
    {
        private readonly DbSettings _settings;

        public DriverInformationRepository(IOptions<DbSettings> options)
        {
            _settings = options.Value;
        }
        public async Task<int> Add(DriverInformation driverinfo)
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {
                    // await dbConnection.OpenAsync();
                    var dynamicParameters = new DynamicParameters();
                    dynamicParameters.Add("@OrgId", driverinfo.OrgId);
                    dynamicParameters.Add("@SubOrgId", driverinfo.SubOrgId);
                    dynamicParameters.Add("@Code", driverinfo.Code);
                    dynamicParameters.Add("@Name", driverinfo.Name);
                    dynamicParameters.Add("@DateOfBirth", driverinfo.DateOfBirth);
                    dynamicParameters.Add("@DateOfJoining", driverinfo.DateOfJoining);
                    dynamicParameters.Add("@LicenseNo", driverinfo.LicenseNo);
                    dynamicParameters.Add("@IssueDate", driverinfo.IssueDate);
                    dynamicParameters.Add("@ValidUpto", driverinfo.ValidUpto);
                    dynamicParameters.Add("@CitizenshipNo", driverinfo.CitizenshipNo);
                    dynamicParameters.Add("@CSNIssueDate", driverinfo.CSNIssueDate);
                    dynamicParameters.Add("@UnitNo", driverinfo.UnitNo);
                    dynamicParameters.Add("@Remarks", driverinfo.Remarks);
                    dynamicParameters.Add("@UserId", driverinfo.currentUserId);
                    dynamicParameters.Add("@Lang", driverinfo.Lang);


                  return  await dbConnection.ExecuteAsync("DriverInformationInsert", dynamicParameters, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                return 0;
            }

        }

        public async Task<List<DriverInformation>> GetAll()
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {
                    //dbConnection.Open();

                    return (await dbConnection.QueryAsync<DriverInformation>("DriverInformationSelectAll", null, commandType: CommandType.StoredProcedure)).ToList();

                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<DriverInformation> GetDriverInformation(int id)
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {

                    var dynamicParameters = new DynamicParameters();
                    dynamicParameters.Add("@id", id);
                    return await dbConnection.QuerySingleOrDefaultAsync<DriverInformation>("DriverInformationSelect", dynamicParameters, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                return null;
            }

        }

        public async Task Delete(int id, int currentUserId)
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {
                    var dynamicParameters = new DynamicParameters();
                    dynamicParameters.Add("@Id", id);
                    dynamicParameters.Add("@UserId", currentUserId);
                    await dbConnection.ExecuteAsync("DriverInformationDelete", dynamicParameters, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<int> Update(DriverInformation driverinfo)
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {

                    var dynamicParameters = new DynamicParameters();
                    dynamicParameters.Add("@Id",driverinfo.Id);
                    dynamicParameters.Add("@OrgId",driverinfo.OrgId);
                    dynamicParameters.Add("@SubOrgId",driverinfo.SubOrgId);
                    dynamicParameters.Add("@Code", driverinfo.Code);
                    dynamicParameters.Add("@Name", driverinfo.Name);
                    dynamicParameters.Add("@DateOfBirth", driverinfo.DateOfBirth);
                    dynamicParameters.Add("@DateOfJoining", driverinfo.DateOfJoining);
                    dynamicParameters.Add("@LicenseNo", driverinfo.LicenseNo);
                    dynamicParameters.Add("@IssueDate", driverinfo.IssueDate);
                    dynamicParameters.Add("@ValidUpto", driverinfo.ValidUpto);
                    dynamicParameters.Add("@CitizenshipNo", driverinfo.CitizenshipNo);
                    dynamicParameters.Add("@CSNIssueDate", driverinfo.CSNIssueDate);
                    dynamicParameters.Add("@UnitNo", driverinfo.UnitNo);
                    dynamicParameters.Add("@Remarks", driverinfo.Remarks);
                    dynamicParameters.Add("@UserId", driverinfo.currentUserId);
                    dynamicParameters.Add("@Lang", driverinfo.Lang);
                    return await dbConnection.ExecuteAsync("DriverInformationUpdate", dynamicParameters, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                return 0;
            }

        }

        public async Task<bool> StatusChange(int status,int currentUserId,int id)
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {
                    var query = @"update [dbo].[DriverInformation] set [Status]=@Status,[UpdatedId]=@currentUserId,[UpdatedTime]=SYSUTCDATETIME() where Id=@id";
                 return   await dbConnection.ExecuteScalarAsync<bool>(query,new { Status=status, currentUserId= currentUserId,id=id });
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

      
    }
}
