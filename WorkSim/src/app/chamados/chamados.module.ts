import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChamadosListarComponent } from './chamados-listar/chamados-listar.component';
import { ChamadosNovoComponent } from './chamados-novo/chamados-novo.component';
import { ChamadosRoutes } from './chamados.routing';
import { ChamadosService } from './chamados.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChamadosRoutes),
    SharedModule,
    FormsModule
  ],
  declarations: [
    ChamadosListarComponent,
    ChamadosNovoComponent,
  ],
  providers: [ChamadosService]

})
export class ChamadosModule { }
