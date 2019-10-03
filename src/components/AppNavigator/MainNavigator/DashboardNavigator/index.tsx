import { createStackNavigator } from 'react-navigation-stack';

import DashboardScreen from './DashboardScreen';

export const DashboardNavigator = createStackNavigator(
  {
    DashboardScreen: {
      screen: DashboardScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'DashboardScreen',
    headerMode: 'screen',
  },
);
