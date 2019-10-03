import { createStackNavigator } from 'react-navigation-stack';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen/index';

export const AuthNavigator = createStackNavigator(
  {
    RegistrationScreen,
    LoginScreen
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoginScreen',
  },
);
