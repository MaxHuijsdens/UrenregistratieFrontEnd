import { Injectable }       from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Werknemer } from './werknemer';

@Injectable()
export class WerknemerService {
    constructor(private http: HttpClient) {
    
    }
    getWerknemers(): Observable<Werknemer[]> {
        return this.http.get<Werknemer[]>("http://localhost:8082/api/werknemer");
    }

}