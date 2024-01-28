import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import {mechdetails} from '../shared/mechanic';
@Injectable({
  providedIn: 'root'
})
export class MechdetailService {

  constructor(private http: HttpClient) {
  }
  getRepos(): Observable<any> {
    return this.http.get('/api/me/getAll')
  }
  getpin():Observable<any>{
    return this.http.get('/api/me/get')
  }
}
