import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosNovoComponent } from './alunos-novo/alunos-novo.component';
import { AlunosService } from './alunos.service';
import { AlunosRoutes } from './alunos.routing';
import { FormsModule } from '@angular/forms';
import { GruposService } from '../grupos/grupos.service';
import { EmpresasService } from '../empresas/empresas.service';
import { AlunosListarComponent } from './alunos-listar/alunos-listar.component';
import { UsuariosService } from '../usuarios/usuarios.service';
import { AlunosEditarComponent } from './alunos-editar/alunos-editar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AlunosRoutes),
    SharedModule,
    FormsModule
  ],
  declarations: [
    AlunosListarComponent,
    AlunosNovoComponent,
    AlunosEditarComponent
  ],
  providers: [UsuariosService, AlunosService, GruposService, EmpresasService]
})

export class AlunosModule { }
