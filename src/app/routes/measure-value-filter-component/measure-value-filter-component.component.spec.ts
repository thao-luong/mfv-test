import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureValueFilterComponentComponent } from './measure-value-filter-component.component';

describe('MeasureValueFilterComponentComponent', () => {
  let component: MeasureValueFilterComponentComponent;
  let fixture: ComponentFixture<MeasureValueFilterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasureValueFilterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasureValueFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
