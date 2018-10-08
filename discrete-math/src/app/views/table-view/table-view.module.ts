import { NgModule } from '@angular/core';
import { TableViewComponent } from './table-view.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { ItemBoardComponent } from './item-board/item-board.component';

@NgModule({
    declarations: [
        TableViewComponent,
        CardComponent,
        ItemBoardComponent
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