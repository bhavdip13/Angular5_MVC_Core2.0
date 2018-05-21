import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default/default.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserFeatureAccessComponent } from './userfeatureaccess.component';
import { UserFeatureAccessService } from '../../../services/userfeatureaccess.service';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": UserFeatureAccessComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, FormsModule, HttpModule
    ], exports: [
        RouterModule
    ], declarations: [
        UserFeatureAccessComponent
    ],
    providers: [UserFeatureAccessService]
})
export class UserFeatureAccessModule {



}