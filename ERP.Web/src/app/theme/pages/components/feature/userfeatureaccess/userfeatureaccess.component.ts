import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { UserFeatureAccessService } from '../../../services/userfeatureaccess.service';
import { UserList, FeatureModel, UserFeatureAccessModel } from "../../../models/userfeatureaccessmodel";
import { User } from "../../../models/user";
import { DefaultDataModel } from "../../../models/defaultdatamodel";
import { UserFeatureMappingModel } from '../../../models/userfeaturemappingmodel';

declare var $: any;

@Component({
    selector: 'userfeatureaccess',
    templateUrl: './userfeatureaccess.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class UserFeatureAccessComponent implements OnInit, AfterViewInit {
    FeatureAccessList: UserFeatureAccessModel[];
    FeatureAccessListV1: UserFeatureAccessModel[];
    DefaultDataList: DefaultDataModel[];
    userList: UserList[];
    featureList: FeatureModel[];
    currentUser: any;
    moduleList: any[];
    formLabel: string;
    public tableWidget: any;

    currentUserId: any;

    //
    public userFeatureMappingList: UserFeatureMappingModel[];
    public userFeatureMapping: UserFeatureMappingModel;

    constructor(
        private _script: ScriptLoaderService,
        private _featureAccessService: UserFeatureAccessService,
        private router: Router, ) { }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUserId = this.currentUser.UserId;
        this.getMasterList();
    }

    ngAfterViewInit() { }

    // Get User and Feature List
    getMasterList() {
        this._featureAccessService.getMasterList().subscribe(
            data => {
               
                this.userList = data.userAccessList;
                this.featureList = data.featureList;
                //let existModule = this.featureList.filter(p => p.moduleName);
                let existModule = this.featureList.map(p => p.moduleName);
                this.moduleList = Array.from(new Set(existModule));
            }
        )
    }

    // Get UserFeatureList by UserId
    getUserFeaturesAccess(uid: number) {
        this._featureAccessService.getUserFeaturesById(uid)
            .subscribe(data => {
                this.FeatureAccessList = data;
                this.bindMenu();
            })
    }

    onModuleChange() {
       
        var moduleVal = $("#menuModule option:selected").val();
        if (moduleVal != "") {
            console.log(moduleVal);
        }
    }

    onUserChange() {
       
        var userid = $("#userFeature option:selected").val();
        if (userid != "") {
            this.getUserFeaturesAccess(userid);
        }
    }

    bindMenu() {
       
        //
        let arrList = [];
        this.featureList.forEach(item => {
           
            let fId = item.id;

            let exist = this.FeatureAccessList.filter(f => f.featureID == fId);

            if (exist.length > 0) {
                arrList.push({
                    "featureID": item.id,
                    "moduleName": item.moduleName,
                    "name": item.name,
                    "deny": exist[0].deny,
                    "edit": exist[0].edit,
                    "view": exist[0].view,
                    "delete": exist[0].delete,
                    "print": exist[0].print,
                    "copy": exist[0].copy,
                    "dataflow": exist[0].dataflow
                });
            } else {
                arrList.push({
                    "featureID": item.id,
                    "moduleName": item.moduleName,
                    "name": item.name,
                    "deny": 0,
                    "edit": 0,
                    "view": 0,
                    "delete": 0,
                    "print": 0,
                    "copy": 0,
                    "dataflow": 0
                });
            }

        });

        this.FeatureAccessListV1 = arrList;

        console.log("Access List", this.FeatureAccessListV1);

        this.DefaultDatatableDemo();
    }

    DefaultDatatableDemo(): void {
       
        var options = {
            data: {
                type: 'local',
                source: this.FeatureAccessListV1,
                pageSize: 10
            },
            layout: {
                theme: 'default',
                class: '',
                scroll: true,
                height: 350,
                footer: false
            },

            sortable: true,

            filterable: false,

            pagination: true,

            search: {
                input: $('#generalSearch')
            },

            // toolbar
            toolbar: {
                // toolbar items
                items: {
                    // pagination
                    pagination: {
                        pageSizeSelect: [5, 10, 20, 30, 50, 100/*, -1*/] // display dropdown to select pagination size. -1 is used for "ALl" option
                    }
                }
            },

            columns: [
                //{
                //    field: "FeatureID",
                //    title: "",
                //    sortable: false,
                //    responsive: { hidden: 'md' }
                //},
                //{
                //    field: "UserId",
                //    title: "UserId",
                //    sortable: false,
                //    responsive: { hidden: 'md' }
                //},
                {
                    field: "featureID",
                    title: " ",
                    width: 1,
                    template: function(row) {
                        return '<input type="hidden" value="' + row.featureID + '" />';
                    }
                },
                {
                    field: "moduleName",
                    title: "Module Name",
                    sortable: true,
                    width: 120
                },
                {
                    field: "name",
                    title: "Menu Name",
                    width: 120
                },
                {
                    field: "deny",
                    title: "Deny",
                    textAlign: 'center',
                    sortable: false,
                    width: 40,
                    // callback function support for column rendering
                    template: function(row) {
                        if (row.deny == 1) {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" checked value="1"><span></span></label>';
                        } else {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="0"><span></span></label>';
                        }

                    }
                },
                {
                    field: "edit",
                    title: "Edit",
                    textAlign: 'center',
                    sortable: false,
                    width: 40,
                    template: function(row) {
                        if (row.edit == 1) {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" checked value="1"><span></span></label>';
                        } else {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="0"><span></span></label>';
                        }
                    }
                },
                {
                    field: "view",
                    title: "View",
                    textAlign: 'center',
                    sortable: false,
                    width: 40,
                    template: function(row) {
                        if (row.view == 1) {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" checked value="1"><span></span></label>';
                        } else {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="0"><span></span></label>';
                        }
                    }
                },
                {
                    field: "delete",
                    title: "Delete",
                    textAlign: 'center',
                    sortable: false,
                    width: 50,
                    template: function(row) {
                        if (row.delete == 1) {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" checked value="1"><span></span></label>';
                        } else {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="0"><span></span></label>';
                        }
                    }
                },
                {
                    field: "print",
                    title: "Print",
                    textAlign: 'center',
                    sortable: false,
                    width: 40,
                    template: function(row) {
                        if (row.print == 1) {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" checked value="1"><span></span></label>';
                        } else {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="0"><span></span></label>';
                        }
                    }
                },
                {
                    field: "copy",
                    title: "Copy",
                    textAlign: 'center',
                    sortable: false,
                    width: 40,
                    template: function(row) {
                        if (row.copy == 1) {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" checked value="1"><span></span></label>';
                        } else {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="0"><span></span></label>';
                        }
                    }
                },
                {
                    field: "dataflow",
                    title: "Dataflow",
                    textAlign: 'center',
                    sortable: false,
                    width: 70,
                    template: function(row) {
                        if (row.dataflow == 1) {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" checked value="1"><span></span></label>';
                        } else {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="0"><span></span></label>';
                        }
                    }
                }
            ]
        };

        $('.m_datatable').mDatatable('destroy');
        var datatable = $('.m_datatable').mDatatable(options);

        $('#m_datatable_get').on('click', () => {

            var userid = $("#userFeature option:selected").val();

            var featureArray = [];
           
            $('.m_datatable tr').each(function() {
                var tdVal = $(this).find('td');
                if (tdVal.length > 0) {
                    var Deny, Edit, View, Delete, Print, Copy, Dataflow;
                    var featureId = tdVal[0].children[0].children[0].value;
                    if (tdVal[3].children["0"].children["0"].children["0"].checked) {
                        Deny = 1;
                    }
                    else {
                        Deny = 0;
                    }
                    if (tdVal[4].children["0"].children["0"].children["0"].checked) {
                        Edit = 1;
                    }
                    else {
                        Edit = 0;
                    }
                    if (tdVal[5].children["0"].children["0"].children["0"].checked) {
                        View = 1;
                    }
                    else {
                        View = 0;
                    }
                    if (tdVal[6].children["0"].children["0"].children["0"].checked) {
                        Delete = 1;
                    }
                    else {
                        Delete = 0;
                    }
                    if (tdVal[7].children["0"].children["0"].children["0"].checked) {
                        Print = 1;
                    }
                    else {
                        Print = 0;
                    }
                    if (tdVal[8].children["0"].children["0"].children["0"].checked) {
                        Copy = 1;
                    }
                    else {
                        Copy = 0;
                    }
                    if (tdVal[9].children["0"].children["0"].children["0"].checked) {
                        Dataflow = 1;
                    }
                    else {
                        Dataflow = 0;
                    }

                    featureArray.push({
                        "UserId": userid,
                        "FeatureId": featureId,
                        "Deny": Deny,
                        "Edit": Edit,
                        "View": View,
                        "Delete": Delete,
                        "Print": Print,
                        "Copy": Copy,
                        "Dataflow": Dataflow
                    });
                }
            });

            this.userFeatureMappingList = featureArray;
            console.log(this.userFeatureMappingList);
            this.saveUserFeature();
        });

    }

    private saveUserFeature() {
       
        this._featureAccessService.saveUserFeature(this.userFeatureMappingList)
            .subscribe(data => {
               
                console.log(data);
                this.router.navigate(['/']);
            }, error => console.log(error))
    }
}
