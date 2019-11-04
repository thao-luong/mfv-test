import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaChartHasColorPaletteComponent } from './area-chart-has-color-palette.component';

describe('AreaChart2Component', () => {
  let component: AreaChartHasColorPaletteComponent;
  let fixture: ComponentFixture<AreaChartHasColorPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaChartHasColorPaletteComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaChartHasColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
