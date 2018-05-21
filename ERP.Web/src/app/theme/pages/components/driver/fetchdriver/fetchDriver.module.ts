import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default/default.component';

import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { FetchDriverComponent } from './fetchDriver.component';
import { DriverInformationService } from '../../../services/driverinformation.service';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": FetchDriverComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule,
        HttpModule,
        FormsModule
    ], exports: [
        RouterModule
    ], declarations: [
        FetchDriverComponent
    ],
    providers: [DriverInformationService]
})
export class FetchDriverModule {

}