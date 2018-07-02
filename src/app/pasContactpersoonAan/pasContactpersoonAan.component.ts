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

  @Input() huidigContactpersoon: Contactpersoon;
  @Output() gewijzigd = new EventEmitter<Contactpersoon>();


  pasContactpersoonAan() {
    this.contactpersoonService.updateContactpersoon(this.huidigContactpersoon);
    this.gewijzigd.emit(this.huidigContactpersoon);
  }
  constructor(private contactpersoonService: ContactpersoonService){
  }

  ngOnInit() {
  }

}
  