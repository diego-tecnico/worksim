import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoNovoComponent } from './treino-novo.component';

describe('TreinoNovoComponent', () => {
  let component: TreinoNovoComponent;
  let fixture: ComponentFixture<TreinoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
