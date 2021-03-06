import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { WerknemerComponent } from './werknemer/werknemer.component';
import {KandidaatComponent} from './kandidaat/kandidaat.component';
import { ContactpersoonComponent } from './contactpersoon/contactpersoon.component';
import { BedrijfComponent } from './bedrijf/bedrijf.component';

import { NieuwKandidaatComponent } from './nieuwKandidaat/nieuwKandidaat.component';
import { PasKandidaatAanComponent } from './pasKandidaatAan/pasKandidaatAan.component';
import { NieuwContactpersoonComponent } from './nieuwContactpersoon/nieuwContactpersoon.component';
import { PasContactpersoonAanComponent } from './pasContactpersoonAan/pasContactpersoonAan.component';
import { NieuwWerknemerComponent} from './nieuwWerknemer/nieuwWerknemer.component';
import { PasWerknemerAanComponent } from './pasWerknemerAan/pasWerknemerAan.component';
import { UrenregistratieComponent } from './urenregistratie/urenregistratie.component';

//De routes registreren welk Component moet worden geladen bij welk path. 
//Bv: localhost:4200/werknemer zal de WerknemerComponent inladen
const routes: Routes = [
  {path: 'werknemer', component:WerknemerComponent},
  {path: 'kandidaat', component:KandidaatComponent},
  {path: 'contactpersoon', component:ContactpersoonComponent},
  {path: 'bedrijf', component:BedrijfComponent},
  {path: 'urenregistratie', component:UrenregistratieComponent},
  {path: '', component:KandidaatComponent}

];

//Alle components hier declareren
@NgModule({
  declarations: [
    AppComponent,
    WerknemerComponent,
    KandidaatComponent,
    ContactpersoonComponent,
    BedrijfComponent,
    NieuwKandidaatComponent,
    PasKandidaatAanComponent,
    NieuwContactpersoonComponent,
    PasContactpersoonAanComponent,
    NieuwWerknemerComponent,
    PasWerknemerAanComponent,
    UrenregistratieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
