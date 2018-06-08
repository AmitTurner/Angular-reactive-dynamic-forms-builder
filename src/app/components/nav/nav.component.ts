import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/router.animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [fadeAnimation]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
