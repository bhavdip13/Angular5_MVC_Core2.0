import { Component, OnInit, ViewEncapsulation, AfterViewInit, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FetchUserComponent } from '../fetchuser/fetchUser.component';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/index';

@Component({
    selector: 'addUser',
    templateUrl: './addUser.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AddUserComponent implements OnInit, AfterViewInit {
    userForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;
    user: User;

    constructor(
        private _script: ScriptLoaderService,
        private _avRoute: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _fb: FormBuilder) {

        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }
    }

    GetUserByID(userid: number) {
        this._userService.getUserById(userid)
            .subscribe(user => {
                console.log("GetUserByID", user);
                this.user = user;
            });
    }

    getUsers() {
        this._userService.getUsers()
            .subscribe(data => {
                console.log("GetAllUser", data);
            })
    }
    ngOnInit() {
       
        this.initializeForm();
        if (this.id > 0) {
            this.title = "Edit";
            this._userService.getUserById(this.id).subscribe(result => {
                console.log(result);
                this.user = result;
                
                this.userForm.setValue({
                    id: this.user.id,
                    fullName: this.user.fullName,
                    password: '',
                    email: this.user.email
                });
            });
        }

        /*
        this.GetUserByID(this.id);

        this.getUsers();

        if (this.id > 0) {
            this.title = "Edit";
            this.initializeForm();
        } else {
            this.initializeForm();
        }
        */

        //if (this.id > 0) {
        //    this.title = "Edit";
        //}
        //this.initializeForm();
    }

    //GetUserByID(userid: number) {
    //    this._userService.getUserById(userid)
    //        .subscribe((data) => {
    //            console.log("DATA", data);
    //            this.user = data;
    //            this.title = "Edit";

    //        }
    //        , error => console.log(error));
    //}

    ngAfterViewInit() {
        this._script.loadScripts('addUser',
            ['assets/demo/default/custom/components/forms/validation/form-controls.js']);

    }

    save() {
        //if (!this.employeeForm.valid) {
        //    return;
        //}
       
        if (this.title == "Create") {
           
            this._userService.saveUser(this.userForm.value)
                .subscribe((data) => {
                    this.userForm.reset();
                    this._router.navigate(['user/fetch-user']);
                }, error => console.log(error))
        }
        else if (this.title == "Edit") {
          
            this._userService.saveUser(this.userForm.value)
                .subscribe((data) => {
                    this.userForm.reset();
                    this._router.navigate(['user/fetch-user']);
                }, error => console.log(error))
        }
    }
    cancel() {
        this._router.navigate(['/fetch-user']);
    }

    private initializeForm() {
       
        this.userForm = this._fb.group({
            id: [0],
            fullName: ['', [Validators.required]],
            password: ['', [Validators.required]],
            email: ['', [Validators.required]],
            
        });

        //if (this.title == "Edit") {
        //    this.userForm = this._fb.group({
        //        userName: [this.user.userName, [Validators.required]],
        //        password: ['', [Validators.required]],
        //        email: [this.user.email, [Validators.required]],
        //        employeeid: [this.user.employeeId, [Validators.required]]
        //    })
        //}
        //else if (this.title == "Create") {
        //    this.userForm = this._fb.group({
        //        userName: ['Amanda Clarke', [Validators.required]],
        //        password: ['123456', [Validators.required]],
        //        email: ['amanda@gmail.com', [Validators.required]],
        //        employeeid: ['FBI', [Validators.required]]
        //    })
        //}
    }
    //get name() { return this.employeeForm.get('name'); }
    //get gender() { return this.employeeForm.get('gender'); }
    //get department() { return this.employeeForm.get('department'); }
    //get city() { return this.employeeForm.get('city'); }
}