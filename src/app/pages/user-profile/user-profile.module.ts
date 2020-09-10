import { UserProfileComponent } from './user-profile.component';


import { NgModule } from '@angular/core';
import { UserProfileRoutingModule } from './user-profile.routing';


@NgModule({
    imports: [
        UserProfileRoutingModule
    ],
    providers: [],
    declarations: [
        UserProfileComponent
    ],
})
export class UserProfileModule {

}

