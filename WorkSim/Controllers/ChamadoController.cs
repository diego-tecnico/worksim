using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkSim.Models;
using WorkSim.Models.Banco;

namespace WorkSim.Controllers
{
  [Route("api/[controller]")]
  public class ChamadoController : Controller
  {
    private readonly DbWorkFlow _db;

    public ChamadoController(DbWorkFlow db)
    {
      _db = db;
    }

    [HttpPost]
    public object ObterChamados([FromBody] Filtros filtros)
    {
      try
      {
        var chamados = _db.Chamado
                          .Include(x => x.Sub_categoria)
                          .Select(x => new Chamado
                          {
                            Id = x.Id,
                            ProtocoloId = x.ProtocoloId,
                            BeneficiarioId = x.BeneficiarioId,
                            SubCategoriaId = x.SubCategoriaId,
                            Tp_chamado = x.Tp_chamado,
                            Ds_assunto = x.Ds_assunto,
                            St_registro_ativo = x.St_registro_ativo,
                            Prazo = ObterPrazoDoChamado(x.Tp_chamado, x.Sub_categoria.SLA)
                          })
                         .ToList();

        return Ok(new { chamados });

      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    private static DateTime ObterPrazoDoChamado(string Tp_chamado, int SLA)
    {
      switch (Tp_chamado)
      {
        case Chamado.NORMAL:
          return CalcularSLASubCategoria(SLA);

        case Chamado.AMEACA_ANS:
          return DateTime.Now;

        case Chamado.AMEACA_PROCESSO:
          return DateTime.Now;

        default:
          return DateTime.Now;
      }

    }

    private static DateTime CalcularSLASubCategoria(int SLA)
    {
      return DateTime.Now;
    }

    public class Filtros
    {
      public string Nu_protocolo { get; set; }
    }

  }
}
