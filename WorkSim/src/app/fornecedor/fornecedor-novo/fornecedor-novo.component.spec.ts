import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorNovoComponent } from './fornecedor-novo.component';

describe('FornecedorNovoComponent', () => {
  let component: FornecedorNovoComponent;
  let fixture: ComponentFixture<FornecedorNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
