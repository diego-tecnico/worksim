using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkSim.Models
{
  public class FiltrosChamado
  {
    public string Nu_protocolo { get; set; }
    public string CpfOuCnpj { get; set; }
    public DateTime Dt_inicio { get; set; }
    public DateTime Dt_fim { get; set; }
    public string No_setor { get; set; }
    public string No_categoria { get; set; }
    public string Tp_chamado { get; set; }
    public string Autor { get; set; }
    public string St_chamado { get; set; }
    public int SetorOrigemId { get; set; }
    public bool? EstaNoSla { get; set; }
  }
}
