import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { UserFeatureAccessService } from '../../../services/userfeatureaccess.service'

@Component({
    selector: 'userfeature',
    templateUrl: './userfeature.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class UserFeatureComponent implements OnInit {
    public userList: UserData[];

    //constructor(private _script: ScriptLoaderService, private _avRoute: ActivatedRoute, private _router: Router) {
    //   

    //}
    //ngOnInit() {
    //}
    //ngAfterViewInit() {
    //    this._script.loadScripts('userfeature',
    //        ['assets/demo/default/custom/components/datatables/base/testdt.js']);
    //}

    ngOnInit() {
    }

    constructor(public http: Http, private _router: Router, private _userFeatureAccessService: UserFeatureAccessService) {
       
        //this.getUserFeatures();
    }
    //getUserFeatures() {
    //    this._userFeatureAccessService.getUserFeaturesById().subscribe(
    //        data => this.userList = data
    //    )
    //}
}
interface UserData {
    Code: string;
    Name: string;
    ModuleName: string;
    Description: string;
    URL: string;
}