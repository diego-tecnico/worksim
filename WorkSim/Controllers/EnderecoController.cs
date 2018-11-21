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
  public class EnderecoController : Controller
  {
    private readonly DbWorkFlow _db;

    public EnderecoController(DbWorkFlow db)
    {
      _db = db;
    }

    [HttpGet("cep/{numero_cep}")]
    public async Task<Endereco_CEP> EnderecoPorCep([FromRoute] string numero_cep)
    {
      try
      {
        var c = new BuscarCep();
        var endereco = await c.BuscaPorCep(numero_cep);
        return endereco;
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }
    }

  }
}
