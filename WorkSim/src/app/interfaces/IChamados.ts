
export interface IChamados {
  id?: number
  id_Chamado?: number
  protocolo?: string;
  uniqueid?: string;
  data_criacao?: Date;
  data_fechamento?: Date;
  status?: string;
  grupo?: string;
  assunto?: string;
  usuario_criacao?: string;
  data_ultima_atualizacao?: Date;
  usuario_ultima_atualizacao?: string;
  id_contato?: string;
  tipo?: string;
  categoria?: string;
  origem?: string;
  atribuido_para?: string;
  contem_anexo?: string;
  Data_sla?: Date;
  texto?: string;
  reabertura?: string;
  nome_beneficiario?: string;
  telefone_beneficiario?: string;
  endereco_beneficiario?: string;
  email_beneficiario?: string;
  codigo_beneficiario?: string;
  cpf_cnpj_beneficiario?: string;
  tipo_pessoa_beneficiario?: string;
  estaNoPrazo?: boolean;
}
