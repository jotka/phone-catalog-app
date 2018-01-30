import { ActionReducer, MetaReducer } from '@ngrx/store'
import { localStorageSync } from 'ngrx-store-localstorage'
import { environment } from '../../environments/environment'

import { storeFreeze } from 'ngrx-store-freeze'

const storage = (): Storage => {
  return sessionStorage || window.sessionStorage
}

export function storageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['app'],
    rehydrate: true,
    storage: storage(),
    removeOnUndefined: false
  })(reducer)
}

export const metaReducers: Array<MetaReducer<any, any>> = !environment.production
  ? [storeFreeze, storageSyncReducer]
  : [storageSyncReducer]
