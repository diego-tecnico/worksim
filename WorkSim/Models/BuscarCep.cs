using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using WorkSim.Models.Interface;

namespace WorkSim.Models
{
  public class BuscarCep : IBuscarCep
  {

    public static int CEP_SEM_PONTUACAO = 7;

    public async Task<Endereco_CEP> BuscaPorCep(string cep)
    {
      string path = $"https://viacep.com.br/ws/{cep}/json/";

      var client = new HttpClient();
      var json = await client.GetStringAsync(path);
      var endereco = JsonConvert.DeserializeObject<Endereco_CEP>(json);
      return endereco;

    }
  }
}
