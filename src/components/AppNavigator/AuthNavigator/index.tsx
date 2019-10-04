import { createStackNavigator } from 'react-navigation-stack';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen/index';
import ResetPasswordScreen from './ResetPasswordScreen/index';
import EnterCodeScreen from './EnterCodeScreen/index';

export const AuthNavigator = createStackNavigator(
  {
    RegistrationScreen,
    LoginScreen,
    ResetPasswordScreen,
    EnterCodeScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoginScreen',
  },
);
