import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Component, OnInit, ViewEncapsulation, AfterViewInit, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { DriverInformationService } from '../../../services/driverinformation.service';
import { OrganisationService } from '../../../services/organisation.service';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { driverinformation } from "../../../models/driverinformation";

declare var $: any;

@Component({
    selector: 'addDriver',
    templateUrl: './addDriver.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AddDriverComponent implements OnInit, AfterViewInit {
    driverForm: FormGroup;
    title: string = "Create";
    driver: driverinformation;
    driverV1: driverinformation;
    company: any[];
    branch: any[];
    currentUser: any;
    orgCode: any;
    id: number;

    constructor(
        private script: ScriptLoaderService,
        private activeRoute: ActivatedRoute,
        private router: Router,
        private sanitizer: DomSanitizer,
        private driverService: DriverInformationService,
        private orgService: OrganisationService,
        private fb: FormBuilder) {
       
        if (this.activeRoute.snapshot.params["id"]) {
            this.id = this.activeRoute.snapshot.params["id"];
        }
       
    }

    ngOnInit() {
       
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        this.orgService.GetOrganisations().subscribe(organistation => {
            this.company = organistation;
            console.log(this.company);
        });

        this.orgService.GetSubOrganisations().subscribe(suborganistation => {
            this.branch = suborganistation;
            console.log(this.branch);
        });
        this.initializeForm();
        if (this.id > 0) {
            this.title = "Edit"
            this.driverService.getById(this.id)
                .subscribe(resp => {
                    console.log(resp);
                    this.driverV1 = resp;
                    this.driverForm.setValue({
                        id: this.driverV1.id,
                        orgId: this.driverV1.orgId,
                        subOrgId: this.driverV1.subOrgId,
                        code: this.driverV1.code,
                        name: this.driverV1.name,
                        dateOfBirth: this.driverV1.dateOfBirth,
                        dateOfJoining: this.driverV1.dateOfJoining,
                        citizenshipNo: this.driverV1.citizenshipNo,
                        csnIssueDate: this.driverV1.csnIssueDate,
                        licenseNo: this.driverV1.licenseNo,
                        issueDate: this.driverV1.issueDate,
                        validUpto: this.driverV1.validUpto,
                        unitNo: this.driverV1.unitNo
                    });
                });
            this.driver = new driverinformation();
        } else {
            this.driver = new driverinformation();
        }
    }

    ngAfterViewInit() {
        this.script.loadScripts('addDriver',
            ['assets/demo/default/custom/components/forms/validation/form-controls.js']);

        this.script.loadScripts('addDriver',
            ['assets/demo/default/custom/components/forms/widgets/datepicker.js']);
    }

    save() {
       
        if (this.id > 0) {
            //update
            this.driver.id = this.id;
            this.driver.code = this.driverForm.value.code;
            this.driver.name = this.driverForm.value.name;
            this.driver.dateOfBirth = $("#m_datetimepicker_1").val();
            this.driver.dateOfJoining = $("#m_datetimepicker_2").val();
            this.driver.licenseNo = this.driverForm.value.licenseNo;
            this.driver.issueDate = $("#m_datetimepicker_4").val();
            this.driver.validUpto = $("#m_datetimepicker_5").val();
            this.driver.citizenshipNo = this.driverForm.value.citizenshipNo;
            this.driver.csnIssueDate = $("#m_datetimepicker_3").val();
            this.driver.unitNo = this.driverForm.value.unitNo;
            this.driver.orgId = this.driverForm.value.orgId;
            this.driver.subOrgId = this.driverForm.value.subOrgId;
            this.driver.currentUserId = this.currentUser.id;

            this.driverService.create(this.driver).subscribe(response => {
                this.driverForm.reset();
                this.router.navigate(['/driver/fetchdriver']);
            });
        } else {
            //create
            this.driver.id = this.id;
            this.driver.code = this.driverForm.value.code;
            this.driver.name = this.driverForm.value.name;
            this.driver.dateOfBirth = $("#m_datetimepicker_1").val();
            this.driver.dateOfJoining = $("#m_datetimepicker_2").val();
            this.driver.licenseNo = this.driverForm.value.licenseNo;
            this.driver.issueDate = $("#m_datetimepicker_4").val();
            this.driver.validUpto = $("#m_datetimepicker_5").val();
            this.driver.citizenshipNo = this.driverForm.value.citizenshipNo;
            this.driver.csnIssueDate = $("#m_datetimepicker_3").val();
            this.driver.unitNo = this.driverForm.value.unitNo;
            this.driver.orgId = this.driverForm.value.orgId;
            this.driver.subOrgId = this.driverForm.value.subOrgId;
            this.driver.currentUserId = this.currentUser.id;

            this.driverService.create(this.driver).subscribe(response => {
                this.driverForm.reset();
                this.router.navigate(['/driver/fetchdriver']);
            });
        }
    }

    onOrgChange() {
       
        var orgid = $("#org option:selected").val();
        if (orgid != "") {
            console.log("OrgId =>", orgid);
        }
    }

    onSubOrgChange() {
       
        var suborgid = $("#suborg option:selected").val();
        if (suborgid != "") {
            console.log("SubOrgId =>", suborgid);
        }
    }

    private initializeForm() {
       
        this.driverForm = this.fb.group({
            id: [0],
            orgId: ['', [Validators.required]],
            subOrgId: ['', [Validators.required]],
            code: ['', [Validators.required]],
            name: ['', [Validators.required]],
            dateOfBirth: ['', [Validators.required]],
            dateOfJoining: ['', [Validators.required]],
            citizenshipNo: ['', [Validators.required]],
            csnIssueDate: ['', [Validators.required]],
            licenseNo: ['', [Validators.required]],
            issueDate: ['', [Validators.required]],
            validUpto: ['', [Validators.required]],
            unitNo: ['', [Validators.required]]
        });
    }
}