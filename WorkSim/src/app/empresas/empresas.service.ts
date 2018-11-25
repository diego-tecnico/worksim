import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpAppClient } from './../shared/http-app-client.service';

import 'rxjs/add/operator/map';
import { promise } from 'selenium-webdriver';
import { IGrupo } from '../models/IGrupo';

@Injectable()
export class EmpresasService {

  constructor(private http: HttpAppClient) { }

  public obterEmpresas(): Observable<any> {
    this.http.autorizationHeader = true;

    return this.http
      .get('api/empresa')
      .map((x) => {
        return x;
      });
  }
}
