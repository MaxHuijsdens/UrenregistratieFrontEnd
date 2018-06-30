import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Contactpersoon } from '../contactpersoon/contactpersoon';
import { ContactpersoonService } from '../contactpersoon/contactpersoon.service';

@Component({
    selector: 'app-nieuwContactpersoon',
    templateUrl: './nieuwContactpersoon.component.html',
    styleUrls: ['./nieuwContactpersoon.component.css'],
    providers: [ContactpersoonService]
  })

export class NieuwContactpersoonComponent implements OnInit {

  @Input() nieuwContactpersoon: Contactpersoon;
  @Output() toegevoegd = new EventEmitter<Contactpersoon>();


  voegContactpersoonToe() {
    
    this.contactpersoonService.addContactpersoon(this.nieuwContactpersoon);
    this.toegevoegd.emit(this.nieuwContactpersoon);
    this.nieuwContactpersoon = new Contactpersoon();
  }
  constructor(private contactpersoonService: ContactpersoonService){
  }

  ngOnInit() {
  }

}
  