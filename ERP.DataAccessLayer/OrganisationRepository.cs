using Dapper;
using ERP.BusinessObjects.Organisation;
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
   public class OrganisationRepository: IOrganisationRepository
    {
        private readonly DbSettings _settings;
        public OrganisationRepository(IOptions<DbSettings> options)
        {
            _settings = options.Value;
        }
        public async Task<List<Company>> GetCompany(string orgType)
        {
            try
            {
                using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
                {
                    var queryCompany = @"SELECT [Id],[Code],[Name],[OrgType] FROM [dbo].[Organisation] where OrgType=@OrgType";

                    return (await dbConnection.QueryAsync<Company>(queryCompany, new { OrgType= orgType })).ToList();

                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
