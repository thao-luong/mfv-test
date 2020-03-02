import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvancedUseCasesComponent } from './advanced-use-cases.component';

describe('AdvancedUseCasesComponent', () => {
  let component: AdvancedUseCasesComponent;
  let fixture: ComponentFixture<AdvancedUseCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedUseCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedUseCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
