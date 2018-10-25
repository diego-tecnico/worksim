import { Http } from '@angular/http';
import {Injectable} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpAppClient } from '../../shared/http-app-client.service';
import { IFiltros } from '../../interfaces/IFiltros';
import { IArquivoAnexo } from '../../interfaces/IArquivoAnexo';


@Injectable()
export class DetalhesChamadoService {

  constructor(private http: HttpClient) {
  }

  public obterChamado(id_Chamado: number): Observable<any> {

    return this.http.get(`api/acoesChamados/${id_Chamado}`)
                    .map((x) => {
                        return x;
                    });

  }


  public downloadAnexo(id_Chamado: number, arquivoAnexo: IArquivoAnexo): Observable<any> {
    console.log(id_Chamado);
    return this.http.post(`api/acoesChamados/${id_Chamado}/download`, arquivoAnexo)
      .map((x) => {
        return x;
      });

  }


  

}
