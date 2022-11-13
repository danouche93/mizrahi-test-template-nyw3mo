import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UsersService {
  private _jsonURL = 'https://mizrahi-test-template-nyw3mo.stackblitz.io/src/app/data/MOCK_DATA.json';
  data: any;

  constructor(private http: HttpClient) {
    this.http.get(this._jsonURL).subscribe((data: any) => {
      this.data = data;
    });
  }

  Filter() {
    return this.data;
  }
}
