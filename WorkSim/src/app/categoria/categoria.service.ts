import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Injectable ,ErrorHandler} from '@angular/core';
import { Response } from '@angular/http';
import { HttpAppClient } from './../shared/http-app-client.service';
import {HttpClient} from '@angular/common/http'
import 'rxjs/add/operator/map';
import { promise } from 'selenium-webdriver';


@Injectable()
export class CategoriaService {

    constructor(private http: HttpAppClient) { }

    public obterCategorias(): Observable<any> {
      this.http.autorizationHeader = true;

        return this.http.get('api/categoria')
            .map((x) => {
              return x;
            });
    }
}
