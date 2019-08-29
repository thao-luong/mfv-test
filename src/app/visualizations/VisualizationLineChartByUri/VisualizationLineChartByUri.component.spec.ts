import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizationLineChartByUriComponent } from './VisualizationLineChartByUri.component';

describe('VisualizationLineChartByUriComponent', () => {
  let component: VisualizationLineChartByUriComponent;
  let fixture: ComponentFixture<VisualizationLineChartByUriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationLineChartByUriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationLineChartByUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
