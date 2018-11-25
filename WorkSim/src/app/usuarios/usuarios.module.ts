import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosRoutes } from './usuarios.routing';
import { UsuarioConfiguracaoComponent } from './usuario-configuracao/usuario-configuracao.component';
import { UsuarioPainelComponent } from './usuario-perfil/usuario-perfil.component';
import { UsuarioSenhaComponent } from './usuario-senha/usuario-senha.component';
import { FormsModule } from '@angular/forms';
import { UsuarioFinalizarCadastroComponent } from './usuario-finalizar-cadastro/usuario-finalizar-cadastro.component';
import { GruposService } from '../grupos/grupos.service';
import { EmpresasService } from '../empresas/empresas.service';
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';
import { UsuariosEditarComponent } from './usuarios-editar/usuarios-editar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UsuariosRoutes),
    SharedModule,
    FormsModule
  ],
  declarations: [
    UsuarioConfiguracaoComponent,
    UsuarioPainelComponent,
    UsuarioSenhaComponent,
    UsuarioFinalizarCadastroComponent,
    UsuarioListarComponent,
    UsuarioNovoComponent,
    UsuariosEditarComponent
    
  ],
  providers: [UsuariosService, GruposService, EmpresasService]

})
export class UsuariosModule { }
