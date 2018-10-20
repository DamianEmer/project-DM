import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './layout-view.routes';
import { LayoutViewComponent } from './layout-view.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AudioComponent } from './audio/audio.component';

@NgModule({
  declarations: [
    LayoutViewComponent,
    AudioComponent
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
