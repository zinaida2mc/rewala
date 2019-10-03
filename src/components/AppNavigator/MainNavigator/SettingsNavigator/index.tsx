import { createStackNavigator } from 'react-navigation-stack';

import SettingsScreen from './SettingsScreen';

export const SettingsNavigator = createStackNavigator(
  {
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'SettingsScreen',
    headerMode: 'screen',
  },
);
