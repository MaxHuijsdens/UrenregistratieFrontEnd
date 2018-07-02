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
const routes: Routes = [
  {path: 'werknemer', component:WerknemerComponent},
  {path: 'kandidaat', component:KandidaatComponent},
  {path: 'contactpersoon', component:ContactpersoonComponent},
  {path: 'bedrijf', component:BedrijfComponent},
      
  {path: '', component:KandidaatComponent}

];



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
