import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRangeComponent } from './date-range.component';

describe('DataRangeComponent', () => {
  let component: DataRangeComponent;
  let fixture: ComponentFixture<DataRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
