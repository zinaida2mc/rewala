import { Epic } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { Observable } from 'rxjs';

import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

import { authRequestsService } from '../service';
import { AuthToken } from '../../../shared/interfaces/token';


const { effect, reducer, ActionTypes, Actions } = asyncActionHandlerFactory<AuthToken, any, Error>(
  'LOGOUT_REQUEST',
);

const epic: Epic = (actions$: Observable<Action>) => effect(actions$, () => authRequestsService.logout());

export { epic, reducer, Actions, ActionTypes };