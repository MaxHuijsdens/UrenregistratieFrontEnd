import { Component } from '@angular/core';
import * as powerTip from 'jquery-powerTip';
import * as $ from 'jquery';


declare global {
  interface JQuery {
    (selector: string): JQuery;
    powerTip: any;
  }
}
//Geeft aan welke html en css bestanden bij dit component horen
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Urenregistratie Working Talent Rotterdam';
  page = 4;
}
