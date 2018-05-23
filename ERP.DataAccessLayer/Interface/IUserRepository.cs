using ERP.Entitys;
using System.Collections.Generic;
using System.Threading.Tasks;
using ERP.BusinessObjects.Common;

namespace ERP.DataAccessLayer.Interface
{
	public interface IUserRepository
    {
        Task<UserCreate> Authenticate(string username, string password);
       
        int Register(UserCreate user);
        UserCreate GetUser(int id);

        Task<int> AddUser(UserCreate user);
        Task<List<UserCreate>> GetAll();
        Task<int> Delete(int id);
		    Task<List<MenuList>> GetMenuList(int UserId);
		Task<List<ModuleList>> GetModuleList();

		}
}
