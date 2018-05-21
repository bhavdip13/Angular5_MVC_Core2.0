using System;
using System.Collections.Generic;
using System.Text;

namespace ERP.BusinessObjects.Settings
{
    public class DbSettings
    {
        public Dictionary<string, string> ConnectionString { get; set; }
    }
    public enum DbConnections
    {
        ERPDbContext
    }
}
