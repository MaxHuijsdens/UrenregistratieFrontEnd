import { Component, OnInit } from '@angular/core';
import { Werknemer } from './werknemer';
import { WerknemerService } from './werknemer.service';

@Component({
    selector: 'app-werknemer',
    templateUrl: './Werknemer.component.html',
    styleUrls: ['./Werknemer.component.css'],
    providers: [WerknemerService]
  })

export class WerknemerComponent implements OnInit {

  werknemers:Werknemer[];

selectedWerknemer : Werknemer;

newWerknemer : Werknemer = new Werknemer();

  constructor(private werknemerService: WerknemerService){

  }

  getWerknemers() : void {
    this.werknemerService.getWerknemers().subscribe(werknemers=> this.werknemers = werknemers);
  }

  onSelect(werknemer:Werknemer) {
    this.selectedWerknemer = werknemer;
  }


  ngOnInit() {
    this.getWerknemers();
  }

  onNieuwWerknemer(wer:Werknemer) {
    this.werknemers.push(wer);
  }

}
  