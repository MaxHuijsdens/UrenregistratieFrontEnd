import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Kandidaat } from '../kandidaat/kandidaat';
import { KandidaatService } from '../kandidaat/kandidaat.service';

@Component({
    selector: 'app-pasKandidaatAan',
    templateUrl: './pasKandidaatAan.component.html',
    styleUrls: ['./pasKandidaatAan.component.css'],
    providers: [KandidaatService]
  })

export class PasKandidaatAanComponent implements OnInit {

  @Input() huidigKandidaat: Kandidaat;
  @Output() toegevoegd = new EventEmitter<Kandidaat>();


  constructor(private kandidaatService: KandidaatService){
  }

  ngOnInit() {
  }

}
  