import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BtnPlanComponent } from './btn-plan/btn-plan.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PageNameComponent } from './page-name/page-name.component';
import { FilterComponent } from './filter/filter.component';
import { SelectComponent } from './filter/select/select.component';
import { SearchComponent } from './filter/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { TableComponent } from './planning-page/table/table.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BtnPlanComponent,
    BreadcrumbsComponent,
    PageNameComponent,
    FilterComponent,
    SelectComponent,
    SearchComponent,
    PlanningPageComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
