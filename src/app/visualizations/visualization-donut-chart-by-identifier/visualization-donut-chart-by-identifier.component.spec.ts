import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationDonutChartByIdentifierComponent } from './visualization-donut-chart-by-identifier.component';

describe('VisualizationDonutChartByIdentifierComponent', () => {
  let component: VisualizationDonutChartByIdentifierComponent;
  let fixture: ComponentFixture<VisualizationDonutChartByIdentifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationDonutChartByIdentifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationDonutChartByIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
