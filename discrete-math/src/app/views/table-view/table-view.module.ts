import { NgModule } from '@angular/core';
import { TableViewComponent } from './table-view.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [
        TableViewComponent,
        CardComponent
    ],
    imports: [
        RouterModule.forChild([ {path: '', component: TableViewComponent} ]),
        CommonModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [
        TableViewComponent
    ]
})

export class TableViewModule {

}