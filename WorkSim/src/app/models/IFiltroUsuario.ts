export interface ISetor {
  id?: number;
  no_setor?: string;
  dt_cadastro?: Date;
  dt_atualizacao?: number;
  st_registro_ativo?: number;
}


export interface IUsuarios {
  id?: number; 
  nome?: string; 
  login?: string;
  senha?: string;
  perfil?: string; 
  setorId?: number;
  st_registro_ativo?: boolean; 
}
