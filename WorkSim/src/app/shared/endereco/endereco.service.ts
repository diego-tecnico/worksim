import { IBuscarPorCep } from './../../models/IBuscarPorCep';
import { HttpAppClient } from './../http-app-client.service';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IUF } from '../../models/IUF';
import { IBairros } from '../../models/IBairros';
import { IGS_municipio } from '../../models/IGS_municipio';

@Injectable()
export class EnderecoService {

  constructor(private http: HttpAppClient) { }


  public buscarPorCep(cep: string): Observable<IBuscarPorCep> {
    this.http.autorizationHeader = true;

    return this.http.get(`api/endereco/buscarPorCep/${cep}`)
              .map((x) => {
                return x as IBuscarPorCep;
              });
  }

  public obterMunicipios(uf: string): Observable<IGS_municipio[]> {
    this.http.autorizationHeader = true;

    return this.http.get(`api/endereco/${uf}/municipios`)
      .map((response) => {
        return response as IGS_municipio[];
      });
  }

  public obterBairros(ds_municipio: string): Observable<IBairros[]> {
    this.http.autorizationHeader = true;

    return this.http.get(`api/endereco/${ds_municipio}/bairros`)
      .map((response) => {
        return response as IBairros[];
      });
  }

  public obterUfs(): Observable<IUF[]> {
    this.http.autorizationHeader = true;

    return this.http.get(`api/endereco/ufs`)
      .map((response) => {
        return response as IUF[];
      });
  }




}
