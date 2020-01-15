import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateFilterConfigExampleComponent } from './date-filter-config-example.component';

describe('DateFilterConfigExampleComponent', () => {
  let component: DateFilterConfigExampleComponent;
  let fixture: ComponentFixture<DateFilterConfigExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFilterConfigExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFilterConfigExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
