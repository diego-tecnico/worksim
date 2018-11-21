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
  public class ScriptController : Controller
  {
    private readonly DbWorkFlow _db;

    public ScriptController(DbWorkFlow db)
    {
      _db = db;
    }

    [HttpGet]
    public object ObterScripts()
    {
      try
      {
        var scripts = _db.Script
                         .ToList();

        return Ok(new { scripts });

      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

  }
}
