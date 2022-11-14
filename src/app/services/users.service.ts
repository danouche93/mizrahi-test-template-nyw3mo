import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UsersService {
  private _jsonURL = '/assets/data/MOCK_DATA.json';

  constructor(private http: HttpClient) {
  }

  Filter(): Observable<User[]> {
    return Observable.create(observer => {
      this.http.get(this._jsonURL).subscribe((res: User[]) => {
        observer.next(res);
        observer.complete();
      }, err => {
        console.log(err.error);
      });
    })
  }
}
