using Dapper;
using ERP.BusinessObjects.Common;
using ERP.BusinessObjects.Settings;
using ERP.DataAccessLayer.Interface;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.DataAccessLayer
{
    public class CommonRepository: ICommonRepository
    {
        private readonly DbSettings _settings;
        public CommonRepository(IOptions<DbSettings> options)
        {
            _settings = options.Value;
        }
        public async Task<List<CommonEntity>> GetAllCommodity()
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {
                    //dbConnection.Open();
                    return (await dbConnection.QueryAsync<CommonEntity>("SELECT [Id],[Name] FROM [ERPDB].[dbo].[Commodity]", null)).ToList();
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public async Task<List<CommonEntity>> GetUOM()
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {
                    //dbConnection.Open();
                    return (await dbConnection.QueryAsync<CommonEntity>("SELECT [Id],[Name] FROM [ERPDB].[dbo].[UOM]", null)).ToList();
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
		
	}
}
