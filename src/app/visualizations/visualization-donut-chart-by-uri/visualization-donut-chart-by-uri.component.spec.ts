import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationDonutChartByUriComponent } from './visualization-donut-chart-by-uri.component';

describe('VisualizationDonutChartByUriComponent', () => {
  let component: VisualizationDonutChartByUriComponent;
  let fixture: ComponentFixture<VisualizationDonutChartByUriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationDonutChartByUriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationDonutChartByUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
