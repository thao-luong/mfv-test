import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArithmeticMeasuresRatioComponent } from './ArithmeticMeasureRatio.component';
describe('ArithmeticMeasureRatioComponent', () => {
  let component: ArithmeticMeasuresRatioComponent;
  let fixture: ComponentFixture<ArithmeticMeasuresRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArithmeticMeasuresRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArithmeticMeasuresRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
