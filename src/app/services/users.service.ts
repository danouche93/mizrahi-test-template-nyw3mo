import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  private _jsonURL = 'src/app/data/MOCK_DATA.json';
  data: any;

  constructor(private http: HttpClient) {
    this.http.get(this._jsonURL).subscribe((data) => {
      this.data = data;
    });
  }

  Filter() {
    return this.data;
  }
}
