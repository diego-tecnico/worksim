import { FixSizeService } from './../../../fix-size.service';
import { MenuItems } from '../../../shared/menu-items/menu-items';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../../../usuarios/usuarios.service';
import { Router } from '@angular/router';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-starter-left-side',
  templateUrl: './starter-left-side.component.html',
  styleUrls: ['./starter-left-side.component.sass']
})
export class StarterLeftSideComponent implements OnInit {

  textoDaPesquisa: string = '';
  itensDoMenu: any;

  constructor(
    public menuItems: MenuItems,
    public usuarioService: UsuariosService,
    private router: Router,
    public fixLayout: FixSizeService
  ) { }

  ngOnInit() {
    this.usuarioService.getMeuUsuario()
      .subscribe(() => {
      // Permissoes
      //if (this.usuarioService.currentUser.ehAdm) {
        this.itensDoMenu = this.menuItems.getAll();
      //} else {
      //  this.itensDoMenu = this.menuItems.getDefault();
      //}
      // this.fixLayout.tamanhoTela();
    });
  }

  submitBusca() {
    if (!this.textoDaPesquisa) {
      return;
    }
    this.router.navigate(['/', 'buscador', 'resultado'], { queryParams: { q: this.textoDaPesquisa } });
  }

}
