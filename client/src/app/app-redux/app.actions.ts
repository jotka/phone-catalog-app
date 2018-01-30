import { Action } from '@ngrx/store'

export const CLEAN_FIRST_ACCESS = '[App] CLEAN_FIRST_ACCESS'

export class CleanFirstAccess implements Action {
  readonly type = CLEAN_FIRST_ACCESS

  constructor() {}
}

export type All =
  | CleanFirstAccess
