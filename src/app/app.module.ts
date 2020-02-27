import { ZippyComponent } from './zippy/zippy.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyZippyComponent } from './my-zippy/my-zippy.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoService } from './todo.service';


//REDUX
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { ITodoState, todoReducer } from './todo-store'

//ROUTER NgModule
import { RouterModule } from '@angular/router';

//import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ZippyComponent,
    MyZippyComponent,
    TodoListComponent,
    HomeComponent,
    TodoDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgReduxModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'todos', component: TodosComponent },
      { path: 'todo-list', component: TodoListComponent },
    ])
    //, MatCheckboxModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, tngRedux: NgRedux<ITodoState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE );    
    tngRedux.configureStore(todoReducer, {})
  }
 } 
