
import {Routes} from '@angular/router';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {AuthGuard} from './guards/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'worksim',
        pathMatch: 'full'
      },
      {
        path: 'worksim',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        data: {
          breadcrumb: 'Dashboards'
        }
      },
      {
        path: 'usuarios',
        loadChildren: './usuarios/usuarios.module#UsuariosModule',
        data: {
          breadcrumb: 'Usuários'
        }
      },
      {
        path: 'chamados',
        loadChildren: './chamados/chamados.module#ChamadosModule',
        data: {
          breadcrumb: 'Chamados'
        }
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'authentication',
        loadChildren:
          './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];
