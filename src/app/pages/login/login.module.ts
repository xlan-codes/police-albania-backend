import { LoginRoutingModule } from './login.routing';

import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        LoginRoutingModule,
        ReactiveFormsModule
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
