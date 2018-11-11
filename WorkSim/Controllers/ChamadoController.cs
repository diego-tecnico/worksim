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
    public object ObterChamados([FromBody] FiltrosChamado filtros)
    {
      try
      {
        var chamados = _db.Chamado
                          .Include(x => x.Protocolo)
                          .Include(x => x.Beneficiario)
                          .Include(x => x.Sub_categoria)
                            .ThenInclude(x => x.Categoria_setor)
                              .ThenInclude(x => x.Setor)
                          .Select(x => new Chamado
                          {
                            Id = x.Id,
                            ProtocoloId = x.ProtocoloId,
                            BeneficiarioId = x.BeneficiarioId,
                            Sub_CategoriaId = x.Sub_CategoriaId,
                            Tp_chamado = x.Tp_chamado,
                            Ds_assunto = x.Ds_assunto,
                            St_registro_ativo = x.St_registro_ativo,
                            Dt_criacao = x.Dt_criacao,
                            Protocolo = x.Protocolo,
                            Beneficiario = x.Beneficiario,
                            Sub_categoria = x.Sub_categoria,
                            Sla = ObterPrazoDoChamado(x.Dt_criacao, x.Tp_chamado, x.Sub_categoria).SLA,
                            EstaNoSla = ObterPrazoDoChamado(x.Dt_criacao, x.Tp_chamado, x.Sub_categoria).EstaNoSLA,
                          })
                          .SomenteDoFiltros(_db, filtros)
                          .ToList();

        return Ok(new { chamados });

      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }


    private static SLA_ATENDIMENTO ObterPrazoDoChamado(DateTime Dt_criacao, string Tp_chamado, Sub_categoria sub_Categoria)
    {

      var sla_atendimento = new SLA_ATENDIMENTO();

        if (Tp_chamado == Chamado.NORMAL)
          sla_atendimento.SLA = Dt_criacao.AddHours(sub_Categoria.SLA);

      if (Tp_chamado == Chamado.AMEACA_ANS)
          sla_atendimento.SLA = Dt_criacao.AddHours(Chamado.SLA_ANS);

      if (Tp_chamado == Chamado.AMEACA_PROCESSO)
          sla_atendimento.SLA = Dt_criacao.AddHours(Chamado.SLA_PROCESSO);


      if (sla_atendimento.SLA > Dt_criacao)
        sla_atendimento.EstaNoSLA = true;
      return sla_atendimento;

    }

    private static DateTime CalcularSLASubCategoria(Sub_categoria sub_Categoria)
    {
      return DateTime.Now;
    }

    public class SLA_ATENDIMENTO
    {
      public DateTime SLA { get; set; }
      public bool EstaNoSLA { get; set; } = false;
    }

  }
}
