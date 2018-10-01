import { NgModule } from '@angular/core';
import { HomeViewComponent } from './home-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: HomeViewComponent}])
  ],
  exports: [
    HomeViewComponent
  ]
})
export class HomeViewModule {
}
