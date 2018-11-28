
export interface IFiltrarChamado {
  cpfOuCnpj?: string;
  dt_inicio?: Date;
  dt_fim?: Date;
  no_setor?: string;
  no_categoria?: string;
  tp_chamado?: string;
  autor?: string;
  st_chamado?: string;
  setorOrigemId?: number;
  estaNoSla?: boolean;
}
