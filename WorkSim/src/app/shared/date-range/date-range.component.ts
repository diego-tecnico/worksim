import { Component, OnInit, Input, Output, HostListener, ElementRef, Renderer, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

export interface IPeriodo {
  dataInicio?: Date;
  dataTermino?: Date;
}

declare var $: any;
declare var jQuery: any;
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'pdg-date-range',
    templateUrl: './date-range.component.html',
    styleUrls: ['./date-range.component.sass'],
    providers: []
})
export class DataRangeComponent implements OnInit {

    @Output() onChangeData = new EventEmitter<any>();
    mostrarCalendario = true;
    ultimoPeriodo: IPeriodo = {
    };
    constructor(private _elementeRef: ElementRef,
        private _renderer: Renderer) {
    }

    rangesCalendar = {
        'Hoje': [moment(), moment()],
        'Ontem': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Esta Semana': [moment().subtract(moment().isoWeekday(), 'days'), moment().subtract(moment().isoWeekday(), 'days').add(6, 'days')],
        'Últ. 7 dias': [moment().subtract(6, 'days'), moment()],
        'Últ. 15 dias': [moment().subtract(14, 'days'), moment()],
        'Últ. 30 dias': [moment().subtract(29, 'days'), moment()]
    };

    localeCalendar = {
        format: 'DD/MM/YYYY',
        separator: ' - ',
        applyLabel: 'Ok',
        cancelLabel: 'Limpar',
        customRangeLabel: 'Período',
        fromLabel: 'From',
        toLabel: 'To',
        weekLabel: 'W',
        daysOfWeek: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        firstDay: 1
    };

    configCalendar = {};

    @Input('periodo')
    public set periodo(novaData: IPeriodo) {
      this.montarCalendario(
        novaData.dataInicio,
        novaData.dataTermino
      );
      // console.log(`[DataFim] ${novaData}`);
    }

    ngOnInit() {
        // const filtro = this.filtros;
        // this.montarCalendario(
        //     filtro.dataInicio,
        //     filtro.dataFim
        // );
    }

    chamarOnChange(dataInicio, dataTermino, label) {
      const dtInicio = new Date(dataInicio);
      const dtTermino = new Date(dataTermino);
      const periodo: IPeriodo = {
        dataInicio: new Date(dtInicio.getFullYear(), dtInicio.getMonth(), dtInicio.getDate(), 0, 0, 0, 0),
        dataTermino: new Date(dtTermino.getFullYear(), dtTermino.getMonth(), dtTermino.getDate())
        };

        if (this.ehDiferente(this.ultimoPeriodo, periodo)) {
          console.log('[DATA-RANGE-COMPONENT] [DIFERENTE] Chamando Evento');
          this.onChangeData.emit(periodo);
          this.ultimoPeriodo = periodo;
        } else {
          console.log('[DATA-RANGE-COMPONENT] [IGUAL] Mesma data');
        }
    }

    ehDiferente(arg0: IPeriodo, arg1: IPeriodo): boolean {
      const dataInicioDifernete = moment(arg0.dataInicio).diff(arg1.dataInicio) !== 0;
      const dataFinalDiferente = moment(arg0.dataTermino).diff(arg1.dataTermino) !== 0;

      return dataInicioDifernete || dataFinalDiferente;
    }

    montarCalendario(startDateAtual, endDateAtual) {

        const formatoDaDatar = '';
        this.configCalendar = {
            startDate: startDateAtual,
            endDate: endDateAtual,
            opens: 'right',
            drops: 'down',
            ranges: this.rangesCalendar,
            locale: this.localeCalendar
        };

        const configuracao = this.configCalendar;
        $(function () {
            $('.input--data').daterangepicker(configuracao, this.chamarOnChange.bind(this));
            this.chamarOnChange(startDateAtual, endDateAtual);
        }.bind(this));

    }

    public get dataInicial(): Moment {
        const drp = $('.input--data').data('daterangepicker');
        return drp.startDate;
    }

    public get dataFinal(): Moment {
        const drp = $('.input--data').data('daterangepicker');
        return drp.endDate;
    }

    proximoPeriodo() {
        this.atribuirPeriodo('next');
    }

    periodoAnterior() {
        this.atribuirPeriodo('previous');
    }

    atribuirPeriodo(side) {
        const dataInicio = this.dataInicial;
        const dataFim = this.dataFinal;

        const periodo = dataFim.diff(dataInicio, 'days') + 1;
        if (side === 'next') {
            this.montarCalendario(
                dataInicio.add(periodo, 'days'),
                dataFim.add(periodo, 'days'));
            return;
        }

        this.montarCalendario(
            dataInicio.subtract(periodo, 'days'),
            dataFim.subtract(periodo, 'days')
        );
    }
}
