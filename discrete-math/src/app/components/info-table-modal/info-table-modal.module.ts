import { NgModule } from '@angular/core';
import { InfoTableModalComponent } from './info-table-modal.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        InfoTableModalComponent
    ],
    entryComponents:[
        InfoTableModalComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatDialogModule,
        MatButtonModule
    ],
    exports: [
        InfoTableModalComponent
    ]
})

export class InfoTableModalModule {

}