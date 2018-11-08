using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WorkSim.Models;
using WorkSim.Models.Banco;

namespace WorkSim.Controllers
{
  [Route("api/[controller]")]
  public class SubCategoriaController : Controller
  {
    private readonly DbWorkFlow _db;

    public SubCategoriaController(DbWorkFlow db)
    {
      _db = db;
    }

    [HttpGet("{categoriaId}")]
    public object ObterSubCategorias([FromRoute] int categoriaId)
    {
      try
      {
        var subCategorias = _db.Sub_categoria
                               .Where(x => x.CategoriaId == categoriaId)
                               .ToList();

        return Ok(new { subCategorias });

      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

  }
}
