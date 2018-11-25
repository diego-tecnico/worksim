import { IBuscarPorCep } from './../models/IBuscarPorCep';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpAppClient } from './../shared/http-app-client.service';
import 'rxjs/add/operator/map';
import { IStatus } from '../models/IStatus';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DashboardService {


    constructor(private http: HttpAppClient) {
    }

    //public obterPautaSemanal(filtros: IFiltrosDaPautaLegislativa): Observable<IPautaLegislativa> {
    //    return this.http.post('api/PautaLegislativa', filtros)
    //        .map((x) => {
    //            return x as IPautaLegislativa;
    //        });
    //}

    public buscarDiscurso(id: number): Observable<any> {
        this.http.autorizationHeader = true;

        return this.http.get(`api/discursos/${id}`)
            .map((x) => {
                return x;
            });
    }

    public obterPalavrasChaves(): Observable<any> {
        this.http.autorizationHeader = true;

        return this.http.get('api/palavrasChaves/')
            .map((x) => {
                return x;
            });
    }
    public buscarDiscursoPalavraChave(id: number, palavraChave: string): Observable<any> {
      this.http.autorizationHeader = true;

      return this.http.get(`api/discursos/${id}/${palavraChave}`)
        .map((x) => {
          return x;
        });
    }

    public obterFiltrosParaPesquisarDiscursos(): Observable<any> {
        this.http.autorizationHeader = true;

        return this.http
            .get('api/discursos/obterFiltrosPesquisa')
            .map((x) => {
                return x;
            });
    }
}
