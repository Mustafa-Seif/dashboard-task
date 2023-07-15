import { Component, EventEmitter, Output } from '@angular/core';
import { SwitchData } from 'src/app/interfaces/switch-data';

@Component({
  selector: 'app-quick-stats',
  templateUrl: './quick-stats.component.html',
  styleUrls: ['./quick-stats.component.scss'],
})
export class QuickStatsComponent {
  @Output() switchEvent: EventEmitter<SwitchData> =
    new EventEmitter<SwitchData>();
  @Output() resetGridSterEvent: EventEmitter<void> = new EventEmitter();
  isResizable: boolean = false;
  isDraggable: boolean = false;

  // FIRE switchEvent 
  changeResize() {
    this.isResizable = !this.isResizable;
    this.switchEvent.emit({
      isResizable: this.isResizable,
      isDraggable: this.isDraggable,
    });
  }
  // FIRE switchEvent 
  changeDragable() {
    this.isDraggable = !this.isDraggable;
    this.switchEvent.emit({
      isResizable: this.isResizable,
      isDraggable: this.isDraggable,
    });
  }
  // FIRE resetGridSterEvent 
  resetGridSter() {
    this.resetGridSterEvent.emit();
  }
}
