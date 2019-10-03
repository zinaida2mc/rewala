import { createStackNavigator } from 'react-navigation-stack';
import RegistrationScreen from './RegistrationScreen';

export const AuthNavigator = createStackNavigator(
  {
    RegistrationScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'RegistrationScreen',
  },
);
