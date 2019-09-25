import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationScatterPlotByUriComponent } from './visualization-scatter-plot-by-uri.component';

describe('VisualizationScatterPlotByUriComponent', () => {
  let component: VisualizationScatterPlotByUriComponent;
  let fixture: ComponentFixture<VisualizationScatterPlotByUriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationScatterPlotByUriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationScatterPlotByUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
