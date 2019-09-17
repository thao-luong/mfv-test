import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillingComponentsComponent } from './drilling-components.component';

describe('DrillingComponentsComponent', () => {
  let component: DrillingComponentsComponent;
  let fixture: ComponentFixture<DrillingComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillingComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
