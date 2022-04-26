import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isFilterExpanded: boolean | null = null;

  get isFilterActivated() {
    return this.isFilterExpanded !== null;
  }

  toggleFilter(): void {
    this.isFilterExpanded = !this.isFilterExpanded;
  }
}
