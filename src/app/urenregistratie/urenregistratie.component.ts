import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Urenregistratie } from './urenregistratie';
import { UrenregistratieService } from './urenregistratie.service';
import * as powerTip from 'jquery-powerTip'


@Component({
    selector: 'app-urenregistratie',
    templateUrl: './urenregistratie.component.html',
    styleUrls: ['./urenregistratie.component.css'],
    encapsulation: ViewEncapsulation.None,
    
    providers: [UrenregistratieService]
  })

export class UrenregistratieComponent implements OnInit {
ngOnInit() {
  $(document).ready(function(){  
    var counter = 0;
    

    
    for (var i = 0; i < 5; i++) {
        if (i == 0) {
          $('#urenregistratie tr.weekScheme').after(`<tr><th class="weeknr w-5">
    <p>0</p>
</th></tr>`);
var ele = $('#urenregistratie tr:last');
console.log(ele);
        }
        else {
        $('#urenregistratie tr:last').after(`<tr> <th class="weeknr w-5">
                                                                <p>`+(i+1)+`</p>
                                                            </th>`);
          ele = $('#urenregistratie tr:last'); 
           // console.log(ele);
            
        }
                                                          
      for (var x = 0; x < 7; x++, counter++) {
        ele.append(`
            <td class="day w-12" id="`+(counter+1)+`" title="Werk: 0 uren <br /> ziek: 0 uren">
                <div>
                    <div class="dayNumber">`+(counter+1)+`</div>
                    <div class="overview">
                        <div class="workHours">
                            <img src="./assets/worker-money-time.png" /> 8
                        </div>
                        <div class="sickHours">
                            <img src="./assets/sick.png" /> 0
                            <br />
                        </div>
                    </div>
                </div>
            </td>`);
            
            //break;
        
      }
      //console.log(ele);
      
       //ele.append('</tr>');
       
    }

    $(".day").powerTip({placement: 'ne', followMouse: true, smartPlacement: true});
   /*$('h5').data('powertipjq', $([
    '<p><b>Here is some content</b></p>',
    '<p><a href="http://stevenbenner.com/">Maybe a link</a></p>',
    '<p><code>{ placement: \'e\', mouseOnToPopup: true }</code></p>'
    ].join('\n')));
    $('h5').powerTip({placement: 'ne',
    mouseOnToPopup: true});*/
    
    //$('.day').data('powertip', 'This will be the <b>tooltip text</b>.');
})
  
}
  /*kandidaten:Kandidaat[];

  newKandidaat: Kandidaat = new Kandidaat();

  selectedKandidaat : Kandidaat;


  constructor(private kandidaatService: KandidaatService){

  }

  getKandidaten() : void {
    this.kandidaatService.getKandidaten().subscribe(kandidaten=>this.kandidaten = kandidaten);
  }

  onSelect(kandidaat: Kandidaat){
    this.selectedKandidaat = kandidaat;
    this.newKandidaat = null;
  }

  verwijder(kandidaat: Kandidaat) {
    this.kandidaatService.removeKandidaat(kandidaat).subscribe(() => this.getKandidaten());
  }

  ngOnInit() {
    this.getKandidaten();
  }

  onNieuwKandidaat(kan:Kandidaat) {
    this.kandidaten.push(kan);
  }
  onKandidaatWijzig(kan:Kandidaat) {
    let k = this.kandidaten.find(x => x.id == kan.id);
    let indexK = this.kandidaten.indexOf(k);
    this.kandidaten[indexK] = kan;
  }*/

}
  