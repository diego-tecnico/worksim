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
    public string No_sub_categoria { get; set; }
    public DateTime Dt_cadastro { get; set; }
    public double SLA { get; set; }
    public bool St_registro_ativo { get; set; }

    public Categoria_setor Categoria_setor { get; set; }
    public int Categoria_setorId { get; set; }
  }
}
