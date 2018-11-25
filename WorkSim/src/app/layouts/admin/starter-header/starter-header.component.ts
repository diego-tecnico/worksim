import { PainelComponent } from './../../../dashboard/painel/painel.component';
import { DashboardService } from './../../../dashboard/dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { providers } from 'ng2-toasty';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../../../usuarios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starter-header',
  templateUrl: './starter-header.component.html',
  styleUrls: ['./starter-header.component.sass'],
  providers: [  ]
})
export class StarterHeaderComponent implements OnInit {
  constructor(public usuarioService: UsuariosService,
              private router: Router,
              private toastrService: ToastrService) {
  }

  exibirPerfis = false;
  naoTemPerfilVinculada = false;
  perfilCarregado = false;

  ngOnInit() {
    this.iniciarAtualizacaoDeRefresh();
    this.getUsuarioAtual();
    //this.obterPerfilDoUsuarioCorrente();
  }

  getUsuarioAtual() {
    this.usuarioService.getMeuUsuario();
  }

  iniciarAtualizacaoDeRefresh() {

    const quinzeMinutosEmSegundos = 1000 * 60 * 15;
    setTimeout(x => {
      console.log('[REFRESH TOKEN] - Inicio');

      if (this.usuarioService.isLogged) {
        console.log('[REFRESH TOKEN] - Usuário Logado');
        this.usuarioService.refreshToken();
      } else {
        console.log('[REFRESH TOKEN] - Usuário Logado');
      }

      this.iniciarAtualizacaoDeRefresh();

    }, quinzeMinutosEmSegundos);

  }

  logout() {
    this.usuarioService.signOut()
      .then(() => this.router.navigate(['/', 'authentication', 'login']));
  }

}
