import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { DashboardNavigator } from './DashboardNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { SettingsNavigator } from './SettingsNavigator';

import { ColorVariables } from '../../../styles/variables';
import { style } from './style';

export const MainNavigator = createBottomTabNavigator(
  {
    DashboardScreen: {
      screen: DashboardNavigator,
      navigationOptions: {
        tabBarLabel: 'Dashboard',
      },
    },
    ProfileScreen: {
      screen: ProfileNavigator,
      navigationOptions: {
        tabBarLabel: 'Profile',
      },
    },
    SettingsScreen: {
      screen: SettingsNavigator,
      navigationOptions: {
        tabBarLabel: 'Settings',
      },
    },
  },
  {
    initialRouteName: 'DashboardScreen',
    tabBarOptions: {
      activeTintColor: ColorVariables.darkTeal,
      inactiveTintColor: ColorVariables.lightTeal,
      labelStyle: style.tabBarLabel ,
      style: style.tabBarStyle,
    },
  },
);
