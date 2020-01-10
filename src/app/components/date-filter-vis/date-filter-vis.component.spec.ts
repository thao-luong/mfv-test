import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateFilterVisComponent } from './date-filter-vis.component';

describe('DateFilterVisComponent', () => {
  let component: DateFilterVisComponent;
  let fixture: ComponentFixture<DateFilterVisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFilterVisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFilterVisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
