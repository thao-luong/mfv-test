import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArithmeticMeasureComponentsComponent } from './ArithmeticMeasureComponents.component';

describe('ArithmeticMeasureComponentsComponent', () => {
  let component: ArithmeticMeasureComponentsComponent;
  let fixture: ComponentFixture<ArithmeticMeasureComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArithmeticMeasureComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArithmeticMeasureComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
