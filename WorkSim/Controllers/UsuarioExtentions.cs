using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkSim.Models;
using WorkSim.Models.Banco;

namespace WorkSim.Controllers
{
    public static class UsuarioExtentions
    {
        public static Usuario ObterDadosDoUsuarioCorrente(this Controller controller, DbWorkFlow db)
        {
            var loginDoUsuario = controller.User.Identity.Name;

            var usuario = db.Usuario
                .FirstOrDefault(x => x.Login == loginDoUsuario);

            if (usuario == null)
            {
                throw new Exception("Usuário não encontrado. Entre em contato com o seu gestor");
            }

            return usuario;
        }


        public static IQueryable<Usuario> SomenteDoFiltro(this IQueryable<Usuario> query, Usuario filtrosDoUsuario)
        {
            if (filtrosDoUsuario == null)
                return query;

            if (filtrosDoUsuario.SetorId != 0)
                query = query.Where(x => x.SetorId == filtrosDoUsuario.SetorId);

            if (!string.IsNullOrEmpty(filtrosDoUsuario.Perfil))
                query = query.Where(x => x.Perfil.Equals(filtrosDoUsuario.Perfil, StringComparison.CurrentCultureIgnoreCase));

            if (!string.IsNullOrEmpty(filtrosDoUsuario.Login))
                query = query.Where(x => x.Login.Equals(filtrosDoUsuario.Login, StringComparison.CurrentCultureIgnoreCase));

            if (!string.IsNullOrEmpty(filtrosDoUsuario.Nome))
                query = ObterUsuarioPorNome(query, filtrosDoUsuario);


            return query;

        }

        private static IQueryable<Usuario> ObterUsuarioPorNome(IQueryable<Usuario> query, Usuario filtrosDoUsuario)
        {
            filtrosDoUsuario.Nome = $"%{filtrosDoUsuario.Nome}%";
            query = query.Where(x => EF.Functions.Like(x.Nome, filtrosDoUsuario.Nome));
            return query;
        }
    }
}
