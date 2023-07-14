import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoading: boolean = true;
  loadData(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); 
  }

  ngOnInit(): void {
    this.loadData();
  }
}
