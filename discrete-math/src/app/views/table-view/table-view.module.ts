import { NgModule } from '@angular/core';
import { TableViewComponent } from './table-view.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardTableModule } from '../../components/card-table/card-table.module';

@NgModule({
    declarations: [
        TableViewComponent
    ],
    imports: [
        RouterModule.forChild([ {path: '', component: TableViewComponent} ]),
        CommonModule,
        CardTableModule
    ],
    exports: [
        TableViewComponent
    ]
})

export class TableViewModule {

}