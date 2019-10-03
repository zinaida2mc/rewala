import { createStackNavigator } from 'react-navigation-stack';

import ProfileScreen from './ProfileScreen';

export const ProfileNavigator = createStackNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'ProfileScreen',
    headerMode: 'screen',
  },
);
