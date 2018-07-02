import { Component, OnInit } from '@angular/core';
import { Contactpersoon } from './contactpersoon';
import { ContactpersoonService } from './contactpersoon.service';

@Component({
    selector: 'app-contactpersoon',
    templateUrl: './Contactpersoon.component.html',
    styleUrls: ['./Contactpersoon.component.css'],
    providers: [ContactpersoonService]
  })

export class ContactpersoonComponent implements OnInit {

  contactpersonen:Contactpersoon[];

  newContactpersoon : Contactpersoon = new Contactpersoon();

  selectedContactpersoon : Contactpersoon;

  constructor(private contactpersoonService: ContactpersoonService){

  }

  getContactpersonen() : void {
    this.contactpersoonService.getContactpersonen().subscribe(contactpersonen=>this.contactpersonen = contactpersonen);
  }

  onSelect(contactpersoon:Contactpersoon) {
    this.selectedContactpersoon = contactpersoon;
    this.newContactpersoon = null;
  }

  ngOnInit() {
    this.getContactpersonen();
  }

  onNieuwContactpersoon(con:Contactpersoon){
    this.contactpersonen.push(con);
  }
  onContactpersoonWijzig(con:Contactpersoon) {
    let k = this.contactpersonen.find(x => x.id == con.id);
    let indexK = this.contactpersonen.indexOf(k);
    this.contactpersonen[indexK] = con;
  }
  verwijder(contactpersoon: Contactpersoon) {
    this.contactpersoonService.removeContactpersoon(contactpersoon).subscribe(() => this.getContactpersonen());
  }

}
  