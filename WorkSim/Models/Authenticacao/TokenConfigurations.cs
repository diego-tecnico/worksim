using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkSim.Models.Authenticacao
{
    public class TokenConfigurations
    {
        public string SymmetricSecurityKey { get; set; }
        public string Audience { get; set; }
        public string Issuer { get; set; }
        public int TokenLifetimeInMinutes { get; set; }
    }
}
