import { ActionReducer, Action } from '@ngrx/store';
import { Plan, FeatureMap } from 'angular-atomic-library';

export const ADD_FEATURES = 'ADD_FEATURES';

export const featuresInitState: FeatureMap[] = [];

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export function featuresReducer(
  state: FeatureMap[] = [],
  action: ActionWithPayload<any>): FeatureMap[] {
    switch (action.type) {
      case ADD_FEATURES:
        return action.payload;
      default:
        return state;
    }
  };
