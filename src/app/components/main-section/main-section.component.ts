import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {
  gridsterOptions: GridsterConfig;
  gridsterItems: GridsterItem[];

  constructor() {
    this.gridsterOptions = {
      itemChangeCallback: this.itemChange.bind(this),
      itemResizeCallback: this.itemResize.bind(this),
    };
    this.gridsterItems = [
      { cols: 4, rows: 50, x: 0, y: 0 },
      
    ];
  }

  itemChange(item: GridsterItem): void {
    console.log('Item changed', item);
  }

  itemResize(item: GridsterItem): void {
    console.log('Item resized', item);
  }
}
