import { Routes } from '@angular/router';
import { PainelComponent } from './painel/painel.component';

export const DashboardRoutes: Routes = [
  
  {
    path: 'painel',
    component: PainelComponent,
    data: {
      breadcrumb: 'Dashboard',
      hide: true
    }
  }, {
    path: '',
    component: PainelComponent,
    data: {
      breadcrumb: 'Dashboard',
      hide: true
    }
  }
];
