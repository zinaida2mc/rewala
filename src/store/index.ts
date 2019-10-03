import { applyMiddleware, combineReducers, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { composeWithDevTools } from 'redux-devtools-extension';

import { ActionType, StateType } from 'typesafe-actions';

import { ActionTypeUnion as AuthActionTypeUnion } from './auth/actions';
import { epics as authEpics } from './auth/epics';
import { reducer as authReducer } from './auth/reducer';

import {
  ActionTypeUnion as AuthRequestActionTypeUnion,
  epics as authRequestEpics,
  reducer as authRequestReducer,
} from './auth-requests';

export const rootReducer = combineReducers({
  auth: authReducer,
  authRequest: authRequestReducer,
});

export type RootState = StateType<typeof rootReducer>;

export type RootActions = ActionType<
  | AuthActionTypeUnion
  | AuthRequestActionTypeUnion
  >;

const rootEpic = combineEpics(
  ...authEpics,
  ...authRequestEpics,
);

const epicMiddleware = createEpicMiddleware();

const middleware = [epicMiddleware];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

epicMiddleware.run(rootEpic);

export default store;
