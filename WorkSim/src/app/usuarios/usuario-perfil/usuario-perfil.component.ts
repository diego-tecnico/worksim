import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { IGS_pessoa_juridica } from './../../models/IGS_pessoa_juridica';
import { IAluno } from './../../models/IAluno';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import { IUsuario } from './../../models/IUsuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.sass']
})
export class UsuarioPainelComponent implements OnInit {
  carregando = false;
  departamentoSelecionado = 0;
  cargoSelecionado = 0;
  uploadFotoUsuario = false;
  nomeConta = '';
  

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
      this.usuarioService.getMeuUsuario()
                         .subscribe((response) => {
                           console.log(response);

                           
                          let name = document.getElementById('nomeUsuario');
                           let email = document.getElementById('email');
                           let sobrenome = document.getElementById('sobrenome'); 
                          let cpf = document.getElementById('cnpjouCpf');
                           let telefone = document.getElementById('telefone');
                           let telefoneResidencial = document.getElementById('telefoneResidencial');
                          
                        //   name.setAttribute('value', object.nome);
                          // email.setAttribute('value', object.no_email);
                           //sobrenome.setAttribute('value',object.sobrenome);
                           //cpf.setAttribute('value',object.null);
                           //telefone.setAttribute('value',object.telefone);
                           //telefoneResidencial.setAttribute('value',object.telefoneResidencial);
                         });
  }


  imagemSelecionada($event) {
    this.readUrl($('#imgUser')[0]);
    //this.usuarioService.currentUser.AlterarFoto = true;
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

  validarEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValido = re.test(String(email).toLowerCase());
    if (!emailValido) {
      this.toastrService.error(`E-mail ${email} não e valido. tente novamente !`);
      this.carregando = false;
    }

    return emailValido;
  }

  salvar() {
    this.carregando = true;

    if (!this.validarEmail(this.usuarioService.currentUser.no_email))
        return;

    //if(this.usuarioService.currentUser.AlterarFoto)
    //  this.usuarioService.currentUser.caminhoFoto = $('#img')[0].currentSrc;

    this.usuarioService.editarPerfil()
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((resultado) => {
        this.toastrService.success(resultado.mensagem, 'Sucesso !');
        this.router.navigateByUrl('/dashboard/painel');
        //location.reload(true);
      });
  }
      
}
