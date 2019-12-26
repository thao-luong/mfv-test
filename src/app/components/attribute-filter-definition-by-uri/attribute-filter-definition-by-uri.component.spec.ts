import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeFilterDefinitionByURIComponent } from './attribute-filter-definition-by-uri.component';

describe('AttributeFilterDefinitionByURIComponent', () => {
  let component: AttributeFilterDefinitionByURIComponent;
  let fixture: ComponentFixture<AttributeFilterDefinitionByURIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeFilterDefinitionByURIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeFilterDefinitionByURIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
