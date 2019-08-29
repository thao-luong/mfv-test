import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmeticMeasureSumComponent } from './ArithmeticMeasureSum.component';

describe('ArithmeticMeasureSumComponent', () => {
  let component: ArithmeticMeasureSumComponent;
  let fixture: ComponentFixture<ArithmeticMeasureSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArithmeticMeasureSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArithmeticMeasureSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
