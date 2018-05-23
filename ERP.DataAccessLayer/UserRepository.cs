using Dapper;
using ERP.BusinessObjects.Settings;
using ERP.BusinessObjects.User;
using ERP.DataAccessLayer.Interface;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using System.Linq;
using ERP.Entitys;
using System.Data;
using ERP.BusinessObjects.Common;


namespace ERP.DataAccessLayer
{
	public class UserRepository : IUserRepository
	{
		private readonly DbSettings _settings;

		public UserRepository(IOptions<DbSettings> options)
		{
			_settings = options.Value;//@"Server=localhost;Database=DapperDemo;Trusted_Connection=true;";
		}

		public async Task<UserCreate> Authenticate(string Email, string password)
		{
			try
			{
				UserCreate userObj;
				using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
				{

					var user = await dbConnection.QueryAsync<UserCreate>(@"SELECT * From [User] where Email=@Email", new { Email = Email });


					userObj = user.FirstOrDefault();
					if (user == null)
					{
						return null;
					}
					// check if password is correct
					if (!VerifyPasswordHash(password, userObj.PasswordHash, userObj.PasswordSalt))
					{
						return null;
					}
				}
				if (string.IsNullOrEmpty(Email) || string.IsNullOrEmpty(password))
				{
					return null;
				}
				return userObj;
			}
			catch (Exception ex)
			{
				return null;
			}
		}

		private bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
		{
			if (password == null) throw new ArgumentNullException("password");
			if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
			if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
			if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

			using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
			{
				var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
				for (int i = 0; i < computedHash.Length; i++)
				{
					if (computedHash[i] != storedHash[i])
					{
						return false;
					}
				}
			}
			return true;
		}
		public int Register(UserCreate user)
		{
			try
			{
				using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
				{
					dbConnection.Open();
					using (var tran = dbConnection.BeginTransaction())
					{
						try
						{
							var sql = @"INSERT INTO [dbo].[User] ([FullName],[Email],[PasswordHash],[CreatedBy],[CreatedTime],[UpdatedBy],[UpdatedTime],[PasswordSalt],[IsActive])
                                  VALUES (@FullName,@Email,@PasswordHash,@CreatedBy, SYSUTCDATETIME(),@UpdatedBy, @UpdatedTime,@PasswordSalt,@IsActive)
                                  SELECT SCOPE_IDENTITY() ";
							var userId = dbConnection.ExecuteScalar<int>(sql, user, transaction: tran);

							tran.Commit();
							return userId;
						}
						catch (Exception ex)
						{
							tran.Rollback();
							return 0;
						}
					}
				}
			}
			catch (Exception ex)
			{
				return 0;
			}


		}

		public async Task<int> AddUser(UserCreate usr)
		{
			try
			{
				using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
				{
					// await dbConnection.OpenAsync();
					var dynamicParameters = new DynamicParameters();
					dynamicParameters.Add("@FullName", usr.FullName);
					dynamicParameters.Add("@PasswordHash", usr.PasswordHash);
					dynamicParameters.Add("@UpdatedBy", usr.UpdatedBy);
					dynamicParameters.Add("@PasswordSalt", usr.PasswordSalt);
					dynamicParameters.Add("@Email", usr.Email);
					dynamicParameters.Add("@CreatedBy", usr.CreatedBy);
					if (usr.Id == null || usr.Id == 0)
					{
						dynamicParameters.Add("@Is_Update", 0);
					}
					else
					{
						dynamicParameters.Add("@Id", usr.Id);
						dynamicParameters.Add("@Is_Update", 1);

					}
					return await dbConnection.ExecuteAsync("UserInsert", dynamicParameters, commandType: CommandType.StoredProcedure);


				}
				return 1;
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
				using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
				{
					//dbConnection.Open();
					var list = (await dbConnection.QueryAsync<UserCreate>("web_GetUser", null, commandType: CommandType.StoredProcedure)).ToList();
					return list;

				}
			}
			catch (Exception ex)
			{
				return null;
			}
		}

		public async Task<int> Delete(int id)
		{
			try
			{
				using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
				{
					var dynamicParameters = new DynamicParameters();
					dynamicParameters.Add("@Id", id);
					return await dbConnection.ExecuteAsync("UserDelete", dynamicParameters, commandType: CommandType.StoredProcedure);
				}
			}
			catch (Exception ex)
			{
				throw ex;
			}

		}

		public UserCreate GetUser(int id)
		{
			try
			{
				UserCreate userObj;
				using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
				{
					//var user = dbConnection.QueryAsync<User>(@"SELECT * FROM [User] where Id=@id", new { id = id });
					var user = dbConnection.Query<UserCreate>(@"SELECT * FROM [User] where Id=@id", new { id = id });
					userObj = user.FirstOrDefault();
					if (user == null)
					{
						return null;
					}
				}
				return userObj;
			}
			catch (Exception ex)
			{
				return null;
			}
		}

		public async Task<List<MenuList>> GetMenuList(int UserId)
		{
			try
			{
				using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
				{
					//dbConnection.Open();
			   var MenuList = dbConnection.Query<MenuList>(@"SELECT * FROM [Mst_MenuList] where Userid=@UserId", new { UserId = UserId }).ToList();
					return MenuList;

				}
			}
			catch (Exception ex)
			{
				return null;
			}
		}
		public async Task<List<ModuleList>> GetModuleList()
		{
			try
			{
				using (var dbConnection = new SqlConnection(_settings.ConnectionString[DbConnections.ERPDbContext.ToString()]))
				{
					//dbConnection.Open();
					var moduleList = dbConnection.Query<ModuleList>(@"SELECT * FROM [Mst_ModuleList]").ToList();
					return moduleList;

				}
			}
			catch (Exception ex)
			{
				return null;
			}
		}
	}
}
