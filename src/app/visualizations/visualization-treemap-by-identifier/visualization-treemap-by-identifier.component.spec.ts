import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationTreemapByIdentifierComponent } from './visualization-treemap-by-identifier.component';

describe('VisualizationTreemapByIdentifierComponent', () => {
  let component: VisualizationTreemapByIdentifierComponent;
  let fixture: ComponentFixture<VisualizationTreemapByIdentifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationTreemapByIdentifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationTreemapByIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
