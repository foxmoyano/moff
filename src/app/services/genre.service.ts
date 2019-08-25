import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GlobalVariable } from '../config/global';
import { Genre } from '../domain/genre';

@Injectable()

export class GenreService {
    baseUrlGet: string = GlobalVariable.BASE_API_URL + 'genres';

    constructor(private http: HttpClient) {
    }

    getGenres(): Observable<Genre[]> {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', 'Basic bG1veWFubzphZG1pbg==');

        return this.http.get<Genre[]>(this.baseUrlGet, {headers});
    }
}