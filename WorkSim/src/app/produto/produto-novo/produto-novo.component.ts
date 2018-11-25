import { Component, OnInit } from '@angular/core';
import { IProduto } from '../../models/IProduto';
import { ICategoria } from '../../models/ICategoria';
import { ProdutoService } from '../produto.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.sass'],
})
export class ProdutoNovoComponent implements OnInit {
  produto: IProduto = {};
  carregando = false;
  categorias: ICategoria[] = [];
  constructor(private produtoService: ProdutoService,
    private toastrService: ToastrService,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.obterCategorias();
  }

  obterCategorias() {
    this.produtoService.getCategorias()
      .subscribe((res) => {
        this.categorias = res.categorias;
      });
  }
  novoProduto() {
    this.produtoService.novoProduto(this.produto)
      .subscribe((res) => {
        this.toastrService.success(res.message);
        this.router.navigateByUrl('/produto/listar');
      });
  }
  cancelar() {
    this.location.back();
  }

}
