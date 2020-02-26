import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState, rootReducer } from './store';
import { INCREAMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ngRedux: NgRedux<IAppState>){
   
  }

  title = 'app';
  @select('counter') counter;
  @select(['messaging','newMessages']) messaging;

  increament(){
    this.ngRedux.dispatch({type: INCREAMENT});
    //this.counter++;
  }
}
