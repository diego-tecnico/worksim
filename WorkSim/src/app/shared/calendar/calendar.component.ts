import { Component, OnInit, Output, Input } from '@angular/core';
import * as moment from 'moment';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.montarCalendar();
  }

  montarCalendar() {
    $(function() {
      $('input[name="calendario"]').daterangepicker({
        isInvalidDate: function (date) {
          // tslint:disable-next-line:curly
          if (date.isSameOrAfter(moment().add(1, 'days'), 'day'))
            return true;
          return false;
        },
        locale: {
          format: 'DD-MM-YYYY',
          separator: ' - ',
          applyLabel: 'Apply',
          cancelLabel: 'Cancel',
          fromLabel: 'From',
          toLabel: 'To',
          customRangeLabel: 'Custom',
          weekLabel: 'W',
          daysOfWeek: [
            'Dom',
            'Seg',
            'Ter',
            'Qua',
            'Qui',
            'Sex',
            'Sab'
          ],
          monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
          ],
          firstDay: 1
        },
        singleDatePicker: true,
        showDropdowns: true
      });
    });
    $('input[name="calendario"]').on(
      'apply.daterangepicker',
      function(ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY'));
      }
    );

    $('input[name="calendario"]').on(
      'cancel.daterangepicker',
      function(ev, picker) {
        $(this).val('');
      }
    );
  }

}
