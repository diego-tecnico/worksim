import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpAppClient } from './../shared/http-app-client.service';

import { IUsuario } from './../models/IUsuario';

import 'rxjs/add/operator/map';
import { promise } from 'selenium-webdriver';

@Injectable()
export class AlunosService {
  
  constructor(private http: HttpAppClient) { }


  public novoAluno(aluno): Observable<any> {
    this.http.autorizationHeader = true;

    return this.http.post(`api/aluno`, aluno)
      .map((response) => {
        return response;
      });
  }
  public editarAluno(cd_pessoa,aluno): Observable<any> {
    this.http.autorizationHeader = true;

    return this.http.put(`api/aluno/${cd_pessoa}`, aluno)
      .map((response) => {
        return response;
      });
  }
}
