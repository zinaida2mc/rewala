import React from 'react';
import {View, Text, Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator, NavigationStackProp} from 'react-navigation-stack';


type Props = {
  navigation: NavigationStackProp;
};

class HomeScreen extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title={'Get Out'} onPress={() => this.props.navigation.navigate('NotHome')} />
      </View>
    );
  }
}

class NotHomeScreen extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Not Home Screen</Text>
        <Button title={'Go Home'} onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  NotHome: {
    screen: NotHomeScreen,
  }
});

export default createAppContainer(AppNavigator);