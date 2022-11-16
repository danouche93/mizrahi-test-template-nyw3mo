import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  displayedColumns = ['id', 'first_name', 'last_name', 'account_id', 'email'];
  loading: boolean = false;

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.loading = true;
    this.userService.Get().subscribe((res) => {
      this.users = res;
      this.loading = false;
    });
  }

  filter(event) {
    this.loading = true;
    this.userService.Filter(event.userModel).subscribe((res) => {
      this.users = res;
      this.loading = false;
    });
  }
}
