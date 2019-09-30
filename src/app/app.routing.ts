import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { PieChartComponent } from './components/PieChart/PieChart.component';
import { BarChartComponent } from './components/BarChart/BarChart.component';
import { PivotTableComponent } from './components/PivotTable/PivotTable.component';
import { ColumnChartComponent } from './components/ColumnChart/ColumnChart.component';
import { LineChartComponent } from './components/LineChart/LineChart.component';
import { LineChartHasSegmentByComponent } from './components/LineChartHasSegmenyBy/LineChartHasSegmenyBy.component';
import { AreaChartComponent } from './components/AreaChart/AreaChart.component';
import { AreaChart2Component } from './components/AreaChartHasColorPalette/AreaChartHasColorPalette.component';
import { ComboChartComponent } from './components/ComboChart/ComboChart.component';
import { HeatMapComponent } from './components/HeatMap/HeatMap.component';
import { DonutChartComponent } from './components/DonutChart/DonutChart.component';
import { TreemapComponent } from './components/TreeMap/TreeMap.component';
import { ScatterPlotComponent } from './components/ScatterChart/ScatterChart.component';
import { BubbleChartComponent } from './components/BubbleChart/BubbleChart.component';
import { TableComponent } from './components/table/table.component';
import { PivotTableTotalsComponent } from './components/PivotTableTotal/PivotTableTotal.component';
import { VisualizationPivotTableComponent } from './visualizations/VisualizationPivotTable/VisualizationPivotTable.component';
import { VisualizationAreaChartComponent } from './visualizations/VisualizationAreaChart/VisualizationAreaChart.component';
import { VisualizationAreaChartByUriComponent } from './visualizations/VisualizationAreaChartByUri/VisualizationAreaChartByUri.component';
import { VisualizationBarChartComponent } from './visualizations/VisualizationBarChart/VisualizationBarChart.component';
import { VisualizationColumnChartComponent } from './visualizations/VisualizationColumnChart/VisualizationColumnChart.component';
import { VisualizationLineChartComponent } from './visualizations/VisualizationLineChart/VisualizationLineChart.component';
import { VisualizationLineChartByUriComponent } from './visualizations/VisualizationLineChartByUri/VisualizationLineChartByUri.component';
import { VisualizationColumnChartByUriComponent } from './visualizations/VisualizationColumnChartByUri/VisualizationColumnChartByUri.component';
import { MeasureSortingExampleComponent } from './components/MeasureSortingExample/MeasureSortingExample.component';
import { AttributeSortingExampleComponent } from './components/AttributeSortingExample/AttributeSortingExample.component';
import { PreviousPeriodHeadLineExampleComponent } from './components/PreviousPeriodHeadlineExample/PreviousPeriodHeadlineExample.component';
import { SamePeriodColumnChartExampleComponent } from './components/SamePeriodColumnChartExample/SamePeriodColumnChartExample.component';
import { BasicComponentsComponent } from './routes/BasicComponents/BasicComponents.component';
import { PivotTableComponentsComponent } from './routes/PivotTableComponents/PivotTableComponents.component';
import { SortingComponentsComponent } from './routes/SortingComponents/SortingComponents.component';
import { TimeOverTimeComparisonComponent } from './routes/TimeOverTimeComparison/TimeOverTimeComparison.component';
import { AttributeFilterComponentsComponent } from './routes/AttributFilterComponents/AttributFilterComponents.component';
import { VisualizationComponentsComponent } from './routes/VisualizationComponents/VisualizationComponents.component';
import { ArithmeticMeasuresRatioComponent } from './components/ArithmeticMeasureRatio/ArithmeticMeasureRatio.component';
import { ArithmeticMeasureChangeComponent } from './components/ArithmeticMeasureChange/ArithmeticMeasureChange.component';
import { ArithmeticMeasureSumComponent } from './components/ArithmeticMeasureSum/ArithmeticMeasureSum.component';
import { ArithmeticMeasureMultiplicationComponent } from './components/ArithmeticMeasureMultiplication/ArithmeticMeasureMultiplication.component';
import { ArithmeticMeasureDrillingComponent } from './components/ArithmeticMeasureDrilling/ArithmeticMeasureDrilling.component';
import { ArithmeticMeasureComponentsComponent } from './routes/ArithmeticMeasureComponents/ArithmeticMeasureComponents.component';
import { DrillingComponentsComponent } from './routes/drilling-components/drilling-components.component';
import { PivotTableDrillExampleComponent } from './components/pivot-table-drill-example/pivot-table-drill-example.component';




const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'pie-chart', component: PieChartComponent },
    { path: 'bar-chart', component: BarChartComponent },
    { path: 'pivot-table', component: PivotTableComponent },
    { path: 'pivot-table-totals', component: PivotTableTotalsComponent },
    { path: 'table', component: TableComponent },
    { path: 'column-chart', component: ColumnChartComponent },
    { path: 'line-chart', component: LineChartComponent },
    { path: 'line-chart-has-segment-by', component: LineChartHasSegmentByComponent },
    { path: 'area-chart', component: AreaChartComponent },
    { path: 'area-chart2', component: AreaChart2Component },
    { path: 'combo-chart', component: ComboChartComponent },
    { path: 'heat-map', component: HeatMapComponent },
    { path: 'tree-map', component: TreemapComponent },
    { path: 'donut-chart', component: DonutChartComponent },
    { path: 'scatter-plot', component: ScatterPlotComponent },
    { path: 'bubble-chart', component: BubbleChartComponent },
    { path: 'visualization-area-chart', component: VisualizationAreaChartComponent },
    { path: 'visualization-area-chart-by-uri', component: VisualizationAreaChartByUriComponent },
    { path: 'visualization-pivot-table', component: VisualizationPivotTableComponent },
    { path: 'visualization-bar-chart', component: VisualizationBarChartComponent },
    { path: 'visualization-column-chart', component: VisualizationColumnChartComponent },
    { path: 'visualization-column-chart-by-uri', component: VisualizationColumnChartByUriComponent },
    { path: 'visualization-line-chart', component: VisualizationLineChartComponent },
    { path: 'visualization-line-chart-by-uri', component: VisualizationLineChartByUriComponent },
    { path: 'measure-sorting', component: MeasureSortingExampleComponent },
    { path: 'attribute-sorting', component: AttributeSortingExampleComponent },
    { path: 'previous-period-headline-example', component: PreviousPeriodHeadLineExampleComponent },
    { path: 'same-period-column-chart-example', component: SamePeriodColumnChartExampleComponent },
    { path: 'basic-components', component: BasicComponentsComponent },
    { path: 'pivot-table-components', component: PivotTableComponentsComponent },
    { path: 'sorting-components', component: SortingComponentsComponent },
    { path: 'time-over-time-comparison', component: TimeOverTimeComparisonComponent },
    { path: 'attribute-filter-components', component: AttributeFilterComponentsComponent },
    { path: 'drilling-components', component: DrillingComponentsComponent },
    { path: 'visualization-components', component: VisualizationComponentsComponent },
    { path: 'arithmetic-measures-ratio', component: ArithmeticMeasuresRatioComponent },
    { path: 'arithmetic-measures-change', component: ArithmeticMeasureChangeComponent },
    { path: 'arithmetic-measures-sum', component: ArithmeticMeasureSumComponent },
    { path: 'arithmetic-measures-multiplication', component: ArithmeticMeasureMultiplicationComponent },
    { path: 'arithmetic-measures-drilling', component: ArithmeticMeasureDrillingComponent },
    { path: 'arithmetic-measure-components', component: ArithmeticMeasureComponentsComponent },
    { path: 'pivot-table-drill-example', component: PivotTableDrillExampleComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);