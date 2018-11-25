import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpresasService } from './empresas.service';
import { EmpresasListarComponent } from './empresas-listar/empresas-listar.component';
import { EmpresasRoutes } from './empresas.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EmpresasRoutes),
    SharedModule,
    FormsModule
  ],
  declarations: [
    EmpresasListarComponent
  ],
  providers: [EmpresasService],

})
export class EmpresasModule { }
