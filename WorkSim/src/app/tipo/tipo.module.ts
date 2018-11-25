import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TipoListarComponent } from './tipo-listar/tipo-listar.component';
import {TipoNovoComponent} from './tipo-novo/tipo-novo.component';
import {TipoRoutes} from './tipo.routing';
import {TipoService} from './tipo.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TipoRoutes),
    SharedModule,
    FormsModule
  ],
  providers: [TipoService],
  declarations: [ TipoNovoComponent,  TipoListarComponent],

})
export class TipoModule { }
