import { UserServices } from './../../core/services/user.services';
import { UsersRoutingModule } from './users.routing';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [UsersRoutingModule],
    declarations: [],
    providers: [
        UserServices
    ],
    exports: [],
    entryComponents: []
})
export class UserModule {

}
