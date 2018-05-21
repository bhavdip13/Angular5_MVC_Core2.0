import { Injectable, Inject } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { UserFeatureAccessModel } from '../models/userfeatureaccessmodel';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserFeatureMappingModel } from '../models/userfeaturemappingmodel';

@Injectable()
export class UserFeatureAccessService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getUserFeaturesById(id: number) {
        return this._http.get(this.myAppUrl + 'api/UserFeatureAccess/GetUserFeaturesAccessList?id=' + id, this.jwt()).map((response: Response) => response.json());
    }

    getMasterList() {
        return this._http.get(this.myAppUrl + 'api/UserFeatureAccess/GetMasterList', this.jwt()).map((response: Response) => response.json());
    }

    getDefaultData() {
        return this._http.get('https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php').map((response: Response) => response.json());
    }

    saveUserFeature(userFeatureMappingModel: UserFeatureMappingModel[]) {
       
        return this._http.post(this.myAppUrl + 'api/UserFeatureAccess/SaveUserFeature', userFeatureMappingModel, this.jwt()).map((response: Response) => response.json());

       
    }
    //getUserList() {
    //    return this._http.get(this.myAppUrl + 'api/UserFeatureAccess/GetUserFeaturesAccessList', this.jwt()).map((response: Response) => response.json());
    //}

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
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