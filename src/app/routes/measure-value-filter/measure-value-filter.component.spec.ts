import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureValueFilterComponent } from './measure-value-filter.component';

describe('MeasureValueFilterComponent', () => {
  let component: MeasureValueFilterComponent;
  let fixture: ComponentFixture<MeasureValueFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasureValueFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasureValueFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
