import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlanosService } from './planos.service';
import { PlanoNovoComponent } from './plano-novo/plano-novo.component';
import {PlanosRoutes} from './planos.routing';
import { PlanoListarComponent } from './plano-listar/plano-listar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PlanosRoutes),
    SharedModule,
    FormsModule
  ],
  providers: [PlanosService],
  declarations: [PlanoNovoComponent, PlanoListarComponent],

})
export class PlanosModule { }
