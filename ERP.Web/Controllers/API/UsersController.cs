using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using ERP.BusinessAccessLayer.Interface;
using ERP.BusinessObjects.Settings;
using Microsoft.Extensions.Options;
using ERP.BusinessObjects.User;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using ERP.BusinessObjects.Register;
using Microsoft.AspNetCore.Cors;
using ERP.Entitys;

namespace ERP.Web.Controllers.API
{

    [Produces("application/json")]
    [Route("api/Users")]
    //[EnableCors("CorsPolicy")]
    public class UsersController : Controller
    {
        private readonly IUserManager _userManager;
        public UsersController(IUserManager userManager)
        {
            _userManager = userManager;
        }

        // Save and Update User
        [Route("SaveUser")]
        [HttpPost]
        public async Task<int> SaveUser([FromBody]UserMd user)
        {
            try
            {
                return await _userManager.AddUser(user, user.Password);
            }
            catch (Exception ex)
            {

                throw;
            }

        }
        // Create User
        [Route("Create")]
        [HttpPost]
        public RegisterUser Create([FromBody]RegisterUser user)
        {
            try
            {
                return  _userManager.Create(user, user.Password);
            }
            catch (Exception ex)
            {

                throw;
            }

        }

        // Get Users List
        [Route("GetUsers")]
        [HttpGet]
        public async Task<List<UserCreate>> GetUsers()
        {
            try
            {
                return await _userManager.GetAll();
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        // Get User by Id
        [Route("Details")]
        [HttpGet]
        public UserCreate GetUserById(int id)
        {
            return _userManager.GetUser(Convert.ToInt32(id));
        }

        //Delete Api
        //[Route("Delete")]
        //[HttpPost]
        //public async Task Delete(int Id)
        //{

        //}

        // Delete User by Id
        [HttpDelete("{id}")]
        public async Task<int> Delete(int id)
        {
            return await _userManager.Delete(id);
        }

        //[Route("Update")]
        //[HttpPut]
        //public async Task UpdateUser([FromBody]UserMd user)
        //{
        //    await _userManager.Update(user, user.Password);
        //}

        //[Route("ApproveUser")]
        //[HttpGet]
        //public async Task<User> ApproveUserById(string Id)
        //{
        //    return await _userManager.ApproveUser(Convert.ToInt32(Id));
        //}
        //[Route("RejectUser")]
        //[HttpGet]
        //public async Task<User> RejectUserById(string Id)
        //{
        //    return await _userManager.RejectUser(Convert.ToInt32(Id));
        //}
    }

}
