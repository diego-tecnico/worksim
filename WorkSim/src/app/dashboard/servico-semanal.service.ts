import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { Moment } from 'moment';
import { IPeriodo } from '../shared/date-range/date-range.component';

@Injectable()
export class ServicoSemanalService {

  constructor() { }


  salvarData(periodo: IPeriodo) {
    sessionStorage.setItem('periodo', JSON.stringify(periodo));
  }

  obterData(): IPeriodo {
    const periodoSalvoOuPadrao: IPeriodo = JSON.parse(sessionStorage.getItem('periodo')) || {
        dataInicio: new Date(moment().subtract(moment().isoWeekday(), 'days').toString()),
        dataTermino: new Date(moment().subtract(moment().isoWeekday(), 'days').add(6, 'days').toString())
    };
    return periodoSalvoOuPadrao;
  }

  limparData() {
    sessionStorage.removeItem('periodo');
  }
}
