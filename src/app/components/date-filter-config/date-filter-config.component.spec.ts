import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateFilterConfigComponent } from './date-filter-config.component';

describe('DateFilterConfigComponent', () => {
  let component: DateFilterConfigComponent;
  let fixture: ComponentFixture<DateFilterConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFilterConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFilterConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
