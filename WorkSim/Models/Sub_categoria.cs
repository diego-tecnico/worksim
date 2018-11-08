using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WorkSim.Models
{
  public class Sub_categoria
  {
    [Key]
    public int Id { get; set; }
    public int CategoriaId { get; set; }
    public string No_sub_categoria { get; set; }
    public DateTime Dt_cadastro { get; set; }
    public int SLA { get; set; }
    public bool St_registro_ativo { get; set; }
  }
}
