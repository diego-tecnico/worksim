import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpAppClient } from './../shared/http-app-client.service';

import { IUsuario } from './../models/IUsuario';

import 'rxjs/add/operator/map';
import { promise } from 'selenium-webdriver';

@Injectable()
export class ProfissionalService {
  constructor(private http: HttpAppClient) { }
  public obterProfissional(Id: number): Observable<any> {
    this.http.autorizationHeader = true;

    return this.http.get(`api/profissional/${Id}`)
      .map((response) => {
        return response;
      });
  }

  public editarProfissional(cd_pessoa,profissional): Observable<any> {
    this.http.autorizationHeader = true;

    return this.http.put(`api/profissional/${cd_pessoa}`, profissional)
      .map((response) => {
        return response;
      });
  }

}
