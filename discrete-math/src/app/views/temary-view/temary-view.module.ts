import { NgModule } from '@angular/core';
import { TemaryViewComponent } from './temary-view.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TemaryViewComponent
  ],
  imports: [
    RouterModule.forChild([ { path: '', component: TemaryViewComponent}]),
    CommonModule
  ],
  exports: [
    TemaryViewComponent
  ]
})
export class TemaryViewModule {
  
}
