import { LoginRoutingModule } from './login.routing';

import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';


@NgModule({
    imports: [
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [],
    exports: [],
    entryComponents: []
})
export class LoginModule {

}
