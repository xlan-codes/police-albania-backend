import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';


@Injectable()
export class AdminUserServices extends BaseHttpService {

    private url: string;
    constructor(protected http: HttpClient) {
        super(http);
        this.url =  environment.adminUser;
    }

    public async getUsers(): Promise<any> {
        return super.get(this.url);
    }
}
