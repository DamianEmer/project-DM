import { NgModule } from '@angular/core';
import { ConverterFormComponent } from './converter-form.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ConverterFormComponent
    ],
    imports:[
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    exports:[
        ConverterFormComponent
    ]
})

export class ConverterFormModule {

}