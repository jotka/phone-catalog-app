import * as appActions from './app.actions'

export interface State {
  firstAccess: boolean
}

export const initialState: State = {
  firstAccess: true
};

export function reducer(state: State = initialState, action: appActions.All): State {
  switch (action.type) {

    case appActions.CLEAN_FIRST_ACCESS: {
      return { ...state, firstAccess: false }
    }

    default: {
      return state
    }

  }
}
