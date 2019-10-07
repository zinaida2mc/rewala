import { ActionTypes, ActionTypeUnion } from './actions';
import { AuthState } from './state';


const initialState: AuthState = {
  isAuthorized: null,
  authorizedUserId: null,
  token: null,
  phone: null,
  userData: null,
  code: null,
  email: null,
};

export function reducer(state = initialState, action: ActionTypeUnion): any {
  switch (action.type) {
    case ActionTypes.SET_ACCESS_TOKEN: {
      const authToken = action.payload || null;

      if (authToken) {
        return {
          ...state,
          token: authToken,
        };
      }
      return {
        ...state,
        isAuthorized: false,
        authorizedUserId: null,
        token: authToken,
        phone: null,
      };
    }

    case ActionTypes.REGISTRATION_SUCCEEDED:
    case ActionTypes.LOGIN_SUCCEEDED: {
      const { authToken, _id } = action.payload;

      return {
        ...state,
        isAuthorized: true,
        authorizedUserId: _id,
        token: authToken
      }
    }

    case ActionTypes.GET_ME_SUCCEEDED: {
      const { _id } = action.payload;

      return {
        ...state,
        userData: action.payload,
        authorizedUserId: _id,
        isAuthorized: true,
      };
    }

    case ActionTypes.LOGOUT_SUCCEEDED: {
      return {
        ...initialState,
      }
    }

    case ActionTypes.RESET_PASSWORD_CONFIRM_CODE: {
      const { code } = action.payload;
      return {
        ...state,
        code
      }
    }

    case ActionTypes.RESET_PASSWORD: {
      const { email } = action.payload;
      return {
        ...state,
        email
      }
    }

    default:
      return state;
  }
}
