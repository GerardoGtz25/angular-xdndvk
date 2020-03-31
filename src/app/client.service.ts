import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  public get(): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character/')
      .pipe(map(res => res));
  }
}