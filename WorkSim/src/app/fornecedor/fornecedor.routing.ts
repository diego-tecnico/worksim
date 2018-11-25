import {Routes} from '@angular/router';
import {FornecedorNovoComponent} from './fornecedor-novo/fornecedor-novo.component';
import {FornecedorListarComponent} from './fornecedor-listar/fornecedor-listar.component';

export const FornecedorRoute: Routes = [
  {
    path: 'novo',
    component: FornecedorNovoComponent,
    data: {
      hide: true
    }
  },
  {
    path: 'listar',
    component: FornecedorListarComponent,
    data: {
      hide: true
    }
  },
];
