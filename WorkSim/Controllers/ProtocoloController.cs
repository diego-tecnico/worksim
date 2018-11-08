using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WorkSim.Models.Banco;

namespace WorkSim.Controllers
{
  [Route("api/[controller]")]
  public class ProtocoloController : Controller
  {
    private readonly DbWorkFlow _db;

    public ProtocoloController(DbWorkFlow db)
    {
      _db = db;
    }

    [HttpGet]
    public object ObterProtocolo()

    {
      try
      {
        var protocolo = GerarProtocolo();


        return Ok(new { protocolo });
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    private object GerarProtocolo()
    {
      var dadosDoProtocolo = new DadosDoProtocolo
      {
        CodSequencial = "0001"
      };

      return dadosDoProtocolo.Protocolo();
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
