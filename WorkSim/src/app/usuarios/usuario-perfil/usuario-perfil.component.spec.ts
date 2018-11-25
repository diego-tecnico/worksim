import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPainelComponent } from './usuario-perfil.component';

describe('UsuarioPainelComponent', () => {
  let component: UsuarioPainelComponent;
  let fixture: ComponentFixture<UsuarioPainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioPainelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
