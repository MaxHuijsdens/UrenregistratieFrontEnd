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

  kandidaten:Kandidaat[];

  newKandidaat: Kandidaat = new Kandidaat();

  selectedKandidaat : Kandidaat;


  constructor(private kandidaatService: KandidaatService){

  }

  getKandidaten() : void {
    this.kandidaatService.getKandidaten().subscribe(kandidaten=>this.kandidaten = kandidaten);
  }

  onSelect(kandidaat: Kandidaat){
    this.selectedKandidaat = kandidaat;
  }

  ngOnInit() {
    this.getKandidaten();
  }

  onNieuwKandidaat(kan:Kandidaat) {
    this.kandidaten.push(kan);
   
  }

}
  