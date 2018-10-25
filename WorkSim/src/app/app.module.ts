import { PesquisarChamadosService } from './pages/pesquisar-chamados/pesquisar-chamados.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import 'rxjs/add/operator/finally';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoaderComponent } from './componentes/loader/loader.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { PesquisarChamadosComponent } from './pages/pesquisar-chamados/pesquisar-chamados.component';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutes } from './app.routing';
import { Error404Component } from './pages/error/error404/error404.component';
import { Error500Component } from './pages/error/error500/error500.component';
import { StylesComponent } from './componentes/styles/styles.component';
import { Error403Component } from './pages/error/error403/error403.component';
import { HttpAppClient } from './shared/http-app-client.service';
import { FormsModule } from '@angular/forms';
import { DetalhesChamadoComponent } from './pages/detalhes-chamado/detalhes-chamado.component';
import { DetalhesChamadoService } from './pages/detalhes-chamado/detalhes-chamado.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './componentes/menu/menu.component';
import { NovoChamadoComponent } from './pages/novo-chamado/novo-chamado.component';
import { TrumbowygModule } from 'ng2-lazy-trumbowyg';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    LoginComponent,
    PesquisarChamadosComponent,
    Error404Component,
    Error500Component,
    StylesComponent,
    Error403Component,
    DetalhesChamadoComponent,
    MenuComponent,
    NovoChamadoComponent
  ],
  imports: [
    TrumbowygModule.forRoot({ plugins: ['colors', 'preformatted', 'pasteimage', 'upload'], version: '2.8.0' }), //Optional config : plug-ins and version
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    ToastrModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [HttpAppClient, PesquisarChamadosService, DetalhesChamadoService, ToastrService],
  bootstrap: [AppComponent]
})


export class AppModule { }
