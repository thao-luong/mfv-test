import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationPieChartByUriComponent } from './visualization-pie-chart-by-uri.component';

describe('VisualizationPieChartByUriComponent', () => {
  let component: VisualizationPieChartByUriComponent;
  let fixture: ComponentFixture<VisualizationPieChartByUriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationPieChartByUriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationPieChartByUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
