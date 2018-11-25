import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroListarComponent } from './financeiro-listar.component';

describe('FinanceiroListarComponent', () => {
  let component: FinanceiroListarComponent;
  let fixture: ComponentFixture<FinanceiroListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceiroListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceiroListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
