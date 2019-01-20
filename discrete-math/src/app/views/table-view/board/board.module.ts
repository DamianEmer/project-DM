import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardComponent } from './board.component';

import { MatButtonModule } from '@angular/material/button';

import { CommonModule } from '@angular/common';
import { ItemBoardComponent } from '../item-board/item-board.component';
import { ConverterModalModule } from 'src/app/components/converter-modal/converter-modal.module';
import { InfoTableModalModule } from 'src/app/components/info-table-modal/info-table-modal.module';
import { StepsPipe } from '../../../pipes/steps.pipe';

@NgModule({
    declarations:[
        BoardComponent,
        ItemBoardComponent,
        StepsPipe
    ],
    imports: [
        RouterModule.forChild([ {path: '', component: BoardComponent} ]),
        CommonModule,
        ConverterModalModule,
        MatButtonModule,
        InfoTableModalModule
    ],
    exports: [
        BoardComponent
    ]
})

export class BoardModule {

}