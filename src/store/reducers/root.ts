import { Action } from "../actions";

export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter: 0
};

export default function rootReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case "increase":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "decrease":
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}
