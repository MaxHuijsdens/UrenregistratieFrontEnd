import { Injectable }       from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contactpersoon } from './contactpersoon';

@Injectable()
export class ContactpersoonService {
    constructor(private http: HttpClient) {
    
    }
    getContactpersonen(): Observable<Contactpersoon[]> {
        return this.http.get<Contactpersoon[]>("http://localhost:8082/api/contactpersoon");
    }

}