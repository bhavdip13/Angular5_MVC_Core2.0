
using ERP.BusinessObjects.User;
using ERP.BusinessObjects.UserFeature;
using ERP.Entitys;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERP.DataAccessLayer.Interface
{
    public interface IUserRepository
    {
        Task<UserCreate> Authenticate(string username, string password);
        Task<List<UserFeatureAccessModel>> GetMenuList(int userid);
        int Register(UserCreate user);
        UserCreate GetUser(int id);

        Task<int> AddUser(UserCreate user);
        Task<List<UserCreate>> GetAll();
        Task<int> Delete(int id);
    }
}
