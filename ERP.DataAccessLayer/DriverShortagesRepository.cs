using Dapper;
using ERP.BusinessObjects.Driver;
using ERP.BusinessObjects.Settings;
using ERP.DataAccessLayer.Interface;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.DataAccessLayer
{
    public class DriverShortagesRepository : IDriverShortagesRepository
    {

        private readonly DbSettings _settings;

        public DriverShortagesRepository(IOptions<DbSettings> options)
        {
            _settings = options.Value;
        }
        public async Task<int> Add(DriverShortageDto drivershtge)
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {
                    // await dbConnection.OpenAsync();
                    var dynamicParameters = new DynamicParameters();
                    dynamicParameters.Add("@DriverId", drivershtge.DriverId);
                    dynamicParameters.Add("@DateOfShortage", drivershtge.dateOfshortage);
                    dynamicParameters.Add("@UserId", drivershtge.currentUserId);
                    dynamicParameters.Add("@Commodity", drivershtge.Commodity);
                    dynamicParameters.Add("@ShortageQuantity", drivershtge.shortagequantity);
                    dynamicParameters.Add("@ShortageUOM", drivershtge.ShortageUOM);
                    dynamicParameters.Add("@ShortageValue", drivershtge.shortagevalue);
                    dynamicParameters.Add("@ShortageValuePaidbyDriver", drivershtge.shortagevaluepaidbydriver);
                    dynamicParameters.Add("@id", drivershtge.Id);
                    return await dbConnection.ExecuteAsync("Usp_SaveDriverShortages", dynamicParameters, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                return 0;
            }

        }

        public async Task<List<DriverShortage>> GetAll()
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {
                    return (await dbConnection.QueryAsync<DriverShortage>("DriverShortagesSelectAll", null, commandType: CommandType.StoredProcedure)).ToList();
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<DriverShortageDto> GetDriverInformation(int id)
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {

                    var dynamicParameters = new DynamicParameters();
                    dynamicParameters.Add("@id", id);
                    return await dbConnection.QuerySingleOrDefaultAsync<DriverShortageDto>("DriverShortagesSelect", dynamicParameters, commandType: CommandType.StoredProcedure);
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
                    await dbConnection.ExecuteAsync("Usp_DeleteDriverShortages", dynamicParameters, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<int> Update(DriverShortageDto drivershtge)
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {

                    var dynamicParameters = new DynamicParameters();
                    dynamicParameters.Add("@DriverId", drivershtge.DriverId);
                    dynamicParameters.Add("@DateOfShortage", drivershtge.dateOfshortage);
                    dynamicParameters.Add("@UserId", drivershtge.currentUserId);
                    dynamicParameters.Add("@Commodity", drivershtge.Commodity);
                    dynamicParameters.Add("@ShortageQuantity", drivershtge.shortagequantity);
                    dynamicParameters.Add("@ShortageUOM", drivershtge.ShortageUOM);
                    dynamicParameters.Add("@ShortageValue", drivershtge.shortagevalue);
                    dynamicParameters.Add("@ShortageValuePaidbyDriver", drivershtge.shortagevaluepaidbydriver);
                    dynamicParameters.Add("@id", drivershtge.Id);
                    return await dbConnection.ExecuteAsync("Usp_SaveDriverShortages", dynamicParameters, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                return 0;
            }

        }

        public async Task<bool> StatusChange(int status, int currentUserId, int id)
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {
                    var query = @"update [dbo].[DriverShortages] set [Status]=@Status,[UpdatedId]=@currentUserId,[UpdatedTime]=SYSUTCDATETIME() where Id=@id";
                    return await dbConnection.ExecuteScalarAsync<bool>(query, new { Status = status, currentUserId = currentUserId, id = id });
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


    }
}

