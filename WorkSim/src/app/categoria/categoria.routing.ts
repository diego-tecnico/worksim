import { CategoriaListarComponent } from './categoria-listar/categoria-listar.component';
import {Routes} from '@angular/router';

export const CategoriaRoute: Routes = [
  
  {
    path: 'listar',
    component: CategoriaListarComponent,
    data: {
      hide: true
    }
  },
];
