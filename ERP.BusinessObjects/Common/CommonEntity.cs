using System;
using System.Collections.Generic;
using System.Text;

namespace ERP.BusinessObjects.Common
{
   public class CommonEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
	public class MenuList
	{
		public int UserId { get; set; }
		public string modulename { get; set; }
		public string menuname { get; set; }
		public string url { get; set; }
		public string cssClassName { get; set; }

	}
	public class ModuleList
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string ModuleName { get; set; }
		public string MenuName { get; set; }
		public string Description { get; set; }
		public string URL { get; set; }
		public string CssClassName { get; set; }


	}

}

