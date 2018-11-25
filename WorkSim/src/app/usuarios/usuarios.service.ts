import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Injectable ,ErrorHandler} from '@angular/core';
import { Response } from '@angular/http';
import { HttpAppClient } from './../shared/http-app-client.service';
import {HttpClient} from '@angular/common/http'
import { IUsuario } from './../models/IUsuario';

import 'rxjs/add/operator/map';
import { promise } from 'selenium-webdriver';
import { IFinalizarCadastro } from '../models/IFinalizarCadastro';
import { IPessoa } from '../models/IPessoa';
import { IAluno } from '../models/IAluno';

export const Roles = {
    Free: 'free',
    Pro: 'pro',
    Company: 'company',
    Admin: 'admin'
};

@Injectable()
export class UsuariosService {
    departamentos: any;
    public isPro = false;
    public isFree = false;
    public isAdmin = false;
    public isCompany = false;
    private accessToken: string = null;
    private accessTokenObs = new Subject<string>();
    constructor(private http: HttpAppClient) {

        this.accessTokenObs.subscribe(token => {
            this.accessToken = token;

            if (!token) {
                return;
            }

            this.http.autorizationHeader = true;
            this.http.get('api/usuario/me').subscribe((x) => {
                const user = x as IUsuario;
                this.currentUser = user;
            });
        });

        const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {
            token: null
        };

        this.accessToken = currentUser.token;
        this.accessTokenObs.next(this.accessToken);

    }

    usuarios: any = [];

    get EhAdmin(): boolean {
        //return this.currentUser.ehAdm;
        return true;
    }

    get isLogged(): boolean {
        return this.accessToken !== null;
    }

    public getMeuUsuario(): Observable<any> {
        this.http.autorizationHeader = true;
        return this.http.get('api/usuario/me')
            .map((x) => {
                return this.currentUser = x as IUsuario;

            });
    }

    public obterPessoa(): Observable<any> {
        this.http.autorizationHeader = true;
        return this.http.get('api/pessoa')
            .map((x) => {
                return this.currentUser = x as IPessoa;

            });
    }

    public finalizarCadastro(finalizarCadastro: IFinalizarCadastro): Observable<any> {
        this.http.autorizationHeader = true;

        return this.http.post(`api/usuario/finalizar-cadastro`, finalizarCadastro)
            .map((response) => {
                return response;
            });

    }

    public novoAluno(aluno): Observable<any> {
      this.http.autorizationHeader = true;
       
        return this.http.post(`api/usuario/novo-aluno`, aluno)
            .map((response) => {
                return response;
            });
    }

    public novoProfissional(aluno): Observable<any> {
        this.http.autorizationHeader = true;

        return this.http.post(`api/usuario/novo-profissional`, aluno)
            .map((response) => {
                return response;
            });
    }

    public verificarEmail(email: string): Observable<any> {
        this.http.autorizationHeader = true;

        return this.http.get(`api/usuario/verificar-email/${email}`)
            .map((response) => {
                return response;
            });
    }

    public verificarEmailNovoCadastro(email: string): Observable<any> {
        this.http.autorizationHeader = true;

        return this.http.get(`api/usuario/verificar-email/${email}/novo`)
            .map((response) => {
                return response;
            });
    }


    public verificarCnpj(cnpj: string): Observable<any> {
        this.http.autorizationHeader = true;

        return this.http.get(`api/usuario/verificar-cnpj/${cnpj}`)
            .map((response) => {
                return response;
            });
    }

    public verificarCpf(cpf: string): Observable<any> {
        this.http.autorizationHeader = true;

        return this.http.get(`api/usuario/verificar-cpf/${cpf}`)
            .map((response) => {
                return response;
            });
    }

    public obterAlunos(): Observable<any> {
        this.http.autorizationHeader = true;

        return this.http.get(`api/usuario/alunos`)
            .map((response) => {
                return response
            });
    }

    obterAluno(Id: number): Observable<any> {
        this.http.autorizationHeader = true;

        return this.http.get(`api/usuario/${Id}/aluno`)
            .map((response) => {
                return response
            });
    }

    public obterProfissionais(): Observable<any> {
        this.http.autorizationHeader = true;

        return this.http.get(`api/usuario/profissionais`)
            .map((response) => {
                return response
            });
    }
    

    // tslint:disable-next-line:member-ordering
    private _currentUser: IUsuario | any;
    get currentUser(): IUsuario {
        return (
            this._currentUser || {
                nome: 'Anônimo',
                email: '',
            }
        );
    }
    set currentUser(v: IUsuario) {
        this._currentUser = v;
    }

    public signInWithPopupGoogle(): Promise<any> {
        return new Promise(() => { });
    }

    trazerDadosUsuario(idUsuario: number): Observable<any> {
        return this.http
            .get(`api/usuario/${idUsuario}`)
            .map((response) => response as any);
    }

    public editarPerfil(): Observable<any> {
        this.http.autorizationHeader = true;
        return this.http
            .post('api/usuario/alterar-usuario-filial',{id:this.usuarios})
            .map((response:Response) => {
                return response;
            });
    }

    public editarSenha(idUser: string, senhaAtual: string, senhaNova: string, dicaSenha: string): Observable<any> {
        this.http.autorizationHeader = true;

        return this.http
            .post('api/usuario/alterar-senha', { idUser: idUser, senhaAtual: senhaAtual, senhaNova: senhaNova, dicaSenha: dicaSenha })
            .map((response) => {
                console.log(response);
                return response;
            });
    }

    public bloquearUsuario(usuario: any): Observable<any> {
        this.http.autorizationHeader = true;

        return this.http
            .post('api/usuario/bloquear', usuario)
            .map((response) => {
                return response;
            });
    }
    public recuperarSenha(email: string): Observable<any> {
        this.http.autorizationHeader = false;

        return this.http
            .post('api/usuario/rec-senha', { email: email })
            .map((response) => {
                console.log(response);
                return response;
            });
    }

    public signInUserAndPassord(userName: string, password: string): Observable<any> {

        this.http.autorizationHeader = false;

        return this.http
            .post('api/login', { userName: userName, Password: password })
            .map((response) => this.atribuirNovoRetornoDoToken(response));
    }

    public refreshToken(): Observable<any> {

        this.http.autorizationHeader = true;

        return this.http
            .get('api/login/refresh')
            .map((response) => this.atribuirNovoRetornoDoToken(response));
    }

    atribuirNovoRetornoDoToken(response) {

        const token = response && response.accessToken;

        if (token) {
            const userName = response && response.userName;
            this.accessToken = token;
            localStorage.setItem(
                'currentUser',
                JSON.stringify({ userName: userName, token: token })
            );

            this.accessTokenObs.next(token);

            return true;
        } else {
            return false;
        }
    }

    public signOut(): Promise<any> {
        return new Promise(resolve => {
            localStorage.removeItem('currentUser');
            this.accessTokenObs.next(null);
            resolve();
        });
    }

    public inserirUsuario(dadosDoUsuario: any): Observable<any> {
        this.http.autorizationHeader = true;

        return this.http.post(`api/usuario/`, dadosDoUsuario)
            .map((x) => {
                return x;
            });
    }
}
