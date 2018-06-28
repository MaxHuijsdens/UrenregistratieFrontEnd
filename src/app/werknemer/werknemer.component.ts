import { Component, OnInit } from '@angular/core';
import { Werknemer } from './werknemer';
import { WerknemerService } from './werknemer.service';


@Component({
  selector: 'app-werknemer',
  templateUrl: './werknemer.component.html',
  styleUrls: ['./werknemer.component.css'],
  providers: [WerknemerService]
})
export class WerknemerComponent implements OnInit {
  werknemers : Werknemer [] = [];
  aantal : number = 0;

  fillWerknemers(){
   
    this.werknemers = [];

    if (this.aantal > 0 && this.aantal < 100) {
      for (var i=0; i<this.aantal;i++) {
        this.werknemers.push(this.werknemerService.getWerknemer(i+1));
      }
    }
  }

  constructor(private werknemerService: WerknemerService) { 
  
  }

  ngOnInit() {
    //  this.werknemerService.getWerknemerById(2).subscribe(werknemer =>{
    //    console.log(werknemer);
    //    let werknemerjson = werknemer.json();
    //    console.log(werknemerjson);
    //    this.werknemers.push(werknemerjson);
    //   });

      this.werknemerService.getWerknemers().subscribe(werknemer =>{
        console.log(werknemer);
        let werknemerjson = werknemer.json();
        console.log(werknemerjson);
        this.werknemers = werknemerjson;
       });
 

  }

}

