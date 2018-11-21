using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WorkSim.Models
{
  public class Usuario
  {
    [Key]
    public int Id { get; set; }
    public string Nome { get; set; }
    public string Login { get; set; }
    public string Perfil { get; set; }
    [NotMapped]
    public string NomeSetor { get; set; }
    public int SetorId { get; set; }

    public string Senha { get; set; }
    public Setor Setor { get; set; }
    public bool St_registro_ativo { get; set; }

  }
}
