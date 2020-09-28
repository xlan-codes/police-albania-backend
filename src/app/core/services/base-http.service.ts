import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseHttpService {
    private baseUrl: string;
    constructor(
        protected http: HttpClient
    ) {
        this.baseUrl = environment.baseUrl;
    }

    public async get(url: string, options?: any): Promise<any> {
        return this.http.get(this.baseUrl + url, options).toPromise();
    }

    public async post(url: string, body?: any, options?: any): Promise<any> {
        return this.http.post(this.baseUrl + url, body, options).toPromise();
    }

    public async update(url: string, body: any, options: any): Promise<any> {
        return this.http.put(this.baseUrl + url, body, options).toPromise();
    }

    public async delete(url: string, options: any): Promise<any> {
        return this.http.delete(this.baseUrl + url, options).toPromise();
    }

}
