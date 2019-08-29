import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmeticMeasureMultiplicationComponent } from './ArithmeticMeasureMultiplication.component';

describe('ArithmeticMeasureMultiplicationComponent', () => {
  let component: ArithmeticMeasureMultiplicationComponent;
  let fixture: ComponentFixture<ArithmeticMeasureMultiplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArithmeticMeasureMultiplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArithmeticMeasureMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
