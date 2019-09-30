import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertComponent } from './components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { KpiComponent } from './components/kpi/kpi.component';
import { PivotTableComponent } from './components/PivotTable/PivotTable.component';
import { PieChartComponent } from './components/PieChart/PieChart.component';
import { BarChartComponent } from './components/BarChart/BarChart.component';
import { ColumnChartComponent } from './components/ColumnChart/ColumnChart.component';
import { LineChartComponent } from './components/LineChart/LineChart.component';
import { LineChartHasSegmentByComponent } from './components/LineChartHasSegmenyBy/LineChartHasSegmenyBy.component';
import { AreaChartComponent } from './components/AreaChart/AreaChart.component';
import { AreaChart2Component } from './components/AreaChartHasColorPalette/AreaChartHasColorPalette.component';
import { ComboChartComponent } from './components/ComboChart/ComboChart.component';
import { HeatMapComponent } from './components/HeatMap/HeatMap.component';
import { DonutChartComponent } from './components/DonutChart/DonutChart.component';
import { TreemapComponent } from './components/TreeMap/TreeMap.component';
import { BubbleChartComponent } from './components/BubbleChart/BubbleChart.component';
import { ScatterPlotComponent } from './components/ScatterChart/ScatterChart.component';
import { DualColumnChartComponent } from './components/DualColumnChart/DualColumnChart.component';
import { TableComponent } from './components/table/table.component';
import { PivotTableTotalsComponent } from './components/PivotTableTotal/PivotTableTotal.component';
import { VisualizationAreaChartComponent } from './visualizations/VisualizationAreaChart/VisualizationAreaChart.component';
import { VisualizationAreaChartByUriComponent } from './visualizations/VisualizationAreaChartByUri/VisualizationAreaChartByUri.component';
import { VisualizationPivotTableComponent } from './visualizations/VisualizationPivotTable/VisualizationPivotTable.component';
import { VisualizationColumnChartByUriComponent } from './visualizations/VisualizationColumnChartByUri/VisualizationColumnChartByUri.component';
import { VisualizationColumnChartComponent } from './visualizations/VisualizationColumnChart/VisualizationColumnChart.component';
import { VisualizationBarChartComponent } from './visualizations/VisualizationBarChart/VisualizationBarChart.component';
import { VisualizationBarChartByUriComponent } from './visualizations/VisualizationBarChartByUri/VisualizationBarChartByUri.component';
import { VisualizationLineChartComponent } from './visualizations/VisualizationLineChart/VisualizationLineChart.component';
import { VisualizationLineChartByUriComponent } from './visualizations/VisualizationLineChartByUri/VisualizationLineChartByUri.component';
import { MeasureSortingExampleComponent } from './components/MeasureSortingExample/MeasureSortingExample.component';
import { AttributeSortingExampleComponent } from './components/AttributeSortingExample/AttributeSortingExample.component';
import { SamePeriodColumnChartExampleComponent } from './components/SamePeriodColumnChartExample/SamePeriodColumnChartExample.component';
import { PreviousPeriodColumnChartExampleComponent } from './components/PreviousPeriodColumnChartExample/PreviousPeriodColumnChartExample.component';
import { PreviousPeriodHeadLineExampleComponent } from './components/PreviousPeriodHeadlineExample/PreviousPeriodHeadlineExample.component';
import { AttributeFilterExampleComponent } from './components/AttributeFilterExample/AttributeFilterExample.component';
import { AttributeFilterComponent } from './components/AttributeFilter/AttributeFilter.component';
import { BasicComponentsComponent } from './routes/BasicComponents/BasicComponents.component';
import { VisualizationComponentsComponent } from './routes/VisualizationComponents/VisualizationComponents.component';
import { PivotTableComponentsComponent } from './routes/PivotTableComponents/PivotTableComponents.component';
import { SortingComponentsComponent } from './routes/SortingComponents/SortingComponents.component';
import { TimeOverTimeComparisonComponent } from './routes/TimeOverTimeComparison/TimeOverTimeComparison.component';
import { AttributeFilterComponentsComponent } from './routes/AttributFilterComponents/AttributFilterComponents.component';
import { TableDrillExampleComponent } from './components/TableDrillExample/TableDrillExample.component';
import { ArithmeticMeasureChangeComponent } from './components/ArithmeticMeasureChange/ArithmeticMeasureChange.component';
import { ArithmeticMeasuresRatioComponent } from './components/ArithmeticMeasureRatio/ArithmeticMeasureRatio.component';
import { ArithmeticMeasureSumComponent } from './components/ArithmeticMeasureSum/ArithmeticMeasureSum.component';
import { ArithmeticMeasureMultiplicationComponent } from './components/ArithmeticMeasureMultiplication/ArithmeticMeasureMultiplication.component';
import { ArithmeticMeasureDrillingComponent } from './components/ArithmeticMeasureDrilling/ArithmeticMeasureDrilling.component';
import { PieChartColorMappingComponent } from './components/PieChartColorMapping/PieChartColorMapping.component';
import { ArithmeticMeasureComponentsComponent } from './routes/ArithmeticMeasureComponents/ArithmeticMeasureComponents.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { VisualizationPivotTableByUriComponent } from './visualizations/VisualizationPivotTableByUri/VisualizationPivotTableByUri.component';
import { DrillWithExternalDataComponent } from './components/drill-with-external-data/drill-with-external-data.component';
import { DrillingComponentsComponent } from './routes/drilling-components/drilling-components.component';
import { PivotTableDrillExampleComponent } from './components/pivot-table-drill-example/pivot-table-drill-example.component';
import { VisualizationHeadlineByUriComponent } from './visualizations/visualization-headline-by-uri/visualization-headline-by-uri.component';
import { VisualizationScatterPlotByUriComponent } from './visualizations/visualization-scatter-plot-by-uri/visualization-scatter-plot-by-uri.component';
import { VisualizationBubbleChartByUriComponent } from './visualizations/visualization-bubble-chart-by-uri/visualization-bubble-chart-by-uri.component';
import { VisualizationTreemapByIdentifierComponent } from './visualizations/visualization-treemap-by-identifier/visualization-treemap-by-identifier.component';
import { VisualizationHeatmapByIdentifierComponent } from './visualizations/visualization-heatmap-by-identifier/visualization-heatmap-by-identifier.component';
import { VisualizationDonutChartByIdentifierComponent } from './visualizations/visualization-donut-chart-by-identifier/visualization-donut-chart-by-identifier.component';
import { VisualizationPieChartByIdentifierComponent } from './visualizations/visualization-pie-chart-by-identifier/visualization-pie-chart-by-identifier.component';
import { VisualizationDonutChartByUriComponent } from './visualizations/visualization-donut-chart-by-uri/visualization-donut-chart-by-uri.component';
import { VisualizationPieChartByUriComponent } from './visualizations/visualization-pie-chart-by-uri/visualization-pie-chart-by-uri.component'



@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        KpiComponent,
        PivotTableComponent,
        TableComponent,
        PieChartComponent,
        BarChartComponent,
        ColumnChartComponent,
        LineChartComponent,
        LineChartHasSegmentByComponent,
        AreaChartComponent,
        AreaChart2Component,
        ComboChartComponent,
        HeatMapComponent,
        DonutChartComponent,
        TreemapComponent,
        DualColumnChartComponent,
        ScatterPlotComponent,
        BubbleChartComponent,
        VisualizationPivotTableComponent,
        VisualizationAreaChartComponent,
        VisualizationAreaChartByUriComponent,
        VisualizationPivotTableByUriComponent,
        VisualizationColumnChartByUriComponent,
        VisualizationColumnChartComponent,
        VisualizationBarChartComponent,
        VisualizationBarChartByUriComponent,
        VisualizationLineChartComponent,
        VisualizationLineChartByUriComponent,
        PivotTableTotalsComponent,
        MeasureSortingExampleComponent,
        AttributeSortingExampleComponent,
        SamePeriodColumnChartExampleComponent,
        PreviousPeriodHeadLineExampleComponent,
        PreviousPeriodColumnChartExampleComponent,
        AttributeFilterExampleComponent,
        AttributeFilterComponent,
        BasicComponentsComponent,
        PivotTableComponentsComponent,
        VisualizationComponentsComponent,
        SortingComponentsComponent,
        AttributeFilterComponentsComponent,
        TimeOverTimeComparisonComponent,
        TableDrillExampleComponent,
        MyNavComponent,
        ArithmeticMeasureChangeComponent,
        ArithmeticMeasuresRatioComponent,
        ArithmeticMeasureSumComponent,
        ArithmeticMeasureMultiplicationComponent,
        ArithmeticMeasureDrillingComponent,
        PieChartColorMappingComponent,
        ArithmeticMeasureComponentsComponent,
        HeadlineComponent,
        DrillWithExternalDataComponent,
        DrillingComponentsComponent,
        PivotTableDrillExampleComponent,
        VisualizationHeadlineByUriComponent,
        VisualizationScatterPlotByUriComponent,
        VisualizationBubbleChartByUriComponent,
        VisualizationTreemapByIdentifierComponent,
        VisualizationHeatmapByIdentifierComponent ,
        VisualizationDonutChartByIdentifierComponent ,
        VisualizationPieChartByIdentifierComponent ,
        VisualizationDonutChartByUriComponent,
        VisualizationPieChartByUriComponent

    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        CookieService,

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
