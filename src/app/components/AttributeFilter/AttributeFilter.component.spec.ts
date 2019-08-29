import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AttributeFilterComponent } from './AttributeFilter.component';

describe('AttributeFilterComponent', () => {
  let component: AttributeFilterComponent;
  let fixture: ComponentFixture<AttributeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
