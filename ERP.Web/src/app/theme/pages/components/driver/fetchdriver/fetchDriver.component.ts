import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DefaultDataModel } from '../../../models/defaultdatamodel';
import { ToastyService } from 'ng2-toasty';
import { driverinformation } from '../../../models/driverinformation';
import { DriverInformationService } from '../../../services/driverinformation.service';

declare var $: any;

@Component({
    selector: 'fetchdriver',
    templateUrl: './fetchdriver.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FetchDriverComponent {
    DefaultDataList: DefaultDataModel[];
    public driverList: driverinformation[];
    index: number;

    ngOnInit() {
    }

    constructor(public http: Http,
        private _router: Router,
        private toastyService: ToastyService,
        private driverService: DriverInformationService) {
       
        this.getDrivers();
    }

    getDrivers() {
       
        this.driverService.getAll()
            .subscribe(data => {
                this.driverList = data;
                this.DefaultDatatableDemo(data);
                console.log("DriverList", this.driverList);
            })
    }

    DefaultDatatableDemo(data): void {
       
        var options = {
            data: {
                type: 'local',
                source: data,
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
                {
                    field: 'UserId',
                    title: '#',
                    width: 40,
                    selector: { class: 'm-checkbox--solid m-checkbox--brand' },
                },
                {
                    field: 'id',
                    title: '',
                    width: 1,
                    display: "none"
                },
                {
                    field: "orgname",
                    title: "Branch Id",
                    width: 150
                },
                {
                    field: "code",
                    title: "Employee Code",
                    width: 150,
                    responsive: { visible: 'lg' }
                },
                {
                    field: "name",
                    title: "Employee Name",
                    width: 150,
                    responsive: { visible: 'lg' }
                },
                {
                    field: "dateOfBirth",
                    title: "Date of Birth",
                    width: 150,
                    type: 'date',
                    format: 'YYYY-MM-DD',
                },
                {
                    field: "licenseNo",
                    title: "License No",
                    width: 150,
                    responsive: { visible: 'lg' }
                },
                {
                    field: "citizenshipNo",
                    title: "Citizenship No",
                    width: 150,
                    responsive: { visible: 'lg' }
                },
                {
                    field: "status",
                    title: "Status",
                    width: 150,
                    responsive: { visible: 'lg' }
                }]
        };

        $('.m_datatable').mDatatable('destroy');

        var datatable = $('.m_datatable').mDatatable(options);

        //get checked record and get value by column name
        $('#m_datatable_edit_get').on('click', () => {
           
            // select active rows
            datatable.rows('.m-datatable__row--active');

            // check selected nodes
            if (datatable.nodes().length > 0) {
                // get column by field name and get the column nodes
                var value = datatable.columns('id').nodes().text();
                this.index = value;
                this._router.navigate(['/driver/adddriver', value]);
                //$('#datatable_value').html(value);
            }
        });

        $('#m_datatable_delete_get').on('click', () => {
           
            // select active rows
            datatable.rows('.m-datatable__row--active');

            // check selected nodes
            if (datatable.nodes().length > 0) {
                // get column by field name and get the column nodes
                var value = datatable.columns('id').nodes().text();
                this.index = value;
                this.OnDeleteById();
                //$('#datatable_value').html(value);
            }
        });

        $('#m_datatable_approve_get').on('click', () => {
           
            // select active rows
            datatable.rows('.m-datatable__row--active');

            // check selected nodes
            if (datatable.nodes().length > 0) {
                // get column by field name and get the column nodes
                var value = datatable.columns('id').nodes().text();
                this.index = value;
                this.OnApproveById();
                //$('#datatable_value').html(value);
            }
        });

        $('#m_datatable_reject_get').on('click', () => {
           
            // select active rows
            datatable.rows('.m-datatable__row--active');

            // check selected nodes
            if (datatable.nodes().length > 0) {
                // get column by field name and get the column nodes
                var value = datatable.columns('id').nodes().text();
                this.index = value;
                this.OnRejectById();
                //$('#datatable_value').html(value);
            }
        });
    }

    OnDeleteById() {
       
        let userObj: any = localStorage.getItem('currentUser');
        let currentUser = JSON.parse(userObj);
        this.driverService.delete(this.index, currentUser.id).subscribe(response => {
            this.getDrivers();
        });
    }

    OnApproveById() {
        let userObj: any = localStorage.getItem('currentUser');
        let currentUser = JSON.parse(userObj);
        this.driverService.approve(this.index, currentUser.id).subscribe(response => {
            this.getDrivers();
        });
    }
    OnRejectById() {
        let userObj: any = localStorage.getItem('currentUser');
        let currentUser = JSON.parse(userObj);
        this.driverService.reject(this.index, currentUser.id).subscribe(response => {
            this.getDrivers();
        });
    }
}