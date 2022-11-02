import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlisService {

  constructor(private http: HttpClient) { }

  getFlisList = () : Observable<any> => {
    return this.http.get(`${environment.api}/seznam/flisov`);
  }

  getFabricList = (): Observable<any> => {
    return this.http.get(`${environment.api}/seznam/tkanin`)
  }

  getFabricByIdent = (ident: string) : Observable<any> => {
    return this.http.get(`${environment.api}/tkanina/${ident}`);
  }

}
