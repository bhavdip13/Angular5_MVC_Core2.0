using ERP.BusinessObjects.Register;
using ERP.BusinessObjects.User;
using ERP.Entitys;
using System.Collections.Generic;
using System.Threading.Tasks;
using ERP.BusinessObjects.Common;
namespace ERP.BusinessAccessLayer.Interface
{
	public interface IUserManager
    {
        Task<UserCreate> Authenticate(string username, string password);
        Task<int> AddUser(UserMd usr, string password);
        RegisterUser Create(RegisterUser user, string password);
        Task<List<UserCreate>> GetAll();
        UserCreate GetUser(int id);
        Task<int> Delete(int id);
        //Task Update(UserMd usr,string password);
        Task Approve(UserCreate usr);
        Task Reject(UserCreate usr);
		    Task<List<MenuList>> GetMenuList(int Userid);
		Task<List<ModuleList>> GetModuleList();
		}
}
