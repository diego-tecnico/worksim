using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkSim.Models;
using WorkSim.Models.Banco;

namespace WorkSim.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class UsuarioController : Controller
    {
        private readonly DbWorkFlow _db;

        public UsuarioController(DbWorkFlow db)
        {
            _db = db;
        }

        [Authorize]
        [HttpGet("Me")]
        public object Get()
        {
            var dadosDoUsuario = this.ObterDadosDoUsuarioCorrente(_db);

            return dadosDoUsuario;
        }


        [HttpPost("listar")]
        public object Listar([FromBody] Usuario filtrosUsuario)
        {
            try
            {

                var usuarios = _db.Usuario
                                  .Include(x => x.Setor)
                                  .Select(x => new Usuario
                                  {
                                      Id = x.Id,
                                      Nome = x.Nome,
                                      Login = x.Login,
                                      Perfil = x.Perfil,
                                      NomeSetor = x.Setor.No_setor,
                                      Setor = x.Setor,
                                      SetorId = x.SetorId,
                                      St_registro_ativo = x.St_registro_ativo
                                  })
                                  .SomenteDoFiltro(filtrosUsuario)
                                  .OrderByDescending(x => x.St_registro_ativo)
                                  .ToList();

                return Ok(new { usuarios });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{Id}")]
        public object Obter([FromRoute] int Id)
        {
            try
            {  

                var usuario = _db.Usuario
                                  .Include(x => x.Setor)
                                  .Select(x => new Usuario
                                  {
                                      Id = x.Id,
                                      Nome = x.Nome,
                                      Login = x.Login,
                                      Perfil = x.Perfil,
                                      NomeSetor = x.Setor.No_setor,
                                      Setor = x.Setor,
                                      SetorId = x.SetorId,
                                      St_registro_ativo = x.St_registro_ativo
                                  })
                                  .FirstOrDefault(x => x.Id == Id);

                return Ok(new { usuario });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public object Novo([FromBody] Usuario usuario)
        {
            try
            {

                #region RN
                if (string.IsNullOrEmpty(usuario.Login))
                    return BadRequest("Campo Login e obrigatorio");

                if (string.IsNullOrEmpty(usuario.Nome))
                    return BadRequest("Campo Nome e obrigatorio");

                if (string.IsNullOrEmpty(usuario.Perfil))
                    return BadRequest("Campo Perfil e obrigatorio");

                if (string.IsNullOrEmpty(usuario.Senha))
                    return BadRequest("Campo Senha e obrigatorio");


                if (usuario.SetorId == 0)
                    return BadRequest("Campo Setor e obrigatorio");
                #endregion

                var verificarLogin = _db.Usuario.Any(x => x.Login == usuario.Login);
                if (verificarLogin)
                    return BadRequest("Login não disponivel");

                usuario.St_registro_ativo = true;
                usuario.Senha = BCrypt.Net.BCrypt.HashPassword(usuario.Senha);

                _db.Usuario.Add(usuario);
                _db.SaveChanges();

                string OkMessage = $"Usuario {usuario.Nome} cadastrado com sucesso !";

                return Ok(new { message = OkMessage });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("{Id}/editar")]
        public object Editar([FromRoute]int Id, [FromBody] Usuario usuario)
        {
            try
            {

                #region RN
                if (string.IsNullOrEmpty(usuario.Login))
                    return BadRequest("Campo Login e obrigatorio");

                if (string.IsNullOrEmpty(usuario.Nome))
                    return BadRequest("Campo Nome e obrigatorio");

                if (string.IsNullOrEmpty(usuario.Perfil))
                    return BadRequest("Campo Perfil e obrigatorio");

                if (usuario.SetorId == 0)
                    return BadRequest("Campo Setor e obrigatorio");
                #endregion

                var dadosDoUsuario = _db.Usuario.FirstOrDefault(x => x.Id == Id);
                if (dadosDoUsuario == null)
                    return BadRequest("Usuario não encontrado");

                var verificarLogin = _db.Usuario.Any(x => x.Login == usuario.Login && dadosDoUsuario.Login != usuario.Login);
                if (verificarLogin)
                    return BadRequest("Login não disponivel !");

                dadosDoUsuario.Nome = usuario.Nome;
                dadosDoUsuario.Login = usuario.Login;
                dadosDoUsuario.SetorId = usuario.SetorId;
                dadosDoUsuario.Perfil = usuario.Perfil;
                dadosDoUsuario.Senha = usuario.Senha;
                dadosDoUsuario.St_registro_ativo = usuario.St_registro_ativo;


                _db.Usuario.Update(dadosDoUsuario);
                _db.SaveChanges();

                string OkMessage = $"Usuario {usuario.Nome} alterado com sucesso !";

                return Ok(new { message = OkMessage });
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
