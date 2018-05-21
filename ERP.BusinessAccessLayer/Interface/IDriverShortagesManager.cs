using ERP.BusinessObjects.Driver;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERP.BusinessAccessLayer.Interface
{
    public interface IDriverShortagesManager
    {
        Task<int> Add(DriverShortageDto driverinfo);
        Task<List<DriverShortage>> GetAll();
        Task<DriverShortageDto> GetDriverInformation(int id);
        Task Delete(int id, int currentUserId);
        Task<int> UpdateDriverShortage(DriverShortageDto driverinfo);
        Task<bool> StatusChange(int status, int currentUserId, int id);
        Task<bool> Approve(int currentUserId, int id);
        Task<bool> Reject(int currentUserId, int id);
    }
}
