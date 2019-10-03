import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoadingScreen from './LoadingScreen';
import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';

const Navigator = createStackNavigator(
  {
    LoadingScreen,
    MainNavigator,
    AuthNavigator,
  },
  {
    initialRouteName: 'LoadingScreen',
    headerMode: 'none',
  },
);

export const AppContainer = createAppContainer(Navigator);
