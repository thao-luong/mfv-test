import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationHeadlineByUriComponent } from './visualization-headline-by-uri.component';

describe('VisualizationHeadlineByUriComponent', () => {
  let component: VisualizationHeadlineByUriComponent;
  let fixture: ComponentFixture<VisualizationHeadlineByUriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationHeadlineByUriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationHeadlineByUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
