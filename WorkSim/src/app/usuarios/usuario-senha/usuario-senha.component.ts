import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-usuario-senha',
  templateUrl: './usuario-senha.component.html',
  styleUrls: ['./usuario-senha.component.sass']
})
export class UsuarioSenhaComponent implements OnInit {
  formulario: FormGroup;
  senhaAtual: string;
  senhaNova: string;
  dicaSenha: string;
  constructor(public usuarioService: UsuariosService, public location: Location, public toastrService: ToastrService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      dicaSenha: [null, Validators.required],
      senhaAtual: [null, Validators.required],
      senhaNova: [null, Validators.required]
    });
  }

onSubmit() {
  if (this.formulario.valid) {
    this.senhaAtual = this.formulario.get('senhaAtual').value;
    this.senhaNova = this.formulario.get('senhaNova').value;
    this.dicaSenha = this.formulario.get('dicaSenha').value;
        this.usuarioService.editarSenha(this.usuarioService.currentUser.cd_pessoa.toString(), this.senhaAtual, this.senhaNova, this.dicaSenha)
            .subscribe((usuario) => {
              this.toastrService.success('Senha alterada com sucesso.', 'Sucesso!');
              this.location.back();
        });
  }else {
    this.verificaValidacoesForm(this.formulario);
    this.toastrService.warning('Por favor, verifique o formulário.', 'Alerta');
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
    return (!this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
  }

}
