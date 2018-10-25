import { Http } from '@angular/http';
import {Injectable} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpAppClient } from '../../shared/http-app-client.service';
import { IFiltros } from '../../interfaces/IFiltros';

@Injectable()
export class PesquisarChamadosService {

  constructor(private http: HttpClient) {
  }

  public obterChamados(filtros: IFiltros): Observable<any> {

    return this.http.post('api/chamados/listar', filtros)
                    .map((x) => {
                        return x;
                    });

  }

  //public obterChamado(): Observable<any> {

  //  return this.http.get('api/chamados/285631')
  //                  .map((x) => {
  //                      return x;
  //                  });

  //}

  public obterFiltros(): Observable<any> {

    return this.http.get('api/chamados/filtros')
      .map((x) => {
        return x;
      });

  }

}
