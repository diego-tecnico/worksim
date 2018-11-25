
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
        redirectTo: 'cross',
        pathMatch: 'full'
      },
      {
        path: 'cross',
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
        path: 'tipo',
        loadChildren: './tipo/tipo.module#TipoModule',
        data: {
          breadcrumb: 'Tipo'
        }
      },
      {
        path: 'planos',
        loadChildren: './planos/planos.module#PlanosModule',
        data: {
          breadcrumb: 'Planos'
        }
      },
      {
        path: 'treino',
        loadChildren: './treino/treino.module#TreinoModule',
        data: {
          breadcrumb: 'Treinos'
        }
      },
      {
        path: 'produto',
        loadChildren: './produto/produto.module#ProdutoModule',
        data: {
          breadcrumb: 'Produto'
        }
      },
      {
        path: 'alunos',
        loadChildren: './alunos/alunos.module#AlunosModule',
        data: {
          breadcrumb: 'Alunos'
        }
      },
      {
        path: 'fornecedor',
        loadChildren: './fornecedor/fornecedor.module#FornecedorModule',
        data: {
          breadcrumb: 'Fornecedor'
        }
      },
      {
        path: 'financeiro',
        loadChildren: './financeiro/financeiro.module#FinanceiroModule',
        data: {
          breadcrumb: 'Fornecedor'
        }
      },
      {
        path: 'profissional',
        loadChildren: './profissional/profissional.module#ProfissionalModule',
        data: {
          breadcrumb: 'Profissional'
        }
      },
      {
        path: 'categoria',
        loadChildren: './categoria/categoria.module#CategoriaModule',
        data: {
          breadcrumb: 'Categoria'
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
