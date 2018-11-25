import {Routes} from '@angular/router';
import {FinanceiroNovoComponent} from './financeiro-novo/financeiro-novo.component';
import {FinanceiroListarComponent} from './financeiro-listar/financeiro-listar.component';

export const FinanceiroRoute: Routes = [
  {
    path: 'novo',
    component: FinanceiroNovoComponent,
    data: {
      hide: true
    }
  },
  {
    path: 'listar',
    component: FinanceiroListarComponent,
    data: {
      hide: true
    }
  },
];
