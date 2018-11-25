import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoListarComponent } from './produto-listar/produto-listar.component';
import {ProdutoRoute} from './produto.routing';
import {ProdutoService} from './produto.service';
import { ProdutoNovoComponent } from './produto-novo/produto-novo.component';
import { ProdutoEditarComponent } from './produto-editar/produto-editar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProdutoRoute),
    SharedModule,
    FormsModule
  ],
  providers: [ProdutoService],
  declarations: [ ProdutoListarComponent, ProdutoNovoComponent, ProdutoEditarComponent],

})
export class ProdutoModule { }
