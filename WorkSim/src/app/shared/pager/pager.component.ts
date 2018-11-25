import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as _ from 'underscore';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pdg-paginacao',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.sass']
})
export class PagerComponent implements OnInit {

  @Output() paginaAlterada = new EventEmitter();
  @Output() paginaAlteradaComOrigem = new EventEmitter();
  @Output() informacaoAlterada = new EventEmitter();

  _quantidadeRegistros = 0;
  _page = 1;
  _pageSize = 10;
  pageTotal = 0;
  paginas: number[] = [];

  primeiroElemento = 0;
  ultimoElemento = 0;
  ul: 0;

  _defaultPage = 1;
  _defautlSize = 10;
  _defaultQuantidadeRegistros = 0;

  @Input('somenteInformacao')
  somenteInformacao: false;

  @Input('origem')
  origem: {};

  constructor() { }

  ngOnInit() {
  }

  @Input('quantidadeRegistros')
  public set quantidadeRegistros(v: number) {
    this._quantidadeRegistros = v || this._defaultQuantidadeRegistros;
    this.atualizarPaginacao();
  }
  public get quantidadeRegistros(): number {
    return this._quantidadeRegistros;
  }

  @Input('pageSize')
  public set pageSize(v: number) {
    this._pageSize = v || this._defaultPage;
    this.atualizarPaginacao();
  }
  public get pageSize(): number {
    return this._pageSize;
  }

  @Input('page')
  public set page(v: number) {
    this._page = v;
    this.atualizarPaginacao();

    if (this.paginaAlterada) {
      this.paginaAlterada.emit(this._page);
    }

    if (this.paginaAlteradaComOrigem) {
      this.paginaAlteradaComOrigem.emit({page: this._page, origem: this.origem});
    }
  }
  public get page(): number {
    return this._page;
  }

  paginaAnterior() {
    if (this.page - 1 < 1) {
      return;
    }
    this.page = this.page - 1;
  }

  proximaPagina() {
    if (this.page + 1 > this.pageTotal) {
      return;
    }

    this.page = this.page + 1;
  }

  ultimaPagina() {
    this.page = this.pageTotal;
  }

  primeiraPagina() {
    this.page = 1;
  }

  alterarPaginaCorrente(page: number) {
    this.page = page;
  }

  atualizarPaginacao() {

    this.pageTotal = Math.ceil(+this.quantidadeRegistros / this.pageSize);

    if (isNaN(this.page)) {
      this._page = this.pageTotal;
    }

    let numeroDaPrimeiraPaginaExibida: number, numeroDaUltimaPaginaExibida: number;
    const totalDeBotoesDaTela = 10;
    const totalDeControlesDeNavegacao = 4;

    if (this.pageTotal <= totalDeBotoesDaTela) {
      // less than 10 total pages so show all
      numeroDaPrimeiraPaginaExibida = 1;
      numeroDaUltimaPaginaExibida = this.pageTotal;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (this.page <= 6) {
        numeroDaPrimeiraPaginaExibida = 1;
        numeroDaUltimaPaginaExibida = 10;
      } else if (this.page + totalDeControlesDeNavegacao >= this.pageTotal) {
        numeroDaPrimeiraPaginaExibida = this.pageTotal - 9;
        numeroDaUltimaPaginaExibida = this.pageTotal;
      } else {
        numeroDaPrimeiraPaginaExibida = this.page - 5;
        numeroDaUltimaPaginaExibida = this.page + totalDeControlesDeNavegacao;
      }
    }

    this.primeiroElemento = (this.page - 1) * this.pageSize + 1;
    this.ultimoElemento = Math.min(this.primeiroElemento + this.pageSize - 1, +this.quantidadeRegistros);

    this.paginas = _.range(numeroDaPrimeiraPaginaExibida, numeroDaUltimaPaginaExibida + 1);
  }

  numberToReal(numeroSemFormatacao) {
    const numero = numeroSemFormatacao.toFixed(2).split('.');
    numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero[0];
  }

}
