using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkSim.Models;
using WorkSim.Models.Authenticacao;
using WorkSim.Models.Banco;

namespace WorkSim.Controllers
{
  [Route("api/[controller]")]
  public class LoginController : Controller
  {
    private readonly DbWorkFlow _db;
    private readonly TokenConfigurations _tokenConfigurations;

    public LoginController(DbWorkFlow db, TokenConfigurations tokenConfigurations)
    {
      _db = db;
      _tokenConfigurations = tokenConfigurations;
    }

    [AllowAnonymous]
    [HttpPost]
    public object Post([FromBody] UsuarioESenha usuario)
    {
      var usuarioNaoConfere = new ResultadoDaAutenticacao
      {
        Message = "Usuário e/ou Senha não conferem, tente novamente!"
      };

      var usuarioOuSenhaNaoInformado = string.IsNullOrWhiteSpace(usuario?.UserName) ||
                                       string.IsNullOrWhiteSpace(usuario.Password);

      if (usuarioOuSenhaNaoInformado)
      {
        return BadRequest(usuarioNaoConfere.Message);
      }

      var usuarioDoBanco = _db.Usuario
          .FirstOrDefault(x => x.Login == usuario.UserName);

      if (!BCrypt.Net.BCrypt.Verify(usuario.Password, usuarioDoBanco.Senha))
      {
        return BadRequest(usuarioNaoConfere.Message);
      }

      if (!usuarioDoBanco.St_registro_ativo)
      {
        usuarioNaoConfere.Message = "Usuario bloqueado. Contate o seu gestor para mais informações!";

        return BadRequest(usuarioNaoConfere.Message);
      }

      return this.ObterToken(usuarioDoBanco, _tokenConfigurations);
    }

    [HttpGet]
    public object TESTE()
    {
      return Ok(new { msg = "funfou" });
    }

  }

  public class UsuarioESenha
  {
    public string UserName { get; set; }
    public string Password { get; set; }
  }

  public class ResultadoDaAutenticacao
  {
    public bool Authenticated { get; set; }
    public DateTime Created { get; set; }
    public DateTime Expiration { get; set; }
    public string AccessToken { get; set; }
    public string Message { get; set; }
  }
}
