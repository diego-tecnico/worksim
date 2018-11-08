using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkSim.Models.Interface
{
  interface IBuscarCep
  {
    Task<Endereco_CEP> BuscaPorCep(string cep);
  }
}
