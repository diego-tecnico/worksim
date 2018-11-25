import { style } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from './../../../usuarios/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-with-social',
    templateUrl: './with-social.component.html',
    styleUrls: ['./with-social.component.css']
})
export class WithSocialComponent implements OnInit {

    returnUrl: string;
    userName: string;
    password: string;

    constructor(
        private usuariosService: UsuariosService,
        private router: Router,
        private ativateRoute: ActivatedRoute) { }

    ngOnInit() {
        this.ativateRoute.paramMap.subscribe((x) => {
            this.usuariosService.signOut();
            this.returnUrl = x.get("returnUrl") || "/";
            console.log("Retornar do url ", this.returnUrl);
        });
    }

    loginWithGoogle() {
        this.usuariosService.signInWithPopupGoogle()
            .then((usuario) => {
                this.router.navigateByUrl(this.returnUrl);
            });
    }

    loginWithFacebook() {
        //this.usuariosService.signInWithPopupFacebook()
        //  .then((usuario) => {
        //    this.router.navigateByUrl(this.returnUrl);
        //  });
    }

    loginPasswordAndName() {
        this.usuariosService.signInUserAndPassord(this.userName, this.password)
            .subscribe((usuario) => {
                this.router.navigateByUrl(this.returnUrl);
            },
        );
    }

}
