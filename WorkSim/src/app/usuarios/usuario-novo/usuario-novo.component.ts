import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from '../usuarios.service';
import { IUsuario } from '../../models/IUsuario';
import 'rxjs/add/operator/finally';
import {Location} from '@angular/common';

declare var $: any;
declare var jQuery: any;


@Component({
  selector: 'pdg-usuario-novo',
  templateUrl: './usuario-novo.component.html',
  styleUrls: ['./usuario-novo.component.sass']
})
export class UsuarioNovoComponent implements OnInit {

  inputNomeSettings = {
    id: 'nomeUsuario',
    class: 'labelNome',
    label: 'Nome'
  };
  inputSobrenomeSettings = {
    id: 'sobrenome',
    class: 'labelSobrenome',
    label: 'Sobrenome'
  };
  uploadFotoUsuario = false;
  ehChecked = "";
  carregando = false;
  dadosDoUsuario: IUsuario = {
    no_pessoa: "",
    no_email: "",
    //no_login: "",
    //nr_senha: "",
  };
  constructor(private usuariosService: UsuariosService,
    private toastrService: ToastrService,
    private router: Router,
    private  location: Location) { }

  public maskTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskFixo = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskCPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  ngOnInit() {

  }

  ehAdministrador() {
    //this.dadosDoUsuario.ehAdm = !this.dadosDoUsuario.ehAdm;
  }

  imagemSelecionada($event) {
    this.uploadFotoUsuario = true;
    this.readUrl($('#imgUser')[0]);

  }
  readUrl(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        console.log(e);
        $('#img').attr('src', e.target["result"]);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSubmit() {
    this.carregando = true;
    //if(this.uploadFotoUsuario)
    //  this.dadosDoUsuario.caminhoFoto = $('#img')[0].currentSrc;
    
    this.carregando = true;
    this.usuariosService.inserirUsuario(this.dadosDoUsuario)
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((resultado) => {
        this.toastrService.success("Usuário foi cadastrado com sucesso.");
        this.location.back();
      });
  }
  cancelar() {
    this.location.back();
  }
}
