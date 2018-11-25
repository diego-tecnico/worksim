import { Injectable }               from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders }              from '@angular/common/http';
import { Observable }               from 'rxjs';

@Injectable()
export class FixSizeService {

  constructor() { }

  public tamanhoTela() {
    const contentWrapper            = document.querySelector('.content-wrapper');
    const mainSidebarHeight         = document.querySelector('.main-sidebar').getBoundingClientRect().height;
    const mainFooterHeight          = document.querySelector('.main-footer').getBoundingClientRect().height;
    contentWrapper.setAttribute('style', 'min-height: ' + (mainSidebarHeight - (mainFooterHeight * 2)) + 'px');
  }

}
