import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Subscribable } from 'rxjs';
import { UserInput } from '../../shared/interfaces/registration';
import { User } from '../../shared/interfaces/user';
import link from '../../shared/link';
import { GraphQLResponse } from '../../shared/types/graphql';
import { responseInterceptor } from '../utils/response-interceptor';
import { LoginInput } from '../../shared/interfaces/login';

class AuthRequestsService {
  registration(userInput: UserInput) {
    const operation = {
      query: gql`
        mutation Registration($userInput: UserInput) {
          registration(input: $userInput) {
            _id
            authToken
            email
            status
          }
        }
      `,
      variables: { userInput },
    };

    return from((execute(link, operation) as unknown) as Subscribable<GraphQLResponse<{ registration: User }>>).pipe(
      responseInterceptor('registration'),
    );
  }

  login(userInput: LoginInput) {
    const operation = {
      query: gql`
          mutation Login($userInput: LoginInput) {
              login(input: $userInput) {
                  _id
                  authToken
                  email
                  status
              }
          }
      `,
      variables: { userInput },
    };

    return from((execute(link, operation) as unknown) as Subscribable<GraphQLResponse<{ login: User }>>).pipe(
      responseInterceptor('login'),
    );
  }
}

export const authRequestsService = new AuthRequestsService();
