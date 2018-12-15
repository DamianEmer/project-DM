import { NgModule } from '@angular/core';
import { CardTableComponent } from './card-table.component';
import { CommonModule } from '@angular/common';

import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule ({
    declarations: [
        CardTableComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        RouterModule
    ],
    exports:[
        CardTableComponent
    ]
})

export class CardTableModule {

}