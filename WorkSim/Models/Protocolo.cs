using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WorkSim.Models
{
  public class Protocolo
  {
    [Key]
    public int Id { get; set; }
    public string Nu_protocolo { get; set; }
    public DateTime Dt_cadastro { get; set; }
    public bool St_registro_ativo { get; set; }
  }
}
