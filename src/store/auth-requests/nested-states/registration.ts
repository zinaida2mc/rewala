import { Epic } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { Observable } from 'rxjs';

import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

import { authRequestsService } from '../service';
import { UserInput } from '../../../shared/interfaces/registration';

const { effect, reducer, ActionTypes, Actions } = asyncActionHandlerFactory<UserInput, any, Error>(
  'REGISTRATION_REQUEST',
);

const epic: Epic = (actions$: Observable<Action>) => effect(actions$, (userInput) => authRequestsService.registration(userInput));

export { epic, reducer, Actions, ActionTypes };