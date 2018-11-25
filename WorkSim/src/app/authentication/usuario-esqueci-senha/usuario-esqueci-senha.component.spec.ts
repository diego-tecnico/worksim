import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEsqueciSenhaComponent } from './usuario-esqueci-senha.component';

describe('UsuarioEsqueciSenhaComponent', () => {
  let component: UsuarioEsqueciSenhaComponent;
  let fixture: ComponentFixture<UsuarioEsqueciSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioEsqueciSenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEsqueciSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
