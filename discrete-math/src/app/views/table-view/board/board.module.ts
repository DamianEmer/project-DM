import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardComponent } from './board.component';
import { CommonModule } from '@angular/common';
import { MatTableModule} from '@angular/material/table';
import { MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    declarations:[
        BoardComponent
    ],
    imports: [
        RouterModule.forChild([ {path: '', component: BoardComponent} ]),
        CommonModule,
        MatTableModule,
        MatTooltipModule
    ],
    exports: [
        BoardComponent
    ]
})

export class BoardModule {

}