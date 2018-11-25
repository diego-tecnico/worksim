import { Component, OnInit } from '@angular/core';
import { IProduto } from '../../models/IProduto';
import { ProdutoService } from '../produto.service';
import { UsuariosService } from '../../usuarios/usuarios.service';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.sass']
})
export class ProdutoListarComponent implements OnInit {
  produtos: IProduto[] = [];
  carregando = false;
  constructor(
    private produtoService: ProdutoService,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit() {
    this.carregarProdutos();
  }
  carregarProdutos() {
    this.carregando = true;
    this.produtoService.getProdutos()
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((x) => {
        console.log(x);
        this.produtos = x.produtos;
      });
  }
}
