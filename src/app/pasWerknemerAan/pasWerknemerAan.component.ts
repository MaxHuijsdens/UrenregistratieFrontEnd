import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Werknemer } from '../werknemer/werknemer';
import { WerknemerService } from '../werknemer/werknemer.service';

@Component({
    selector: 'app-pasWerknemerAan',
    templateUrl: './pasWerknemerAan.component.html',
    styleUrls: ['./pasWerknemerAan.component.css'],
    providers: [WerknemerService]
  })

export class PasWerknemerAanComponent implements OnInit {

  @Input() huidigWerknemer: Werknemer;
  @Output() gewijzigd = new EventEmitter<Werknemer>();


  pasWerknemerAan() {
    this.werknemerService.updateWerknemer(this.huidigWerknemer);
    this.gewijzigd.emit(this.huidigWerknemer);
  }
  constructor(private werknemerService: WerknemerService){
  }

  ngOnInit() {
  }

}
  