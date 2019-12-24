import { Injectable } from "@angular/core";
import { Location } from '@angular/common';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import 'rxjs/Rx';
@Injectable()
export class ApiService {

    basePath: string;
    constructor(private http: HttpClient ) {
        this.basePath = environment.basePath;
    }
    getUsers() {
        return this.http.request('get', Location.joinWithSlash(`${this.basePath}`, `/users`), {
            observe: 'response',
        }).map((response: any) => {
            switch (response.status) {
                case 200: {
                    return response.body;
                }
            }
        })
    }
    getRepository(userName: String) {
        return this.http.request('get', Location.joinWithSlash(`${this.basePath}`, `/users/${userName}/repos`), {
            observe: 'response',
        }).map((response: any) => {
            switch (response.status) {
                case 200: {
                    return response.body;
                }
            }
        })
    }
}