import { User } from '../../models/users.model';
import { UserServices } from '../../core/services/user.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  selectedUsers: User[];

  constructor(private customerService: UserServices) { }

  ngOnInit() {
  }

}
