import { INCREAMENT } from './actions';

export interface IAppState{
  counter: number;
  messaging?:{
    newMessages: number
  }
}

export const INITIAL_STATE: IAppState = {
  counter: 0,
  messaging:{
    newMessages: 5
  }
}
export function rootReducer(state: IAppState, action): IAppState{
  switch(action.type){
    case INCREAMENT:
      return { counter: state.counter + 1 }
    default:
      return { counter: state.counter + 1 }
  }
}