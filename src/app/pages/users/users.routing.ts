import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
    {path: '', component: UsersComponent}
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
export class UsersRoutingModule {

}
