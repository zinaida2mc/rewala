import { NavigationActions, NavigationContainerComponent, StackActions } from 'react-navigation';

class NavService {
  private navigator?: NavigationContainerComponent;

  setNavigator(ref: NavigationContainerComponent) {
    this.navigator = ref;
  }

  setParams(key: string, params: any) {
    return (
      this.navigator &&
      this.navigator.dispatch(
        NavigationActions.setParams({
          key,
          params,
        }),
      )
    );
  }

  navigate(routeName: string, params?: any) {
    return (
      this.navigator &&
      this.navigator.dispatch(
        NavigationActions.navigate({
          routeName,
          params,
        }),
      )
    );
  }

  push(routeName: string, params?: any) {
    return (
      this.navigator &&
      this.navigator.dispatch(
        StackActions.push({
          routeName,
          params,
        }),
      )
    );
  }

  back(key?: string) {
    return (
      this.navigator &&
      this.navigator.dispatch(
        NavigationActions.back({
          key,
        }),
      )
    );
  }

  makeNavigationActionWIthSubRoute(routeName: string, subRouteName: string, params?: any) {
    return NavigationActions.navigate({
      routeName,
      params,
      action: NavigationActions.navigate({
        routeName: subRouteName,
        params,
      }),
    });
  }
}

const navService = new NavService();
export default navService;
