import { NgModule } from '@angular/core';
import { ConverterStepsComponent } from './converter-steps.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        ConverterStepsComponent
    ],
    imports: [
        CommonModule
    ],
    exports:[
        ConverterStepsComponent
    ]
})

export class ConverterStepsModule {

}