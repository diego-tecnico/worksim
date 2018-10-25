import { IToken } from './IToken';

export interface IUsuario {
    codigo?: string;
    nome?: string;
    email?: string;
    senha?: string;
    user_Token?: IToken;
}
