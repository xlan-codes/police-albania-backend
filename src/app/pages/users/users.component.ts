import { User } from '../../models/users.model';
import { UserServices } from '../../core/services/user.services';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  selectedUsers: User[];

  @ViewChild('dt') dt: Table;

  constructor(private customerService: UserServices) { }

  ngOnInit() {
    this.getUsers();
  }

  public async getUsers(): Promise<any> {
   this.users = await this.customerService.getUsers();
  }

}
