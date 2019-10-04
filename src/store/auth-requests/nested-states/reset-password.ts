import { Epic } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { Observable } from 'rxjs';

import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

import { authRequestsService } from '../service';


const { effect, reducer, ActionTypes, Actions } = asyncActionHandlerFactory<string, any, Error>(
  'RESET_PASSWORD_REQUEST',
);

const epic: Epic = (actions$: Observable<Action>) => effect(actions$, (email) => authRequestsService.resetPassword(email));

export { epic, reducer, Actions, ActionTypes };