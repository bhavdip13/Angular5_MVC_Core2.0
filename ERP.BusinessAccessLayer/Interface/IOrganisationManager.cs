using ERP.BusinessObjects.Organisation;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERP.BusinessAccessLayer.Interface
{
    public interface IOrganisationManager
    {
        Task<List<Company>> GetOrganisations();
        Task<List<Company>> GetSubOrganisations();
    }
}
