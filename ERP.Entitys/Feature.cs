using System;
using System.Collections.Generic;
using System.Text;

namespace ERP.Entitys
{
    public class Feature
    {
        public int Id { get; set; }
        public int FeatureGroupId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string ModuleName { get; set; }
        public string MenuName { get; set; }
        public string Description { get; set; }
        public string URL { get; set; }
        public string HelpId { get; set; }
        public string CssClassName { get; set; }
    }
}
