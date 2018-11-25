import { Component, OnInit, Directive, ElementRef } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/finally';
import { ServicoSemanalService } from '../servico-semanal.service';
import { Inject } from '@angular/core';
import { IPeriodo } from '../../shared/date-range/date-range.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpAppClient } from '../../shared/http-app-client.service';
@Component({
  selector: 'painel-legislativa',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.sass'],
  providers: [ServicoSemanalService]
})

export class PainelComponent implements OnInit {
  chart = [];
  carregando = true;
  CheckinsHoje = 9;
  AlunosAtivos = 81;
  FaturamentoBox = 125763.94;
  ValorEstoque = 16323;
  ReceitasMes = 250984.67;
  FaturamentoProdCantina = 78326.17;
  DespesasCusto = 22.876;
  EstoqueBaixo = 5;
  ConclusoesHoje = 6;
  AlunosInativos = 19;
  DataAtual = new Date();
  DataDia = "29/10/2018";
  periodo: IPeriodo = {};


  typeAtivoInativo = 'doughnut';
  typeFaturamentoBoxCantina = 'bar';
  typeCheckinConclusao = 'doughnut';
  dataAtivoInativo = {
    labels: ["Ativos", "Inativos"],
    datasets: [
      {
        label: "Alunos",
        data: [this.AlunosAtivos, this.AlunosInativos],
        backgroundColor: [
          this.dynamicColors(),
          this.dynamicColors()
        ]
      }
    ]
  };
  dataCheckinConclusao = {
    labels: ["Check-in", "Conclusao"],
    datasets: [
      {
        label: "Alunos",
        data: [this.CheckinsHoje, this.ConclusoesHoje],
        backgroundColor: [
          this.dynamicColors(),
          this.dynamicColors()
        ]
      }
    ]
  };
  dataFaturamentoBoxCantina = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    datasets: [
      {
        label: "Box",
        data: [0, 0, 0, 0, 72156.90, 12345.35, 0, 0, 0, this.FaturamentoBox],
        backgroundColor: [
          '#3a347c',
          '#3a347c',
          '#3a347c',
          '#3a347c',
          '#3a347c',
          '#3a347c',
          '#3a347c',
          '#3a347c',
          '#3a347c',
          '#3a347c'
        ]
      },
      {
        label: "Cantina",
        data: [0, 0, 0, 0, 53927.45, 959.03, 0, 0, 0, this.FaturamentoProdCantina],
        backgroundColor: [
          '#3a8725',
          '#3a8725',
          '#3a8725',
          '#3a8725',
          '#3a8725',
          '#3a8725',
          '#3a8725',
          '#3a8725',
          '#3a8725',
          '#3a8725'
        ]
      }
    ]
  };

  options = {
    responsive: true,
    maintainAspectRatio: false,

  };
  public dynamicColors() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };
  constructor(
    private elementRef: ElementRef,
    private activateRoute: ActivatedRoute,
    private dashboardService: DashboardService,
    private toastrService: ToastrService,
    private _periodoService: ServicoSemanalService,
    private router: Router
  ) { }
  public ngOnInit() {
    this.carregando = false;
  }
}
