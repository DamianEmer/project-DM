import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: './views/layout-view/layout-view.module#LayoutViewModule'}
];
