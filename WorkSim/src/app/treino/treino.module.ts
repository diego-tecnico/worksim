import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TreinoListarComponent} from './treino-listar/treino-listar.component';
import {TreinoNovoComponent} from './treino-novo/treino-novo.component';
import {TreinoRoute} from './treino.routing';
import {TreinoService} from './treino.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TreinoRoute),
    SharedModule,
    FormsModule
  ],
  providers: [TreinoService],
  declarations: [TreinoListarComponent, TreinoNovoComponent],

})
export class TreinoModule { }
