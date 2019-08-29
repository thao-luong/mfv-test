import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PieChartColorMappingComponent } from './PieChartColorMapping.component';

describe('PieChartColorMappingComponent', () => {
  let component: PieChartColorMappingComponent;
  let fixture: ComponentFixture<PieChartColorMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartColorMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartColorMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
