import { NotificationService } from './../../core/services/notification.service';
import { BrowserModule } from '@angular/platform-browser';
import { NotificationsRoutingModule } from './notification.routing';

import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        NotificationsRoutingModule,
    ],
    declarations: [
        NotificationsComponent
    ],
    providers: [NotificationService],
    exports: [],
    entryComponents: []
})
export class NotificationsModule {

}
