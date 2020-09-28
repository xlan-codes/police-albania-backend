import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UserServices {

    constructor(protected http: HttpClient) {
    }

    public async getUsers() {

    }
}
