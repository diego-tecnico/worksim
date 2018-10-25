import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-novo-chamado',
  templateUrl: './novo-chamado.component.html',
  styleUrls: ['./novo-chamado.component.css']
})
export class NovoChamadoComponent implements OnInit {

  mostrarArquivos = false;
  updateTrumbowyg: Subject<any> = new Subject();
  opcoesTrumbowyg: any = {
    autogrow: true,
    removeformatPasted: true,
    semantic: false,
    lang: 'pt'
  };
  textoTrumbowyg = "";
  arquivos = [];


  constructor() { }


  ngOnInit() {
  }

  onChange(event: any) {

    if (this.arquivos.length > 0) {
      this.arquivos.push(...[].slice.call(event.target.files));
    } else {
      this.arquivos = [].slice.call(event.target.files);
    }

    this.existeArquivos();
  }

  removerArquivo(arquivo) {
    let posicaoArquivo = this.arquivos.map(n => n.name).indexOf(arquivo.name);
    this.arquivos.splice(posicaoArquivo, 1);

    this.existeArquivos();
  }

  existeArquivos() {
    if (this.arquivos.length > 0) {
      this.mostrarArquivos = true;
    } else {
      this.mostrarArquivos = false;
    }
  }


  buscarBeneficiarioPorCodigo() {
    console.log('buscar beneficiario por codigo');
  }

  buscarPorCep() {
    console.log('buscar endereço por cep');
  }

}
