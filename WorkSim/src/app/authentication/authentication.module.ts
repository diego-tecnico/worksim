import { UsuariosModule } from './../usuarios/usuarios.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutes } from './authentication.routing';
import { UsuariosService } from './../usuarios/usuarios.service';
import { UsuarioEsqueciSenhaComponent } from './usuario-esqueci-senha/usuario-esqueci-senha.component';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UsuarioEsqueciSenhaComponent,
    UsuarioNovoComponent
  ],
  providers: [ UsuariosService ]
})

export class AuthenticationModule {}
