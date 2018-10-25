using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorkSim
{
    public class Chamados
    {
        [Key]
        public int      Id { get; set; }
        public int      Id_Chamado { get; set; }
        public string   Protocolo { get; set; }
        public string   Uniqueid { get; set; }
        public DateTime Data_criacao { get; set; }
        public DateTime? Data_fechamento { get; set; }
        public string   Status { get; set; }
        public string   Grupo { get; set; }
        public string   Assunto { get; set; }
        public string   Usuario_criacao { get; set; }
        public DateTime Data_ultima_atualizacao { get; set; }
        public string   Usuario_ultima_atualizacao { get; set; }
        public string   Id_contato { get; set; }
        public string   Tipo { get; set; }
        public string   Categoria { get; set; }
        public string   Origem { get; set; }
        public string   Atribuido_para { get; set; }
        public string   Contem_anexo { get; set; }
        public DateTime Data_sla { get; set; }
        public string   Texto { get; set; }
        public string   Reabertura { get; set; }
        public string   Nome_beneficiario { get; set; }
        public string   Telefone_beneficiario { get; set; }
        public string   Endereco_beneficiario { get; set; }
        public string   Email_beneficiario { get; set; }
        public string   Codigo_beneficiario { get; set; }
        public string   Cpf_cnpj_beneficiario { get; set; }
        public string   Tipo_pessoa_beneficiario { get; set; }

        [NotMapped]
        public bool EstaNoPrazo { get; set; }

  }
}
