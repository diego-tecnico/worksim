import { EnderecoService } from './endereco/endereco.service';
import { DashboardService } from './../dashboard/dashboard.service';
import { TextMaskModule } from 'angular2-text-mask';
import { TooltipModule } from 'ngx-tooltip';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdlModule } from '@angular-mdl/core';
import { NgModule } from '@angular/core';
import { TrumbowygModule } from 'ng2-lazy-trumbowyg';

import { MenuItems } from './menu-items/menu-items';
// import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
// import { ToggleFullscreenDirective } from './fullscreen/toggle-fullscreen.directive';
// import {CardRefreshDirective} from './card/card-refresh.directive';
// import {CardToggleDirective} from './card/card-toggle.directive';
// import { CardDiscursoComponent } from './card/card.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ParentRemoveDirective } from './elements/parent-remove.directive';
import { SpinnerComponent } from '../spinner/spinner.component';
// import {GoTopButtonModule} from 'ng2-go-top-button';
// import {ScrollModule} from '../scroll/scroll.module';
// import {TagInputModule} from 'ngx-chips';
// import {AgmCoreModule} from '@agm/core';
// import {Ng2GoogleChartsModule} from 'ng2-google-charts';
// import {ClickOutsideModule} from 'ng-click-outside';
import { HttpAppClient } from './http-app-client.service';
import { CallbackPipe } from './pipes/callback.pipe';
import { OrderByPipe } from './pipes/orderBy.pipe';
import { CalendarComponent } from './calendar/calendar.component';
import { PagerComponent } from './pager/pager.component';
import { DataRangeComponent } from './date-range/date-range.component';
import { DataRangePesquisarComponent } from './date-range-pesquisar/date-range-pesquisar.component';
import { MenuDeOrdenacaoComponent } from './menu-de-ordenacao/menu-de-ordenacao.component';
import { BuscarPorCepComponent } from './endereco/buscar-por-cep/buscar-por-cep.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FeedbackComponent } from './feedback/feedback.component';
import { HighlightDirective } from './hightlight/highlight.directive';
import { BloquearDesbloquearComponent } from './bloquear-desbloquear/bloquear-desbloquear.component';
import { SetorService } from '../setor/setor.service';
import { CategoriaService } from '../categoria/categoria.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    //   NgbModule.forRoot(),
    PaginationModule.forRoot(),
    ScrollToModule.forRoot(),
    AngularMultiSelectModule,
    TooltipModule,
    TextMaskModule,
    MdlModule,
    TrumbowygModule.forRoot({ plugins: ['colors', 'preformatted', 'pasteimage', 'upload'], version: '2.8.0' }) //Optional config : plug-ins and version
    // ScrollModule,
    // TagInputModule,
    // AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'}),
    // Ng2GoogleChartsModule,
    //   ClickOutsideModule,
    // GoTopButtonModule
  ],
  declarations: [
    //   AccordionAnchorDirective,
    //   AccordionLinkDirective,
    //   AccordionDirective,
    //   ToggleFullscreenDirective,
    // CardRefreshDirective,
    // CardToggleDirective,
    ParentRemoveDirective,
    // CardDiscursoComponent,
    SpinnerComponent,
    CallbackPipe,
    OrderByPipe,
    CalendarComponent,
    DataRangeComponent,
    DataRangePesquisarComponent,
    PagerComponent,
    MenuDeOrdenacaoComponent,
    BuscarPorCepComponent,
    FeedbackComponent,
    HighlightDirective,
    BloquearDesbloquearComponent,
  ],
  exports: [
    //   AccordionAnchorDirective,
    //   AccordionLinkDirective,
    //   AccordionDirective,
    //   ToggleFullscreenDirective,
    // CardRefreshDirective,
    // CardToggleDirective,
    ParentRemoveDirective,
    // CardDiscursoComponent,
    SpinnerComponent,
    //   NgbModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    TrumbowygModule,
    //   BsDropdownModule,
    //   AccordionModule,
    // ScrollModule,
    // SimpleNotificationsModule,
    // TagInputModule,
    // AgmCoreModule,
    // Ng2GoogleChartsModule,
    //   ClickOutsideModule,
    // GoTopButtonModule
    CallbackPipe,
    OrderByPipe,
    CalendarComponent,
    PagerComponent,
    DataRangeComponent,
    DataRangePesquisarComponent,
    MenuDeOrdenacaoComponent,
    AngularMultiSelectModule,
    TooltipModule,
    BuscarPorCepComponent,
    FeedbackComponent,
    MdlModule,
    HighlightDirective,
    BloquearDesbloquearComponent
  ],
  providers: [
    MenuItems,
    HttpAppClient,
    DashboardService,
    EnderecoService,
    SetorService,
    CategoriaService
  ]
})
export class SharedModule { }
