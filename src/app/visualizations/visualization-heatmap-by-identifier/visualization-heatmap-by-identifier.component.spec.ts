import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationHeatmapByIdentifierComponent } from './visualization-heatmap-by-identifier.component';

describe('VisualizationHeatmapByIdentifierComponent', () => {
  let component: VisualizationHeatmapByIdentifierComponent;
  let fixture: ComponentFixture<VisualizationHeatmapByIdentifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationHeatmapByIdentifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationHeatmapByIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
