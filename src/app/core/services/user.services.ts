import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';


@Injectable()
export class UserServices extends BaseHttpService {

    private url: string;
    constructor(protected http: HttpClient) {
        super(http);
        this.url =  environment.user;
    }

    public async getUsers(): Promise<any> {
        return super.get(this.url);
    }
}
