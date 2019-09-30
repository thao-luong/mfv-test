import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationBubbleChartByUriComponent } from './visualization-bubble-chart-by-uri.component';

describe('VisualizationBubbleChartByUriComponent', () => {
  let component: VisualizationBubbleChartByUriComponent;
  let fixture: ComponentFixture<VisualizationBubbleChartByUriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationBubbleChartByUriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationBubbleChartByUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
