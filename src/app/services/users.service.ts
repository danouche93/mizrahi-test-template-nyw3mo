import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UsersService {
  private _jsonURL = '/assets/data/MOCK_DATA.json';

  constructor(private http: HttpClient) {}

  Get(): Observable<User[]> {
    return Observable.create((observer) => {
      this.http.get(this._jsonURL).subscribe(
        (res: User[]) => {
          observer.next(res);
          observer.complete();
        },
        (err) => {
          console.log(err.error);
        }
      );
    });
  }

  Filter(userModel: User): Observable<User[]> {
    return Observable.create((observer) => {
      this.http.get(this._jsonURL).subscribe(
        (res: User[]) => {
          var users: User[] = res;
          if (userModel.id)
            users = res.filter((r) => r.id == userModel.id);
          if (userModel.first_name && userModel.first_name.trim() != "")
            users = res.filter((r) => r.first_name.toLocaleLowerCase().includes(userModel.first_name.toLocaleLowerCase()));
          if (userModel.last_name && userModel.last_name.trim() != "")
            users = res.filter((r) => r.last_name.toLocaleLowerCase().includes(userModel.last_name.toLocaleLowerCase()));
          if (userModel.account_id && userModel.account_id.trim() != "")
            users = res.filter((r) => r.account_id.includes(userModel.account_id));
          if (userModel.email && userModel.email.trim() != "")
            users = res.filter((r) => r.email.toLocaleLowerCase().includes(userModel.email.toLocaleLowerCase()));
          observer.next(users);
          observer.complete();
        },
        (err) => {
          console.log(err.error);
        }
      );
    });
  }
}
