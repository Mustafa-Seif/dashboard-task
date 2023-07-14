import { Component, EventEmitter, Output } from '@angular/core';

// INTERFACE SWITCHES 
interface switchData {
  isResizable:boolean,
  isDraggable:boolean,
}

@Component({
  selector: 'app-quick-stats',
  templateUrl: './quick-stats.component.html',
  styleUrls: ['./quick-stats.component.scss'],
})


export class QuickStatsComponent {
  @Output() switchEvent: EventEmitter<switchData> = new EventEmitter<switchData>();
  isResizable: boolean = false;
  isDraggable: boolean = false;

  changeResize(){
    this.isResizable = !this.isResizable
   this.switchEvent.emit({isResizable:this.isResizable,isDraggable:this.isDraggable})
  }
  changeDragable(){
    this.isDraggable = !this.isDraggable
    this.switchEvent.emit({isResizable:this.isResizable,isDraggable:this.isDraggable})
  }
}
