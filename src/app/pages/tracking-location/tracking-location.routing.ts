import { TrackingLocationComponent } from './tracking-location.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
    {path: '', component: TrackingLocationComponent}
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
export class TrackingLocationRoutingModule {

}

