import { Component, OnInit } from '@angular/core';
import { Kandidaat } from './kandidaat';
import { KandidaatService } from './kandidaat.service';

@Component({
    selector: 'app-kandidaat',
    templateUrl: './kandidaat.component.html',
    styleUrls: ['./kandidaat.component.css'],
    providers: [KandidaatService]
  })
//De kandidaat component
export class KandidaatComponent implements OnInit {

  //Alle kandidaten worden opgeslagen in deze array opgeslagen
  kandidaten:Kandidaat[];

  //Object om een nieuw kandidaat mee te maken
  newKandidaat: Kandidaat = new Kandidaat();

  //Geselecteerd kandidaat (om aan te passen)
  selectedKandidaat : Kandidaat;


  //De kandidaatService staat in de constructor als parameter. Hierdoor krijgt dit component automatisch een kandidaatService.
  //Dit kan omdat KandidaatService de @Injectable annotation heeft.
  constructor(private kandidaatService: KandidaatService){

  }

  //Method die alle kandidaten ophaalt.
  getKandidaten() : void {
    //Gebruik de getKandidaten() method uit de service. Die geeft alle kandidaten 
    this.kandidaatService.getKandidaten().subscribe(kandidaten=>this.kandidaten = kandidaten);
  }

  //Method die wordt aangeroepen als de gebruiker op het potlood klikt om een kandidaat aan te passen
  onSelect(kandidaat: Kandidaat){
    this.selectedKandidaat = kandidaat;
    //Als newKandidaat null wordt verdwijnt het nieuwKandidaat component
    this.newKandidaat = null;
  }

  //Method die wordt aangeroepen als de gebruiker op het kruisje klikt om een kandidaat te verwijderen
  verwijder(kandidaat: Kandidaat) {
    this.kandidaatService.removeKandidaat(kandidaat).subscribe(() => this.getKandidaten());
  }

  //ngOnInit() wordt meteen uitgevoerd. In deze ngOnInit wordt de getKandidaten() method uitgevoerd
  ngOnInit() {
    this.getKandidaten();
  }

  //Deze method wordt uitgevoerd als de kandidaat component een signaal krijgt van 
  // de nieuwKandidaat component dat er een nieuwe kandidaat is aangemaakt
  onNieuwKandidaat(kan:Kandidaat) {
    this.kandidaten.push(kan);
  }

  //Deze method wordt uitgevoerd als de kandidaat component een signaal krijgt van 
  // de pasKandidaatAan component dat er een kandidaat is aangepast
  onKandidaatWijzig(kan:Kandidaat) {
    let k = this.kandidaten.find(x => x.id == kan.id);
    let indexK = this.kandidaten.indexOf(k);
    this.kandidaten[indexK] = kan;
  }

}
  