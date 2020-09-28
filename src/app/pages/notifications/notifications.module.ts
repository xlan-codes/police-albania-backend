import { NotificationsRoutingModule } from './notification.routing';

import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications.component';


@NgModule({
    imports: [
        NotificationsRoutingModule
    ],
    declarations: [
        NotificationsComponent
    ],
    providers: [],
    exports: [],
    entryComponents: []
})
export class NotificationsModule {

}
