import { Epic, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, ignoreElements, map } from 'rxjs/operators';
import { transferActionEpicFactory } from '../utils/transfer-action';
import navService from '../../shared/services/nav.service';

import { RootActions } from '../index';
import { Actions, ActionTypes } from './actions';
import { Actions as AuthRequestActions, ActionTypes as AuthRequestsActionTypes } from '../auth-requests';
import { authService } from '../../shared/services/auth.service';



export const redirectOnSetToken: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.SET_ACCESS_TOKEN),
    map(  (action) => {
      if (!action.payload) {
        return navService.navigate('AuthNavigator');
      }
      return navService.navigate('MainNavigator');
    }),
    ignoreElements(),
  );



export const registrationEpic: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.REGISTRATION),
    map((action) => {
      return AuthRequestActions.registration.action(action.payload);
    }),
  );

export const registrationSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestsActionTypes.registrationActionTypes.ACTION_SUCCEEDED,
  Actions.registrationSucceeded,
);

export const registrationFailedEpic: Epic = transferActionEpicFactory(
  AuthRequestsActionTypes.registrationActionTypes.ACTION_FAILED,
  Actions.registrationFailed,
);


export const redirectOnRegistrationSucceededEpic: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.REGISTRATION_SUCCEEDED),
    map((action) => {
        const { authToken } = action.payload;
        authService.setToken(authToken);
        navService.navigate('MainNavigator')
    }),
    ignoreElements(),
  );



export const loginEpic: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.LOGIN),
    map((action) => {
      return AuthRequestActions.login.action(action.payload);
    }),
  );

export const loginSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestsActionTypes.loginActionTypes.ACTION_SUCCEEDED,
  Actions.loginSucceeded,
);

export const loginFailedEpic: Epic = transferActionEpicFactory(
  AuthRequestsActionTypes.loginActionTypes.ACTION_FAILED,
  Actions.loginFailed,
);


export const redirectOnLoginSucceededEpic: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.LOGIN_SUCCEEDED),
    map((action) => {
      const { authToken } = action.payload;
      authService.setToken(authToken);
      navService.navigate('MainNavigator')
    }),
    ignoreElements(),
  );

export const epics = [
  redirectOnSetToken,

  registrationEpic,
  registrationSucceededEpic,
  registrationFailedEpic,

  redirectOnRegistrationSucceededEpic,

  loginEpic,
  loginSucceededEpic,
  loginFailedEpic,

  redirectOnLoginSucceededEpic,

];
