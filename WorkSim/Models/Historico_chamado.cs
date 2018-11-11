using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WorkSim.Models
{
  public class Historico_chamado
  {
    public const string TP_ABERTO = "ABERTO";

    [Key]
    public int Id { get; set; }
    public int ChamadoId { get; set; }
    public string Ds_descricao { get; set; }
    public string St_chamado { get; set; }
    public DateTime Dt_cadastro { get; set; }
    public int SetorOrigemId { get; set; }
    public int SetorDestinoId { get; set; }
  }
}
