import { Injectable }       from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Kandidaat } from './kandidaat';
import { getMaxListeners } from 'cluster';
import { map } from "rxjs/operators";
import * as _ from 'lodash';

@Injectable()
export class KandidaatService {

    kandidaten : Kandidaat[] = [];
    test: string;
    constructor(private http: HttpClient) {
        this.retrieveKandidaten();
      }
    
      retrieveKandidaten() {
          const kandidaat1 = <Kandidaat>(
              {
                  naam:"Max",
                  id:1,
                  telefoonnummer:"1234",
                  email:"m.huijsdens@gmail.com"
              }
          );
        this.kandidaten[0] = kandidaat1;
        this.kandidaten[1] = <Kandidaat>({Uurtarief:24, naam:"Max2", id:2, telefoonnummer:"9876",email:"max@max"});
      }
      
      getKandidaten(): Observable<Kandidaat[]> {
        return this.http.get<Kandidaat[]>("http://localhost:8082/api/kandidaat");
      }
    
    
      addKandidaat(kandidaat: Kandidaat) {
        this.kandidaten.push(kandidaat);
        this.storeKandidaten();
      }
    
      storeKandidaten() {
        //localStorage.setItem('lezers', JSON.stringify(this.Lezers));
      }
    
      removeKandidaat(removeKandidaat: Kandidaat) {
        this.retrieveKandidaten();
        this.kandidaten = this.kandidaten.filter(kandidaat => kandidaat.id !== removeKandidaat.id);
        this.storeKandidaten();
      }
    
      removeAllKandidaten() {
        this.kandidaten = [];
      }
    
      updateKandidaat(updatedKandidaat: Kandidaat) {
        this.retrieveKandidaten();
        for (let kan of this.kandidaten) {
          if (kan.id === updatedKandidaat.id) {
            kan.naam = updatedKandidaat.naam;
    
          }
        }
        this.storeKandidaten();
      }
    
      retrieveKandidaatById(id: number): Kandidaat {
        this.retrieveKandidaten();
        for (let kan of this.kandidaten) {
          if (kan.id === id) {
            return kan;
          }
        }
      }
    
}