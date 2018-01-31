import { Action } from '@ngrx/store'

import * as catalogModel from '../models/catalog.model'

export const FETCH_PHONES = '[catalog] FETCH_PHONES'
export const FETCH_PHONES_SUCCESS = '[catalog] FETCH_PHONES_SUCCESS'
export const FETCH_PHONES_ERROR = '[catalog] FETCH_PHONES_ERROR'


export class FetchPhones implements Action {
  readonly type = FETCH_PHONES

  constructor() {}
}

export class FetchPhonesSuccess implements Action {
  readonly type = FETCH_PHONES_SUCCESS

  constructor(public payload: Array<catalogModel.Phone>) {}
}

export class FetchPhonesError implements Action {
  readonly type = FETCH_PHONES_ERROR

  constructor(public payload: Error) {}
}


export type All =
  | FetchPhones
  | FetchPhonesSuccess
  | FetchPhonesError
