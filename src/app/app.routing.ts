import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { BasicComponentsComponent } from './routes/basic-components/basic-components.component';
import { PivotTableComponentsComponent } from './routes/pivot-table-components/pivot-table-components.component';
import { SortingComponentsComponent } from './routes/sorting-components/sorting-components.component';
import { TimeOverTimeComparisonComponent } from './routes/time-over-time-comparison/time-over-time-comparison.component';
import { AttributeFilterComponentsComponent } from './routes/attribut-filter-components/attribut-filter-components.component';
import { VisualizationComponentsComponent } from './routes/visualization-components/visualization-components.component';
import { ArithmeticMeasureComponentsComponent } from './routes/arithmetic-measure-components/arithmetic-measure-components.component';
import { DrillingComponentsComponent } from './routes/drilling-components/drilling-components.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: '', component: BasicComponentsComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'basic-components', component: BasicComponentsComponent},
    { path: 'pivot-table-components', component: PivotTableComponentsComponent },
    { path: 'sorting-components', component: SortingComponentsComponent },
    { path: 'time-over-time-comparison', component: TimeOverTimeComparisonComponent },
    { path: 'attribute-filter-components', component: AttributeFilterComponentsComponent },
    { path: 'drilling-components', component: DrillingComponentsComponent },
    { path: 'visualization-components', component: VisualizationComponentsComponent },
    { path: 'arithmetic-measure-components', component: ArithmeticMeasureComponentsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

// export const routing = RouterModule.forRoot(appRoutes);
@NgModule({
    imports: [RouterModule.forChild(appRoutes), CommonModule],
    exports: [RouterModule],
})
export class AppRouting { }
