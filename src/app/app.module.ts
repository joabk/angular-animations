import { ZippyComponent } from './zippy/zippy.component';
import { TodosComponent } from './todos/todos.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyZippyComponent } from './my-zippy/my-zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ZippyComponent,
    MyZippyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
