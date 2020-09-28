import { UserProfileComponent } from './user-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {path: '', component: UserProfileComponent}
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
      ],
      exports: [
      ],
})
export class UserProfileRoutingModule {

}
