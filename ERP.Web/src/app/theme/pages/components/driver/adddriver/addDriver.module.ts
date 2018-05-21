import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default/default.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddDriverComponent } from './addDriver.component';
import { DriverInformationService } from '../../../services/driverinformation.service';
import { OrganisationService } from '../../../services/organisation.service';


const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": AddDriverComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, FormsModule, HttpModule, ReactiveFormsModule
    ], exports: [
        RouterModule
    ], declarations: [
        AddDriverComponent
    ], providers: [DriverInformationService, OrganisationService]
})
export class AddDriverModule {



}