import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { OverallComponent } from './components/highCharts/overall/overall.component';
import { PerformanceComponent } from './components/highCharts/performance/performance.component';
import { RationComponent } from './components/highCharts/ration/ration.component';
import { RealTimeInformationComponent } from './components/highCharts/real-time-information/real-time-information.component';
import { DailyUsageComponent } from './components/highCharts/daily-usage/daily-usage.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { QuickStatsComponent } from './components/highCharts/quick-stats/quick-stats.component';
import { GridsterModule } from 'angular-gridster2';
@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideBarComponent,
    MainSectionComponent,
    OverallComponent,
    PerformanceComponent,
    RationComponent,
    RealTimeInformationComponent,
    DailyUsageComponent,
    QuickStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    NgbModule,
    GridsterModule,
    NgCircleProgressModule.forRoot({
      "radius":50,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#6D5CAE",
      "outerStrokeGradientStopColor": "#6D5CAE",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": true,
      "responsive": true,
      "lazy": true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
