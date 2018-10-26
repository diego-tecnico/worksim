using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WorkSim.Models
{
  public class Chamado
  {
    [Key]
    public int Id { get; set; }
    public int ProtocoloId { get; set; }
    public int BeneficiarioId { get; set; }
    public int SubCategoriaId { get; set; }
    public string Nu_protocolo { get; set; }
    public int Co_categoria { get; set; }
    public int Tp_chamado { get; set; }
    public int Co_origim { get; set; }
    public string Ds_assunto { get; set; }
    public bool St_chamado { get; set; }
    public DateTime Dt_inicio { get; set; }
    public DateTime Dt_fim { get; set; }
    public DateTime Dt_cadastro { get; set; }
    public bool St_registro_ativo { get; set; }
  }
}
