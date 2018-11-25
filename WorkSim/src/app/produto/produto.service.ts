import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpAppClient} from './../shared/http-app-client.service';

import 'rxjs/add/operator/map';
import { IProduto } from '../models/IProduto';

@Injectable()
export class ProdutoService {

  constructor(private http: HttpAppClient) { }

  public novoProduto(produto): Observable<any> {
    this.http.autorizationHeader = true;

    return this.http.post(`api/produto`, produto)
      .map((response) => {
        return response;
      });

  }

  public getProdutos(): Observable<any> {
    this.http.autorizationHeader = true;

    return this.http.get(`api/produto`)
      .map((response) => {
        return response;
      });
  }


  public getCategorias(): Observable<any> {
    this.http.autorizationHeader = true;

    return this.http.get(`api/categoria`)
      .map((response) => {
        return response;
      });
  }
}
