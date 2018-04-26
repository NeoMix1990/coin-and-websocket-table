import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ConfigService {
  constructor(
    private http: HttpClient,

  ) { } 
  
  getCoin(): Observable<any> {
    return this.http.get('http://coincap.io/front');
  }




}

