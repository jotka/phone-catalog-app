import { Action } from '@ngrx/store'

export const ActionTypes = {
  DUMMY_ACTION: '[App] DUMMY_ACTION',
}

export class DummyAction implements Action {
  type = ActionTypes.DUMMY_ACTION

  constructor(public payload: any) {}
}

export type All =
  | DummyAction
