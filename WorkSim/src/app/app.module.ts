// ANGULAR ESSENCIAL
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// COMPONENTS
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AppRoutes} from './app.routing';
import {AppComponent} from './app.component';
import {AuthGuard} from './guards/auth.guard';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {BreadcrumbsComponent} from './layouts/admin/breadcrumbs/breadcrumbs.component';
import {SharedModule} from './shared/shared.module';
import {StarterContentComponent} from './layouts/admin/starter-content/starter-content.component';
import {StarterControlSidebarComponent} from './layouts/admin/starter-control-sidebar/starter-control-sidebar.component';
import {StarterFooterComponent} from './layouts/admin/starter-footer/starter-footer.component';
import {StarterHeaderComponent} from './layouts/admin/starter-header/starter-header.component';
import {StarterLeftSideComponent} from './layouts/admin/starter-left-side/starter-left-side.component';
import {TitleComponent} from './layouts/admin/title/title.component';
// lIBRARIES
import {ToastyModule, ToastyService} from 'ng2-toasty';
import { ToastrModule } from 'ngx-toastr';
import { ChartModule } from 'angular2-chartjs';
// import { ToastrModule }                             from 'ngx-toastr';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {Ng2AutoCompleteModule} from 'ng2-auto-complete';
import {MalihuScrollbarModule} from 'ngx-malihu-scrollbar';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './shared/toke.interceptor';
import {UsuariosModule} from './usuarios/usuarios.module';
import {UsuarioNovoComponent} from './usuarios/usuario-novo/usuario-novo.component';
import {UsuarioListarComponent} from './usuarios/usuario-listar/usuario-listar.component';
import {PlanosModule} from './planos/planos.module';
import {FixSizeService} from './fix-size.service';
import { GruposListarComponent } from './grupos/grupos-listar/grupos-listar.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask/src/currency-mask.config";

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    AuthLayoutComponent,
    BreadcrumbsComponent,
    TitleComponent,
    GruposListarComponent,
  ],
  imports: [
    ChartModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    ToastyModule.forRoot(),
    ToastrModule.forRoot(),
    // ToastrModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
    FormsModule,
    HttpModule,
    UsuariosModule, 
    AngularMultiSelectModule,
    Ng2AutoCompleteModule,
    HttpClientModule,
    FormsModule,
    PlanosModule,
    CurrencyMaskModule
  ],
  exports: [AngularMultiSelectModule, HttpClientModule],
  providers: [
    AuthGuard,
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },

    { provide: LocationStrategy, useClass: PathLocationStrategy },
    ToastyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
      FixSizeService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
