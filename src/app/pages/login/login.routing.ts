import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {path: '', component: LoginComponent}
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
      ],
      exports: [
      ],
})
export class LoginRoutingModule {

}
