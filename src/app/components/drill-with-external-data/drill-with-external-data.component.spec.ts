import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillWithExternalDataComponent } from './drill-with-external-data.component';

describe('DrillWithExternalDataComponent', () => {
  let component: DrillWithExternalDataComponent;
  let fixture: ComponentFixture<DrillWithExternalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillWithExternalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillWithExternalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
