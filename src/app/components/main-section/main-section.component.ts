import { Component, ViewChild } from '@angular/core';
import {
  GridsterComponent,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponentInterface,
  GridType,
} from 'angular-gridster2';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent {
  @ViewChild('gridster', { static: false }) gridster?: GridsterComponent;
  isResizable: boolean = false;
  isDraggable: boolean = false;
  options: GridsterConfig = {};
  dashboard: Array<GridsterItem> = [
    { cols: 2.9, rows: 1, y: 0, x: 0 },
    { cols: 2.2, rows: 1, y: 0, x: 2.95 },
    { cols: 3, rows: 1.2, y: 1.05, x: 0 },
    { cols: 2.1, rows: 1.2, y: 1.05, x: 3.05 },
    { cols: 2.5, rows: 1, y: 2.3, x: 0 },
    { cols: 2.6, rows: 1, y: 2.3, x: 2.55 },
  ];
  static itemChange:
    | ((
        item: GridsterItem,
        itemComponent: GridsterItemComponentInterface
      ) => void)
    | undefined;
  static itemResize:
    | ((
        item: GridsterItem,
        itemComponent: GridsterItemComponentInterface
      ) => void)
    | undefined;

    gridSterOptions(){
      this.options = {
        swapWhileDragging:true,
        enableCompact: false,
        itemChangeCallback: MainSectionComponent.itemChange,
        itemResizeCallback: MainSectionComponent.itemResize,
        minCols: 2,
        maxCols: 12,
        minRows: 2,
        maxRows: 12,
        margin: 12,
        autoSize: true,
        draggable: {
          enabled: this.isDraggable,
        },
        resizable: {
          enabled: this.isResizable,
        },
        gridType: GridType.Fit,
        displayGrid: 'onDrag&Resize',
        pushItems: true,
        disableWindowResize: false,
        disableAutoPositionOnConflict: true,
        swap: true,
        enableEmptyCellDrop: true,
        emptyCellDropCallback: this.onComponentDrop.bind(this),
      } as GridsterConfig;
    }

    onComponentDrop(event: DragEvent, item: GridsterItem) {
      item.rows = 20;
      item.cols = 20;
      this.dashboard.push(item);
    }

  ngOnInit() {
    // UPDATE GRIDSTER OPTIONS 
    this.gridSterOptions()
  }
  // GET SWITCHES VALAUE FROM EVENT EMITTER 
  switchEvent(switches: any) {
    this.isResizable = switches.isResizable;
    this.isDraggable = switches.isDraggable;
    // UPDATE GRIDSTER OPTIONS 
     this.gridSterOptions()        
  }
  resetGridster(): void {
    if (this.gridster) {
      this.dashboard= [
        { cols: 2.9, rows: 1, y: 0, x: 0 },
        { cols: 2.2, rows: 1, y: 0, x: 2.95 },
        { cols: 3, rows: 1.2, y: 1.05, x: 0 },
        { cols: 2.1, rows: 1.2, y: 1.05, x: 3.05 },
        { cols: 2.5, rows: 1, y: 2.3, x: 0 },
        { cols: 2.6, rows: 1, y: 2.3, x: 2.55 },
      ];
     this.gridSterOptions()        
    }
  }
}
