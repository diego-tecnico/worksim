import { Component, OnInit, Input, Output, HostListener, ElementRef, Renderer, EventEmitter } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { type } from 'os';
import { Moment } from 'moment';
import * as moment from 'moment';

declare var $: any;
declare var jQuery: any;

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'pdg-date-range-pesquisar',
    templateUrl: './date-range-pesquisar.component.html',
    styleUrls: ['./date-range-pesquisar.component.sass'],
})
export class DataRangePesquisarComponent implements OnInit {

    @Output() onChangeData = new EventEmitter<any>();
    mostrarCalendario = true;
    constructor(
        private _elementeRef: ElementRef,
        private _renderer: Renderer,
        private activateRoute: ActivatedRoute) { }

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
        applyLabel: 'OK',
        cancelLabel: 'Limpar',
        customRangeLabel: 'Período',
        fromLabel: 'From',
        toLabel: 'To',
        weekLabel: 'W',
        daysOfWeek: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        firstDay: 1
    };

    configCalendar = {};

    ngOnInit() {
        // this.montarCalendario(
        //     moment().subtract(moment().isoWeekday(), 'days'),
        //     moment().subtract(moment().isoWeekday(), 'days').add(6, 'days')
        // );

        this.montarCalendario(
            null,
            null
        );
    }

    chamarOnChange(dataInicio, dataTermino, label) {

        const dataInicioOuNula = !dataInicio ? null : dataInicio.toDate();
        const dataTerminoOuNula = !dataTermino ? null : dataTermino.toDate();

        if (dataInicio) {
            $('.input--data').val(dataInicio.format('DD/MM/YYYY') + ' - ' + dataTermino.format('DD/MM/YYYY'));
        }

        this.onChangeData.emit({ dataInicio: dataInicioOuNula, dataTermino:  dataTerminoOuNula });
    }

    montarCalendario(startDateAtual, endDateAtual) {

        const formatoDaDatar = '';

        this.configCalendar = {
            autoUpdateInput: false,
            startDate: startDateAtual || moment().subtract(moment().isoWeekday(), 'days'),
            endDate: endDateAtual || moment().subtract(moment().isoWeekday(), 'days').add(6, 'days'),
            opens: 'center',
            drops: 'up',
            ranges: this.rangesCalendar,
            locale: this.localeCalendar
        };

        const configuracao = this.configCalendar;

        $(function(){
            $('.input--data').daterangepicker(configuracao, this.chamarOnChange.bind(this));
            $('.input--data').on('cancel.daterangepicker', function(ev, picker) {
                $('.input--data').val('');
                this.chamarOnChange(null, null);
            }.bind(this));

            this.chamarOnChange(startDateAtual, endDateAtual);
        }.bind(this));

        if (startDateAtual == null) {
            $('.input--data').val('');
        }

    }

    public get dataInicial(): Moment {
        const drp = $('.input--data').data('daterangepicker');
        return  drp.startDate;
    }

    public get dataFinal(): Moment {
        const drp = $('.input--data').data('daterangepicker');
        return  drp.endDate;
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
