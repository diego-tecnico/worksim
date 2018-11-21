using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using WorkSim.Models;
using WorkSim.Models.Authenticacao;

namespace WorkSim.Controllers
{
  public static class ControllerExtentions
  {
    public static ResultadoDaAutenticacao ObterToken(this Controller controller, Usuario usuarioDoBanco, TokenConfigurations _tokenConfigurations)
    {
      var dataCriacao = DateTime.Now;
      var dataExpiracao = dataCriacao.AddMinutes(_tokenConfigurations.TokenLifetimeInMinutes);

      var identity = new ClaimsIdentity(
          new GenericIdentity(usuarioDoBanco.Login, "Login"),
          new[]
          {
                    new Claim(JwtRegisteredClaimNames.Jti,                   Guid.NewGuid().ToString("N")),
                    new Claim(JwtRegisteredClaimNames.Iss,                   _tokenConfigurations.Issuer),
                    new Claim(JwtRegisteredClaimNames.Aud,                   _tokenConfigurations.Audience),
                    new Claim(JwtRegisteredClaimNames.Exp,                   dataExpiracao.Ticks.ToString()),
                    new Claim("name",                                        $"{usuarioDoBanco.Nome}"),
                    new Claim(JwtRegisteredClaimNames.GivenName,             usuarioDoBanco.Nome)
          }
      );

      var handler = new JwtSecurityTokenHandler();
      var siginCredentials =
          new SigningCredentials(
              new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_tokenConfigurations.SymmetricSecurityKey)),
              SecurityAlgorithms.HmacSha256);

      var securityToken = handler.CreateToken(new SecurityTokenDescriptor
      {
        Issuer = string.Empty,
        Audience = string.Empty,
        SigningCredentials = siginCredentials,
        Subject = identity,
        NotBefore = dataCriacao,
        Expires = dataExpiracao
      });

      var token = handler.WriteToken(securityToken);

      return new ResultadoDaAutenticacao
      {
        Authenticated = true,
        Created = dataCriacao,
        Expiration = dataExpiracao,
        AccessToken = token,
        Message = "OK"
      };
    }
  }
}
