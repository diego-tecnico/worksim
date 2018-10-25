import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { IUsuario } from './interfaces/iUsuario';

@Injectable({
  providedIn: 'root'
})
export class OAuthLoginService {

  constructor(private _http: Http) { }

  ObterToken(user: IUsuario) {
      const url = 'https://login-api.sajadv.com.br/adv-bouncer-authorization-server/oauth/token';
      const header = new Headers();
      header.append('Content-type', 'application/x-www-form-urlencoded');
      header.append(
      'Authorization',
      'Basic YXBpX2NsaWVudGVfY29kaWdvXzE2MTE4OkAyMDE4QDM1ZjNmZWI0M2U2ZjRmY2ZiNmNkNGY0Y2Q5NTQ5OTlj');
      const urlEncoded = `grant_type=password&username=${user.email}%24%24dassad-dasdsafdsf&password=${user.senha}`;
      return this._http
      .post(url, urlEncoded, {headers: header})
      .map(result => result.json());
      }
}
