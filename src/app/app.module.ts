import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WerknemerComponent } from './werknemer/werknemer.component';
import {KandidaatComponent} from './kandidaat/kandidaat.component';
import { ContactpersoonComponent } from './contactpersoon/contactpersoon.component';
import { BedrijfComponent } from './bedrijf/bedrijf.component';

const routes: Routes = [
  {path: 'werknemer', component:WerknemerComponent},
  {path: 'kandidaat', component:KandidaatComponent},
  {path: 'contactpersoon', component:ContactpersoonComponent},
  {path: 'bedrijf', component:BedrijfComponent},
      
  {path: '', component:WerknemerComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    WerknemerComponent,
    KandidaatComponent,
    ContactpersoonComponent,
    BedrijfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
