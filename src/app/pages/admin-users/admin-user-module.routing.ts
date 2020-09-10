import { AdminUsersComponent } from './admin-users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {path: '', component: AdminUsersComponent}
];


@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      RouterModule.forChild(routes)
    ],
    exports: [
    ],
  })
export class AdminUserRoutingModule {

}
