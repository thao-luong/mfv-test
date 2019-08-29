import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArithmeticMeasureDrillingComponent } from './ArithmeticMeasureDrilling.component';

describe('ArithmeticMeasureDrillingComponent', () => {
  let component: ArithmeticMeasureDrillingComponent;
  let fixture: ComponentFixture<ArithmeticMeasureDrillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArithmeticMeasureDrillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArithmeticMeasureDrillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
