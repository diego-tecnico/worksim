using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WorkSim.Models
{
  public class Protocolo
  {
    public static int PROXIMO_SEQ_PROTOCOLO = 1;
    public static string TIPO_URA = "URA";
    public static string TIPO_CHAMADO = "CHAMADO";

    [Key]
    public int Id { get; set; }
    public string Nu_protocolo { get; set; }
    public DateTime Dt_cadastro { get; set; }
    public string Tipo { get; set; }
    public bool St_registro_ativo { get; set; }
  }
}
