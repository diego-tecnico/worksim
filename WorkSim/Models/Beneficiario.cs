using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WorkSim.Models
{
  public class Beneficiario
  {
    [Key]
    public int Id { get; set; }
    public string No_beneficiario { get; set; }
    public int Tp_pessoa { get; set; }
    public string Ds_email { get; set; }
    public string Co_beneficiario { get; set; }
    public string Co_carteirinha { get; set; }
    public string Nu_telefone { get; set; }
    public string Nu_cep { get; set; }
    public string Ds_endereco { get; set; }
    public string No_bairro { get; set; }
    public string SG_UF { get; set; }
    public DateTime Dt_cadastro { get; set; }
    public string Co_cpf_cnpj { get; set; }
    public bool St_registro_ativo { get; set; }

  }
}
