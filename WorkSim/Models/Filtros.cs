using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkSim.Models
{
    public class Filtros
    {
        public string Protocolo { get; set; }
        public string Nome_beneficiario { get; set; }
        public string Grupo { get; set; }
        public string Status { get; set; }
        public string Tipo { get; set; }
        public string Cpf_cnpj_beneficiario { get; set; }
        public string Codigo_beneficiario { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFim { get; set; }

    }
}
