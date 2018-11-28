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
    public class CategoriaController : Controller
    {
        private readonly DbWorkFlow _db;

        public CategoriaController(DbWorkFlow db)
        {
            _db = db;
        }

        [HttpGet]
        public object ObterCategorias()
        {
            try
            {
                var categorias = _db.Categoria_setor
                                 .ToList();

                return Ok(new { categorias });

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{setorId}")]
        public object ObterCategoria([FromRoute] int setorId)
        {
            try
            {
                var categorias = _db.Categoria_setor
                                 .Where(x => x.SetorId == setorId)
                                 .ToList();

                return Ok(new { categorias });

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
