import { Injectable, Inject } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { driverinformation } from '../models/driverinformation';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DriverInformationService {
    myAppUrl: string = "";
    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getAll() {
        return this.http.get(this.myAppUrl + 'api/GetDriverInformations', this.jwt()).map((response: Response) => response.json());
    }
    getById(id: number) {
        return this.http.get(this.myAppUrl + 'api/GetDriverInformation?Id=' + id, this.jwt()).map((response: Response) => response.json());
    }
    create(driver: driverinformation): Observable<Response> {
        let header = new Headers({ 'Content-Type': 'application/json' });

        let options = new RequestOptions({ headers: header });
        let saveUrl = this.myAppUrl + "/api/SaveDriverInformation";
        return this
            .http
            .post(saveUrl, driver, options);
        //  return this.http.post(this.config.apiUrl + '', driverinformation, this.jwt());
    }

    update(driverinformation: driverinformation) {
        return this.http.put(this.myAppUrl + 'api/UpdateDriverInformation/' + driverinformation.id, driverinformation, this.jwt());
    }

    delete(id: number, currentUserId: number) {
        return this.http.post(this.myAppUrl + 'api/Delete?Id=' + id + '&currentUserId=' + currentUserId, this.jwt());
    }
    approve(id: number, currentUserId: number) {
        return this.http.post(this.myAppUrl + 'api/Approve?Id=' + id + '&currentUserId=' + currentUserId, this.jwt());
    }
    reject(id: number, currentUserId: number) {
        return this.http.post(this.myAppUrl + 'api/Reject?Id=' + id + '&currentUserId=' + currentUserId, this.jwt());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let userObj: any = localStorage.getItem('currentUser');
        let currentUser = JSON.parse(userObj);
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
