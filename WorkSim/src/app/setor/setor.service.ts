import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Injectable ,ErrorHandler} from '@angular/core';
import { Response } from '@angular/http';
import { HttpAppClient } from './../shared/http-app-client.service';
import {HttpClient} from '@angular/common/http'
import 'rxjs/add/operator/map';
import { promise } from 'selenium-webdriver';


@Injectable()
export class SetorService {

    constructor(private http: HttpAppClient) { }

    public obterSetores(): Observable<any> {
      this.http.autorizationHeader = true;

        return this.http.get('api/setor')
            .map((x) => {
              return x;
            });
    }
}
