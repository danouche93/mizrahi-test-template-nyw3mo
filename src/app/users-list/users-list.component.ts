import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  data: string;
  
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.data = this.userService.Filter();
    console.log(this.data);
  }

}