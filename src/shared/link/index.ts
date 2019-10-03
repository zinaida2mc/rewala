import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { map } from 'rxjs/operators';
import { Config } from '../../../environments/environment';
import { authService } from '../services/auth.service';
import { onError } from 'apollo-link-error';

const authMiddleware = setContext(() => {
  return authService
    .getToken()
    .pipe(
      map((userToken) => {
        return {
          headers: {
            authorization: `Bearer ${userToken}` || null,
          },
        };
      }),
    )
    .toPromise();
});

const errorMiddleware = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`GraphQL error: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }

  if (networkError) {
    console.log(`Network error: ${networkError}`);
  }
});

const httpLink = createHttpLink({
  uri: Config.apiEndpoint,
});

const link = ApolloLink.from([authMiddleware, errorMiddleware, httpLink]);

export default link;
