import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GruposService } from './grupos.service';
import { GruposRoutes } from './grupos.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GruposRoutes),
    SharedModule,
    FormsModule
  ],
  declarations: [],
  providers: [GruposService],

})
export class GruposModule { }
