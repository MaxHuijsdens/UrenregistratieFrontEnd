import { Component } from '@angular/core';
import * as powerTip from 'jquery-powerTip'

declare var $:JQuery;

declare global {
  interface JQuery {
    (selector: string): JQuery;
    powerTip: any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Urenregistratie Working Talent Rotterdam';
  page = 4;
}
