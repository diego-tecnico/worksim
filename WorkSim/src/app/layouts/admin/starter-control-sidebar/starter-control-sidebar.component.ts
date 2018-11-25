import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "./../../../usuarios/usuarios.service";

@Component({
  selector: 'app-starter-control-sidebar',
  templateUrl: './starter-control-sidebar.component.html',
  styleUrls: ['./starter-control-sidebar.component.css']
})
export class StarterControlSidebarComponent implements OnInit {

  constructor(public usuarioService: UsuariosService) { }

  ngOnInit() {
  }

}
