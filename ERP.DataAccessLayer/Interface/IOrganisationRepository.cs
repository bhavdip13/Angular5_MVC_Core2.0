using ERP.BusinessObjects.Organisation;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERP.DataAccessLayer.Interface
{
    public interface IOrganisationRepository
    {
        Task<List<Company>> GetCompany(string orgType);
    }
}
