using ERP.BusinessAccessLayer.Interface;
using ERP.BusinessObjects.Driver;
using ERP.DataAccessLayer.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERP.BusinessAccessLayer
{
    public class DriverShortagesManager: IDriverShortagesManager
    {
        private readonly IDriverShortagesRepository _driverShortagesRepository;
        public DriverShortagesManager(IDriverShortagesRepository driverShortagesRepository)
        {
            _driverShortagesRepository = driverShortagesRepository;
        }
        public async Task<int> Add(DriverShortageDto driverinfo)
        {
            if (driverinfo.Id == 0)
            {
                return await _driverShortagesRepository.Add(driverinfo);
            }
            else
            {
                return await _driverShortagesRepository.Update(driverinfo);
            }
        }
        public async Task<List<DriverShortage>> GetAll()
        {
            return await _driverShortagesRepository.GetAll();
        }
        public async Task<DriverShortageDto> GetDriverInformation(int id)
        {
            return await _driverShortagesRepository.GetDriverInformation(id);
        }
        public async Task Delete(int id, int currentUserId)
        {
            await _driverShortagesRepository.Delete(id,currentUserId);
        }
        public async Task<int> UpdateDriverShortage(DriverShortageDto driverinfo)
        {
            return await _driverShortagesRepository.Update(driverinfo);
        }
        public async Task<bool> StatusChange(int status, int currentUserId, int id)
        {
            return await _driverShortagesRepository.StatusChange(status,currentUserId,id);
        }
        public async Task<bool> Approve(int currentUserId, int id)
        {
            return await _driverShortagesRepository.StatusChange((int)BusinessObjects.EnumStore.Status.Approved, currentUserId, id);
        }
        public async Task<bool> Reject(int currentUserId, int id)
        {
            return await _driverShortagesRepository.StatusChange((int)BusinessObjects.EnumStore.Status.Rejected, currentUserId, id);
        }
    }
}
