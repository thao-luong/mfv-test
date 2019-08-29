import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PreviousPeriodHeadLineExampleComponent } from './PreviousPeriodHeadlineExample.component';

describe('PreviousPeriodHeadlineExampleComponent', () => {
  let component: PreviousPeriodHeadLineExampleComponent;
  let fixture: ComponentFixture<PreviousPeriodHeadLineExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousPeriodHeadLineExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousPeriodHeadLineExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
