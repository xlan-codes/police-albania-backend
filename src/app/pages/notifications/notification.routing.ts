import { NotificationsComponent } from './notifications.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {path: '', component: NotificationsComponent}
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
      ],
      exports: [
      ],
})
export class NotificationsRoutingModule {

}
