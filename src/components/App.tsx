import React from 'react';
import { NavigationContainerComponent } from 'react-navigation';
import { AppContainer } from './AppNavigator';
import navService from '../shared/services/nav.service';
import { Provider } from 'react-redux';
import store from '../store/index';

const App: React.FC = () => {
  const setNavigator = (navigatorRef: NavigationContainerComponent) => {
    navService.setNavigator(navigatorRef);
  };

  return (
    <Provider store={store}>
      <AppContainer ref={setNavigator} />
    </Provider>
  );
};

export default App;
