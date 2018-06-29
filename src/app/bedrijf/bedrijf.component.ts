import { Component, OnInit } from '@angular/core';
import { Bedrijf } from './bedrijf';
import { BedrijfService } from './bedrijf.service';

@Component({
    selector: 'app-bedrijf',
    templateUrl: './Bedrijf.component.html',
    styleUrls: ['./Bedrijf.component.css'],
    providers: [BedrijfService]
  })

export class BedrijfComponent implements OnInit {

  ngOnInit() {

  }

}
  