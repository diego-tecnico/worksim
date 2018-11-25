import {Routes} from '@angular/router';
import {ProdutoListarComponent} from './produto-listar/produto-listar.component';
import {ProdutoNovoComponent} from './produto-novo/produto-novo.component';
import { ProdutoEditarComponent } from './produto-editar/produto-editar.component';

export const ProdutoRoute: Routes = [
  {
    path: 'novo',
    component: ProdutoNovoComponent,
    data: {
      hide: true
    }
  },
  {
    path: ':id/editar',
    component: ProdutoEditarComponent,
    data: {
      hide: true
    }
  },
  {
    path: 'listar',
    component: ProdutoListarComponent,
    data: {
      hide: true
    }
  },
];
