import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAttributeFilterComponent } from './new-attribute-filter.component';

describe('NewAttributeFilterComponent', () => {
  let component: NewAttributeFilterComponent;
  let fixture: ComponentFixture<NewAttributeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAttributeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAttributeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
