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
        var protocolo = _db.Protocolo.ToList();
        return Ok(new { protocolo });
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

  }
}
