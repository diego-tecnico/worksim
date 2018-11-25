import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpAppClient } from './../shared/http-app-client.service';

import 'rxjs/add/operator/map';
import { promise } from 'selenium-webdriver';
import { IGrupo } from '../models/IGrupo';

@Injectable()
export class GruposService {

  constructor(private http: HttpAppClient) { }

  public obterGrupos(): Observable<any> {
    this.http.autorizationHeader = true;

    return this.http
      .get('api/grupo')
      .map((x) => {
        return x;
      });
  }

  public obterGruposFiltrados(): Observable<any> {
    this.http.autorizationHeader = true;

    return this.http
      .get('api/grupo/grupos-filtrados')
      .map((x) => {
        return x;
      });
  }

  
}
