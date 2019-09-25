import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationPieChartByIdentifierComponent } from './visualization-pie-chart-by-identifier.component';

describe('VisualizationPieChartByIdentifierComponent', () => {
  let component: VisualizationPieChartByIdentifierComponent;
  let fixture: ComponentFixture<VisualizationPieChartByIdentifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationPieChartByIdentifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationPieChartByIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
