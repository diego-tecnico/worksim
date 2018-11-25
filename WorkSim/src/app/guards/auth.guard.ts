import { UsuariosService } from './../usuarios/usuarios.service';

import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    returnUrl: string;
    constructor(
        private usuariosService: UsuariosService,
        private router: Router
    ) { }

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

        console.log('AuthGuard');

        return this.verificarAcesso(state);
    }

    private verificarAcesso(state) {

        if (this.usuariosService.isLogged) {
             return true;
        }


        this.returnUrl = state.url;

        location.href = 'authentication/login?returnUrl=' + this.returnUrl;

        // this.router.navigate(['/', 'authentication', 'login'], { queryParams: { returnUrl: state.url }});

        return false;
    }

    // canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    //   console.log('canLoad: verificando se usuário pode carregar o cod módulo');

    //   return this.verificarAcesso();
    // }

}
