import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPorCepComponent } from './buscar-por-cep.component';

describe('BuscarPorCepComponent', () => {
  let component: BuscarPorCepComponent;
  let fixture: ComponentFixture<BuscarPorCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarPorCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPorCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
