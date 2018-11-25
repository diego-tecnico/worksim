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
  public class SetorController : Controller
  {
    private readonly DbWorkFlow _db;

    public SetorController(DbWorkFlow db)
    {
      _db = db;
    }

    [HttpGet]
    public object ObterSetores()
    {
      try
      {
        var setores = _db.Setor
                         .Where(x => x.St_registro_ativo == true)
                         .ToList();

        return Ok(new { setores });

      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

  }
}
