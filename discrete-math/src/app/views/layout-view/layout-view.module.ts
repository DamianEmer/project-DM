import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './layout-view.routes';
import { CommonModule } from '@angular/common';
import { LayoutViewComponent } from './layout-view.component';

import { HomeViewModule } from '../home-view/home-view.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    LayoutViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    HomeViewModule,
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    LayoutViewComponent
  ]
})
export class LayoutViewModule {

}
