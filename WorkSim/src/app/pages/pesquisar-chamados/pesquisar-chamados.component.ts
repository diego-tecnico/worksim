import { PesquisarChamadosService } from './pesquisar-chamados.service';
import { Component, OnInit } from '@angular/core';
import { IFiltros } from '../../interfaces/IFiltros';
import { IChamados } from '../../interfaces/IChamados';
import { ITipos } from '../../interfaces/ITipos';

@Component({
  selector: 'app-chamados',
  templateUrl: './pesquisar-chamados.component.html',
  styleUrls: ['./pesquisar-chamados.component.css']
})

export class PesquisarChamadosComponent implements OnInit {

  constructor(public pesquisarChamadosService: PesquisarChamadosService) { }

  filtros: IFiltros = {};
  chamados: IChamados[] = [];
  tipos = [];
  grupos = [];

  sla = {
    foraDoPrazo: 'F',
    dentroDoprazo: 'P'
  };

  ngOnInit() {
    // this.obterFiltros();
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
