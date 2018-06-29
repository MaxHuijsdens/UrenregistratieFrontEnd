import { Component, OnInit } from '@angular/core';
import { Kandidaat } from './kandidaat';
import { KandidaatService } from './kandidaat.service';

@Component({
    selector: 'app-kandidaat',
    templateUrl: './kandidaat.component.html',
    styleUrls: ['./kandidaat.component.css'],
    providers: [KandidaatService]
  })

export class KandidaatComponent implements OnInit {

  ngOnInit() {

  }

}
  