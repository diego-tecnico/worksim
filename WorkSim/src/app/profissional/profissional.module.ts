import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GruposService } from '../grupos/grupos.service';
import { EmpresasService } from '../empresas/empresas.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import { ProfissionalService } from './profissional.service';
import { ProfissionalRoutes } from './profissional.routing';
import { ProfissionalListarComponent } from './profissional-listar/profissional-listar.component';
import { ProfissionalNovoComponent } from './profissional-novo/profissional-novo.component';
import { ProfissionalEditarComponent } from './profissional-editar/profissional-editar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProfissionalRoutes),
    SharedModule,
    FormsModule
  ],
  declarations: [
    ProfissionalListarComponent,
    ProfissionalNovoComponent,
    ProfissionalEditarComponent
  ],
  providers: [ProfissionalService, GruposService, UsuariosService, EmpresasService]

})
export class ProfissionalModule { }
