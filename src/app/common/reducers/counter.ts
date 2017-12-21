import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export function counterReducer(
  state: number = 0,
  action: ActionWithPayload<any>
): number {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}
