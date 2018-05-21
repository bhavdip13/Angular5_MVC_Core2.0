using ERP.BusinessAccessLayer.Interface;
using ERP.BusinessObjects.Organisation;
using ERP.DataAccessLayer.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERP.BusinessAccessLayer
{
   public class OrganisationManager: IOrganisationManager
    {
        private readonly IOrganisationRepository _organisationRepository;
        public OrganisationManager(IOrganisationRepository organisationRepository)
        {
            _organisationRepository = organisationRepository;
        }
        public async Task<List<Company>> GetOrganisations()
        {
           return await _organisationRepository.GetCompany("O");
        }
        public async Task<List<Company>> GetSubOrganisations()
        {
            return await _organisationRepository.GetCompany("S");
        }
    }
}
