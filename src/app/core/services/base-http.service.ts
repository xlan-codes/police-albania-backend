import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseHttpService {
    constructor(
        protected http: HttpClient
    ) {
    }

    public async get(url: string, options?: any): Promise<any> {
        return this.http.get(url, options).toPromise();
    }

    public async post(url: string, body?: any, options?: any): Promise<any> {
        return this.http.post(url, body, options).toPromise();
    }

    public async update(url: string, body: any, options: any): Promise<any> {
        return this.http.put(url, body, options).toPromise();
    }

    public async delete(url: string, options: any): Promise<any> {
        return this.http.delete(url, options).toPromise();
    }

}
