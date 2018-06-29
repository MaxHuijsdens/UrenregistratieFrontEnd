import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Contactpersoon } from '../contactpersoon/contactpersoon';
import { ContactpersoonService } from '../contactpersoon/contactpersoon.service';

@Component({
    selector: 'app-pasContactpersoonAan',
    templateUrl: './pasContactpersoonAan.component.html',
    styleUrls: ['./pasContactpersoonAan.component.css'],
    providers: [ContactpersoonService]
  })

export class PasContactpersoonAanComponent implements OnInit {

  @Input() aanpasContactpersoon: Contactpersoon;
  @Output() toegevoegd = new EventEmitter<Contactpersoon>();


  voegContactpersoonToe() {
    
    //this.kandidaatService.addKandidaat(this.nieuwKandidaat);
    //this.toegevoegd.emit(this.nieuwKandidaat);
    //this.nieuwKandidaat = new Kandidaat();
  }
  constructor(private contactpersoonService: ContactpersoonService){
  }

  ngOnInit() {
  }

}
  