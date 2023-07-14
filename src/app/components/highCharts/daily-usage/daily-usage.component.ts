import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';
import HC_accessibility from 'highcharts/modules/accessibility';
import { Options } from 'highcharts';

// Initialize the required Highcharts modules
HC_exporting(Highcharts);
HC_exportData(Highcharts);
HC_accessibility(Highcharts);
@Component({
  selector: 'app-daily-usage',
  templateUrl: './daily-usage.component.html',
  styleUrls: ['./daily-usage.component.scss']
})
export class DailyUsageComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Options = {};
  constructor() {
    this.chartOptions = {
      navigation: {
        buttonOptions: {
            enabled: false
        }
      },
      chart: {
        type: 'pie',
        // width: 350
        height:300
      },
      title: {
        text: ''
      },
      legend: {
        enabled: true
      },
      series: [{
        type: 'pie',
        name: 'Data',
        data: [
          [' Barking', 4.1],
          ['Like a boss', 4.9],
          ['Front yard',10.8],
          ['Closet', 27.3],
          ['Swin pool', 27.3]
        ]
      }]
    };
  }
}
