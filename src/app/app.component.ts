import { fadeAnimation } from './animations/router.animations';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form Builder';
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
