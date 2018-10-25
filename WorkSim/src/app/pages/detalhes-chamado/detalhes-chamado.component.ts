import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalhesChamadoService } from './detalhes-chamado.service';
import { IAcoes } from '../../interfaces/IAcoes';
import { IAnexos } from '../../interfaces/IAnexos';
import { IChamados } from '../../interfaces/IChamados';
import { IArquivoAnexo } from '../../interfaces/IArquivoAnexo';

import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalhes-chamado',
  templateUrl: './detalhes-chamado.component.html',
  styleUrls: ['./detalhes-chamado.component.css']
})
export class DetalhesChamadoComponent implements OnInit {

  constructor(private detalhesChamados: DetalhesChamadoService,
              private activeRoute: ActivatedRoute,
              private toastrService: ToastrService) { }

  mostrarAudio = false;
  pathAudio = "http://192.168.1.19:1000/gravacao_asterisk/";


  acoes: IAcoes[] = [];
  anexos: IAnexos[] = [];
  chamado: IChamados = {};
  novoTexto;

  ngOnInit() {
    //this.activeRoute
    //  .params
    //  .subscribe(chamado => {
    //    this.obterAcoesChamado(+chamado.id);
    //  });

   
  }

  obterAcoesChamado(id_Chamado: number) {
    this.detalhesChamados.obterChamado(id_Chamado)
      .subscribe((x) => {
        this.acoes = <IAcoes[]>x.acoes || [];
        this.anexos = <IAnexos[]>x.anexos || [];
        this.chamado = <IChamados>x.chamado || {};

        this.UniqueId();
        if (this.chamado.uniqueid)
          this.obterAudioChamado();
      })
  }

  obterAudioChamado() {
    var data_chamado = moment(this.chamado.data_criacao).format('YYYYMMDD');
    this.pathAudio += `${data_chamado}/${this.chamado.uniqueid}.ogg`
    console.log(this.pathAudio);
    this.mostrarAudio = true;
  }

  obterDescricao(descricao) {
    if (!descricao)
        return descricao;
  }

  UniqueId() {
    this.chamado.uniqueid = this.chamado.uniqueid.replace(",", ".");
  }


  downloadAnexo(id_Chamado: number, arquivoAnexo: IArquivoAnexo) {
    this.detalhesChamados.downloadAnexo(id_Chamado, arquivoAnexo)
      .subscribe((x) => {
        console.log(x);
        this.toastrService.success(x.message);
      })
  }

  corDoIconePorAcao(acao) {
    switch (acao) {
      case 'ABRIU':
        return 'fas fa-envelope icon bg-green';
      case 'ENCAMINHOU':
        return 'fas fa-share icon bg-blue';
      case 'ASSUMIU':
        return 'fas fa-thumbs-up icon bg-green';
      case 'FECHOU':
        return 'fas fa-times icon bg-red';
      case 'COMPLEMENTOU':
        return 'fas fa-edit icon bg-gray'
      case 'AGUARDO':
        return 'fas fa-pause icon bg-purple'
      case 'ALTEROU':
        return 'fas fa-edit icon bg-yellow'
      case 'REABRIU':
        return'fas fa-folder-open icon bg-green'
    }
  }


}
