import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GlobalVariable } from '../config/global';
import { Emitter } from '../domain/emitter';

@Injectable()

export class EmitterService {
    baseUrlGet: string = GlobalVariable.BASE_API_URL + 'emitters';

    constructor(private http: HttpClient) {
    }

    getEmitters(): Observable<Emitter[]> {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', 'Basic bG1veWFubzphZG1pbg==');

        return this.http.get<Emitter[]>(this.baseUrlGet, {headers});
    }
}