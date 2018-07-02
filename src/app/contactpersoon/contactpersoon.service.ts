import { Injectable }       from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contactpersoon } from './contactpersoon';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class ContactpersoonService {
    constructor(private http: HttpClient) {
    
    }

    getContactpersonen(): Observable<Contactpersoon[]> {
        return this.http.get<Contactpersoon[]>("http://localhost:8082/api/contactpersoon");
    }

    addContactpersoon(contactpersoon: Contactpersoon) : Observable<number> {
        console.log(contactpersoon);
        return this.http.post<number>("http://localhost:8082/api/contactpersoon/create", contactpersoon, httpOptions).pipe();
    }

    updateContactpersoon(contactpersoon:Contactpersoon) {
        console.log(contactpersoon);
        this.http.put<Contactpersoon>("http://localhost:8082/api/contactpersoon/edit/"+contactpersoon.id, contactpersoon, httpOptions).subscribe(res => console.log(res));
    }

    removeContactpersoon(removeContactpersoon:Contactpersoon){
        return this.http.delete("http://localhost:8082/api/contactpersoon/delete?id="+removeContactpersoon.id).pipe();
    }

}