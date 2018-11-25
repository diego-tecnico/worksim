export interface IComOrdenacao {
  ordernarPor?: ICampoDeOrdenacao[];
}

export interface ICampoDeOrdenacao {
  nomeDoCampo?: string;
  nomeDaPropriedade?: string;
  descricao?: string;
  direcaoDaOrdenacao?: string;
}

export const OrdenacaoAcendente = 'asc';
export const OrdenacaoDescendente = 'desc';
