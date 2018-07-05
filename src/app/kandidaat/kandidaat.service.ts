import { Injectable }       from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Kandidaat } from './kandidaat';

//Deze httpOptions geven aan dat het Content-Type van de data die we versturen json is.
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

//In een service zet je de methods om http requests naar de backend te sturen. Components maken gebruik van services.
@Injectable()
export class KandidaatService {
    constructor(private http: HttpClient) {
    }
         
    //method om een GET request naar de kandidaat endpoint te sturen. Die returned een collection van Kandidaat objecten
      getKandidaten(): Observable<Kandidaat[]> {
        return this.http.get<Kandidaat[]>("http://localhost:8082/api/kandidaat");
        
      }
    
      //method om een PUT (update) request naar de kandidaat endpoint te versturen.
      //parameters: de URL zelf met het kandidaat.id aan het einde, het kandidaat object zelf, en de httpOptions
      //Aan het einde: subscribe(). Deze method doet iets met de response die we krijgen vanuit de backend. 
      //We doen niets met de response, maar subscribe() is verplicht.
      updateKandidaat(kandidaat:Kandidaat) {
        console.log(kandidaat);
        this.http.put<Kandidaat>("http://localhost:8082/api/kandidaat/edit/"+kandidaat.id, kandidaat, httpOptions).subscribe(res => console.log(res));
      }

      //Method om een post request te sturen naar de kandidaat endpoint. 
      //.pipe() aan het einde is verplicht, net als subscribe()
      //De create endpoint geeft als response het id van het nieuwe object. Deze methods returned dat id.
      addKandidaat(kandidaat: Kandidaat): Observable<number>{
        console.log(kandidaat);
        
        return this.http.post<number>("http://localhost:8082/api/kandidaat/create", kandidaat, httpOptions).pipe();
      }
    
      //method voor de DELETE request.
      removeKandidaat(removeKandidaat: Kandidaat) : Observable<{}> {
        return this.http.delete("http://localhost:8082/api/kandidaat/delete?id="+removeKandidaat.id).pipe();
      }
    
}