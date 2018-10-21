import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson.component';

@NgModule({
  declarations: [
    LessonComponent
  ],
  imports: [
    RouterModule.forChild([ { path: '', component: LessonComponent}]),
    CommonModule
  ],
  exports: [
    LessonComponent
  ]
})
export class LessonModule {
  
}
