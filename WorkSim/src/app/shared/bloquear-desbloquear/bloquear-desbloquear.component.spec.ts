import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloquearDesbloquearComponent } from './bloquear-desbloquear.component';

describe('BloquearDesbloquearComponent', () => {
  let component: BloquearDesbloquearComponent;
  let fixture: ComponentFixture<BloquearDesbloquearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloquearDesbloquearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloquearDesbloquearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
