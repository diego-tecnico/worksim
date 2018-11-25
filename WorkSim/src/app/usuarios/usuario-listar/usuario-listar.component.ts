import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { IUsuario } from './../../models/IUsuario';
import { ToastrService } from 'ngx-toastr';
import { IUsuarios } from '../../models/IFiltroUsuario';

//const swal = require('sweetalert');

@Component({
  selector: 'pdg-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.sass']
})
export class UsuarioListarComponent implements OnInit {

  usuarios: IUsuarios[] = [];

  filtros: IUsuarios = {};

  quantidadeDeUsuarios = 0;
  carregando = false;
  constructor(public usuariosService: UsuariosService,
    private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.obterColaboradores();
  }

  obterColaboradores() {
    this.carregando = true;
    this.usuariosService.obterColaboradores(this.filtros)
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((x) => {
        this.usuarios = x.usuarios;
        this.quantidadeDeUsuarios = this.usuarios.length;
        console.log(this.usuarios);
      })
  }

  bloquearUsuario(usuario: any) {
    //swal({
    //  title: `Deseja realmente bloquear o usuario ${usuario.nome} ?`,
    //  text: `O usuario ${usuario.nome} não irá poder mais acessar o sistema ate que você o desbloqueie novamente, deseja continuar?`,
    //  icon: 'warning',
    //  dangerMode: true,
    //  buttons: {
    //    cancel: 'CANCELAR',
    //    confirm: {
    //      text: 'BLOQUEAR',
    //      value: 'confirm'
    //    }
    //  },
    //})
    //  .then((bloquearUsuario) => {
    //    if (bloquearUsuario !== 'confirm') {
    //    return;
    //    }
    //    this.usuarioService.bloquearUsuario(usuario)
    //      .subscribe((usuario) => {
    //        this.listarTodosUsuarios();
    //        this.toastrService.success('Usuario bloqueado!');
    //      });
    //});
  }

  desbloquearUsuario(usuario: any) {
    //swal({
    //  title: `Deseja realmente liberar o acesso do usuario ${usuario.nome} ?`,
    //  text: `O usuario ${usuario.nome} a partir de agora vai poder acessar o sistema ate que você o bloqueie novamente, deseja continuar?`,
    //  icon: 'warning',
    //  dangerMode: true,
    //  buttons: {
    //    cancel: 'CANCELAR',
    //    confirm: {
    //      text: 'DESBLOQUEAR',
    //      value: 'confirm'
    //    }
    //  },
    //})
    //  .then((bloquearUsuario) => {
    //    if (bloquearUsuario !== 'confirm') {
    //      return;
    //    }
    //    this.usuarioService.bloquearUsuario(usuario)
    //      .subscribe((usuario) => {
    //        this.listarTodosUsuarios();
    //        this.toastrService.success('Usuario desbloqueado!');
    //      });
    //  });
  }
}
