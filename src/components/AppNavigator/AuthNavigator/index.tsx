import { createStackNavigator } from 'react-navigation-stack';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen/index';
import ResetPasswordScreen from './ResetPasswordScreen/index';

export const AuthNavigator = createStackNavigator(
  {
    RegistrationScreen,
    LoginScreen,
    ResetPasswordScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'ResetPasswordScreen',
  },
);
