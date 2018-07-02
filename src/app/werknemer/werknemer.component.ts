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
    this.newWerknemer = null;
  }


  ngOnInit() {
    this.getWerknemers();
  }

  onNieuwWerknemer(wer:Werknemer) {
    this.werknemers.push(wer);
  }
  onWerknemerWijzig(wer:Werknemer) {
    let k = this.werknemers.find(x => x.id == wer.id);
    let indexK = this.werknemers.indexOf(k);
    this.werknemers[indexK] = wer;
  }
  verwijder(werknemer: Werknemer) {
    this.werknemerService.removeWerknemer(werknemer).subscribe(() => this.getWerknemers());
  }
}
  