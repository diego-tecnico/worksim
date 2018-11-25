import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Location } from '@angular/common';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'pdg-usuario-esqueci-senha',
  templateUrl: './usuario-esqueci-senha.component.html',
  styleUrls: ['./usuario-esqueci-senha.component.sass']
})
export class UsuarioEsqueciSenhaComponent implements OnInit {

  formulario: FormGroup;
  email: string;
  returnLogin = '/authentication/login';

  constructor(
    public usuarioService: UsuariosService,
    private router: Router,
    public toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private _location: Location
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: [null, Validators.required]
    });
  }

  voltarLogin() {
    this.router.navigateByUrl(this.returnLogin);
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.email = this.formulario.get('email').value;
      this.usuarioService.recuperarSenha(this.email)
        .subscribe((resultado) => {
          this.toastrService.success(resultado.mensagem);
        });
    } else {
      this.verificaValidacoesForm(this.formulario);
      this.toastrService.warning('Por Favor, verifique o formulario', 'Atenção!');
    }
  }

  resetar() {
    this.formulario.reset();
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }
}
