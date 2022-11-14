import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.Filter().subscribe(res => {
      this.users = res;
      console.log(this.users);
    })
  }

}