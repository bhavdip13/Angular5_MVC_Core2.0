using ERP.BusinessObjects;
using ERP.BusinessObjects.Driver;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERP.BusinessAccessLayer.Interface
{
    public interface IDriverInformationManager
    {
        Task<int> Add(DriverInformation driverinfo);
        Task<List<DriverInformation>> GetAll();
        Task<DriverInformation> GetDriverInformdriinformnion(int id);
        Task Delete(int id, int currentUserId);
        Task Upddriinformne(DriverInformation driverinfo);
        Task<bool> Approve(int currentUserId, int id);
        Task<bool> Reject(int currentUserId, int id);
    }
}
