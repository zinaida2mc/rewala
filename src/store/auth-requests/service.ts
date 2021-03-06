import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Subscribable, Observable } from 'rxjs';
import { UserInput } from '../../shared/interfaces/registration';
import { User } from '../../shared/interfaces/user';
import link from '../../shared/link';
import { GraphQLResponse } from '../../shared/types/graphql';
import { responseInterceptor } from '../utils/response-interceptor';
import { LoginInput } from '../../shared/interfaces/login';
import { AuthToken } from '../../shared/interfaces/token';
import { ChangePasswordInput } from '../../shared/interfaces/changePassword';
import { ResetPasswordConfirmInput } from '../../shared/interfaces/resetPasswordConfirm';

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

    return from((execute(link, operation) as unknown) as Subscribable<GraphQLResponse<{ registration: User }>>)
      .pipe(responseInterceptor('registration'));
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

    return from((execute(link, operation) as unknown) as Subscribable<GraphQLResponse<{ login: User }>>)
      .pipe(responseInterceptor('login'));
  }

  getMe(): Observable<User> {
    const operation = {
      query: gql`
        query getMe {
          me {
            _id
            email
            status
            profile {
              _id
              fullName
              phone
              countryCode
            }
          }
        }
      `,
    };

    return from((execute(link, operation) as unknown) as Subscribable<GraphQLResponse<{ me: User }>>)
      .pipe(responseInterceptor('me'));
  }

  logout() {
    const operation = {
      query: gql`
          mutation {
              logout(input: {FCMToken: ""})
          }
      `,
    };

    return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ logout: AuthToken }>>)
      .pipe(responseInterceptor('logout'));
  }

  resetPassword(userInput: string) {
    const operation = {
      query: gql`
          mutation ResetPassword($userInput: String) {
              resetPassword(email: $userInput)
          }
      `,
      variables: { userInput },
    };

    return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ resetPassword: string }>>)
      .pipe(responseInterceptor('resetPassword'));
  }

  resetPasswordConfirmCode(userInput: string) {
    const operation = {
      query: gql`
          mutation ResetPasswordConfirmCode($userInput: String) {
              resetPasswordConfirmCode(resetPasswordCode: $userInput)
          }
      `,
      variables: { userInput },
    };

    return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ resetPasswordConfirmCode: string }>>)
      .pipe(responseInterceptor('resetPasswordConfirmCode'));
  }

  resetPasswordConfirm(userInput: ResetPasswordConfirmInput) {
    const operation = {
      query: gql`
          mutation ResetPasswordConfirm($userInput: ResetPasswordConfirmInput) {
              resetPasswordConfirm(input: $userInput)
          }
      `,
      variables: { userInput },
    };

    return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ resetPasswordConfirm: ResetPasswordConfirmInput }>>)
      .pipe(responseInterceptor('resetPasswordConfirm'));
  }

  changePassword(userInput: ChangePasswordInput) {
    const operation = {
      query: gql`
          mutation ChangePassword($userInput: ChangePasswordInput) {
              changePassword(input: $userInput) {
                  email
              }
          }
      `,
      variables: { userInput },
    };

    return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ changePassword: ChangePasswordInput }>>)
      .pipe(responseInterceptor('changePassword'));
  }

}

export const authRequestsService = new AuthRequestsService();
