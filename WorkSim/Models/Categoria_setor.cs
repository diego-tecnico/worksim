using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WorkSim.Models
{
  public class Categoria_setor
  {
    [Key]
    public int Id { get; set; }
    public int SetorId { get; set; }
    public string No_categoria_setor { get; set; }
  }
}
