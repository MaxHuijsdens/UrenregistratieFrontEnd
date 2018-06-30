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

    addContactpersoon(contactpersoon: Contactpersoon) {
        console.log(contactpersoon);
        this.http.post<Contactpersoon>("http://localhost:8082/api/contactpersoon/create", contactpersoon, httpOptions).subscribe(res => console.log(res));
      }

}