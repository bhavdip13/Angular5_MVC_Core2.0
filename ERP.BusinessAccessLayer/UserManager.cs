using ERP.BusinessAccessLayer.Interface;
using ERP.BusinessObjects.Register;
using ERP.BusinessObjects.User;
using ERP.DataAccessLayer.Interface;
using ERP.Entitys;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ERP.BusinessObjects.Common;

namespace ERP.BusinessAccessLayer
{
	public class UserManager : IUserManager
	{
		private readonly IUserRepository _userRepository;
		public UserManager(IUserRepository userRepository)
		{
			_userRepository = userRepository;
		}

		public async Task<int> AddUser(UserMd model, string password)
		{
			try
			{
				UserCreate user = new UserCreate();
				if (string.IsNullOrWhiteSpace(password))
				{
					return -1;
				}
				user.FullName = model.FullName;

				user.CreatedBy = "";
				user.UpdatedBy = "";
				user.Email = model.Email;
				byte[] passwordHash, passwordSalt;
				CreatePasswordHash(password, out passwordHash, out passwordSalt);
				user.PasswordHash = passwordHash;
				user.PasswordSalt = passwordSalt;
				user.Id = model.Id;
				return await _userRepository.AddUser(user);
			}
			catch (Exception ex)
			{

				throw;
			}
		}

		public Task Approve(UserCreate usr)
		{
			throw new NotImplementedException();
		}

		public async Task<int> Delete(int id)
		{
			try
			{
				return await _userRepository.Delete(id);
			}
			catch (Exception ex)
			{

				throw;
			}
		}

		public async Task<List<UserCreate>> GetAll()
		{
			try
			{
				return await _userRepository.GetAll();
			}
			catch (Exception ex)
			{

				throw;
			}
		}

		public UserCreate GetUser(int id)
		{
			try
			{
				return _userRepository.GetUser(id);
			}
			catch (Exception ex)
			{

				throw;
			}
		}

		public Task Reject(UserCreate usr)
		{
			throw new NotImplementedException();
		}

		public Task Update(UserCreate usr)
		{
			throw new NotImplementedException();
		}
		public async Task<UserCreate> Authenticate(string Email, string password)
		{
			if (string.IsNullOrEmpty(Email) || string.IsNullOrEmpty(password))
				return null;

			var user = await _userRepository.Authenticate(Email, password);

			return user;
		}

		public RegisterUser Create(RegisterUser user, string password)
		{
			UserCreate objUser = new UserCreate();
			// validation
			if (string.IsNullOrWhiteSpace(password))
				return null;

			objUser.FullName = user.FullName;
			objUser.Email = user.Email;
			byte[] passwordHash, passwordSalt;
			CreatePasswordHash(password, out passwordHash, out passwordSalt);
			objUser.PasswordHash = passwordHash;
			objUser.CreatedBy = "System";
			objUser.CreatedTime = null;
			objUser.UpdatedBy = "";
			objUser.UpdatedTime = null;
			objUser.PasswordSalt = passwordSalt;
			objUser.IsActive = false;

			_userRepository.Register(objUser);

			return user;
		}
		private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
		{
			if (password == null) throw new ArgumentNullException("password");
			if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

			using (var hmac = new System.Security.Cryptography.HMACSHA512())
			{
				passwordSalt = hmac.Key;
				passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
			}
		}

		public async Task<List<MenuList>> GetMenuList(int Userid)
		{
			try
			{
				return await _userRepository.GetMenuList(Userid);
			}
			catch (Exception ex)
			{
				throw;
			}
		}
		public async Task<List<ModuleList>> GetModuleList()
		{
			try
			{
				return await _userRepository.GetModuleList();
			}
			catch (Exception ex)
			{
				throw;
			}
		}
	}
}
