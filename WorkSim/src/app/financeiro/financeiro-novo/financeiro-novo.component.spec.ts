import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroNovoComponent } from './financeiro-novo.component';

describe('FinanceiroNovoComponent', () => {
  let component: FinanceiroNovoComponent;
  let fixture: ComponentFixture<FinanceiroNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceiroNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceiroNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
