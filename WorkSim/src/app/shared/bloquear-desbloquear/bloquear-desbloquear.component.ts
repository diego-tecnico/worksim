import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pdg-bloquear-desbloquear',
  templateUrl: './bloquear-desbloquear.component.html',
  styleUrls: ['./bloquear-desbloquear.component.sass']
})
export class BloquearDesbloquearComponent {

  constructor() {}
  @Output() retorno = new EventEmitter();

  @Input() bloqueado;

  bloquearOuDesbloquear() {
    this.retorno.emit(this.bloqueado);
  }

   bgDropDown(status) {
    if (status) {
      return 'btn--danger--pdg';
    } else {
      return 'btn--success--pdg';
    }
  }

}
