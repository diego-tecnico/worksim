using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorkSim
{
    public class AcoesChamados
    {
        [Key]
        public int Id { get; set; }
        public int Id_Acao { get; set; }
        public int Id_Chamado { get; set; }
        public string Acao { get; set; }
        public DateTime Data_acao { get; set; }
        public string Descricao { get; set; }
        public string Usuario { get; set; }
        public string Grupo { get; set; }
        public string Texto { get; set; }
    }
}
