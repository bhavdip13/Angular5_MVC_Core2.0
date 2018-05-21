

using ERP.BusinessAccessLayer.Interface;
using ERP.BusinessObjects;
using ERP.BusinessObjects.Driver;
using ERP.DataAccessLayer.Interface;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ERP.BusinessAccessLayer
{
    public class DriverInformnionManager: IDriverInformationManager
    {
        private readonly IDriverInformationRepository _driinformnRepo;
        public DriverInformnionManager(IDriverInformationRepository driinformnRepo)
        {
            _driinformnRepo = driinformnRepo;
        }
        public async Task<int> Add(DriverInformation driverinfo)
        {
            if (driverinfo.Id == 0)
            {
                return await _driinformnRepo.Add(driverinfo);
            }
            else {
                return await _driinformnRepo.Update(driverinfo);
            }
            
        }
        public async Task<List<DriverInformation>> GetAll()
        {
            return await _driinformnRepo.GetAll();
        }
        public async Task<DriverInformation> GetDriverInformdriinformnion(int id)
        {
            return await _driinformnRepo.GetDriverInformation(id);
        }
        public async Task Delete(int id, int currentUserId)
        {
             await _driinformnRepo.Delete(id,currentUserId);
        }
        public async Task Upddriinformne(DriverInformation driverinfo)
        {
            await _driinformnRepo.Update(driverinfo);
        }
        public async Task<bool> Approve(int currentUserId ,int id)
        {
           return await _driinformnRepo.StatusChange((int)BusinessObjects.EnumStore.Status.Approved,currentUserId,id);
        }
        public async Task<bool> Reject(int currentUserId, int id)
        {
          return  await _driinformnRepo.StatusChange((int)BusinessObjects.EnumStore.Status.Rejected, currentUserId, id);
        }
        
    }
}
