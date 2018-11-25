import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './../spinner/spinner.component';
import { DashboardService } from './dashboard.service';
import { providers } from 'ng2-toasty';
import { PainelComponent } from './painel/painel.component';
import { UsuariosModule } from './../usuarios/usuarios.module';
import { SharedModule } from './../shared/shared.module';
import { DashboardRoutes } from './dashboard.routing';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ChartModule } from 'angular2-chartjs';
//import { CadastroModule } from './../authentication/cadastro/cadastro.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    ScrollToModule.forRoot(),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2AutoCompleteModule,
    ChartModule
    //CadastroModule
  ],
  declarations: [
    PainelComponent,
  ],
  providers: [DashboardService]
})

export class DashboardModule { }
