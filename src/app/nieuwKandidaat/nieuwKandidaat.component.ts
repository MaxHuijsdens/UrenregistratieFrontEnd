import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Kandidaat } from '../kandidaat/kandidaat';
import { KandidaatService } from '../kandidaat/kandidaat.service';

@Component({
    selector: 'app-nieuwKandidaat',
    templateUrl: './nieuwKandidaat.component.html',
    styleUrls: ['./nieuwKandidaat.component.css'],
    providers: [KandidaatService]
  })

export class NieuwKandidaatComponent implements OnInit {

  @Input() nieuwKandidaat: Kandidaat;
  @Output() toegevoegd = new EventEmitter<Kandidaat>();


  voegKandidaatToe() {

    this.kandidaatService.addKandidaat(this.nieuwKandidaat).subscribe(num => {
      this.nieuwKandidaat.id = num;
      console.log(this.nieuwKandidaat);
      this.toegevoegd.emit(this.nieuwKandidaat);
      this.nieuwKandidaat = new Kandidaat();
     });
    
  }
  constructor(private kandidaatService: KandidaatService){
  }

  ngOnInit() {
  }

}
  