using ERP.BusinessObjects.Register;
using ERP.BusinessObjects.User;
using ERP.BusinessObjects.UserFeature;
using ERP.Entitys;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERP.BusinessAccessLayer.Interface
{
    public interface IUserManager
    {
        Task<UserCreate> Authenticate(string username, string password);
        Task<List<UserFeatureAccessModel>> GetMenuList(int userid);
        Task<int> AddUser(UserMd usr, string password);
        RegisterUser Create(RegisterUser user, string password);
        Task<List<UserCreate>> GetAll();
        UserCreate GetUser(int id);
        Task<int> Delete(int id);
        //Task Update(UserMd usr,string password);
        Task Approve(UserCreate usr);
        Task Reject(UserCreate usr);
    }
}
