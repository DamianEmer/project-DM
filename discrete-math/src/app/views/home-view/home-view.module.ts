import { NgModule } from '@angular/core';
import { HomeViewComponent } from './home-view.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: HomeViewComponent}]),
    MatCardModule
  ],
  exports: [
    HomeViewComponent
  ]
})
export class HomeViewModule {
}
