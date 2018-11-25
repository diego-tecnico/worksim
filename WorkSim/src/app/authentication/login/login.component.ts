import { Component, OnInit }              from '@angular/core';
import { Router, ActivatedRoute }         from '@angular/router';
import { style }                          from '@angular/animations';
import { ToastrService }                  from 'ngx-toastr';
import { UsuariosService }                from './../../usuarios/usuarios.service';
import { ServicoSemanalService }   from '../../dashboard/servico-semanal.service';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'pdg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [ServicoSemanalService]
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  returnUrlEsqueciSenha: string;
  returnNovoUsuario: string;
  userName: string;
  password: string;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private ativateRoute: ActivatedRoute,
    private s: ToastrService,
  ) {
  }

  ngOnInit() {
    this.ativateRoute.paramMap.subscribe((x) => {
      this.usuariosService.signOut();
      this.returnUrl = x.get('returnUrl') || '/';
      this.returnUrlEsqueciSenha = x.get('returnUrlEsqueciSenha') || '/authentication/esqueci-senha';
      this.returnNovoUsuario = x.get('returnNovoUsuario') || '/authentication/novo-usuario'; 
    });
  }

  loginWithGoogle() {
    this.usuariosService.signInWithPopupGoogle()
      .then((usuario) => {
        this.router.navigateByUrl(this.returnUrl);
      });
  }

  loginWithFacebook() {
    // this.usuariosService.signInWithPopupFacebook()
    //  .then((usuario) => {
    //    this.router.navigateByUrl(this.returnUrl);
    //  });
  }

  loginPasswordAndName() {
    this.usuariosService.signInUserAndPassord(this.userName, this.password)
      .subscribe((xusuario) => {
        this.router.navigateByUrl(this.returnUrl);
      });
  }

  esqueciSenha() {
    this.router.navigateByUrl(this.returnUrlEsqueciSenha);
  }

  novoUsuario() {
    this.router.navigateByUrl(this.returnNovoUsuario);
  }

}
