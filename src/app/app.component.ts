import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFirstComponent: boolean = true;

  showFirstSecondComponent() {
    this.showFirstComponent = !this.showFirstComponent;
  }
}
