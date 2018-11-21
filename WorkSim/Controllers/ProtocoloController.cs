using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkSim.Models;
using WorkSim.Models.Banco;

namespace WorkSim.Controllers
{
  [Authorize]
  [Route("api/[controller]")]
  public class ProtocoloController : Controller
  {
    private readonly DbWorkFlow _db;

    public ProtocoloController(DbWorkFlow db)
    {
      _db = db;
    }

    [HttpGet("{tipo}")]
    public object ObterProtocolo([FromRoute] string tipo)
    {
      try
      {

        if (!tipo.Equals(Protocolo.TIPO_URA, StringComparison.InvariantCultureIgnoreCase) &&
            !tipo.Equals(Protocolo.TIPO_CHAMADO, StringComparison.InvariantCultureIgnoreCase))
          return BadRequest("Tipo de protocolo invalido !");

        var protocolo = GerarProtocolo(tipo.ToUpper());

        return Ok(new { protocolo });
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    private object GerarProtocolo(string tipo)
    {
      var dadosDoProtocolo = new DadosDoProtocolo
      {
        CodSequencial = "000001"
      };

      var ultimoProtocolo = _db.Protocolo.LastOrDefault(x => x.Dt_cadastro.ToString("yyyyMMdd") == DateTime.Now.ToString("yyyyMMdd"));
      if (ultimoProtocolo != null)
          dadosDoProtocolo.CodSequencial = ObterProximoProtocolo(ultimoProtocolo);

      var protocolo = new Protocolo
      {
        Nu_protocolo = dadosDoProtocolo.Protocolo(),
        Dt_cadastro = DateTime.Now,
        Tipo = tipo,
        St_registro_ativo = true
      };

      _db.Protocolo.Add(protocolo);
      _db.SaveChanges();

      return dadosDoProtocolo.Protocolo();
    }

    private static string ObterProximoProtocolo(Protocolo ultimoProtocolo)
    {
      string cod_SEQ = ultimoProtocolo.Nu_protocolo.Substring(14, 6);
      int numeroSEQ = ObterProxSEQ(cod_SEQ);
      cod_SEQ = ObterCodSequencial(numeroSEQ.ToString());

      return cod_SEQ;
    }

    private static int ObterProxSEQ(string cod_SEQ)
    {
      int numeroSEQ = Convert.ToInt32(cod_SEQ);
      numeroSEQ += Protocolo.PROXIMO_SEQ_PROTOCOLO;
      return numeroSEQ;
    }

    private static string ObterCodSequencial(string numeroSEQ)
    {
      switch (numeroSEQ.Length)
      {
        case 1:
          return "00000" + numeroSEQ;
        case 2:
          return "0000" + numeroSEQ;
        case 3:
          return "000" + numeroSEQ;
        case 4:
          return "00" + numeroSEQ;
        case 5:
          return "0" + numeroSEQ;
        default:
          return "00000" + numeroSEQ;
      }
    }

    public class DadosDoProtocolo
    {
      public string CodSaudeSim { get; private set; } = "320111";
      public string AnoMesDia { get; private set; } = DateTime.Now.ToString("yyyyMMdd");
      public string CodSequencial { get; set; }


      public string Protocolo()
      {
        return $"{CodSaudeSim}{AnoMesDia}{CodSequencial}";
      }

    }



  }
}
