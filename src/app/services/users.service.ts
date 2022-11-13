import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UsersService {
  private _jsonURL = '/assets/data/test.json';
  data: any;

  constructor(private http: HttpClient) {
  }

  Filter(): Observable<any> {
    return this.http.get("/assets/data/test.json");
  }
}
