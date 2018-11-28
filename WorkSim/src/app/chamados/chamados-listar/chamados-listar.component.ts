import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from './../../models/IUsuario';
import { ToastrService } from 'ngx-toastr';
import { IUsuarios, ISetor } from '../../models/IFiltroUsuario';
import { SetorService } from '../../setor/setor.service';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { CategoriaService } from '../../categoria/categoria.service';
import { ICategoria } from '../../models/ICategoria';
import { IFiltrarChamado } from '../../models/IFiltrarChamado';

//const swal = require('sweetalert');

@Component({
  selector: 'pdg-chamados-listar',
  templateUrl: './chamados-listar.component.html',
  styleUrls: ['./chamados-listar.component.sass']
})
export class ChamadosListarComponent implements OnInit {

  usuarios: IUsuarios[] = [];
  categorias: ICategoria[] = [];
  setores: ISetor[] = [];
  filtros: IUsuarios = {};
  chamado: IFiltrarChamado = {};

  quantidadeDeChamados = 0;
  carregando = false;
  constructor(private toastrService: ToastrService,
    private setorService: SetorService,
    private usuariosService: UsuariosService,
    private categoriaService: CategoriaService) {
  }

  tiposDeChk = [{ nome: 'todos', value: false }, { nome: 'aberto', value: false }, { nome: 'reaberto', value: false }, { nome: 'devolvido', value: false }, { nome: 'finalizado', value: false }, { nome: 'emAtendimento', value: false }];
  sla = {
    foraDoPrazo: 'F',
    dentroDoprazo: 'P'
  };


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

    this.tiposDeChk.find(x => x.nome == 'todos').value = checks;
  }

  ngOnInit() {
    this.carregando = true;
    this.obterCategorias();
    this.obterColaboradores();
    this.obterSetores();
  }

  PesquisarChamado() {

  }


  obterCategorias() {
    this.categoriaService.obterCategorias()
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((x) => {
        this.categorias = x.categorias;
        console.log(this.categorias);
      })
  }

  obterColaboradores() {
    this.usuariosService.obterColaboradores(this.filtros)
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((x) => {
        this.usuarios = x.usuarios;
        console.log(this.usuarios);
      })
  }

  obterSetores() {
    this.setorService.obterSetores()
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((x) => {
        this.setores = x.setores;
        console.log(this.setores);
      })
  }

}
