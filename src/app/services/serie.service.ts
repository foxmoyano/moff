import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GlobalVariable } from '../config/global';
import { Serie } from '../domain/serie';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic bG1veWFubzphZG1pbg=='
    })
  };

@Injectable()

  export class SerieService {
    baseUrlGet: string = GlobalVariable.BASE_API_URL + 'series';
    baseUrlPost: string = GlobalVariable.BASE_API_URL + 'serie';
    baseUrlPut: string = GlobalVariable.BASE_API_URL + 'serie';

    constructor(private http: HttpClient) {
    }

    getSeries(): Observable<Serie[]> {
        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic bG1veWFubzphZG1pbg=='
             });
        
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', 'Basic bG1veWFubzphZG1pbg==');

        return this.http.get<Serie[]>(this.baseUrlGet, {headers});
    }

    postSerie(data: Serie): Observable<Serie> {
        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic bG1veWFubzphZG1pbg=='
             });
        let options = {
            headers: httpHeaders
        };
        return this.http.post<Serie>(this.baseUrlPost, data, httpOptions);
    }

    putSerie(data: Serie): Observable<Serie> {
        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Cache-Control': 'no-cache'
             });
        let options = {
            headers: httpHeaders
        };
        return this.http.put<Serie>(this.baseUrlPut, data, httpOptions);
    }

}