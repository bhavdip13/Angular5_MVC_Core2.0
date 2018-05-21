using ERP.BusinessObjects;
using ERP.BusinessObjects.Driver;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERP.DataAccessLayer.Interface
{
    public interface IDriverInformationRepository
    {
        Task<int> Add(DriverInformation driverinfo);
        Task<List<DriverInformation>> GetAll();
        Task<DriverInformation> GetDriverInformation(int id);
        Task Delete(int id, int currentUserId);
        Task<int> Update(DriverInformation driverinfo);
        Task<bool> StatusChange(int status, int currentUserId, int id);
    }
}
