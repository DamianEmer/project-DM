import { Routes } from '@angular/router';
import { LayoutViewComponent } from './layout-view.component';
import { HomeViewComponent } from '../home-view/home-view.component';

export const routes: Routes = [
  {
    path: '', component: LayoutViewComponent, children: [
      {path: 'home', component: HomeViewComponent},
      {path: '', pathMatch: 'full', redirectTo: 'home'}
    ]
  }
];
