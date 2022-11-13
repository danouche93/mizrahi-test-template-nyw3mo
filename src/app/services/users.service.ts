import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  private _jsonURL = './data/MOCK_DATA.json';
  data: string;

  constructor(private http: HttpClient) {
    this.http.get(this._jsonURL, { responseType: 'text' }).subscribe((data) => {
      this.data = data;
    });
  }

  Filter() {
    return this.data;
  }
}
