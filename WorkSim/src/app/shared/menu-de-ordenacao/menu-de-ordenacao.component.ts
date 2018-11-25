import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICampoDeOrdenacao } from '../../models/IComOrdenacao';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'pdg-menu-de-ordenacao',
  templateUrl: './menu-de-ordenacao.component.html',
  styleUrls: ['./menu-de-ordenacao.component.sass']
})
export class MenuDeOrdenacaoComponent implements OnInit {

  @Input()
  ordernarPor: ICampoDeOrdenacao[];

  @Input()
  ordernarPorChange = new EventEmitter<ICampoDeOrdenacao[]>();

  @Input()
  listaDeCamposDisponiveis: ICampoDeOrdenacao[];

  @Output()
  campoIncluido = new EventEmitter<any>();

  @Output()
  campoRemovido = new EventEmitter<any>();

  @Output()
  limparCampos = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.verificarSeFiltroSelecionado();
  }

  verificarSeFiltroSelecionado(){
    if( $('.filter--selected').children().length > 0) {
      console.log('Has a child');
    }else {
      console.log('Dont has a child');
    }
  }

  incluirCampoNaOrdenacao(campo: ICampoDeOrdenacao, direcao: string) {
    let campoDoFiltro =
      this.ordernarPor
        .find(x => x.nomeDoCampo === campo.nomeDoCampo);

    if (campoDoFiltro) {
      campoDoFiltro.direcaoDaOrdenacao = direcao;
    } else {
      campoDoFiltro = {
        nomeDoCampo: campo.nomeDoCampo,
        descricao: campo.descricao,
        direcaoDaOrdenacao: direcao
      };

      this.ordernarPor.push(campo);
    }
    this.ordernarPorChange.emit(this.ordernarPor);
    this.campoIncluido.emit(campo);
  }

  limparCampo(campo: ICampoDeOrdenacao) {
    const indiceDaLinha = this
      .ordernarPor
      .findIndex(x => x.nomeDoCampo === campo.nomeDoCampo);

    this.ordernarPor.splice(indiceDaLinha, 1);
    this.ordernarPorChange.emit(this.ordernarPor);
    this.campoRemovido.emit(campo);
  }

  ocultarCampo(campo: ICampoDeOrdenacao): boolean {
    if (this.ordernarPor === undefined || this.ordernarPor === null) {
      this.ordernarPor = [];
      this.ordernarPorChange.emit([]);
    }
    const campoExiste = this.ordernarPor.some(x => x.nomeDoCampo === campo.nomeDoCampo);
    return campoExiste;
  }

  limparOrdenacao() {
    this.ordernarPor.splice(0, this.ordernarPor.length) ;
    this.ordernarPorChange.emit(this.ordernarPor);
    this.limparCampos.emit();
  }

}
