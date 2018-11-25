import { IGS_pessoa_juridica } from "./IGS_pessoa_juridica";
import { IGS_usuario_grupo } from "./IGS_usuario_grupo";
import { IGS_endereco } from "./IGS_endereco";
import { IGS_filial } from "./IGS_filial";
import { IGS_contato } from "./IGS_contato";

export interface IFinalizarCadastro {
  gs_pessoa_juridica?: IGS_pessoa_juridica;
  gs_usuario_grupo?: IGS_usuario_grupo;
  gs_endereco?: IGS_endereco;
  gs_filial?: IGS_filial;
  gs_contato?: IGS_contato;
}
