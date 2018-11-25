import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpAppClient} from './../shared/http-app-client.service';

import 'rxjs/add/operator/map';
import { CurrencyPipe } from '@angular/common';

@Injectable()
export class PlanosService {

  constructor(private http: HttpAppClient) { }

  public novoPlano(plano): Observable<any> {
    this.http.autorizationHeader = true;

    console.log(plano);
    return this.http.post(`api/plano`, plano)
      .map((response) => {
        console.log(response);
        return response;
      });

  }

}
