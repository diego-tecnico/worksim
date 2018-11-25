import { IGS_pessoa_fisica } from "./IGS_pessoa_fisica";
import { IGS_contato } from "./IGS_contato";
import { IGS_endereco } from "./IGS_endereco";
import { IGS_pessoa } from "./IGS_pessoa";
import { IUsuario } from "./IUsuario";

export interface IAluno {
  gs_pessoa_fisica?: IGS_pessoa_fisica;
  gs_endereco?: IGS_endereco;
  gs_contato?: IGS_contato;
  gs_pessoa?: IGS_pessoa;
  gs_usuario?: IUsuario;
}
