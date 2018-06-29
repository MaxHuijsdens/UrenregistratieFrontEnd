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

  constructor(private contactpersoonService: ContactpersoonService){

  }

  getContactpersonen() : void {
    this.contactpersoonService.getContactpersonen().subscribe(contactpersonen=>this.contactpersonen = contactpersonen);
  }

  ngOnInit() {
    this.getContactpersonen();
  }

}
  