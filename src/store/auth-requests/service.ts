import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Subscribable } from 'rxjs';
import { UserInput } from '../../shared/interfaces/registration';
import { User } from '../../shared/interfaces/user';
import link from '../../shared/link';
import { GraphQLResponse } from '../../shared/types/graphql';
import { responseInterceptor } from '../utils/response-interceptor';

class AuthRequestsService {
  registration(userInput: UserInput) {
    console.log(userInput);
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
}

export const authRequestsService = new AuthRequestsService();
