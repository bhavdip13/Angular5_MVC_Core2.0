using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using ERP.BusinessAccessLayer.Interface;
using ERP.BusinessObjects.Settings;
using ERP.BusinessObjects.User;
using ERP.BusinessObjects.UserFeature;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ERP.Web.Controllers.API
{
    [Produces("application/json")]
    [Route("api/Authentication")]
    public class AuthenticationController : Controller
    {
        private readonly IUserManager _userManager;
        private readonly AppSettings _appSettings;
        public AuthenticationController(IUserManager userManager, IOptions<AppSettings> appSettings)
        {
            _userManager = userManager;
            _appSettings = appSettings.Value;
        }
        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody]UserDto userDto)
        {
            var user = await _userManager.Authenticate(userDto.Email, userDto.Password);

            List<UserFeatureAccessModel> MenuList = new List<UserFeatureAccessModel>();
            if (user != null)
                MenuList = await _userManager.GetMenuList(user.Id);

            if (user == null)
                return Unauthorized();

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

           // return basic user info(without password) and token to store client side
            var DistModule = MenuList.Select(p => p.ModuleName).Distinct();
            List<UserFeatureAccessModel> ModuleList = new List<UserFeatureAccessModel>();
            foreach (var item in DistModule)
            {
                ModuleList.Add(MenuList.Where(p => p.ModuleName == item).FirstOrDefault());
            }
            return Ok(new
            {
                Id = user.Id,
                FullName = user.FullName,
                Email = user.Email,
                Token = tokenString,
                ModuleList = ModuleList,
                MenuList = MenuList
            });
        }
    }
}
