import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByMeasureValueComponent } from './filter-by-measure-value.component';

describe('FilterByMeasureValueComponent', () => {
  let component: FilterByMeasureValueComponent;
  let fixture: ComponentFixture<FilterByMeasureValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterByMeasureValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByMeasureValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
