import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import 'rxjs/add/operator/finally';
import {IUsuario} from '../../models/IUsuario';
import {IFinalizarCadastro} from '../../models/IFinalizarCadastro';
import {IUF} from '../../models/IUF';
import {EnderecoService} from '../../shared/endereco/endereco.service';
import {IBairros} from '../../models/IBairros';
import {IGS_municipio} from '../../models/IGS_municipio';
import {UsuariosService} from '../usuarios.service';
import {IPessoa} from '../../models/IPessoa';
import {GruposService} from '../../grupos/grupos.service';
import {IGrupo} from '../../models/IGrupo';
import {EmpresasService} from '../../empresas/empresas.service';

@Component({
  selector: 'app-usuario-finalizar-cadastro',
  templateUrl: './usuario-finalizar-cadastro.component.html',
  styleUrls: ['./usuario-finalizar-cadastro.component.sass']
})

export class UsuarioFinalizarCadastroComponent implements OnInit {

  carregando = true;
  APENAS_UM_MUNICIPIO = 1;
  USUARIO_ADMIN = 1;

  finalizarCadastro: IFinalizarCadastro = {
    gs_pessoa_juridica: {},
    gs_endereco: {},
    gs_usuario_grupo: {},
    gs_filial: {},
    gs_contato: {}
  };

  ufs: IUF[] = [];
  municipios: IGS_municipio[] = [];
  bairros: IBairros[] = [];
  pessoa: IPessoa = {};
  usuario: IUsuario = {};
  grupos: IGrupo[] = [];
  empresas: IPessoa[] = [];

  public maskTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskFixo = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskCPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public maskCNPJ = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(
    private activateRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router,
    private enderecoService: EnderecoService,
    private usuarioService: UsuariosService,
    private grupoService: GruposService,
    private empresasService: EmpresasService
  ) {
  }

  public ngOnInit() {
    this.obterUfs();
    this.obterGrupos();
    this.obterPessoa();
    this.obterEmpresas();
  }

  obterPessoa() {
    this.usuarioService.obterPessoa()
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((pessoa) => {
        this.pessoa = pessoa;
      });

    this.usuarioService.getMeuUsuario()
      .subscribe((usuario) => {
        this.usuario = usuario;
      });
  }

  obterUfs() {
    this.enderecoService.obterUfs()
      .subscribe((ufs) => {
        this.ufs = ufs;
      });
  }

  obterMunicipios(uf: string) {
    this.enderecoService.obterMunicipios(uf)
      .subscribe((municipios) => {
        this.municipios = municipios;
        if (this.municipios.length === this.APENAS_UM_MUNICIPIO) {
          this.obterBairros(this.municipios[0].cd_municipio);
        }
      });
  }

  obterBairros(municipio: string) {
    this.enderecoService.obterBairros(municipio)
      .subscribe((bairros) => {
        this.bairros = bairros;
        if (this.bairros) {
          this.finalizarCadastro.gs_endereco.cd_bairro = this.bairros[0].cd_bairro;
        }
      });
  }

  obterGrupos() {
    this.grupoService.obterGrupos()
      .subscribe((x) => {
        this.grupos = x;
      });
  }

  obterEmpresas() {
    this.empresasService.obterEmpresas()
      .subscribe((x) => {
        this.empresas = x.empresas;
        console.log(this.empresas);
      });
   }

  verificarEmail(email: string) {
    this.usuarioService.verificarEmail(email)
      .subscribe((x) => {
        const msg = x.okMessage;
        if (msg) {
          console.log(msg);
        }
      });
  }

  verificarCnpj(cnpj: string) {

    cnpj = this.removerCaracteresEspeciais(cnpj);

    this.usuarioService.verificarCnpj(cnpj)
      .subscribe((x) => {
        const msg = x.okMessage;
        if (msg) {
          console.log(msg);
        }
      });
  }

  removerCaracteresEspeciais(valor) {
    if(valor)
      return valor.replace(/[^\w\s]/gi, '');
  }

  finalizarCadastroEmpresa() {
    this.finalizarCadastro.gs_usuario_grupo.sq_grupo = this.USUARIO_ADMIN;
    this.finalizarCadastro.gs_pessoa_juridica.nr_cnpj = this.removerCaracteresEspeciais(this.finalizarCadastro.gs_pessoa_juridica.nr_cnpj);

    this.usuarioService.finalizarCadastro(this.finalizarCadastro)
      .subscribe((Response) => {
        this.toastrService.success('Cadastro Finalizado com Sucesso');
          setTimeout(()=>
          {
            this.router.navigateByUrl('/dashboard/painel');
          },3000);
      });

  }


}
