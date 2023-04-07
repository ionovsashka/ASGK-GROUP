import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {tokenReducer, TokenState} from "./token";

export interface State {
  token: TokenState
}

export const reducers: ActionReducerMap<State> = {
  token: tokenReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
