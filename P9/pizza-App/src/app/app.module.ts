import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import{Routes, RouterModule} from '@angular/router';
import { ItemGridComponent } from './item-grid/item-grid.component';
import { ItemGridViewComponent } from './item-grid-view/item-grid-view.component';

export const appRoutes:Routes=
[
  {path:'Pizza' , component:ItemGridComponent},
  {path:'Pizza/:name' , component:ItemGridViewComponent},
  { path:'Pizza' , component:AppComponent},    
  { path:'' , redirectTo:'/Pizza',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ItemGridComponent,
    ItemGridViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
