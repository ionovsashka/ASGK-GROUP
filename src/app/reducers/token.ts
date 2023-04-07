import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";

export const setToken = createAction('[TOKEN], setToken', props<{ token: string }>() )
export const clearToken = createAction('[TOKEN], clearToken')

export interface TokenState {
  token: string
}

export const initialState: TokenState = {
  token: ''
}

export const tokenReducer = createReducer(
  initialState,
  on(setToken, (state, {token}) => ({
    ...state,
    token: token
  })),
  on(clearToken, state => ({
  ...state,
  token: ''
  }))
)

export const featureSelector = createFeatureSelector<TokenState>('token')

export const tokenSelector = createSelector(
  featureSelector,
  state => state.token
)
