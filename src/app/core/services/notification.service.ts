import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { BaseHttpService } from './base-http.service';

@Injectable()
export class NotificationService extends BaseHttpService {

    private url: string;
    constructor(protected http: HttpClient) {
        super(http);
        this.url =  environment.notification;
    }


    public getLatestNotification(date: Date): Promise<void> {
        return super.get(this.url + environment.latestNotification + '?localDateTime=' + date.toISOString());
    }

    public getFailNotification(): Promise<void> {
        return super.get(this.url + environment.notificationFail);
    }

    public async getNotifications(): Promise<void> {
        return super.get(this.url);
    }

}
