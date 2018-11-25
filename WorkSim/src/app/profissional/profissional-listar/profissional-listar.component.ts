import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from './../../models/IUsuario';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { IProfissional } from '../../models/IProfissional';

//const swal = require('sweetalert');

@Component({
  selector: 'profissional-listar',
  templateUrl: './profissional-listar.component.html',
  styleUrls: ['./profissional-listar.component.sass']
})
export class ProfissionalListarComponent implements OnInit {

  profissionais: IProfissional[] = [];
  quantidadeDeProfissionais = 0;
  carregando = false;
  constructor(private toastrService: ToastrService, private usuariosService: UsuariosService) {
  }

  ngOnInit() {
    this.obterProfissionais();
  }

  obterProfissionais() {
    this.carregando = true;
    this.usuariosService.obterProfissionais()
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((x) => {
        this.profissionais = x.profissionais;
        this.quantidadeDeProfissionais = this.profissionais.length;

      });
  }



  bloquearOuDesbloquear(bloquearOudesbloquear: boolean, usuario: any) {
    if (!bloquearOudesbloquear) {
      this.bloquearUsuario(usuario);
    } else {
      this.desbloquearUsuario(usuario);
    }
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
