import { NgModule } from '@angular/core';
import { EvaluationViewComponent } from './evaluation-view.component'; 
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
    declarations: [
        EvaluationViewComponent
    ],
    imports: [
        RouterModule.forChild([ {path: '', component: EvaluationViewComponent } ]),
        CommonModule,
        ReactiveFormsModule
    ],
    exports:[
        EvaluationViewComponent
    ]
})

export class EvaluationViewModule {

}