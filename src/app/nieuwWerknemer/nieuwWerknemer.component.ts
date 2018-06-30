import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Werknemer } from '../werknemer/werknemer';
import { WerknemerService } from '../werknemer/werknemer.service';

@Component({
    selector: 'app-nieuwWerknemer',
    templateUrl: './nieuwWerknemer.component.html',
    styleUrls: ['./nieuwWerknemer.component.css'],
    providers: [WerknemerService]
  })

export class NieuwWerknemerComponent implements OnInit {

  @Input() nieuwWerknemer: Werknemer;
  @Output() toegevoegd = new EventEmitter<Werknemer>();


  voegWerknemerToe() {
    
    this.werknemerService.addWerknemer(this.nieuwWerknemer);
    this.toegevoegd.emit(this.nieuwWerknemer);
    this.nieuwWerknemer = new Werknemer();
  }
  constructor(private werknemerService: WerknemerService){
  }

  ngOnInit() {
  }

}
  