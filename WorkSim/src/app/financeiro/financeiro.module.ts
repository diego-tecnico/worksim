import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {FinanceiroService} from './financeiro.service';
import { FinanceiroListarComponent } from './financeiro-listar/financeiro-listar.component';
import { FinanceiroNovoComponent } from './financeiro-novo/financeiro-novo.component';
import {FinanceiroRoute} from './financeiro.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FinanceiroRoute),
    SharedModule,
    FormsModule
  ],
  providers: [FinanceiroService],
  declarations: [FinanceiroListarComponent, FinanceiroNovoComponent],

})
export class FinanceiroModule { }
