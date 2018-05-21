using ERP.BusinessObjects.Driver;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERP.DataAccessLayer.Interface
{
    public interface IDriverShortagesRepository
    {
        Task<int> Add(DriverShortageDto driverinfo);
        Task<List<DriverShortage>> GetAll();
        Task<DriverShortageDto> GetDriverInformation(int id);
        Task Delete(int id, int currentUserId);
        Task<int> Update(DriverShortageDto driverinfo);
        Task<bool> StatusChange(int status, int currentUserId, int id);
    }
}
