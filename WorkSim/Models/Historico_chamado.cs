using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WorkSim.Models
{
  public class Historico_chamado
  {
    [Key]
    public int Id { get; set; }
    public int ChamadoId { get; set; }
    public string Ds_descricao { get; set; }
    public int St_acao { get; set; }
    public DateTime Dt_cadastro { get; set; }
    public bool St_registro_ativo { get; set; }

  }
}
