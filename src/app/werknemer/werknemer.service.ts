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

    addWerknemer(werknemer: Werknemer) : Observable<number> {
        console.log(werknemer);
        return this.http.post<number>("http://localhost:8082/api/werknemer/create", werknemer, httpOptions).pipe();
    }

    updateWerknemer(werknemer:Werknemer) {
        console.log(werknemer);
        this.http.put<Werknemer>("http://localhost:8082/api/werknemer/editWerknemer/"+werknemer.id, werknemer, httpOptions).subscribe(res => console.log(res));
    }

    removeWerknemer(removeWerknemer:Werknemer){
        return this.http.delete("http://localhost:8082/api/werknemer/deleteWerknemer?id="+removeWerknemer.id).pipe();
    }

}