using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WorkSim.Models
{
  public class Chamado
  {

    public const string NORMAL = "NORMAL";
    public const string AMEACA_ANS = "AMEAÇA ANS";
    public const string AMEACA_PROCESSO = "AMEAÇA PROCESSO";
    public const int SLA_ANS = 2;
    public const int SLA_PROCESSO = 4;

    [Key]
    public int Id { get; set; }
    public string Tp_chamado { get; set; }
    public string Ds_assunto { get; set; }
    public bool St_registro_ativo { get; set; }
    public DateTime Dt_criacao { get; set; }

    public Beneficiario Beneficiario { get; set; }
    public int BeneficiarioId { get; set; }

    public Protocolo Protocolo { get; set; }
    public int ProtocoloId { get; set; }

    public Sub_categoria Sub_categoria { get; set; }
    public int Sub_CategoriaId { get; set; }

    [NotMapped]
    public DateTime Sla { get; set; }

    [NotMapped]
    public bool EstaNoSla { get; set; }

  }
}
