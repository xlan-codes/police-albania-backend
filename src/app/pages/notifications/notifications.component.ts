import { NotificationService } from './../../core/services/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {


  latestNotification: any;

  notifications: any;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.getNotifications();
    this.getFailNotifications();
  }

  public async getLatestNotifications(): Promise<any> {
    this.notificationService.getLatestNotification(null).then((res) => {
      this.latestNotification = res;
    });
  }


  public async getNotifications(): Promise<void> {
    this.notificationService.getNotifications().then((res) => {
      this.notifications = res;
    });
  }


  public async getFailNotifications(): Promise<void> {
    this.notificationService.getFailNotification().then((res) => {
      this.notifications = res;
    });
  }

}
