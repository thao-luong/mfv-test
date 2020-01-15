import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { AppToolbarService } from './app-toolbar/app-toolbar.component'
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { KpiComponent } from './components/kpi/kpi.component';
import { PivotTableComponent } from './components/pivot-table/pivot-table.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ColumnChartComponent } from './components/column-chart/column-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LineChartHasSegmentByComponent } from './components/line-chart-has-segmeny-by/line-chart-has-segmeny-by.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { ComboChartComponent } from './components/combo-chart/combo-chart.component';
import { HeatMapComponent } from './components/heat-map/heat-map.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { TreemapComponent } from './components/tree-map/tree-map.component';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';
import { ScatterPlotComponent } from './components/scatter-chart/scatter-chart.component';
import { DualColumnChartComponent } from './components/dual-column-chart/dual-column-chart.component';
import { TableComponent } from './components/table/table.component';
import { PivotTableTotalsComponent } from './components/pivot-table-total/pivot-table-total.component';
import { VisualizationAreaChartComponent } from './visualizations/visualization-area-chart/visualization-area-chart.component';
import { VisualizationAreaChartByUriComponent } from './visualizations/visualization-area-chart-by-uri/visualization-area-chart-by-uri.component';
import { VisualizationPivotTableComponent } from './visualizations/visualization-pivot-table/visualization-pivot-table.component';
import { VisualizationColumnChartByUriComponent } from './visualizations/visualization-column-chart-by-uri/visualization-column-chart-by-uri.component';
import { VisualizationColumnChartComponent } from './visualizations/visualization-column-chart/visualization-column-chart.component';
import { VisualizationBarChartComponent } from './visualizations/visualization-bar-chart/visualization-bar-chart.component';
import { VisualizationBarChartByUriComponent } from './visualizations/visualization-bar-chart-by-uri/visualization-bar-chart-by-uri.component';
import { VisualizationLineChartComponent } from './visualizations/visualization-line-chart/visualization-line-chart.component';
import { VisualizationLineChartByUriComponent } from './visualizations/visualization-line-chart-by-uri/visualization-line-chart-by-uri.component';
import { MeasureSortingExampleComponent } from './components/measure-sorting-example/measure-sorting-example.component';
import { AttributeSortingExampleComponent } from './components/attribute-sorting-example/attribute-sorting-example.component';
import { SamePeriodColumnChartExampleComponent } from './components/same-period-column-chart-example/same-period-column-chart-example.component';
import { PreviousPeriodColumnChartExampleComponent } from './components/previous-period-column-chart-example/previous-period-column-chart-example.component';
import { PreviousPeriodHeadLineExampleComponent } from './components/previous-period-headline-example/previous-period-headline-example.component';
import { AttributeFilterExampleComponent } from './components/attribute-filter-example/attribute-filter-example.component';
import { AttributeFilterComponent } from './components/attribute-filter/attribute-filter.component';
import { BasicComponentsComponent } from './routes/basic-components/basic-components.component';
import { VisualizationComponentsComponent } from './routes/visualization-components/visualization-components.component';
import { PivotTableComponentsComponent } from './routes/pivot-table-components/pivot-table-components.component';
import { SortingComponentsComponent } from './routes/sorting-components/sorting-components.component';
import { TimeOverTimeComparisonComponent } from './routes/time-over-time-comparison/time-over-time-comparison.component';
import { AttributeFilterComponentsComponent } from './routes/attribut-filter-components/attribut-filter-components.component';
import { TableDrillExampleComponent } from './components/table-drill-example/table-drill-example.component';
import { ArithmeticMeasureChangeComponent } from './components/arithmetic-measure-change/arithmetic-measure-change.component';
import { ArithmeticMeasuresRatioComponent } from './components/arithmetic-measure-ratio/arithmetic-measure-ratio.component';
import { ArithmeticMeasureSumComponent } from './components/arithmetic-measure-sum/arithmetic-measure-sum.component';
import { ArithmeticMeasureMultiplicationComponent } from './components/arithmetic-measure-multiplication/arithmetic-measure-multiplication.component';
import { ArithmeticMeasureDrillingComponent } from './components/arithmetic-measure-drilling/arithmetic-measure-drilling.component';
import { PieChartColorMappingComponent } from './components/pie-chart-color-mapping/pie-chart-color-mapping.component';
import { ArithmeticMeasureComponentsComponent } from './routes/arithmetic-measure-components/arithmetic-measure-components.component';
import { HeadlineComponent } from './components/head-line/head-line.component';
import { VisualizationPivotTableByUriComponent } from './visualizations/visualization-pivot-table-by-uri/visualization-pivot-table-by-uri.component';
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
import { AreaChartHasColorPaletteComponent } from './components/area-chart-has-color-palette/area-chart-has-color-palette.component';
import { NewAttributeFilterComponent } from './components/new-attribute-filter/new-attribute-filter.component';
import { AttributeFilterDefinitionByURIComponent } from './components/attribute-filter-definition-by-uri/attribute-filter-definition-by-uri.component';
import { DateFilterConfigComponent } from './components/date-filter-config/date-filter-config.component';
import { DateFilterComponent } from './routes/date-filter/date-filter.component';
import { DateFilterConfigExampleComponent } from './components/date-filter-config-example/date-filter-config-example.component';
import { DateFilterVisComponent } from './components/date-filter-vis/date-filter-vis.component'

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
        AppRouting,
        RouterModule.forRoot([{
            path: '', redirectTo: '/basic-components', pathMatch: 'full'
        }])
    ],
    declarations: [
        AppComponent,
        AlertComponent,
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
        AreaChartHasColorPaletteComponent,
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
        VisualizationHeatmapByIdentifierComponent,
        VisualizationDonutChartByIdentifierComponent,
        VisualizationPieChartByIdentifierComponent,
        VisualizationDonutChartByUriComponent,
        VisualizationPieChartByUriComponent,
        HeaderComponent,
        NewAttributeFilterComponent,
        AttributeFilterDefinitionByURIComponent,
        DateFilterConfigComponent,
        DateFilterComponent,
        DateFilterConfigExampleComponent,
        DateFilterVisComponent

    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        CookieService,
        AppToolbarService,
        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
