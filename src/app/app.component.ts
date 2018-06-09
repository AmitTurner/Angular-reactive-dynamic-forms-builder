import { fadeAnimation } from './animations/router.animations';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { trigger, state, animate, query, transition, style, stagger } from 
// '@angular/animations';


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

  // times = 99;
  // counter = 0;
  // state="inactive";
  // onDone($event) {
  //   // call this function at the end of the previous animation.
  //   // run it as many time as defined
  //   if (this.counter < this.times) {
  //     this.state = this.state === 'active' ? 'inactive' : 'active';
  //     this.counter++;
  //   }
  // }
}
