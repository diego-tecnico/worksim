import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { IUsuario } from './../../models/IUsuario';
import { UsuariosService } from './../usuarios.service';
import { Location } from '@angular/common';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-usuario-configuracao',
  templateUrl: './usuario-configuracao.component.html',
  styleUrls: ['./usuario-configuracao.component.sass']
})
export class UsuarioConfiguracaoComponent implements OnInit {
  carregando = false;
  idUsuario: any;
  departamentoSelecionado = 0;
  cargoSelecionado = 0;

  ehAdm = '';

  usuario: IUsuario = {};
  conta: any = {};
  public maskTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskFixo = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskCPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(
    public usuarioService: UsuariosService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private location: Location
  ) { }

  ngOnInit() {
    this.carregando = true;
    this.activeRoute.queryParams.subscribe(
      (queryParams: any) => {
        this.idUsuario = queryParams['id'];
        this.trazerDados(this.idUsuario);
      });
  }

  verificaEhAdm ( ehAdm ) {
    if ( ehAdm  ) {
      this.ehAdm = 'sim';
    } else {
      this.ehAdm = 'nao';
    }
  }

  trazerDados(idUsuario: any) {
    this.carregando = true;
    const usuarioId = idUsuario;
    this.usuarioService.trazerDadosUsuario(usuarioId)
      .finally(() => {
        this.carregando = false;
      })
      .subscribe(dados => {
        console.log(dados);
        this.usuario = dados.usuario as IUsuario;
      });
  }

  onFocus(id) {
    $('.labelInputBoxUser[for=' + id + ']').css({
      color: '#0080ac'
    });
  }

  onBlur(id) {
    $('.labelInputBoxUser[for=' + id + ']').css({
      color: '#777777'
    });
  }
  imagemSelecionada($event) {
    this.readUrl($('#imgInp')[0]);
    //this.usuario.AlterarFoto = true;
  }
  readUrl(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        console.log(e);
        $('#imgUser').attr('src', e.target["result"]);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  salvar() {
    this.carregando = true;

    //if (this.usuario.AlterarFoto)
    //    this.usuario.caminhoFoto = $('#imgUser')[0].currentSrc;

    this.usuarioService.editarPerfil()
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((x) => {
        this.toastrService.success(`Usuário ${this.usuario.no_pessoa} foi editado com sucesso.`, 'Sucesso!');
        this.location.back();
      });
  }

  ehAdministrador() {
    //this.usuario.ehAdm = !this.usuario.ehAdm;
  }

  cancelar() {
    this.location.back();
  }
}
