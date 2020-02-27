import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState, rootReducer } from './store';
import { INCREAMENT } from './actions';
import { Router } from '@angular/router';

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
  //@select((s: IAppState)=>s.messaging.newMessages) messageCount;

  increament(){
    this.ngRedux.dispatch({type: INCREAMENT});
    //this.counter++;
  }
}
