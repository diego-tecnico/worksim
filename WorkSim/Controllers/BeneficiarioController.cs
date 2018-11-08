using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WorkSim.Models.Banco;

namespace WorkSim.Controllers
{
  [Route("api/[controller]")]
  public class BeneficiarioController : Controller
  {
    private readonly DbWorkFlow _db;

    public BeneficiarioController(DbWorkFlow db)
    {
      _db = db;
    }

    [HttpPost]
    public object ObterBeneficiario([FromBody] Filtros filtros)

    {
      try
      {
        var beneficiario = _db.Beneficiario
                              .FirstOrDefault(x => x.Co_cpf_cnpj == filtros.Co_cpf_cnpj ||
                                                   x.Co_carteirinha == filtros.Co_carteirinha);

        if (beneficiario == null)
          return BadRequest("Nenhum Beneficiario encontrado.");


        return Ok(new { beneficiario });
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    public class Filtros
    {
      public string No_beneficiario { get; set; }
      public string CpfCnpj { get; set; }
      public string Co_beneficiario { get; set; }
      public string Co_carteirinha { get; set; }
      public string Co_cpf_cnpj { get; set; }
    }

  }
}
