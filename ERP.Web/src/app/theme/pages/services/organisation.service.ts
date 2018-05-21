import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { organisation } from '../models/organisation';

@Injectable()
export class OrganisationService {
    myAppUrl: string = "";
    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    GetOrganisations() {
        return this.http.get(this.myAppUrl + '/api/Organisation/GetOrganisations', this.jwt()).map((response: Response) => response.json());
    }
    GetSubOrganisations() {
        return this.http.get(this.myAppUrl + '/api/Organisation/GetSubOrganisations', this.jwt()).map((response: Response) => response.json());
    }
    getById(id: number) {
        return this.http.get(this.myAppUrl + '/api/Organisation/Organisation?Id=' + id, this.jwt()).map((response: Response) => response.json());
    }
    create(organisation: organisation): Observable<Response> {
        let header = new Headers({ 'Content-Type': 'application/json' });

        let options = new RequestOptions({ headers: header });
        let saveUrl = this.myAppUrl + "/api/SaveorganisationList";
        return this
            .http
            .post(saveUrl, organisation, options);
        //  return this.http.post(this.config.apiUrl + '', driverinformation, this.jwt());
    }

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
