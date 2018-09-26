import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './layout-view.routes';

import { LayoutViewComponent } from './layout-view.component';

import { HomeViewModule } from '../home-view/home-view.module';

@NgModule({
  declarations: [
    LayoutViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    HomeViewModule
  ],
  exports: [
    LayoutViewComponent
  ]
})
export class LayoutViewModule {

}
