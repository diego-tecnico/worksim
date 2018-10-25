import { Component, OnInit, Injectable } from '@angular/core';
import { OAuthLoginService } from './oauth-login.service';
import { IUsuario } from './interfaces/IUsuario';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OAuthLoginService]
})
export class AppComponent {
  title = 'app';
  Usuario: IUsuario = {
    email: 'asdjasio@dasjiodjasio.com.br',
    senha: 'sajadv123'
  };
  constructor(private _oAuthService: OAuthLoginService) { }
  login() {
    // const user = this.Usuario as IUsuario;
    this._oAuthService.ObterToken(this.Usuario)
    .finally(() => {
    })
    .subscribe(x => this.Usuario.user_Token = x);
  }
}
