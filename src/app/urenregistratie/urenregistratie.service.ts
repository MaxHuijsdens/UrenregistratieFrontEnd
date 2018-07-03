import { Injectable }       from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Urenregistratie } from './Urenregistratie';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UrenregistratieService {
    constructor(private http: HttpClient) {
    }
         /*
      getKandidaten(): Observable<Kandidaat[]> {
        return this.http.get<Kandidaat[]>("http://localhost:8082/api/kandidaat");
        
      }
    
      updateKandidaat(kandidaat:Kandidaat) {
        console.log(kandidaat);
        this.http.put<Kandidaat>("http://localhost:8082/api/kandidaat/edit/"+kandidaat.id, kandidaat, httpOptions).subscribe(res => console.log(res));
      }

      addKandidaat(kandidaat: Kandidaat): Observable<number>{
        console.log(kandidaat);
        
        //let kandidaatJs = kandidaat.json();
        return this.http.post<number>("http://localhost:8082/api/kandidaat/create", kandidaat, httpOptions).pipe();
      }
    
      removeKandidaat(removeKandidaat: Kandidaat) : Observable<{}> {
        return this.http.delete("http://localhost:8082/api/kandidaat/delete?id="+removeKandidaat.id).pipe();
      }*/
    
}