import { PesquisarChamadosService } from './pesquisar-chamados.service';
import { Component, OnInit } from '@angular/core';
import { IFiltros } from '../../interfaces/IFiltros';
import { IChamados } from '../../interfaces/IChamados';
import { ITipos } from '../../interfaces/ITipos';
import { IFiltrosUsuario } from '../../interfaces/IFiltrosUsuario';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-chamados',
  templateUrl: './pesquisar-chamados.component.html',
  styleUrls: ['./pesquisar-chamados.component.css']
})

export class PesquisarChamadosComponent implements OnInit {

  constructor(public pesquisarChamadosService: PesquisarChamadosService) { }

  filtros: IFiltros = {};
  chamados: IChamados[] = [];
  filtrosUsuario: IFiltrosUsuario = {};

  tipos = [];
  grupos = [];
  setores = [];
  usuarios = [];
  categorias = [];
  lstFiltros = {};

  setorId;

  tiposDeChk = [{ nome: 'todos', value: false }, { nome: 'aberto', value: false }, { nome: 'reaberto', value: false }, { nome: 'devolvido', value: false }, { nome: 'finalizado', value: false }, { nome: 'emAtendimento', value: false }];
  bkTipo = this.tiposDeChk;

  sla = {
    foraDoPrazo: 'F',
    dentroDoprazo: 'P'
  };

  ngOnInit() {
    // this.obterFiltros();
    this.obterSetores();
    this.obterCategoria();
    this.obterUsuarios();

  }

  chkTodos(chkTodos) {
    if (chkTodos.checked)
      this.tiposDeChk.map(x => x.value = true);
    else
      this.tiposDeChk.map(x => x.value = false);
  }

  chkFiltros(acao, chkTipo) {
    this.tiposDeChk.find(x => x.nome == chkTipo.nome).value = acao.checked;
    this.verificarChkTodos();
  }

  verificarChkTodos() {
    let checks = this.tiposDeChk.filter(x => x.value == true && x.nome != 'todos').length == (this.tiposDeChk.length - 1);

    if (checks)
      this.tiposDeChk.find(x => x.nome == 'todos').value = true;
    else
      this.tiposDeChk.find(x => x.nome == 'todos').value = false;
  }

  obterUsuarios() {
    this.pesquisarChamadosService.obterUsuarios(this.filtrosUsuario)
      .subscribe(x => {
        this.usuarios = x.usuarios;
        console.log(this.usuarios);
      });
  }

  obterSetores() {
    this.pesquisarChamadosService.obterSetores()
      .subscribe(x => {
        this.setores = x.setores;
        console.log(this.setores);
      });
  }

  obterCategoria() {
    this.pesquisarChamadosService.obterCategoria(1)
      .subscribe(x => {
        this.categorias = x.categorias;
        console.log(this.categorias);
      });
  }

  obterChamados() {
    this.pesquisarChamadosService.obterChamados(this.filtros)
      .subscribe((x) => {
        this.chamados = <IChamados[]>x.chamados;
        console.dir(this.chamados);
      });
  }

  limpar() {
    this.filtros = {};
    this.chamados = [];
  }

  obterSla(estaNoPrazo: boolean) {
    if (estaNoPrazo)
      return this.sla.dentroDoprazo;
    return this.sla.foraDoPrazo;
  }

  obterCor(estaNoPrazo: boolean) {
    return {
      'EstaNoPrazo': estaNoPrazo,
      'ForaDoPrazo': !estaNoPrazo
    };

  }

  obterChamado() {
    //this.homeService.obterChamado()
    //                .subscribe((x) => {
    //                  this.chamados = <IChamados[]>x.chamados;
    //                });
  }

  obterFiltros() {
    this.pesquisarChamadosService.obterFiltros()
      .subscribe((x) => {
        this.tipos = x.tipos;
        this.grupos = x.grupos;
      });
  }



}
