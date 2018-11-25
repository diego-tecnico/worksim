import { CategoriaService } from './categoria.service';
import { providers } from 'ng2-toasty';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaListarComponent } from './categoria-listar/categoria-listar.component';
import { CategoriaRoute } from './categoria.routing';
import { RouterModule } from '../../../node_modules/@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CategoriaRoute),
    SharedModule,
    FormsModule
  ],
  providers:[CategoriaService],
  declarations: [CategoriaListarComponent]
})
export class CategoriaModule { }
