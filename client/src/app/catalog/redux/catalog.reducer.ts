import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as catalogActions from './catalog.actions'
import { Phone } from '../models/catalog.model'

export interface CatalogState {
  phones: Array<Phone>
  loadingPhones: boolean
  error: Error
}

export const initialState: CatalogState = {
  phones: [],
  loadingPhones: false,
  error: null
}

export function reducer(state: CatalogState = initialState, action: catalogActions.All): CatalogState {
  switch (action.type) {
    case catalogActions.FETCH_PHONES: {
      return { ...state, loadingPhones: true }
    }
    case catalogActions.FETCH_PHONES_SUCCESS: {
      return { ...state, loadingPhones: false, phones: action.payload }
    }
    case catalogActions.FETCH_PHONES_ERROR: {
      return { ...state, loadingPhones: false, error: action.payload }
    }
    default: {
      return state
    }
  }
}

export const getPhonesState = createFeatureSelector<CatalogState>('catalog')

export const getPhones = createSelector(getPhonesState, (state: CatalogState): Array<Phone> => {
  return state ? state.phones : []
})

export const isLoading = createSelector(getPhonesState, (state: CatalogState): boolean => {
  return state ? state.loadingPhones : false
})
