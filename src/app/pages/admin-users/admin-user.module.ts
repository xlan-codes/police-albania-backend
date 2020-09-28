import { AdminUserServices } from './../../core/services/admin-user.services';
import { AdminUserRoutingModule } from './admin-user-module.routing';
import { NgModule } from '@angular/core';
import { AdminUsersComponent } from './admin-users.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [
        AdminUsersComponent
    ],
    imports: [
        AdminUserRoutingModule,
        TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        ToastModule,
        InputTextModule,
        ProgressBarModule,
        FormsModule
    ],
    providers: [
        AdminUserServices
    ]
})
export class AdminUserModule {

}
