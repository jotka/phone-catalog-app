import * as appActions from './app.actions'

export interface State {
  firstAccess: boolean
}

export const initialState: State = {
  firstAccess: true
}

export type Action = appActions.All

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default: {
      return state
    }
  }
}
