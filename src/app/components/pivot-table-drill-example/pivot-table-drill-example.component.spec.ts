import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotTableDrillExampleComponent } from './pivot-table-drill-example.component';

describe('PivotTableDrillExampleComponent', () => {
  let component: PivotTableDrillExampleComponent;
  let fixture: ComponentFixture<PivotTableDrillExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivotTableDrillExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotTableDrillExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
