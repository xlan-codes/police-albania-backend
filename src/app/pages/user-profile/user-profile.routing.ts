import { UserProfileComponent } from './user-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
    {path: '', component: UserProfileComponent}
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
export class UserProfileRoutingModule {

}
