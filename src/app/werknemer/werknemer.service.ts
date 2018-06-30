import { Injectable }       from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Werknemer } from './werknemer';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class WerknemerService {
    constructor(private http: HttpClient) {
    
    }
    getWerknemers(): Observable<Werknemer[]> {
        return this.http.get<Werknemer[]>("http://localhost:8082/api/werknemer");
    }

    addWerknemer(werknemer: Werknemer) {
        console.log(werknemer);
        this.http.post<Werknemer>("http://localhost:8082/api/werknemer/create", werknemer, httpOptions).subscribe(res => console.log(res));
      }

}