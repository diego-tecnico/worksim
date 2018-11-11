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
  public static class ChamadoExtentions
  {
    public static IQueryable<Chamado> SomenteDoFiltros(this IQueryable<Chamado> queryble, DbWorkFlow db, FiltrosChamado filtros)
    {
      if (filtros == null)
        return queryble;

      if (!string.IsNullOrEmpty(filtros.Nu_protocolo))
        queryble = queryble.Where(x => x.Protocolo.Nu_protocolo == filtros.Nu_protocolo);

      if (!string.IsNullOrEmpty(filtros.St_chamado))
      {
        var chamadosId = ChamadosId(db, filtros);
        queryble = queryble.Where(x => chamadosId.Contains(x.Id));
      }

      if (!string.IsNullOrEmpty(filtros.CpfOuCnpj))
        queryble = queryble.Where(x => x.Beneficiario.Co_cpf_cnpj == filtros.CpfOuCnpj);

      if (filtros.EstaNoSla != null)
        queryble = queryble.Where(x => x.EstaNoSla == filtros.EstaNoSla.GetValueOrDefault());

      if (filtros.Dt_inicio != DateTime.MinValue && filtros.Dt_inicio != DateTime.MinValue)
        queryble = queryble.Where(x => x.Dt_criacao >= filtros.Dt_inicio && x.Dt_criacao <= filtros.Dt_fim);

      if (!string.IsNullOrEmpty(filtros.No_categoria))
        queryble = queryble.Where(x => x.Sub_categoria.Categoria_setor.No_categoria_setor == filtros.No_categoria);

      if (!string.IsNullOrEmpty(filtros.Tp_chamado))
        queryble = queryble.Where(x => x.Tp_chamado == filtros.Tp_chamado);

      if (!string.IsNullOrEmpty(filtros.Autor))
        queryble = queryble.Where(x => x.Beneficiario.No_beneficiario.Equals(filtros.Autor, StringComparison.InvariantCultureIgnoreCase));

      if (filtros.SetorOrigemId != 0)
      {
        var chamadosId = db.Historico_chamado.Where(x => x.SetorOrigemId == filtros.SetorOrigemId && x.St_chamado == Historico_chamado.TP_ABERTO).Select(x => x.ChamadoId);
        queryble = queryble.Where(x => chamadosId.Contains(x.Id));
      }

      return queryble;
    }

    private static IQueryable<int> ChamadosId(DbWorkFlow db, FiltrosChamado filtros)
    {
      return db.Historico_chamado.Where(x => x.St_chamado == filtros.St_chamado).Select(x => x.ChamadoId);
    }
  }
}
