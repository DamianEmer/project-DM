import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './layout-view.routes';
import { LayoutViewComponent } from './layout-view.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LayoutViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  exports: [
    LayoutViewComponent
  ]
})
export class LayoutViewModule {

}
