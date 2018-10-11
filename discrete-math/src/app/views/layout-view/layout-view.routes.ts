import { Routes } from '@angular/router';

import { LayoutViewComponent } from './layout-view.component';

export const routes: Routes = [
  {
    path: '', component: LayoutViewComponent, children: [
      {path: 'home', loadChildren: '../home-view/home-view.module#HomeViewModule'},
      {path: 'agenda', loadChildren: '../temary-view/temary-view.module#TemaryViewModule'},
      {path: 'lesson/:id', loadChildren: '../temary-view/lesson/lesson.module#LessonModule'},
      {path: 'tables', loadChildren: '../table-view/table-view.module#TableViewModule'},
      {path: 'table/:title', loadChildren: '../table-view/board/board.module#BoardModule'},
      {path: '', pathMatch: 'full', redirectTo: 'home'},
    ]
  }
];
