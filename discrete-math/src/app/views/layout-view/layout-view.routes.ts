import { Routes } from '@angular/router';

import { LayoutViewComponent } from './layout-view.component';

export const routes: Routes = [
  {
    path: '', component: LayoutViewComponent, children: [
      {path: 'home', loadChildren: '../home-view/home-view.module#HomeViewModule'},
      {path: 'agenda', loadChildren: '../temary-view/temary-view.module#TemaryViewModule'},
      {path: 'lesson/:id', loadChildren: '../temary-view/lesson/lesson.module#LessonModule'},
      {path: '', pathMatch: 'full', redirectTo: 'home'},      
    ]
  }
];
