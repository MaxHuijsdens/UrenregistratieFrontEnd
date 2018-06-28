import { Injectable }       from '@angular/core';
import { Http, Response }   from '@angular/http';

import { Werknemer } from './werknemer';

@Injectable()
export class WerknemerService {

   constructor (private http: Http) {}
    
   getWerknemers() {
    return this.http.get("http://localhost:8082/api/persoon/");
    }

    getWerknemerById(id: number) {
       return this.http.get("http://localhost:8082/api/persoon/id=" + id);
    }

 getWerknemer(id: number) : Werknemer {
        let werknemer: Werknemer = new Werknemer;

        werknemer.id = id;
        werknemer.voorletters= "vrl";
        werknemer.tussenvoegsel = "tus";
        werknemer.achternaam = "achternaam"
        werknemer.voornaam = "voornaam";
        werknemer.email =  "werk.nemer." + id + "@email.nl";
        werknemer.mobielNummer = "061243455667";
        werknemer.geslacht = "M";

        return werknemer;
    }
    
}


