import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SortingComponentsComponent } from './SortingComponents.component';

describe('SortingComponentsComponent', () => {
  let component: SortingComponentsComponent;
  let fixture: ComponentFixture<SortingComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
