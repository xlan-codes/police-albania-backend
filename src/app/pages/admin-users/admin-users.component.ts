import { AdminUserServices } from './../../core/services/admin-user.services';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { User } from './../../models/users.model';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: User[];

  selectedUsers: User[];

  @ViewChild('dt') dt: Table;

  constructor(
    private adminUserService: AdminUserServices
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public async getUsers(): Promise<any> {
    this.users = await this.adminUserService.getUsers();
   }

}
