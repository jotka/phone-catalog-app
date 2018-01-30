import { createSelector, createFeatureSelector } from '@ngrx/store'

import { State } from './app.store'


export const getAppState = createFeatureSelector<State>('app')

export const isFirstAccess = createSelector(getAppState, state => state.firstAccess)
