import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<{userModel: User}>();
  userModel: User = new User();

  constructor() { }

  ngOnInit() {
  }

  searchEmit(){
    this.searchEvent.emit({userModel: this.userModel});
  }

}