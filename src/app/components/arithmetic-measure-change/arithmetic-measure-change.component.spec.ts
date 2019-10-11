import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArithmeticMeasureChangeComponent } from './arithmetic-measure-change.component';

describe('ArithmeticMeasureChangeComponent', () => {
  let component: ArithmeticMeasureChangeComponent;
  let fixture: ComponentFixture<ArithmeticMeasureChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArithmeticMeasureChangeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArithmeticMeasureChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
