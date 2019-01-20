import { NgModule } from '@angular/core';
import { ConverterModalComponent } from './converter-modal.component';
import { CommonModule } from '@angular/common';
import { MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { ConverterFormModule } from '../converter-form/converter-form.module';

@NgModule({
    declarations: [
        ConverterModalComponent
    ],
    entryComponents: [
        ConverterModalComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatTabsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ConverterFormModule
    ],
    exports: [
        ConverterModalComponent
    ]
})

export class ConverterModalModule {

}