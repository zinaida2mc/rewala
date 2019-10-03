import { Epic, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, ignoreElements, map } from 'rxjs/operators';
import { transferActionEpicFactory } from '../utils/transfer-action';
import navService from '../../shared/services/nav.service';

import { RootActions } from '../index';
import { Actions, ActionTypes } from './actions';
import { Actions as AuthRequestActions, ActionTypes as AuthRequestsActionTypes } from '../auth-requests';



export const redirectOnSetToken: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.SET_ACCESS_TOKEN),
    filter((action) => !action.payload),
    map(() => {
      return navService.navigate('AuthNavigator');
    }),
    ignoreElements(),
  );

export const registrationEpic: Epic = (action$: Observable<RootActions>) =>
  action$.pipe(
    ofType(ActionTypes.REGISTRATION),
    map((action) => {
      console.log(action);
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
    map(() => navService.navigate('MainNavigator')),
    ignoreElements(),
  );


export const epics = [
  redirectOnSetToken,

  registrationEpic,
  registrationSucceededEpic,
  registrationFailedEpic,

  redirectOnRegistrationSucceededEpic,
];
