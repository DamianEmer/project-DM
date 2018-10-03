import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardComponent } from './board.component';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    declarations:[
        BoardComponent
    ],
    imports: [
        RouterModule.forChild([ {path: '', component: BoardComponent} ]),
        CommonModule,
        MatTableModule
    ],
    exports: [
        BoardComponent
    ]
})

export class BoardModule {

}