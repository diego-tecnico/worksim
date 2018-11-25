import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Location } from '@angular/common';
import { IUsuario } from '../../models/IUsuario';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'usuario-novo',
  templateUrl: './usuario-novo.component.html',
  styleUrls: ['./usuario-novo.component.sass']
})
export class UsuarioNovoComponent {

  PESSOA_JURIDICA = 'J';
  formulario: FormGroup;
  email: string;
  returnLogin = '/authentication/login';
  usuario: IUsuario = {};

  constructor(
    public usuarioService: UsuariosService,
    private router: Router,
    public toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private _location: Location
  ) { }

  voltarLogin() {
    this.router.navigateByUrl(this.returnLogin);
  }

  resetar() {
    this.formulario.reset();
  }

  NovoCadastro() {
    this.usuario.ir_pessoa = this.PESSOA_JURIDICA;
    this.usuarioService.inserirUsuario(this.usuario)
      .subscribe((resultado) => {
        
        this.toastrService.success(resultado.message);
          
          setTimeout(()=>
          {
            this.router.navigateByUrl(this.returnLogin);
          },1000);
          
      })
  }
}
