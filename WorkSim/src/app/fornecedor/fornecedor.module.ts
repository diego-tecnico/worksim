import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FornecedorListarComponent } from './fornecedor-listar/fornecedor-listar.component';
import {FornecedorRoute} from './fornecedor.routing';
import { FornecedorNovoComponent } from './fornecedor-novo/fornecedor-novo.component';
import {FornecedorService} from './fornecedor.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FornecedorRoute),
    SharedModule,
    FormsModule
  ],
  providers: [FornecedorService],
  declarations: [FornecedorListarComponent, FornecedorNovoComponent],

})
export class FornecedorModule { }
