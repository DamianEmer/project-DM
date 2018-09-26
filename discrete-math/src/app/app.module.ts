import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { LayoutViewComponent } from './views/layout-view/layout-view.component'; 
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    //LayoutViewComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {  }
